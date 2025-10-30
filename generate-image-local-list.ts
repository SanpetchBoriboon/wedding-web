import * as fs from 'fs';
import * as path from 'path';

const dir: string = path.join(__dirname, 'src/assets/images/wedding-gallery');
const files: string[] = fs.readdirSync(dir).filter((f: string) => /\.(jpg|jpeg|png)$/i.test(f));

fs.writeFileSync(
  path.join(__dirname, 'src/app/shared/wedding-gallery-list.json'),
  JSON.stringify(files, null, 2)
);

console.log('✅ list.json generated with', files.length, 'images');
