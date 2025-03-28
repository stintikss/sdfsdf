import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'users.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const users = JSON.parse(jsonData);
  res.status(200).json(users);
}
