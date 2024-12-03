require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const performanceRoutes = require('./routes/performances');
const compression = require('compression');
const helmet = require('helmet');
const initializeDatabase = require('./config/initDb');
const testRoutes = require('./routes/test');

const app = express();

// 中间件
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://spark.hkg1.zeabur.app',
    'https://artback.hkg1.zeabur.app'  // 添加您的前端域名
  ],
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

// 启用压缩
app.use(compression());

// 安全头
app.use(helmet());

// 静态资源缓存
app.use('/uploads', express.static('public/uploads', {
  maxAge: '1d',
  etag: true
}));

// 路由
app.use('/api/performances', performanceRoutes);
app.use('/api/test', testRoutes);

// 错误处理
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: '服务器内部错误'
  });
});

// 初始化数据库
initializeDatabase().catch(console.error);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 