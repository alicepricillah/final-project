// convert-to-webp.js
import sharp from "sharp";
import fs from "fs";
import path from "path";

// Update this to your images folder
const imagesFolder = path.resolve("src/assets/images");

fs.readdir(imagesFolder, (err, files) => {
  if (err) {
    console.error("Error reading folder:", err);
    return;
  }

  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    if (ext === ".jpg" || ext === ".jpeg") {
      const inputPath = path.join(imagesFolder, file);
      const outputPath = path.join(imagesFolder, path.basename(file, ext) + ".webp");

      sharp(inputPath)
        .webp({ quality: 80 }) // adjust quality if needed
        .toFile(outputPath)
        .then(() => console.log(`Converted: ${file} → ${path.basename(outputPath)}`))
        .catch((err) => console.error(`Error converting ${file}:`, err));
    }
  });
});

