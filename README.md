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
- 40c 开局，卡牌、抽牌策略与武器分栏随机刷新。
- 只使用知识库图鉴中的中立卡牌和战士卡牌。
- 抽牌策略按实体牌管理，库存前六张按顺序循环执行；初始均为“筹备”。
- 收录知识库中的七种战士武器，并按玩家排列顺序依次封装。
- 每个商店商品只能购买一次，可花费 2c 刷新整间商店。
- 按战斗系统 V1 执行抽牌/出牌/弃牌、武器封装与多牌链循环。
- 以五份 Build 作为战力校准种子，通过同一战斗引擎模拟筛选，逐轮生成第 1–20 轮参考 Build 池。
- 玩家随机匹配同轮参考 Build，战后玩家 Build 也会加入该轮本局数据池。
- 战斗支持 0.1x、0.5x、1x、2x 与 4x 倍速。
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
