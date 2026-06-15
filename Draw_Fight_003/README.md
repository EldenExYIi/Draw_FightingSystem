# Draw Fight 003 MVP

牌链封装 + 工作区循环战斗系统验证原型。

## 玩法验证点

- 取消武器槽位，暂时取消法术牌。
- 双方自动抽牌，玩家对当前牌选择“编入”或“弃置”。
- 编入需要消耗该牌自己的打牌时间。
- 编入后的牌进入待封装区，不会立即触发效果。
- 点击“封装牌链”后，待封装区按顺序变成一条自动循环牌链。
- 工作区中的牌链会按牌序逐张触发，每张牌触发时间等于该牌的打牌时间。
- 暂时不设置封装上限、链数量上限、链长度上限。
- 默认进入回合制模式：玩家抽到当前牌时全场时间停止，选择编入或弃置后以 1x 继续运行。

## 快捷键

- `Space`：暂停/继续
- `R`：新战斗
- `F`：封装牌链
- `0`：回合制

## 数据表

策划数据存放在 `data/` 目录：

- `cards.xlsx`：卡牌数据，包含名称、流派、打牌时间、描述和效果。
- `characters.xlsx`：角色与牌组数据。
- `keywords.xlsx`：关键词说明。
- `battle_config.xlsx`：战斗基础配置。

页面默认读取 `data/game_data.js`。如需重新生成表格和页面数据镜像，可运行：

```bash
/Users/exyii/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 tools/build_data.py
```

## 本地运行

直接用浏览器打开 `index.html` 即可运行。

也可以在本目录启动静态服务器：

```bash
python3 -m http.server 8000
```
