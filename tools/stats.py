"""Rebuild assets/stats.json from the GitHub releases of every Blazma tool.

Run by .github/workflows/stats.yml every day (and by hand: python tools/stats.py).
For each tool: latest version, total downloads over all releases, and the best direct
download link (installer first, then a portable zip, then the release page).
"""
import json, os, re, urllib.request
from pathlib import Path

TOOLS = {"boost": "Blazma-Boost", "ai": "blazma-ai", "get": "Blazma-Get", "cyber": "Blazma-Cyber",
         "sandbox": "Blazma-Sandbox", "animation": "blazma-Animation", "crosshair": "blazma-Crosshair", "nt": "blazma-nt", "tweak": "Blazma-Tweak"}
PREFER = [r"(?i)^BlazmaBoost\.zip$", r"(?i)^BlazmaTweak\.ps1$", r"(?i)setup.*\.exe$", r"(?i)\.exe$", r"(?i)portable.*\.zip$", r"(?i)win.*\.zip$", r"(?i)\.zip$"]

def api(path):
    req = urllib.request.Request("https://api.github.com/" + path, headers={"Accept": "application/vnd.github+json", "User-Agent": "kateba-site"})
    tok = os.environ.get("GITHUB_TOKEN")
    if tok: req.add_header("Authorization", "Bearer " + tok)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)

out = {"tools": {}}
for key, repo in TOOLS.items():
    rels = [r for r in api(f"repos/mr-kateba/{repo}/releases?per_page=100") if not r.get("draft")]
    entry = {"repo": repo, "hasRelease": bool(rels), "downloads": sum(a["download_count"] for r in rels for a in r["assets"]),
             "url": f"https://github.com/mr-kateba/{repo}/releases/latest" if rels else f"https://github.com/mr-kateba/{repo}"}
    if rels:
        latest = next((r for r in rels if not r.get("prerelease")), rels[0])
        entry["version"] = latest["tag_name"]
        entry["date"] = latest["published_at"][:10]
        for pat in PREFER:
            hit = next((a for a in latest["assets"] if re.search(pat, a["name"])), None)
            if hit: entry["url"] = hit["browser_download_url"]; entry["file"] = hit["name"]; break
    out["tools"][key] = entry

path = Path(__file__).resolve().parent.parent / "assets" / "stats.json"
new = json.dumps(out, ensure_ascii=False, indent=1, sort_keys=True) + "\n"
if not path.exists() or path.read_text(encoding="utf-8") != new:
    path.write_text(new, encoding="utf-8", newline="\n"); print("updated")
else: print("unchanged")
