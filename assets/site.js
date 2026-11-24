// mr-kateba.github.io — profile page: Blazma tools and Nakhla Studio games.
// Edit the content here: TOOLS and GAMES.
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
  // Cover picture behind the page (e.g. "assets/cover.jpg"); empty = the ember background.
  var COVER = "";

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

  if (COVER) { var b = $("backdrop"); b.style.backgroundImage = "url('" + COVER + "')"; b.classList.add("has-image"); }

  // ------------------------------------------------------------------ start
  setTimeout(function () { document.body.classList.add("entered"); }, 30);
})();
