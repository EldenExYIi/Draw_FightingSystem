window.BATTLE_DATA = {
  "keywords": [
    {
      "KeywordID": "KW_STRATEGY",
      "Name": "抽牌策略",
      "Category": "系统",
      "Description": "自动决定抽几张牌、优先编入哪些牌、哪些牌弃置。"
    },
    {
      "KeywordID": "KW_PACKAGING",
      "Name": "封装规则",
      "Category": "系统",
      "Description": "决定待封装区何时自动封装成牌链。不同角色或装备可以拥有不同规则。"
    },
    {
      "KeywordID": "KW_PENDING",
      "Name": "待封装区",
      "Category": "区域",
      "Description": "被策略编入但尚未生效的牌。满足封装规则后会组成牌链。"
    },
    {
      "KeywordID": "KW_CHAIN",
      "Name": "牌链",
      "Category": "区域",
      "Description": "封装后的自动循环序列，按牌序逐张触发。"
    },
    {
      "KeywordID": "KW_COST",
      "Name": "费用",
      "Category": "资源",
      "Description": "用于费用封装规则。待封装区累计费用达到阈值后自动封装。"
    },
    {
      "KeywordID": "KW_PLAYTIME",
      "Name": "打牌时间",
      "Category": "时间",
      "Description": "编入该牌与牌链触发该牌时消耗的时间。"
    },
    {
      "KeywordID": "KW_BURN",
      "Name": "燃烧",
      "Category": "状态",
      "Description": "持续火焰资源，可被助燃和爆燃利用。自然结算时造成伤害并减少。"
    },
    {
      "KeywordID": "KW_POISON",
      "Name": "中毒",
      "Category": "状态",
      "Description": "持续毒性资源，可被毒爆利用。自然结算时造成伤害并减少。"
    },
    {
      "KeywordID": "KW_BLEED",
      "Name": "裂伤",
      "Category": "状态",
      "Description": "刀刃体系资源，可被撕裂结算为伤害。"
    },
    {
      "KeywordID": "KW_BLOCK",
      "Name": "护盾",
      "Category": "状态",
      "Description": "抵消即将受到的伤害，随承伤消耗。"
    },
    {
      "KeywordID": "KW_FOCUS",
      "Name": "专注",
      "Category": "状态",
      "Description": "提高下一次直接伤害，造成伤害后消耗。"
    },
    {
      "KeywordID": "KW_CHARGE",
      "Name": "蓄力",
      "Category": "状态",
      "Description": "提高下一次重击类伤害，触发后消耗。"
    }
  ],
  "cards": [
    {
      "CardID": "C001",
      "Name": "火花",
      "Archetype": "燃烧",
      "Cost": 1,
      "PlayTimeT": 0.5,
      "Tags": "伤害;燃烧",
      "Description": "造成3点伤害。",
      "Effects": [
        {
          "op": "damage",
          "amount": 3
        }
      ]
    },
    {
      "CardID": "C002",
      "Name": "点燃",
      "Archetype": "燃烧",
      "Cost": 2,
      "PlayTimeT": 0.8,
      "Tags": "燃烧",
      "Description": "施加燃烧2。",
      "Effects": [
        {
          "op": "status",
          "target": "enemy",
          "status": "burn",
          "amount": 2
        }
      ]
    },
    {
      "CardID": "C003",
      "Name": "助燃",
      "Archetype": "燃烧",
      "Cost": 2,
      "PlayTimeT": 1.0,
      "Tags": "燃烧;伤害",
      "Description": "敌人每有1层燃烧，造成1点伤害。",
      "Effects": [
        {
          "op": "burn_damage",
          "per": 1
        }
      ]
    },
    {
      "CardID": "C004",
      "Name": "爆燃",
      "Archetype": "燃烧",
      "Cost": 4,
      "PlayTimeT": 1.5,
      "Tags": "燃烧;爆发",
      "Description": "引爆燃烧，每层造成2点伤害，然后清除燃烧。",
      "Effects": [
        {
          "op": "ignite",
          "per": 2
        }
      ]
    },
    {
      "CardID": "C005",
      "Name": "余烬护身",
      "Archetype": "燃烧",
      "Cost": 2,
      "PlayTimeT": 0.9,
      "Tags": "护盾;燃烧",
      "Description": "获得护盾4；若敌人有燃烧，额外获得护盾3。",
      "Effects": [
        {
          "op": "block",
          "amount": 4
        },
        {
          "op": "if_enemy_status",
          "status": "burn",
          "op2": "block",
          "amount": 3
        }
      ]
    },
    {
      "CardID": "C006",
      "Name": "格挡",
      "Archetype": "防御",
      "Cost": 1,
      "PlayTimeT": 0.7,
      "Tags": "护盾",
      "Description": "获得护盾6。",
      "Effects": [
        {
          "op": "block",
          "amount": 6
        }
      ]
    },
    {
      "CardID": "C007",
      "Name": "修整",
      "Archetype": "防御",
      "Cost": 1,
      "PlayTimeT": 1.0,
      "Tags": "治疗;护盾",
      "Description": "回复3点生命；若有护盾，额外回复2点。",
      "Effects": [
        {
          "op": "heal",
          "amount": 3
        },
        {
          "op": "if_self_status",
          "status": "block",
          "op2": "heal",
          "amount": 2
        }
      ]
    },
    {
      "CardID": "C008",
      "Name": "反击预备",
      "Archetype": "防御",
      "Cost": 2,
      "PlayTimeT": 0.9,
      "Tags": "护盾;伤害",
      "Description": "获得护盾4；造成自身护盾25%的伤害。",
      "Effects": [
        {
          "op": "block",
          "amount": 4
        },
        {
          "op": "block_strike",
          "ratio": 0.25
        }
      ]
    },
    {
      "CardID": "C009",
      "Name": "铁壁",
      "Archetype": "防御",
      "Cost": 3,
      "PlayTimeT": 1.3,
      "Tags": "护盾",
      "Description": "获得护盾12。",
      "Effects": [
        {
          "op": "block",
          "amount": 12
        }
      ]
    },
    {
      "CardID": "C010",
      "Name": "短刺",
      "Archetype": "裂伤",
      "Cost": 1,
      "PlayTimeT": 0.45,
      "Tags": "伤害;裂伤",
      "Description": "造成2点伤害，施加裂伤1。",
      "Effects": [
        {
          "op": "damage",
          "amount": 2
        },
        {
          "op": "status",
          "target": "enemy",
          "status": "bleed",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C011",
      "Name": "割裂",
      "Archetype": "裂伤",
      "Cost": 2,
      "PlayTimeT": 0.9,
      "Tags": "裂伤",
      "Description": "施加裂伤3。",
      "Effects": [
        {
          "op": "status",
          "target": "enemy",
          "status": "bleed",
          "amount": 3
        }
      ]
    },
    {
      "CardID": "C012",
      "Name": "撕开伤口",
      "Archetype": "裂伤",
      "Cost": 3,
      "PlayTimeT": 1.2,
      "Tags": "裂伤;伤害",
      "Description": "敌人每有1层裂伤，造成2点伤害。",
      "Effects": [
        {
          "op": "bleed_damage",
          "per": 2
        }
      ]
    },
    {
      "CardID": "C013",
      "Name": "毒针",
      "Archetype": "中毒",
      "Cost": 1,
      "PlayTimeT": 0.6,
      "Tags": "中毒;伤害",
      "Description": "造成2点伤害，施加中毒2。",
      "Effects": [
        {
          "op": "damage",
          "amount": 2
        },
        {
          "op": "status",
          "target": "enemy",
          "status": "poison",
          "amount": 2
        }
      ]
    },
    {
      "CardID": "C014",
      "Name": "毒雾",
      "Archetype": "中毒",
      "Cost": 3,
      "PlayTimeT": 1.1,
      "Tags": "中毒",
      "Description": "施加中毒4。",
      "Effects": [
        {
          "op": "status",
          "target": "enemy",
          "status": "poison",
          "amount": 4
        }
      ]
    },
    {
      "CardID": "C015",
      "Name": "毒爆",
      "Archetype": "中毒",
      "Cost": 4,
      "PlayTimeT": 1.5,
      "Tags": "中毒;爆发",
      "Description": "引爆中毒，每层造成2点伤害，然后清除中毒。",
      "Effects": [
        {
          "op": "poison_burst",
          "per": 2
        }
      ]
    },
    {
      "CardID": "C016",
      "Name": "凝神",
      "Archetype": "专注",
      "Cost": 1,
      "PlayTimeT": 0.8,
      "Tags": "专注",
      "Description": "获得专注2。",
      "Effects": [
        {
          "op": "status",
          "target": "self",
          "status": "focus",
          "amount": 2
        }
      ]
    },
    {
      "CardID": "C017",
      "Name": "精准射击",
      "Archetype": "专注",
      "Cost": 2,
      "PlayTimeT": 1.0,
      "Tags": "专注;伤害",
      "Description": "造成6点伤害；若有专注，额外造成4点伤害。",
      "Effects": [
        {
          "op": "damage",
          "amount": 6
        },
        {
          "op": "if_self_status",
          "status": "focus",
          "op2": "damage",
          "amount": 4
        }
      ]
    },
    {
      "CardID": "C018",
      "Name": "冷静补给",
      "Archetype": "专注",
      "Cost": 1,
      "PlayTimeT": 0.9,
      "Tags": "治疗;专注",
      "Description": "回复2点生命，获得专注1。",
      "Effects": [
        {
          "op": "heal",
          "amount": 2
        },
        {
          "op": "status",
          "target": "self",
          "status": "focus",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C019",
      "Name": "快装",
      "Archetype": "节奏",
      "Cost": 1,
      "PlayTimeT": 0.35,
      "Tags": "节奏;伤害",
      "Description": "造成1点伤害。短打牌时间，适合快速封装短链。",
      "Effects": [
        {
          "op": "damage",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C020",
      "Name": "重击",
      "Archetype": "通用",
      "Cost": 3,
      "PlayTimeT": 1.3,
      "Tags": "伤害",
      "Description": "造成10点伤害。",
      "Effects": [
        {
          "op": "damage",
          "amount": 10
        }
      ]
    },
    {
      "CardID": "C021",
      "Name": "战场急救",
      "Archetype": "通用",
      "Cost": 2,
      "PlayTimeT": 1.2,
      "Tags": "治疗",
      "Description": "回复7点生命。",
      "Effects": [
        {
          "op": "heal",
          "amount": 7
        }
      ]
    },
    {
      "CardID": "C022",
      "Name": "清醒",
      "Archetype": "通用",
      "Cost": 1,
      "PlayTimeT": 0.8,
      "Tags": "净化;治疗",
      "Description": "清除自身燃烧、中毒、裂伤，回复2点生命。",
      "Effects": [
        {
          "op": "cleanse"
        },
        {
          "op": "heal",
          "amount": 2
        }
      ]
    },
    {
      "CardID": "C023",
      "Name": "蓄势",
      "Archetype": "武技",
      "Cost": 1,
      "PlayTimeT": 0.7,
      "Tags": "蓄力",
      "Description": "获得蓄力2。",
      "Effects": [
        {
          "op": "status",
          "target": "self",
          "status": "charge",
          "amount": 2
        }
      ]
    },
    {
      "CardID": "C024",
      "Name": "横斩",
      "Archetype": "武技",
      "Cost": 1,
      "PlayTimeT": 0.8,
      "Tags": "伤害",
      "Description": "造成5点伤害。",
      "Effects": [
        {
          "op": "damage",
          "amount": 5
        }
      ]
    },
    {
      "CardID": "C025",
      "Name": "破甲重劈",
      "Archetype": "武技",
      "Cost": 3,
      "PlayTimeT": 1.4,
      "Tags": "伤害;蓄力",
      "Description": "造成8点伤害；若有蓄力，额外造成蓄力层数x3伤害并清除蓄力。",
      "Effects": [
        {
          "op": "damage",
          "amount": 8
        },
        {
          "op": "charge_damage",
          "per": 3
        }
      ]
    },
    {
      "CardID": "C026",
      "Name": "侧步",
      "Archetype": "武技",
      "Cost": 1,
      "PlayTimeT": 0.5,
      "Tags": "护盾;节奏",
      "Description": "获得护盾3，获得专注1。",
      "Effects": [
        {
          "op": "block",
          "amount": 3
        },
        {
          "op": "status",
          "target": "self",
          "status": "focus",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C027",
      "Name": "导热管",
      "Archetype": "燃烧",
      "Cost": 1,
      "PlayTimeT": 0.7,
      "Tags": "燃烧;节奏",
      "Description": "敌人有燃烧时造成4点伤害，否则施加燃烧1。",
      "Effects": [
        {
          "op": "if_enemy_status",
          "status": "burn",
          "op2": "damage",
          "amount": 4,
          "else_op": "status",
          "else_amount": 1
        }
      ]
    },
    {
      "CardID": "C028",
      "Name": "腐蚀防线",
      "Archetype": "中毒",
      "Cost": 2,
      "PlayTimeT": 1.0,
      "Tags": "护盾;中毒",
      "Description": "获得护盾5，施加中毒1。",
      "Effects": [
        {
          "op": "block",
          "amount": 5
        },
        {
          "op": "status",
          "target": "enemy",
          "status": "poison",
          "amount": 1
        }
      ]
    }
  ],
  "strategies": [
    {
      "StrategyID": "S_STEADY",
      "Name": "稳步推进",
      "DrawCount": 1,
      "PickLimit": 1,
      "PriorityTags": "",
      "RejectTags": "",
      "Mode": "first",
      "Description": "抽1张，自动编入该牌。稳定但不会筛选。"
    },
    {
      "StrategyID": "S_ATTACK",
      "Name": "寻找攻击",
      "DrawCount": 2,
      "PickLimit": 1,
      "PriorityTags": "伤害;爆发",
      "RejectTags": "治疗",
      "Mode": "tags",
      "Description": "抽2张，优先编入攻击或爆发牌，其余弃置。"
    },
    {
      "StrategyID": "S_BURN",
      "Name": "寻找燃烧组件",
      "DrawCount": 3,
      "PickLimit": 1,
      "PriorityTags": "燃烧;爆发",
      "RejectTags": "中毒;裂伤",
      "Mode": "tags",
      "Description": "抽3张，优先编入燃烧链组件，其余弃置。"
    },
    {
      "StrategyID": "S_DEFENSE",
      "Name": "防守优先",
      "DrawCount": 2,
      "PickLimit": 1,
      "PriorityTags": "护盾;治疗",
      "RejectTags": "",
      "Mode": "low_hp_defense",
      "Description": "低血量优先防御，否则优先伤害。"
    },
    {
      "StrategyID": "S_POISON",
      "Name": "寻找毒性组件",
      "DrawCount": 3,
      "PickLimit": 1,
      "PriorityTags": "中毒;爆发",
      "RejectTags": "燃烧;裂伤",
      "Mode": "tags",
      "Description": "抽3张，优先编入中毒组件，其余弃置。"
    },
    {
      "StrategyID": "S_BLADE",
      "Name": "武技连段",
      "DrawCount": 2,
      "PickLimit": 1,
      "PriorityTags": "蓄力;伤害;节奏",
      "RejectTags": "中毒;燃烧",
      "Mode": "tags",
      "Description": "抽2张，优先编入蓄力与武技伤害牌。"
    }
  ],
  "packagingRules": [
    {
      "RuleID": "P_SLOT_2",
      "Name": "双槽武器",
      "Type": "slot",
      "Threshold": 2,
      "Description": "待封装区达到2张牌时自动封装。启动快，链更短。"
    },
    {
      "RuleID": "P_SLOT_3",
      "Name": "三槽武器",
      "Type": "slot",
      "Threshold": 3,
      "Description": "待封装区达到3张牌时自动封装。节奏均衡。"
    },
    {
      "RuleID": "P_SLOT_4",
      "Name": "四槽武器",
      "Type": "slot",
      "Threshold": 4,
      "Description": "待封装区达到4张牌时自动封装。启动慢，但更容易形成完整链。"
    },
    {
      "RuleID": "P_COST_4",
      "Name": "轻量费用阈值",
      "Type": "cost",
      "Threshold": 4,
      "Description": "待封装区累计费用达到4时自动封装。适合快循环。"
    },
    {
      "RuleID": "P_COST_5",
      "Name": "标准费用阈值",
      "Type": "cost",
      "Threshold": 5,
      "Description": "待封装区累计费用达到5时自动封装。适合组件链。"
    },
    {
      "RuleID": "P_COST_7",
      "Name": "重型费用阈值",
      "Type": "cost",
      "Threshold": 7,
      "Description": "待封装区累计费用达到7时自动封装。启动慢但单链更重。"
    }
  ],
  "characters": [
    {
      "CharacterID": "R001",
      "Name": "燃烧工匠",
      "Stage": "成型",
      "HP": 46,
      "DefaultStrategyID": "S_BURN",
      "StrategyIDs": [
        "S_BURN",
        "S_ATTACK",
        "S_DEFENSE",
        "S_STEADY"
      ],
      "PackagingRuleID": "P_COST_5",
      "DeckList": {
        "C001": 3,
        "C002": 3,
        "C003": 2,
        "C004": 1,
        "C005": 1,
        "C006": 1,
        "C027": 2
      },
      "Description": "费用封装角色。用燃烧组件凑到费用阈值后自动生成燃烧链。"
    },
    {
      "CharacterID": "R002",
      "Name": "剑术学徒",
      "Stage": "发育前",
      "HP": 42,
      "DefaultStrategyID": "S_BLADE",
      "StrategyIDs": [
        "S_BLADE",
        "S_ATTACK",
        "S_DEFENSE",
        "S_STEADY"
      ],
      "PackagingRuleID": "P_SLOT_3",
      "DeckList": {
        "C023": 3,
        "C024": 3,
        "C025": 2,
        "C026": 2,
        "C006": 2
      },
      "Description": "槽位封装角色。三张牌装满训练剑后自动形成武技链。"
    },
    {
      "CharacterID": "R003",
      "Name": "盾链守卫",
      "Stage": "成型",
      "HP": 62,
      "DefaultStrategyID": "S_DEFENSE",
      "StrategyIDs": [
        "S_DEFENSE",
        "S_ATTACK",
        "S_STEADY"
      ],
      "PackagingRuleID": "P_SLOT_2",
      "DeckList": {
        "C006": 4,
        "C007": 2,
        "C008": 3,
        "C009": 1,
        "C020": 1,
        "C021": 1
      },
      "Description": "双槽封装，快速生成护盾与反击短链。"
    },
    {
      "CharacterID": "R004",
      "Name": "毒雾术士",
      "Stage": "成型",
      "HP": 44,
      "DefaultStrategyID": "S_POISON",
      "StrategyIDs": [
        "S_POISON",
        "S_DEFENSE",
        "S_ATTACK",
        "S_STEADY"
      ],
      "PackagingRuleID": "P_COST_7",
      "DeckList": {
        "C013": 3,
        "C014": 3,
        "C015": 2,
        "C018": 2,
        "C022": 1,
        "C028": 2
      },
      "Description": "重型费用封装，偏慢但能凑出毒性爆发链。"
    },
    {
      "CharacterID": "R005",
      "Name": "专注射手",
      "Stage": "发育前",
      "HP": 40,
      "DefaultStrategyID": "S_ATTACK",
      "StrategyIDs": [
        "S_ATTACK",
        "S_DEFENSE",
        "S_STEADY"
      ],
      "PackagingRuleID": "P_COST_4",
      "DeckList": {
        "C016": 3,
        "C017": 3,
        "C018": 2,
        "C019": 2,
        "C006": 2
      },
      "Description": "轻费用封装，用低费专注牌快速生成输出链。"
    },
    {
      "CharacterID": "R006",
      "Name": "混合学徒",
      "Stage": "发育前",
      "HP": 40,
      "DefaultStrategyID": "S_STEADY",
      "StrategyIDs": [
        "S_STEADY",
        "S_ATTACK",
        "S_DEFENSE"
      ],
      "PackagingRuleID": "P_SLOT_4",
      "DeckList": {
        "C001": 2,
        "C002": 1,
        "C006": 2,
        "C010": 2,
        "C013": 2,
        "C019": 2,
        "C021": 1
      },
      "Description": "杂牌+四槽封装，容易观察策略筛选不足导致链污染的问题。"
    }
  ],
  "config": [
    {
      "Key": "DrawTimeT",
      "Value": 1.0,
      "Description": "每次执行抽牌策略前的抽牌时间。"
    },
    {
      "Key": "ShuffleTimeT",
      "Value": 1.0,
      "Description": "抽牌堆空时的洗牌时间。"
    },
    {
      "Key": "StrategyThinkT",
      "Value": 0.35,
      "Description": "策略判断展示时间。"
    },
    {
      "Key": "StatusTickT",
      "Value": 2.5,
      "Description": "燃烧、中毒、裂伤自然结算间隔。"
    },
    {
      "Key": "StartingSpeed",
      "Value": 1.0,
      "Description": "默认播放速度。"
    }
  ]
};
