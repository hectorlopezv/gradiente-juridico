import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const outDir = path.join(root, "public", "images");

const remote = [
  { name: "hero", id: "1464822759023-fed622ff2c3b", w: 2400 },
  { name: "opportunity", id: "1521737604893-d14cc237f11d", w: 2000 },
  { name: "future", id: "1497366216548-37526070297c", w: 1600 },
  { name: "corporate", id: "1486406146926-c627a92ad1ab", w: 1600 },
  { name: "tech-lab", id: "1581091226825-a6a2a5aee158", w: 1400 },
  { name: "design", id: "1581092795360-fd1ca04f0952", w: 1400 },
  { name: "copyright", id: "1455390582262-044cdead277a", w: 1400 },
  { name: "office", id: "1497215728101-856f4ea42174", w: 1400 },
  { name: "tech-circuit", id: "1518770660439-4636190af475", w: 1600 },
  { name: "retail", id: "1441986300917-64674bd600d8", w: 1600 },
  { name: "ai", id: "1677442136019-21780ecad995", w: 1600 },
  { name: "hospitality", id: "1493663284031-b7e3aefcae8e", w: 1600 },
  { name: "strategy", id: "1454165804606-c3d57bc86b40", w: 1600 },
  { name: "team-1", id: "1507003211169-0a1dd7228f2d", w: 900 },
  { name: "team-2", id: "1573496359142-b8d87734a5a2", w: 900 },
  { name: "team-3", id: "1580489944761-15a19d654956", w: 900 },
  { name: "team-4", id: "1472099645785-5658abf4ff4e", w: 900 },
  { name: "bogota", id: "1486406146926-c627a92ad1ab", w: 1600, fallback: "corporate" },
  { name: "map", id: "1454165804606-c3d57bc86b40", w: 1600, fallback: "strategy" },
];

const local = [
  ["public/logo-gradiente.png", "public/logo-gradiente.webp"],
  ["public/logo-gradiente-light.png", "public/logo-gradiente-light.webp"],
  ["public/og.jpg", "public/og.webp"],
  ["public/brand-hero.png", "public/images/brand-hero.webp"],
  ["public/brand-practice.png", "public/images/brand-practice.webp"],
  ["public/brand-work.png", "public/images/brand-work.webp"],
];

async function toWebp(input, output, quality = 82) {
  await sharp(input).webp({ quality, effort: 4 }).toFile(output);
  const [src, dst] = await Promise.all([fs.stat(input), fs.stat(output)]);
  console.log(
    `${path.basename(output)}  ${Math.round(src.size / 1024)}KB → ${Math.round(dst.size / 1024)}KB`
  );
}

await fs.mkdir(outDir, { recursive: true });

for (const item of remote) {
  const output = path.join(outDir, `${item.name}.webp`);
  if (item.fallback) {
    await fs.copyFile(path.join(outDir, `${item.fallback}.webp`), output);
    console.log(`${item.name}.webp  copied from ${item.fallback}.webp`);
    continue;
  }
  const url = `https://images.unsplash.com/photo-${item.id}?auto=format&fit=crop&w=${item.w}&q=85`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await sharp(buf).webp({ quality: 82, effort: 4 }).toFile(output);
  console.log(`${item.name}.webp  ${Math.round(buf.length / 1024)}KB → ${Math.round((await fs.stat(output)).size / 1024)}KB`);
}

for (const [input, output] of local) {
  await toWebp(path.join(root, input), path.join(root, output));
}

console.log("Done.");
