// mr-kateba.github.io — profile page: tools/games lists, nasheed player.
// Edit the content here: TOOLS, GAMES, and nasheeds/list.json for the player (files or YouTube).
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
  // Tracks come from nasheeds/list.json. Each track is either a file ({ "file": "nasheeds/1.mp3" })
  // or a YouTube video ({ "youtube": "VIDEO_ID", "fallback": ["OTHER_ID"] }). One engine interface
  // hides the difference; volume fades in/out on play, pause and track change.
  var audio = $("audio"), list = [], idx = 0, volume = 0.7, muted = false, seeking = false, wantPlay = false;
  var PLAY = "M8 5v14l11-7z", PAUSE = "M6 5h4v14H6zm8 0h4v14h-4z";
  var VOL = "M4 9v6h4l5 5V4L8 9zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z", MUTED = "M4 9v6h4l5 5V4L8 9zm15.6 3 2.4-2.4-1.4-1.4-2.4 2.4-2.4-2.4-1.4 1.4 2.4 2.4-2.4 2.4 1.4 1.4 2.4-2.4 2.4 2.4 1.4-1.4z";
  function fmt(s) { if (!isFinite(s) || s < 0) return "0:00"; s = Math.floor(s); return Math.floor(s / 60) + ":" + ("0" + s % 60).slice(-2); }
  function paint(r) { r.style.setProperty("--p", (r.value - r.min) / (r.max - r.min) * 100 + "%"); }
  try { var saved = JSON.parse(localStorage.getItem("kateba.player") || "{}"); if (saved.vol != null) volume = saved.vol; if (saved.idx != null) idx = saved.idx; } catch (_) {}
  function save() { try { localStorage.setItem("kateba.player", JSON.stringify({ vol: volume, idx: idx })); } catch (_) {} }
  $("vol").value = Math.round(volume * 100); paint($("vol"));

  // ---- fade: gain 0..1 multiplied with the user volume
  var gain = 0, fadeTo = 0, fadeDone = null;
  function level() { return muted ? 0 : volume * gain; }
  function fade(target, ms, then) {
    fadeTo = target; fadeDone = then || null;
    var from = gain, t0 = performance.now();
    (function step(now) {
      if (fadeTo !== target) return;
      var k = Math.min(1, (now - t0) / ms); gain = from + (target - from) * (k * (2 - k));
      engine.setVolume(level());
      if (k < 1) requestAnimationFrame(step); else if (fadeDone) { var f = fadeDone; fadeDone = null; f(); }
    })(t0);
  }

  // ---- file engine
  var fileEngine = {
    load: function (t) { audio.src = t.file; },
    play: function () { return audio.play(); }, pause: function () { audio.pause(); },
    time: function () { return audio.currentTime; }, duration: function () { return audio.duration; },
    seek: function (s) { audio.currentTime = s; }, setVolume: function (v) { audio.volume = Math.max(0, Math.min(1, v)); },
    stop: function () { audio.pause(); audio.removeAttribute("src"); audio.load(); }
  };
  audio.addEventListener("play", function () { setPlaying(true); });
  audio.addEventListener("pause", function () { if (engine === fileEngine) setPlaying(false); });
  audio.addEventListener("ended", function () { next(); });
  audio.addEventListener("error", function () { if (engine === fileEngine && audio.getAttribute("src")) failed(); });

  // ---- YouTube engine (official IFrame API; the small video stays visible, as YouTube requires)
  var yt = null, ytReady = null, ytIds = [], ytTry = 0;
  function loadYouTube() {
    if (ytReady) return ytReady;
    ytReady = new Promise(function (resolve) {
      window.onYouTubeIframeAPIReady = function () {
        yt = new YT.Player("ytFrame", {
          width: 240, height: 135,
          playerVars: { playsinline: 1, rel: 0, modestbranding: 1, controls: 0, disablekb: 1, iv_load_policy: 3, fs: 0 },
          events: {
            onReady: function () { resolve(yt); },
            onStateChange: function (e) {
              if (engine !== ytEngine) return;
              if (e.data === YT.PlayerState.PLAYING) setPlaying(true);
              else if (e.data === YT.PlayerState.PAUSED) setPlaying(false);
              else if (e.data === YT.PlayerState.ENDED) next();
            },
            onError: function () { if (engine === ytEngine) { if (++ytTry < ytIds.length) { yt.loadVideoById(ytIds[ytTry]); if (!wantPlay) yt.pauseVideo(); } else failed(); } }
          }
        });
      };
      var s = document.createElement("script"); s.src = "https://www.youtube.com/iframe_api"; document.head.appendChild(s);
    });
    return ytReady;
  }
  var ytEngine = {
    load: function (t) {
      ytIds = [t.youtube].concat(t.fallback || []); ytTry = 0;
      $("video").hidden = false; requestAnimationFrame(function () { $("video").classList.add("shown"); });
      return loadYouTube().then(function (p) { p.setVolume(level() * 100); if (wantPlay) p.loadVideoById(ytIds[0]); else p.cueVideoById(ytIds[0]); });
    },
    play: function () { return loadYouTube().then(function (p) { p.playVideo(); }); },
    pause: function () { if (yt) yt.pauseVideo(); },
    time: function () { return yt && yt.getCurrentTime ? yt.getCurrentTime() : 0; },
    duration: function () { return yt && yt.getDuration ? yt.getDuration() : 0; },
    seek: function (s) { if (yt) yt.seekTo(s, true); },
    setVolume: function (v) { if (yt && yt.setVolume) { yt.setVolume(Math.round(v * 100)); if (yt.isMuted && yt.isMuted()) yt.unMute(); } },
    stop: function () { if (yt && yt.stopVideo) yt.stopVideo(); $("video").classList.remove("shown"); $("video").hidden = true; }
  };

  var engine = fileEngine;
  function setPlaying(on) {
    $("playPath").setAttribute("d", on ? PAUSE : PLAY);
    $("player").classList.toggle("playing", on);
    $("video").classList.toggle("playing", on);
  }
  function failed() { toast("تعذّر تشغيل: " + list[idx].title); setPlaying(false); }

  function load(i, autoplay) {
    if (!list.length) return;
    var go = function () {
      idx = (i + list.length) % list.length;
      var t = list[idx], nextEngine = t.youtube ? ytEngine : fileEngine;
      if (engine !== nextEngine) engine.stop();
      engine = nextEngine; wantPlay = !!autoplay; gain = autoplay ? 0 : 1;
      $("title").textContent = t.title; $("artist").textContent = t.artist || "";
      $("cover").src = t.cover || (t.youtube ? "https://i.ytimg.com/vi/" + t.youtube + "/hqdefault.jpg" : $("avatar").src);
      $("bar").value = 0; paint($("bar")); $("cur").textContent = "0:00"; $("dur").textContent = "0:00";
      document.querySelectorAll("#tracks li").forEach(function (li, k) { li.classList.toggle("current", k === idx); });
      save();
      Promise.resolve(engine.load(t)).then(function () { if (autoplay) play(); });
    };
    if (wantPlay && $("player").classList.contains("playing")) fade(0, 350, go); else go();
  }
  function play() {
    wantPlay = true; engine.setVolume(level());
    Promise.resolve(engine.play()).then(function () { fade(1, 900); }).catch(function () { wantPlay = false; });
  }
  function pause() { wantPlay = false; fade(0, 400, function () { engine.pause(); }); }
  function next() { load(idx + 1, true); }

  function render() {
    var ol = $("tracks"); ol.textContent = "";
    if (!list.length) { ol.appendChild(el("li", "none", "ما في أناشيد بعد.")); return; }
    list.forEach(function (t, k) {
      var li = el("li"); li.appendChild(el("span", "n", String(k + 1))); li.appendChild(el("span", null, t.title));
      if (t.artist) li.appendChild(el("span", "a", t.artist));
      li.onclick = function () { load(k, true); }; ol.appendChild(li);
    });
  }

  $("play").onclick = function () { if (!list.length) return; if (wantPlay) pause(); else play(); };
  $("next").onclick = next;
  $("prev").onclick = function () { if (engine.time() > 3) engine.seek(0); else load(idx - 1, true); };
  $("videoClose").onclick = function () { pause(); };
  setInterval(function () {   // progress for both engines
    if (!list.length) return;
    var d = engine.duration(), c = engine.time();
    if (d) $("dur").textContent = fmt(d);
    if (!seeking) { $("cur").textContent = fmt(c); if (d) { $("bar").value = c / d * 1000; paint($("bar")); } }
  }, 250);
  $("bar").addEventListener("input", function () { seeking = true; paint(this); $("cur").textContent = fmt(this.value / 1000 * (engine.duration() || 0)); });
  $("bar").addEventListener("change", function () { var d = engine.duration(); if (d) engine.seek(this.value / 1000 * d); seeking = false; });
  $("vol").addEventListener("input", function () { volume = this.value / 100; muted = false; engine.setVolume(level()); paint(this); setVolIcon(); save(); });
  $("mute").onclick = function () { muted = !muted; engine.setVolume(level()); setVolIcon(); };
  function setVolIcon() { $("volPath").setAttribute("d", muted || volume === 0 ? MUTED : VOL); }
  $("listBtn").onclick = function (ev) { ev.stopPropagation(); var p = $("playlist"); p.hidden = !p.hidden; $("listBtn").classList.toggle("on", !p.hidden); };
  document.addEventListener("click", function (ev) { var p = $("playlist"); if (!p.hidden && !p.contains(ev.target)) { p.hidden = true; $("listBtn").classList.remove("on"); } });
  document.addEventListener("keydown", function (ev) {
    if (ev.target.tagName === "INPUT") return;
    if (ev.code === "Space") { ev.preventDefault(); $("play").click(); }
  });

  var ready = fetch("nasheeds/list.json", { cache: "no-cache" }).then(function (r) { return r.json(); }).then(function (data) {
    list = (data.tracks || []).filter(function (t) { return t && t.title && (t.file || t.youtube); });
    if (data.background) { var b = $("backdrop"); b.style.backgroundImage = "url('" + data.background + "')"; b.classList.add("has-image"); }
    if (data.avatar) { $("avatar").src = data.avatar; $("cover").src = data.avatar; }
    render();
    if (list.length) { $("player").classList.remove("disabled"); load(Math.min(idx, list.length - 1), false); }
    else { $("title").textContent = "الأناشيد قريباً"; }
  }).catch(function () { render(); $("title").textContent = "الأناشيد قريباً"; });

  // ------------------------------------------------------------------ start
  // No entry screen. Browsers allow sound only after the visitor's first click/tap/key,
  // so the nasheed starts on that first interaction (unless it was on the player itself).
  setTimeout(function () { document.body.classList.add("entered"); }, 30);
  var started = false;
  function firstTouch(ev) {
    if (started) return; started = true;
    ["pointerdown", "keydown"].forEach(function (t) { removeEventListener(t, firstTouch, true); });
    if (ev && ev.target && ev.target.closest && ev.target.closest(".controls, #playlist, .video")) return;
    ready.then(function () { if (list.length && !wantPlay) play(); });
  }
  ["pointerdown", "keydown"].forEach(function (t) { addEventListener(t, firstTouch, true); });
})();
