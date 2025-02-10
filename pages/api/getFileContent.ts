import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { fileName } = req.query;

  if (typeof fileName !== 'string') {
    return res.status(400).json({ error: 'Invalid file name' });
  }

  const sanitizedFileName = fileName.replace(/\s+/g, '');
  const filePath = path.join(process.cwd(), 'public', `${sanitizedFileName}.json`);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    res.status(200).json({ content: fileContent });
  } catch (error) {
    console.error(`Error al leer el archivo: ${filePath}`, error);
    res.status(500).json({ error: `Error al leer el archivo: ${filePath}` });
  }
}