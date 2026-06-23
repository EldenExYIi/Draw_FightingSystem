# Draw FightingSystem

战斗系统原型版本库。`FightingSystem/index.html` 是战斗系统入口页，每个战斗系统版本都放在独立文件夹中，方便之后继续迭代并保留旧版本。

## 已归档版本

- `Draw_Fight_002/`：武器槽位 + 手动打牌 MVP。
- `Draw_Fight_003/`：牌链封装 + 工作区循环 MVP。
- `Draw_Fight_004/`：抽牌策略 + 自动封装牌链 MVP。

## 目录约定

新增版本时建议使用独立目录，例如：

```text
Draw_Fight_003/
Draw_Fight_004/
```

每个版本目录内部保留自己的页面、数据表、构建工具和说明文档。`FightingSystem/` 目录只维护战斗系统版本菜单和说明。

## 本地运行

直接用浏览器打开 `FightingSystem/index.html` 查看战斗系统版本菜单。

也可以在本目录启动静态服务器：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。
