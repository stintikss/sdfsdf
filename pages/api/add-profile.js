import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, bio } = req.body;
    const newUser = { id: Date.now(), name, email, bio };

    const filePath = path.join(process.cwd(), 'data', 'users.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const users = JSON.parse(jsonData);

    // Добавляем нового пользователя
    users.push(newUser);

    // Сохраняем обратно в файл
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    res.status(200).json({ message: 'Profile added successfully!' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
