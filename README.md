# Draw MVP

Draw 项目原型总入口。根目录的 `index.html` 用于选择不同系统 MVP。

## 系统入口

- `FightingSystem/`：战斗系统入口，保留现有战斗系统版本库。
- `LevelSystem/`：关卡系统版本入口，包含商店、战斗和结算循环。

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
    ├── index.html
    └── Level_001/
        └── index.html
```

## 关卡系统 001

`LevelSystem/Level_001/` 是首个完整关卡流程 MVP：

- 开始游戏与角色选择。
- 20c 开局的全品类商店。
- 只使用知识库图鉴中的中立卡牌和战士卡牌。
- 按战斗系统 V1 执行抽牌/出牌/弃牌、武器槽位封装与多牌链循环。
- 胜利 15c、失败 12c，以及离店金币利息。
- 累计三次失败后显示本局胜场。

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
