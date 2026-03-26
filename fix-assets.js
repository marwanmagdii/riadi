import fs from 'fs';
import https from 'https';
import path from 'path';

const assets = [
  {
    url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
    dest: './public/sports-facility.jpg'
  }
];

assets.forEach((asset) => {
  const file = fs.createWriteStream(asset.dest);
  https.get(asset.url, (res) => {
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${asset.dest}`);
    });
  }).on('error', (err) => {
    fs.unlink(asset.dest, () => {});
    console.error(`Error downloading ${asset.dest}: ${err.message}`);
  });
});
