const fs = require("fs");
const path = require("path");

function listFiles(dir, indent = "") {
    if (!fs.existsSync(dir)) {
        console.error(`❌ Error: Directory '${dir}' does not exist.`);
        return;
    }

    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            console.log(indent + "📂 " + file);  // 目录
            listFiles(fullPath, indent + "  "); // 递归子目录
        } else {
            console.log(indent + "📄 " + file);  // 文件
        }
    }
}

// 获取目标目录（如果没有提供，则使用当前目录）
const targetDir = process.argv[2] || __dirname;
console.log(`\n📁 Listing files in: ${targetDir}\n`);
listFiles(targetDir);
