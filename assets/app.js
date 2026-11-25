// mr-kateba.github.io — Blazma tools, Nakhla Studio games, about, FAQ. Arabic + English.
// Content lives here (TOOLS, GAMES, TEXT). Versions and download counts come from assets/stats.json,
// which a daily GitHub Action (.github/workflows/stats.yml) rebuilds from the releases.
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  // ------------------------------------------------------------------ content
  var TOOLS = [
    { id: "boost", name: "Blazma Boost", repo: "Blazma-Boost", copy: "irm mr-kateba.github.io/win | iex", featured: true,
      ar: "تحسين ويندوز والألعاب، وتثبيت أكثر من 200 برنامج بضغطة", en: "Windows and gaming tweaks, and 200+ apps installed in one click" },
    { id: "tweak", name: "Blazma Tweak", repo: "Blazma-Tweak", copy: "irm mr-kateba.github.io/tweak | iex", featured: true, badge: "new",
      file: "https://github.com/mr-kateba/Blazma-Tweak/releases/latest/download/BlazmaTweak.ps1",
      ar: "100 تحسين لويندوز والرام والألعاب، وحذف التطبيقات الزايدة، وبرامج بدء التشغيل، وكل تعديل يرجع بضغطة", en: "100 reversible Windows, RAM and gaming tweaks, app removal and a startup manager" },
    { id: "get", name: "Blazma Get", repo: "Blazma-Get",
      ar: "مدير تحميل عربي مجاني، بديل لـ IDM", en: "A free download manager, an IDM alternative" },
    { id: "animation", name: "Blazma Animation", repo: "blazma-Animation",
      ar: "تحريك الشخصيات ثلاثية الأبعاد، وتصدير لـ Unity وGodot", en: "3D character animation, exported to Unity and Godot" },
    { id: "cyber", name: "Blazma Cyber", repo: "Blazma-Cyber",
      ar: "أمن دفاعي: تحليل الملفات وفحصها وأدوات الشبكة", en: "Defensive security: file analysis, scanning and network tools" },
    { id: "sandbox", name: "Blazma Sandbox", repo: "Blazma-Sandbox",
      ar: "افحص الملفات والروابط المشبوهة في بيئة معزولة", en: "Check suspicious files and links in an isolated sandbox" },
    { id: "ai", name: "Blazma AI", repo: "blazma-ai",
      ar: "ذكاء اصطناعي يشتغل على جهازك بدون اشتراك", en: "Local AI that runs on your own PC, no subscription" },
    { id: "crosshair", name: "Blazma Crosshair", repo: "blazma-Crosshair",
      ar: "علامة تصويب فوق أي لعبة، آمنة مع الألعاب", en: "A crosshair overlay for any game, anti-cheat safe" },
    { id: "nt", name: "blazma.nt", repo: "blazma-nt",
      ar: "مراقبة الشبكة: مين متصل ومع مين يتكلم", en: "Network monitor: who is connected and who they talk to" }
  ];
  // Nakhla Studio games: { name, ar, en, img, link }
  var GAMES = [];

  var TEXT = {
    ar: {
      "nav.tools": "الأدوات", "nav.games": "الألعاب", "nav.about": "عني",
      hero: "أدوات ويندوز عربية مجانية ومفتوحة المصدر، وألعاب من استوديو نخلة.",
      "cta.tools": "تصفّح الأدوات",
      "tools.kicker": "عائلة أدوات بلازما", "tools.title": "أدوات ويندوز، بالعربي ومجاناً.",
      tools: "أدوات", total: "تحميل", open: "مفتوحة المصدر",
      featured: "الأشهر", "new": "جديد", download: "تحميل", copyCmd: "نسخ الأمر", page: "صفحة GitHub", copy: "نسخ", copied: "تم النسخ — الصقه في PowerShell كمسؤول",
      runIt: "أو شغّله مباشرة من PowerShell", downloads: "تحميل", version: "الإصدار",
      "games.kicker": "استوديو نخلة", "games.title": "ألعاب بروح عربية.",
      "games.text": "ألعاب مستقلة من ليبيا، نصنعها على مهل ونجرّبها كثير قبل ما تطلع.",
      soon: "أول لعبة في الطريق", play: "العب",
      "about.kicker": "عني", "about.title": "مطوّر واحد، وفكرة بسيطة.", "faq.kicker": "أسئلة شائعة",
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
      "nav.tools": "Tools", "nav.games": "Games", "nav.about": "About",
      hero: "Free, open-source Windows tools in Arabic, and games from Nakhla Studio.",
      "cta.tools": "Browse the tools",
      "tools.kicker": "The Blazma tools family", "tools.title": "Windows tools, in Arabic and free.",
      tools: "tools", total: "downloads", open: "open source",
      featured: "Most popular", "new": "New", download: "Download", copyCmd: "Copy command", page: "GitHub page", copy: "Copy", copied: "Copied — paste it into PowerShell as admin",
      runIt: "or run it straight from PowerShell", downloads: "downloads", version: "Version",
      "games.kicker": "Nakhla Studio", "games.title": "Games with an Arabic soul.",
      "games.text": "Independent games from Libya, made slowly and play-tested a lot before release.",
      soon: "The first game is on its way", play: "Play",
      "about.kicker": "About", "about.title": "One developer, one simple idea.", "faq.kicker": "Questions",
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

  var ICON = {
    down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/></svg>',
    ok: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    gh: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>'
  };

  // ------------------------------------------------------------------ helpers
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function toast(msg) {
    var t = document.querySelector(".toast") || document.body.appendChild(el("div", "toast"));
    t.textContent = msg; t.classList.add("show"); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove("show"); }, 2000);
  }
  function a(cls, html, href, title) { var e = el("a", cls, html); e.href = href; e.target = "_blank"; e.rel = "noopener"; if (title) { e.title = title; e.setAttribute("aria-label", title); } return e; }

  var lang = "ar";
  try { lang = localStorage.getItem("kateba.lang") || ((navigator.language || "ar").slice(0, 2) === "en" ? "en" : "ar"); } catch (_) {}
  var stats = null;
  function T(k) { return TEXT[lang][k]; }
  function num(n) { return new Intl.NumberFormat(lang === "ar" ? "ar-u-nu-latn" : "en").format(n); }
  function st(id) { return stats && stats.tools && stats.tools[id] || {}; }
  function dl(t) { return t.file || "https://mr-kateba.github.io/" + t.id + "/"; }
  function gh(t) { return "https://github.com/mr-kateba/" + t.repo; }

  // ------------------------------------------------------------------ render
  function render() {
    var ar = lang === "ar";
    document.documentElement.lang = lang; document.documentElement.dir = ar ? "rtl" : "ltr";
    document.title = ar ? "kateba — أدوات بلازما واستوديو نخلة" : "kateba — Blazma tools & Nakhla Studio";
    $("lang").textContent = ar ? "English" : "العربية";
    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = T(n.dataset.i18n); });

    // facts beside the section title
    var total = 0; TOOLS.forEach(function (t) { total += st(t.id).downloads || 0; });
    var f = $("facts"); f.textContent = "";
    [[num(TOOLS.length), T("tools")], total >= 100 ? ["+" + num(Math.floor(total / 50) * 50), T("total")] : null, ["100%", T("open")]]
      .forEach(function (x) { if (x) f.appendChild(el("div", "fact", "<b dir=\"ltr\">" + x[0] + "</b><span>" + x[1] + "</span>")); });

    // featured tools, side by side
    var fe = $("feature"); fe.textContent = "";
    TOOLS.filter(function (t) { return t.featured; }).forEach(function (ft) {
      var s = st(ft.id), card = el("article", "feature" + (ft.badge ? " is-new" : ""));
      var head = el("div", "f-head");
      head.appendChild(el("h3", "f-name", "<img src=\"logos/" + ft.id + ".svg\" alt=\"\">" + esc(ft.name)));
      head.appendChild(el("span", "f-badge", T(ft.badge || "featured")));
      card.appendChild(head);
      card.appendChild(el("p", "f-desc", esc(ft[lang])));
      var term = el("div", "term",
        "<div class=\"term-bar\"><i></i><i></i><i></i><span>PowerShell · Admin</span></div>" +
        "<div class=\"term-body\"><code><em>PS&gt;</em> " + esc(ft.copy) + " <span class=\"cur\"></span></code></div>");
      var cp = el("button", "copy", ICON.copy + "<span>" + T("copy") + "</span>"); cp.type = "button";
      cp.onclick = function () {
        navigator.clipboard.writeText(ft.copy).then(function () {
          toast(T("copied")); cp.classList.add("done"); cp.innerHTML = ICON.ok + "<span>" + T("copy") + "</span>";
          setTimeout(function () { cp.classList.remove("done"); cp.innerHTML = ICON.copy + "<span>" + T("copy") + "</span>"; }, 1800);
        });
      };
      term.querySelector(".term-body").appendChild(cp);
      card.appendChild(term);
      var foot = el("div", "f-foot");
      var acts = el("div", "f-actions");
      acts.appendChild(a("btn solid", ICON.down + "<span>" + T("download") + "</span>", dl(ft)));
      acts.appendChild(a("btn ghost sq", ICON.gh, gh(ft), T("page")));
      foot.appendChild(acts);
      var meta = [];
      if (s.version) meta.push(T("version") + " <bdi dir=\"ltr\">" + esc(s.version.replace(/^v/, "")) + "</bdi>");
      if (s.downloads >= 50) meta.push(num(s.downloads) + " " + T("downloads"));
      if (meta.length) foot.appendChild(el("div", "f-meta", meta.join(" · ")));
      card.appendChild(foot);
      fe.appendChild(card);
    });
    var nFeat = TOOLS.filter(function (t) { return t.featured; }).length;

    // the numbered index of the other tools
    var ol = $("index"); ol.textContent = "";
    TOOLS.filter(function (t) { return !t.featured; }).forEach(function (t, i) {
      var x = st(t.id), li = el("li", "row");
      li.appendChild(el("span", "num", String(i + 1 + nFeat).padStart(2, "0")));
      var img = el("img"); img.src = "logos/" + t.id + ".svg"; img.alt = ""; img.loading = "lazy"; li.appendChild(img);
      li.appendChild(el("div", null, "<div class=\"r-name\">" + esc(t.name) + "</div><p class=\"r-desc\">" + esc(t[lang]) + "</p>"));
      li.appendChild(el("div", "r-meta",
        (x.version ? "<span class=\"v\">v" + esc(x.version.replace(/^v/, "")) + "</span>" : "") +
        (x.downloads >= 50 ? "<span>" + num(x.downloads) + " " + T("downloads") + "</span>" : "")));
      var go = el("div", "r-go");
      if (t.copy) {
        var cb = el("button", "btn solid sm", ICON.copy + "<span>" + T("copyCmd") + "</span>"); cb.type = "button"; cb.title = t.copy;
        cb.onclick = (function (cmd) { return function () { navigator.clipboard.writeText(cmd).then(function () { toast(T("copied")); }); }; })(t.copy);
        go.appendChild(cb);
      } else if (x.hasRelease !== false) go.appendChild(a("btn solid sm", ICON.down + "<span>" + T("download") + "</span>", dl(t)));
      go.appendChild(a("btn ghost sm sq", ICON.gh, gh(t), T("page")));
      li.appendChild(go);
      ol.appendChild(li);
    });

    // games
    var g = $("games-list"); g.textContent = "";
    if (!GAMES.length) g.appendChild(el("li", "soon", "<i></i>" + T("soon")));
    else GAMES.forEach(function (x) {
      var li = el("li"); li.appendChild(a("btn solid", esc(x.name) + " — " + T("play"), x.link)); g.appendChild(li);
    });

    $("about-text").innerHTML = T("about").map(function (p) { return "<p>" + p + "</p>"; }).join("");
    $("faq").innerHTML = T("faq").map(function (q) { return "<details><summary>" + q[0] + "</summary><p>" + q[1] + "</p></details>"; }).join("");
    observe();
  }

  // ------------------------------------------------------------------ motion
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .12, rootMargin: "0px 0px -6% 0px" }) : null;
  function observe() {
    var rows = document.querySelectorAll(".reveal:not(.in), .index .row:not(.in)");
    rows.forEach(function (n, i) {
      if (!io) { n.classList.add("in"); return; }
      if (n.classList.contains("row")) n.style.transitionDelay = (Array.prototype.indexOf.call(n.parentNode.children, n) * 60) + "ms";
      io.observe(n);
    });
  }

  var nav = $("nav"), links = document.querySelectorAll(".links a");
  function onScroll() {
    nav.classList.toggle("solid", scrollY > 40);
    var cur = null;
    ["tools", "games", "about"].forEach(function (id) { var s = $(id); if (s && s.getBoundingClientRect().top < innerHeight * .4) cur = id; });
    links.forEach(function (l) { l.classList.toggle("on", l.getAttribute("href") === "#" + cur); });
  }
  addEventListener("scroll", onScroll, { passive: true });

  $("lang").onclick = function () { lang = lang === "ar" ? "en" : "ar"; try { localStorage.setItem("kateba.lang", lang); } catch (_) {} render(); };
  render(); onScroll();
  fetch("assets/stats.json", { cache: "no-cache" }).then(function (r) { return r.json(); }).then(function (d) { stats = d; render(); }).catch(function () {});
})();
