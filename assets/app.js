// mr-kateba.github.io — Blazma tools, Nakhla Studio games, about, FAQ. Arabic + English.
// Content lives here (TOOLS, GAMES, TEXT). Versions and download counts come from assets/stats.json,
// which a daily GitHub Action (.github/workflows/stats.yml) rebuilds from the releases.
(function () {
  "use strict";

  // ------------------------------------------------------------------ content
  var TOOLS = [
    { id: "boost", name: "Blazma Boost", repo: "Blazma-Boost", copy: "irm mr-kateba.github.io/win | iex",
      ar: "تحسين ويندوز والألعاب، وتثبيت أكثر من 200 برنامج بضغطة", en: "Windows and gaming tweaks, and 200+ apps installed in one click" },
    { id: "ai", name: "Blazma AI", repo: "blazma-ai",
      ar: "ذكاء اصطناعي يشتغل على جهازك بدون اشتراك", en: "Local AI that runs on your own PC, no subscription" },
    { id: "get", name: "Blazma Get", repo: "Blazma-Get",
      ar: "مدير تحميل عربي مجاني، بديل لـ IDM", en: "A free download manager, an IDM alternative" },
    { id: "cyber", name: "Blazma Cyber", repo: "Blazma-Cyber",
      ar: "أمن دفاعي: تحليل الملفات وفحصها وأدوات الشبكة", en: "Defensive security: file analysis, scanning and network tools" },
    { id: "sandbox", name: "Blazma Sandbox", repo: "Blazma-Sandbox",
      ar: "افحص الملفات والروابط المشبوهة في بيئة معزولة", en: "Check suspicious files and links in an isolated sandbox" },
    { id: "animation", name: "Blazma Animation", repo: "blazma-Animation",
      ar: "تحريك الشخصيات ثلاثية الأبعاد، وتصدير لـ Unity وGodot", en: "3D character animation, exported to Unity and Godot" },
    { id: "crosshair", name: "Blazma Crosshair", repo: "blazma-Crosshair",
      ar: "علامة تصويب فوق أي لعبة، آمنة مع الألعاب", en: "A crosshair overlay for any game, anti-cheat safe" },
    { id: "nt", name: "blazma.nt", repo: "blazma-nt",
      ar: "مراقبة الشبكة: مين متصل ومع مين يتكلم", en: "Network monitor: who is connected and who they talk to" }
  ];
  // Nakhla Studio games: { name, ar, en, img, link }
  var GAMES = [];
  // Cover picture behind the page (e.g. "assets/cover.jpg"); empty = the ember background.
  var COVER = "assets/cover-imad4.jpg";   // Dhat al-Imad towers, Tripoli — photo: Gary Denham (CC BY-SA 2.0), credited in the footer

  var TEXT = {
    ar: {
      bio: "أدوات ويندوز عربية مجانية ومفتوحة المصدر، وألعاب من استوديو نخلة.",
      "tab.tools": "الأدوات", "tab.games": "الألعاب", "tab.about": "عني", "tab.faq": "أسئلة",
      download: "تحميل", page: "الصفحة", copy: "نسخ الأمر", copied: "تم نسخ الأمر — الصقه في PowerShell كمسؤول",
      version: "الإصدار", downloads: "تحميل", tools: "أدوات", total: "تحميل", open: "مفتوحة المصدر",
      soon: "قريباً", soonText: "ألعاب استوديو نخلة في الطريق.", play: "العب",
      foot: "تطوير \u2068kateba\u2069",
      about: [
        "أنا <b>kateba</b>، مطوّر من ليبيا. أصنع أدوات ويندوز عربية مجانية تحت اسم <b>بلازما</b>، وألعاب تحت اسم <b>استوديو نخلة</b>.",
        "كل أدوات بلازما مجانية بالكامل ومفتوحة المصدر على GitHub: تقدر تقرأ الكود، وتحمّل من الإصدارات الرسمية بس، وما في حسابات ولا إعلانات ولا تتبع.",
        "الهدف بسيط: أدوات بواجهة عربية حقيقية، بنفس جودة البرامج العالمية، ومتاحة للجميع.",
        "<small class=\"note\">بمساعدة الذكاء الاصطناعي.</small>"
      ],
      faq: [
        ["هل الأدوات مجانية فعلاً؟", "نعم، كلها مجانية بالكامل، بدون نسخة مدفوعة ولا اشتراك ولا إعلانات."],
        ["هل الأدوات آمنة؟", "الكود كله مفتوح على GitHub وتقدر تراجعه. حمّل دائماً من هذا الموقع أو من صفحة الإصدارات في GitHub، ولا تحمّل نسخ من مواقع ثانية."],
        ["ليش ويندوز يطلع تحذير SmartScreen؟", "لأن البرامج الجديدة غير الموقّعة بشهادة مدفوعة يطلع لها هذا التحذير. اضغط «معلومات إضافية» ثم «تشغيل على أي حال». التحذير يختفي مع الوقت كل ما زاد عدد المستخدمين."],
        ["كيف أشغّل Blazma Boost؟", "افتح PowerShell كمسؤول، والصق الأمر: <bdi dir=\"ltr\"><code>irm mr-kateba.github.io/win | iex</code></bdi> — أو حمّل ملف الـ ZIP من زر التحميل."],
        ["هل تجمع الأدوات بياناتي؟", "لا. الأدوات تشتغل على جهازك، وما ترسل بيانات لأي سيرفر."],
        ["لقيت مشكلة أو عندي اقتراح، وين أكتبه؟", "افتح صفحة الأداة في GitHub واكتبه في قسم Issues."]
      ]
    },
    en: {
      bio: "Free, open-source Windows tools in Arabic, and games from Nakhla Studio.",
      "tab.tools": "Tools", "tab.games": "Games", "tab.about": "About", "tab.faq": "FAQ",
      download: "Download", page: "Page", copy: "Copy command", copied: "Command copied — paste it into PowerShell as admin",
      version: "Version", downloads: "downloads", tools: "tools", total: "downloads", open: "open source",
      soon: "Coming soon", soonText: "Nakhla Studio games are on the way.", play: "Play",
      foot: "Made by kateba",
      about: [
        "I'm <b>kateba</b>, a developer from Libya. I make free Arabic Windows tools under the name <b>Blazma</b>, and games under <b>Nakhla Studio</b>.",
        "Every Blazma tool is completely free and open source on GitHub: you can read the code, download only from the official releases, and there are no accounts, ads or tracking.",
        "The goal is simple: tools with a real Arabic interface, built to the same standard as the best software, available to everyone.",
        "<small class=\"note\">Made with the help of AI.</small>"
      ],
      faq: [
        ["Are the tools really free?", "Yes, all of them, with no paid edition, subscription or ads."],
        ["Are the tools safe?", "All the code is open on GitHub for anyone to review. Always download from this site or the GitHub releases page, never from other sites."],
        ["Why does Windows show a SmartScreen warning?", "New programs that aren't signed with a paid certificate get this warning. Click \"More info\" then \"Run anyway\". It fades as more people use the app."],
        ["How do I run Blazma Boost?", "Open PowerShell as administrator and paste: <code>irm mr-kateba.github.io/win | iex</code> — or download the ZIP with the Download button."],
        ["Do the tools collect my data?", "No. They run on your PC and don't send data to any server."],
        ["Found a bug or have an idea?", "Open the tool's GitHub page and post it under Issues."]
      ]
    }
  };

  // ------------------------------------------------------------------ helpers
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function toast(msg) {
    var t = document.querySelector(".toast") || document.body.appendChild(el("div", "toast"));
    t.textContent = msg; t.classList.add("show"); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove("show"); }, 1800);
  }
  function link(cls, text, href) { var a = el("a", cls, text); a.href = href; a.target = "_blank"; a.rel = "noopener"; return a; }

  var lang = "ar";
  try { lang = localStorage.getItem("kateba.lang") || (navigator.language || "ar").slice(0, 2) === "en" && "en" || "ar"; } catch (_) {}
  var stats = null;
  function T(k) { return TEXT[lang][k]; }
  function num(n) { return new Intl.NumberFormat(lang === "ar" ? "ar-u-nu-latn" : "en").format(n); }

  // ------------------------------------------------------------------ render
  function render() {
    var ar = lang === "ar";
    document.documentElement.lang = lang; document.documentElement.dir = ar ? "rtl" : "ltr";
    document.title = ar ? "kateba — أدوات بلازما واستوديو نخلة" : "kateba — Blazma tools & Nakhla Studio";
    $("lang").textContent = ar ? "English" : "العربية";
    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = T(n.dataset.i18n); });

    // header stats
    var s = $("stats"); s.textContent = "";
    var total = 0;
    if (stats) Object.keys(stats.tools || {}).forEach(function (k) { total += stats.tools[k].downloads || 0; });
    [[num(TOOLS.length), T("tools")], total >= 100 ? ["+" + num(Math.floor(total / 50) * 50), T("total")] : null, ["100%", T("open")]]
      .forEach(function (x) { if (!x) return; var c = el("div", "stat"); var b = el("b", null, x[0]); b.dir = "ltr"; c.appendChild(b); c.appendChild(el("span", null, x[1])); s.appendChild(c); });

    // tools
    var ul = $("tools"); ul.textContent = "";
    TOOLS.forEach(function (t) {
      var st = stats && stats.tools && stats.tools[t.id] || {};
      var li = el("li", "item");
      var img = el("img"); img.src = "logos/" + t.id + ".svg"; img.alt = ""; img.loading = "lazy";
      var info = el("div", "info");
      var head = el("div", "t", t.name);
      if (st.version) { var v = el("span", "ver", st.version.replace(/^v/, "")); v.title = T("version"); head.appendChild(v); }
      info.appendChild(head);
      info.appendChild(el("div", "d", t[lang]));
      if (st.downloads >= 50) info.appendChild(el("div", "meta", num(st.downloads) + " " + T("downloads")));
      var go = el("div", "go");
      if (t.copy) {
        var c = el("button", "pill", T("copy")); c.type = "button"; c.title = t.copy;
        c.onclick = function () { navigator.clipboard.writeText(t.copy).then(function () { toast(T("copied")); }); };
        go.appendChild(c);
      }
      if (st.hasRelease !== false) go.appendChild(link("pill primary", T("download"), "https://mr-kateba.github.io/" + t.id + "/"));
      go.appendChild(link("pill", T("page"), "https://github.com/mr-kateba/" + t.repo));
      li.appendChild(img); li.appendChild(info); li.appendChild(go);
      ul.appendChild(li);
    });

    // games
    var g = $("games"); g.textContent = "";
    if (!GAMES.length) {
      var e = el("li", "empty"); var logo = el("img"); logo.src = "assets/nakhla.svg"; logo.alt = "";
      e.appendChild(logo); e.appendChild(el("b", null, T("soon"))); e.appendChild(document.createTextNode(T("soonText"))); g.appendChild(e);
    } else GAMES.forEach(function (x) {
      var li = el("li", "item"); var img = el("img"); img.src = x.img || "assets/nakhla.svg"; img.alt = "";
      var info = el("div", "info"); info.appendChild(el("div", "t", x.name)); info.appendChild(el("div", "d", x[lang] || ""));
      var go = el("div", "go"); if (x.link) go.appendChild(link("pill primary", T("play"), x.link));
      li.appendChild(img); li.appendChild(info); li.appendChild(go); g.appendChild(li);
    });

    // about + faq (static, trusted strings)
    $("about").innerHTML = T("about").map(function (p) { return "<p>" + p + "</p>"; }).join("");
    $("faq").innerHTML = T("faq").map(function (q) { return "<details><summary>" + q[0] + "</summary><p>" + q[1] + "</p></details>"; }).join("");
  }

  $("lang").onclick = function () { lang = lang === "ar" ? "en" : "ar"; try { localStorage.setItem("kateba.lang", lang); } catch (_) {} render(); };
  document.querySelectorAll(".tab").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".tab").forEach(function (x) { x.classList.toggle("active", x === b); x.setAttribute("aria-selected", x === b); });
      document.querySelectorAll(".panel").forEach(function (p) { p.classList.toggle("active", p.id === "tab-" + b.dataset.tab); });
    });
  });
  render();
  fetch("assets/stats.json", { cache: "no-cache" }).then(function (r) { return r.json(); }).then(function (d) { stats = d; render(); }).catch(function () {});

  // ------------------------------------------------------------------ embers
  var cv = $("embers"), cx = cv.getContext("2d"), parts = [], W = 0, H = 0, dpr = Math.min(2, window.devicePixelRatio || 1);
  function size() { W = cv.width = innerWidth * dpr; H = cv.height = innerHeight * dpr; }
  size(); addEventListener("resize", size);
  function spawn(y) { return { x: Math.random() * W, y: y == null ? H + 10 : y, r: (Math.random() * 1.8 + .6) * dpr, vy: (Math.random() * .5 + .25) * dpr, vx: (Math.random() - .5) * .3 * dpr, a: Math.random() * .6 + .25, w: Math.random() * 6.28 }; }
  for (var i = 0; i < 70; i++) parts.push(spawn(Math.random() * H));
  var still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  (function tick() {
    cx.clearRect(0, 0, W, H);
    parts.forEach(function (p, k) {
      p.y -= p.vy; p.w += .02; p.x += p.vx + Math.sin(p.w) * .25 * dpr;
      if (p.y < -10) parts[k] = spawn();
      cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.283);
      cx.fillStyle = "rgba(255," + (110 + (p.r * 30 | 0)) + ",20," + p.a + ")"; cx.shadowColor = "#ff6d00"; cx.shadowBlur = 8 * dpr; cx.fill();
    });
    if (!still) requestAnimationFrame(tick);
  })();

  if (COVER) { var b = $("backdrop"); b.style.backgroundImage = "url('" + COVER + "')"; b.classList.add("has-image"); document.body.classList.add("has-cover"); }
  setTimeout(function () { document.body.classList.add("entered"); }, 30);
})();
