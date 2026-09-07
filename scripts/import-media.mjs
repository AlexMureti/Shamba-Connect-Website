/**
 * Import Mercy's photo library into public/media as optimised webp.
 *
 * Source is a Telegram dump of 48 phone photos, ~13 MB, mixed orientation.
 * The site had been running on stock imagery while this sat in Downloads.
 * Run: node scripts/import-media.mjs <list-file>
 */
import sharp from "sharp"
import fs from "node:fs"
import path from "node:path"

const listFile = process.argv[2]
const files = fs.readFileSync(listFile, "utf8").trim().split("\n")
  .map(f => f.trim()).filter(f => /\.jpg$/i.test(f)).sort()

const outDir = path.join(process.cwd(), "public/media")
fs.mkdirSync(outDir, { recursive: true })

let inBytes = 0, outBytes = 0
const manifest = []
for (let i = 0; i < files.length; i++) {
  const src = files[i]
  const id = `shamba-${String(i + 1).padStart(2, "0")}`
  inBytes += fs.statSync(src).size
  const meta = await sharp(src).metadata()
  await sharp(src)
    .rotate()                                   // honour EXIF orientation
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(path.join(outDir, `${id}.webp`))
  const m2 = await sharp(path.join(outDir, `${id}.webp`)).metadata()
  outBytes += fs.statSync(path.join(outDir, `${id}.webp`)).size
  manifest.push({ id, file: `/media/${id}.webp`, w: m2.width, h: m2.height,
                  orientation: m2.width >= m2.height ? "landscape" : "portrait",
                  source: path.basename(src) })
}
fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2))
const kb = n => (n / 1024).toFixed(0)
console.log(`  imported ${files.length} photos`)
console.log(`  ${kb(inBytes)} KB -> ${kb(outBytes)} KB  (-${(100 - outBytes / inBytes * 100).toFixed(1)}%)`)
console.log(`  landscape ${manifest.filter(m => m.orientation === "landscape").length} / portrait ${manifest.filter(m => m.orientation === "portrait").length}`)
