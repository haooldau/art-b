# 大麦网演出爬虫

这是一个用于爬取大麦网演出信息的爬虫程序。

## 功能特点

- 自动爬取大麦网演出信息
- 支持按艺人名称搜索
- 数据保存为 JSON 格式
- 自动处理反爬机制

## 安装

```bash
pip install -r requirements.txt
```

## 使用方法

1. 复制 `.env.example` 为 `.env` 并填写配置
2. 运行爬虫：

```bash
python run.py
```

## 环境要求

- Python 3.8+
- 见 requirements.txt 