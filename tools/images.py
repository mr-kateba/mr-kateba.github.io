"""Favicon PNGs (the share card og.png is rendered from tools/og.html in a browser at 1200x630). Run: uv run --with pillow --with arabic-reshaper --with python-bidi python tools/images.py"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
A = ROOT / "assets"
FONT_AR = r"C:/Windows/Fonts/segoeui.ttf"
FONT_B = r"C:/Windows/Fonts/segoeuib.ttf"


def hexagon(size, glyph=True):
    S = size * 4
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    grad = Image.new("RGBA", (S, S))
    gd = ImageDraw.Draw(grad)
    for y in range(S):
        k = y / S
        gd.line([(0, y), (S, y)], fill=(255, int(179 - 118 * k), int(0), 255))
    mask = Image.new("L", (S, S), 0)
    pts = [(50, 3), (91, 26.5), (91, 73.5), (50, 97), (9, 73.5), (9, 26.5)]
    ImageDraw.Draw(mask).polygon([(x / 100 * S, y / 100 * S) for x, y in pts], fill=255)
    im.paste(grad, (0, 0), mask)
    if glyph:
        d = ImageDraw.Draw(im); w = int(S * .08)
        P = lambda x, y: (x / 100 * S, y / 100 * S)
        d.line([P(38, 30), P(38, 70)], fill="white", width=w)
        d.line([P(38, 52), P(58, 30)], fill="white", width=w)
        d.line([P(43, 47), P(60, 70)], fill="white", width=w)
        for p in [P(38, 30), P(38, 70), P(58, 30), P(60, 70)]:
            d.ellipse([p[0] - w / 2, p[1] - w / 2, p[0] + w / 2, p[1] + w / 2], fill="white")
    return im.resize((size, size), Image.LANCZOS)

for s in (192, 512):
    bg = Image.new("RGBA", (s, s), (18, 18, 22, 255))
    hx = hexagon(int(s * .78))
    bg.alpha_composite(hx, ((s - hx.width) // 2, (s - hx.height) // 2))
    bg.convert("RGB").save(A / f"icon-{s}.png")

print("ok")
