import { readFileSync, writeFileSync } from "node:fs";
import jpeg from "jpeg-js";
import { PNG } from "pngjs";

const decoded = jpeg.decode(readFileSync("public/brand/logo.png"), { useTArray: true });
const { width, height, data } = decoded;

function process(recolorNavy) {
  const out = new PNG({ width, height });
  for (let i = 0; i < data.length; i += 4) {
    let r = data[i];
    let g = data[i + 1];
    let b = data[i + 2];
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const avg = (r + g + b) / 3;

    if (avg > 232 && max - min < 32) {
      out.data[i] = 0;
      out.data[i + 1] = 0;
      out.data[i + 2] = 0;
      out.data[i + 3] = 0;
      continue;
    }

    const whiteMix = Math.max(0, min - 6);
    let alpha = 255;
    if (whiteMix > 18) {
      alpha = Math.min(255, Math.round(((255 - whiteMix) / 237) * 255));
      const scale = 255 / Math.max(1, 255 - whiteMix);
      r = Math.min(255, Math.round((r - whiteMix) * scale));
      g = Math.min(255, Math.round((g - whiteMix) * scale));
      b = Math.min(255, Math.round((b - whiteMix) * scale));
    }

    const isBlue = b > 130 && b > r + 35 && b >= g;
    if (recolorNavy && !isBlue && avg < 96) {
      r = 255;
      g = 255;
      b = 255;
    }

    out.data[i] = r;
    out.data[i + 1] = g;
    out.data[i + 2] = b;
    out.data[i + 3] = alpha;
  }
  return PNG.sync.write(out);
}

writeFileSync("public/brand/logo.png", process(false));
writeFileSync("public/brand/logo-on-dark.png", process(true));
console.log(`processed ${width}x${height}`);
