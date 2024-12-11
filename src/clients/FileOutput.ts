import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const OUT_DIR = 'output';

export async function write(filename: string, data: Record<string, unknown> | unknown[]) {
    if (!existsSync(OUT_DIR)){
        await fs.mkdir(OUT_DIR);
    }
    return fs.writeFile(path.join(OUT_DIR, filename), JSON.stringify(data, null, 2));
}

export async function read(filename: string) {
    const content = await fs.readFile(path.join(OUT_DIR, filename), 'utf-8');
    return JSON.parse(content);
}
