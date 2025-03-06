const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'frontend/build'))); // Serve React build files

// ✅ 提供房产数据 API
app.get('/api/properties', (req, res) => {
    const filePath = path.join(__dirname, 'public/properties.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error loading properties' });
        }
        res.json(JSON.parse(data));
    });
});

// ✅ 处理表单提交
app.post('/api/submit', (req, res) => {
    const newEntry = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message,
        timestamp: new Date().toISOString()
    };

    const filePath = path.join(__dirname, 'data/contacts.json');

    // 读取已有数据
    fs.readFile(filePath, 'utf8', (err, data) => {
        let contacts = [];
        if (!err && data) {
            contacts = JSON.parse(data);
        }
        // 添加新数据
        contacts.push(newEntry);

        // 写入 JSON 文件
        fs.writeFile(filePath, JSON.stringify(contacts, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error saving data' });
            }
            res.json({ message: 'Contact saved successfully' });
        });
    });
});

// ✅ 让 React 处理所有前端路由
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
