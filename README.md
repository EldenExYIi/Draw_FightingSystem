# Draw MVP

Draw 项目原型总入口。根目录的 `index.html` 用于选择不同系统 MVP。

## 系统入口

- `FightingSystem/`：战斗系统入口，保留现有战斗系统版本库。
- `LevelSystem/`：关卡系统入口，目前只做占位，具体 MVP 后续补充。

## 目录结构

```text
.
├── index.html
├── FightingSystem/
│   ├── index.html
│   ├── Draw_Fight_002/
│   ├── Draw_Fight_003/
│   └── Draw_Fight_004/
└── LevelSystem/
    └── index.html
```

## 本地运行

直接用浏览器打开根目录的 `index.html`。

也可以在本目录启动静态服务器：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## GitHub Pages

发布到 GitHub Pages 后，仓库根目录会显示系统选择页：

```text
https://<user>.github.io/<repo>/
```
