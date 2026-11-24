// mr-kateba.github.io — profile page: tools/games lists, nasheed player.
// Edit the content here: TOOLS, GAMES, and nasheeds/list.json for the player.
(function () {
  "use strict";

  // ------------------------------------------------------------------ content
  var TOOLS = [
    { name: "Blazma Boost", logo: "boost", desc: "تحسين ويندوز والألعاب، وتثبيت أكثر من 200 برنامج بضغطة", repo: "Blazma-Boost",
      download: "https://github.com/mr-kateba/Blazma-Boost/releases/latest/download/BlazmaBoost.zip", copy: "irm mr-kateba.github.io/win | iex" },
    { name: "Blazma AI", logo: "ai", desc: "ذكاء اصطناعي يشتغل على جهازك بدون اشتراك", repo: "blazma-ai", download: "https://github.com/mr-kateba/blazma-ai/releases" },
    { name: "Blazma Get", logo: "get", desc: "مدير تحميل عربي مجاني، بديل لـ IDM", repo: "Blazma-Get", download: "https://github.com/mr-kateba/Blazma-Get/releases/latest" },
    { name: "Blazma Cyber", logo: "cyber", desc: "أمن دفاعي: تحليل الملفات وفحصها وأدوات الشبكة", repo: "Blazma-Cyber", download: "https://github.com/mr-kateba/Blazma-Cyber/releases/latest" },
    { name: "Blazma Sandbox", logo: "sandbox", desc: "افحص الملفات والروابط المشبوهة في بيئة معزولة", repo: "Blazma-Sandbox", download: "https://github.com/mr-kateba/Blazma-Sandbox/releases/latest" },
    { name: "Blazma Animation", logo: "animation", desc: "تحريك الشخصيات ثلاثية الأبعاد، وتصدير لـ Unity وGodot", repo: "blazma-Animation", download: "https://github.com/mr-kateba/blazma-Animation/releases/latest" },
    { name: "Blazma Crosshair", logo: "crosshair", desc: "علامة تصويب فوق أي لعبة، آمنة مع الألعاب", repo: "blazma-Crosshair", download: "https://github.com/mr-kateba/blazma-Crosshair/releases/latest" },
    { name: "blazma.nt", logo: "nt", desc: "مراقبة الشبكة: مين متصل ومع مين يتكلم", repo: "blazma-nt" }
  ];
  // Nakhla Studio games: { name, desc, img, link }
  var GAMES = [];

  // ------------------------------------------------------------------ helpers
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function toast(msg) {
    var t = document.querySelector(".toast") || document.body.appendChild(el("div", "toast"));
    t.textContent = msg; t.classList.add("show"); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove("show"); }, 1600);
  }

  // ------------------------------------------------------------------ lists
  TOOLS.forEach(function (t) {
    var li = el("li", "item");
    var img = el("img"); img.src = "logos/" + t.logo + ".svg"; img.alt = "";
    var info = el("div", "info"); info.appendChild(el("div", "t", t.name)); info.appendChild(el("div", "d", t.desc));
    var go = el("div", "go");
    if (t.copy) {
      var c = el("button", "pill", "نسخ الأمر"); c.type = "button"; c.title = t.copy;
      c.onclick = function () { navigator.clipboard.writeText(t.copy).then(function () { toast("تم نسخ الأمر — الصقه في PowerShell كمسؤول"); }); };
      go.appendChild(c);
    }
    if (t.download) { var d = el("a", "pill primary", "تحميل"); d.href = t.download; d.target = "_blank"; d.rel = "noopener"; go.appendChild(d); }
    var p = el("a", "pill", "الصفحة"); p.href = "https://github.com/mr-kateba/" + t.repo; p.target = "_blank"; p.rel = "noopener"; go.appendChild(p);
    li.appendChild(img); li.appendChild(info); li.appendChild(go);
    $("tools").appendChild(li);
  });

  if (GAMES.length === 0) {
    var e = el("li", "empty");
    var logo = el("img"); logo.src = "assets/nakhla.svg"; logo.alt = "";
    e.appendChild(logo); e.appendChild(el("b", null, "قريباً")); e.appendChild(document.createTextNode("ألعاب استوديو نخلة في الطريق."));
    $("games").appendChild(e);
  } else {
    GAMES.forEach(function (g) {
      var li = el("li", "item");
      var img = el("img"); img.src = g.img || "assets/nakhla.svg"; img.alt = "";
      var info = el("div", "info"); info.appendChild(el("div", "t", g.name)); info.appendChild(el("div", "d", g.desc || ""));
      var go = el("div", "go"); if (g.link) { var a = el("a", "pill primary", "العب"); a.href = g.link; a.target = "_blank"; a.rel = "noopener"; go.appendChild(a); }
      li.appendChild(img); li.appendChild(info); li.appendChild(go); $("games").appendChild(li);
    });
  }

  document.querySelectorAll(".tab").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".tab").forEach(function (x) { x.classList.toggle("active", x === b); x.setAttribute("aria-selected", x === b); });
      document.querySelectorAll(".panel").forEach(function (p) { p.classList.toggle("active", p.id === "tab-" + b.dataset.tab); });
    });
  });

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

  // ------------------------------------------------------------------ player
  var audio = $("audio"), list = [], idx = 0, volume = 0.7;
  var PLAY = "M8 5v14l11-7z", PAUSE = "M6 5h4v14H6zm8 0h4v14h-4z";
  var VOL = "M4 9v6h4l5 5V4L8 9zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z", MUTED = "M4 9v6h4l5 5V4L8 9zm15.6 3 2.4-2.4-1.4-1.4-2.4 2.4-2.4-2.4-1.4 1.4 2.4 2.4-2.4 2.4 1.4 1.4 2.4-2.4 2.4 2.4 1.4-1.4z";
  function fmt(s) { if (!isFinite(s)) return "0:00"; s = Math.floor(s); return Math.floor(s / 60) + ":" + ("0" + s % 60).slice(-2); }
  function paint(r) { r.style.setProperty("--p", (r.value - r.min) / (r.max - r.min) * 100 + "%"); }
  try { var saved = JSON.parse(localStorage.getItem("kateba.player") || "{}"); if (saved.vol != null) volume = saved.vol; if (saved.idx != null) idx = saved.idx; } catch (_) {}
  function save() { try { localStorage.setItem("kateba.player", JSON.stringify({ vol: volume, idx: idx })); } catch (_) {} }
  audio.volume = volume; $("vol").value = Math.round(volume * 100); paint($("vol"));

  function load(i, autoplay) {
    if (!list.length) return;
    idx = (i + list.length) % list.length;
    var t = list[idx];
    audio.src = t.file;
    $("title").textContent = t.title; $("artist").textContent = t.artist || "";
    $("cover").src = t.cover || $("avatar").src;
    document.querySelectorAll("#tracks li").forEach(function (li, k) { li.classList.toggle("current", k === idx); });
    save();
    if (autoplay) audio.play().catch(function () {});
  }
  function render() {
    var ol = $("tracks"); ol.textContent = "";
    if (!list.length) { ol.appendChild(el("li", "none", "ما في أناشيد بعد.")); return; }
    list.forEach(function (t, k) {
      var li = el("li"); li.appendChild(el("span", "n", String(k + 1))); li.appendChild(el("span", null, t.title));
      if (t.artist) li.appendChild(el("span", "a", t.artist));
      li.onclick = function () { load(k, true); }; ol.appendChild(li);
    });
  }

  $("play").onclick = function () { if (!list.length) return; if (audio.paused) audio.play().catch(function () {}); else audio.pause(); };
  $("next").onclick = function () { load(idx + 1, true); };
  $("prev").onclick = function () { if (audio.currentTime > 3) audio.currentTime = 0; else load(idx - 1, true); };
  audio.addEventListener("ended", function () { load(idx + 1, true); });
  audio.addEventListener("play", function () { $("playPath").setAttribute("d", PAUSE); $("player").classList.add("playing"); });
  audio.addEventListener("pause", function () { $("playPath").setAttribute("d", PLAY); $("player").classList.remove("playing"); });
  audio.addEventListener("loadedmetadata", function () { $("dur").textContent = fmt(audio.duration); });
  audio.addEventListener("timeupdate", function () {
    $("cur").textContent = fmt(audio.currentTime);
    if (!seeking && audio.duration) { $("bar").value = audio.currentTime / audio.duration * 1000; paint($("bar")); }
  });
  audio.addEventListener("error", function () { if (list.length) toast("تعذّر تشغيل: " + list[idx].title); });
  var seeking = false;
  $("bar").addEventListener("input", function () { seeking = true; paint(this); $("cur").textContent = fmt(this.value / 1000 * (audio.duration || 0)); });
  $("bar").addEventListener("change", function () { if (audio.duration) audio.currentTime = this.value / 1000 * audio.duration; seeking = false; });
  $("vol").addEventListener("input", function () { volume = this.value / 100; audio.volume = volume; audio.muted = false; paint(this); setVolIcon(); save(); });
  $("mute").onclick = function () { audio.muted = !audio.muted; setVolIcon(); };
  function setVolIcon() { $("volPath").setAttribute("d", audio.muted || volume === 0 ? MUTED : VOL); }
  $("listBtn").onclick = function (ev) { ev.stopPropagation(); var p = $("playlist"); p.hidden = !p.hidden; $("listBtn").classList.toggle("on", !p.hidden); };
  document.addEventListener("click", function (ev) { var p = $("playlist"); if (!p.hidden && !p.contains(ev.target)) { p.hidden = true; $("listBtn").classList.remove("on"); } });
  document.addEventListener("keydown", function (ev) {
    if (ev.target.tagName === "INPUT") return;
    if (ev.code === "Space") { ev.preventDefault(); $("play").click(); }
  });

  var ready = fetch("nasheeds/list.json", { cache: "no-cache" }).then(function (r) { return r.json(); }).then(function (data) {
    list = (data.tracks || []).filter(function (t) { return t && t.file && t.title; });
    if (data.background) { var b = $("backdrop"); b.style.backgroundImage = "url('" + data.background + "')"; b.classList.add("has-image"); }
    if (data.avatar) { $("avatar").src = data.avatar; $("cover").src = data.avatar; }
    render();
    if (list.length) { $("player").classList.remove("disabled"); load(Math.min(idx, list.length - 1), false); }
    else { $("title").textContent = "الأناشيد قريباً"; }
  }).catch(function () { render(); $("title").textContent = "الأناشيد قريباً"; });

  // ------------------------------------------------------------------ start
  // No entry screen. Browsers allow sound only after the visitor's first click/tap/key.
  setTimeout(function () { document.body.classList.add("entered"); }, 30);
  var started = false;
  function firstTouch(ev) {
    if (started) return; started = true;
    ["pointerdown", "keydown"].forEach(function (t) { removeEventListener(t, firstTouch, true); });
    if (ev && ev.target && ev.target.closest && ev.target.closest(".controls, #playlist")) return;
    ready.then(function () { if (list.length && audio.paused) audio.play().catch(function () {}); });
  }
  ["pointerdown", "keydown"].forEach(function (t) { addEventListener(t, firstTouch, true); });
  ready.then(function () { if (list.length) audio.play().then(function () { started = true; }).catch(function () {}); });
})();
