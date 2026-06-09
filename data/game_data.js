window.BATTLE_DATA = {
  "keywords": [
    {
      "KeywordID": "KW_ACTION",
      "Name": "动作",
      "Category": "类型",
      "Description": "打出后进入武器槽，槽满后按顺序触发。"
    },
    {
      "KeywordID": "KW_SPELL",
      "Name": "法术",
      "Category": "类型",
      "Description": "打出后立即触发，然后进入弃牌堆。"
    },
    {
      "KeywordID": "KW_STEADY",
      "Name": "沉稳",
      "Category": "排序",
      "Description": "进入武器槽后移动到最前方。"
    },
    {
      "KeywordID": "KW_EXHAUST",
      "Name": "消耗",
      "Category": "去向",
      "Description": "触发后进入消耗牌堆，不再回到弃牌堆。"
    },
    {
      "KeywordID": "KW_ATTACK",
      "Name": "攻击",
      "Category": "结算",
      "Description": "立即触发一次武器攻击效果，可带伤害倍率。"
    },
    {
      "KeywordID": "KW_CHARGE",
      "Name": "蓄力",
      "Category": "Buff",
      "Description": "每层使下一次武器攻击伤害提高，攻击后消耗。"
    },
    {
      "KeywordID": "KW_BLOCK",
      "Name": "格挡",
      "Category": "Buff",
      "Description": "抵消即将受到的伤害。"
    },
    {
      "KeywordID": "KW_VULN",
      "Name": "易伤",
      "Category": "Debuff",
      "Description": "受到的伤害提高，每次受击后减少。"
    },
    {
      "KeywordID": "KW_BLEED",
      "Name": "流血",
      "Category": "Debuff",
      "Description": "持续伤害资源，可被部分卡牌放大或消耗。"
    },
    {
      "KeywordID": "KW_BURN",
      "Name": "燃烧",
      "Category": "Debuff",
      "Description": "持续火焰资源，可被引燃爆发。"
    },
    {
      "KeywordID": "KW_POISON",
      "Name": "中毒",
      "Category": "Debuff",
      "Description": "持续毒性资源，可被毒爆结算。"
    },
    {
      "KeywordID": "KW_SLOW",
      "Name": "迟缓",
      "Category": "Debuff",
      "Description": "延长下一次抽牌或攻击时间。"
    },
    {
      "KeywordID": "KW_HASTE",
      "Name": "急速",
      "Category": "Buff",
      "Description": "缩短下一次抽牌时间。"
    }
  ],
  "weapons": [
    {
      "WeaponID": "W_GREAT_SWORD",
      "Name": "大剑",
      "SlotCount": 3,
      "BaseDamage": 10,
      "AttackTimeT": 2.0,
      "ChargeBonusPct": 0.2,
      "AfterAttackCharge": 1,
      "Description": "三格槽位。攻击造成基础伤害，结算蓄力后获得蓄力1。"
    },
    {
      "WeaponID": "W_DAGGER",
      "Name": "双匕首",
      "SlotCount": 4,
      "BaseDamage": 6,
      "AttackTimeT": 1.4,
      "ChargeBonusPct": 0.16,
      "AfterAttackCharge": 0,
      "Description": "四格槽位。低伤害高频率，适合流血和偷袭。"
    },
    {
      "WeaponID": "W_STAFF",
      "Name": "法杖",
      "SlotCount": 2,
      "BaseDamage": 4,
      "AttackTimeT": 1.8,
      "ChargeBonusPct": 0.25,
      "AfterAttackCharge": 0,
      "Description": "两格槽位。武器伤害低，但法术体系更稳定。"
    },
    {
      "WeaponID": "W_TOWER_SHIELD",
      "Name": "塔盾",
      "SlotCount": 3,
      "BaseDamage": 7,
      "AttackTimeT": 2.2,
      "ChargeBonusPct": 0.18,
      "AfterAttackCharge": 0,
      "Description": "三格槽位。适合格挡、盾反和反击构筑。"
    },
    {
      "WeaponID": "W_RITUAL_KNIFE",
      "Name": "仪式短刀",
      "SlotCount": 3,
      "BaseDamage": 5,
      "AttackTimeT": 1.6,
      "ChargeBonusPct": 0.18,
      "AfterAttackCharge": 0,
      "Description": "三格槽位。适合中毒、弃牌和洗牌节奏。"
    }
  ],
  "cards": [
    {
      "CardID": "C001",
      "Name": "准备架势",
      "Type": "动作",
      "Archetype": "蓄力",
      "Tags": "蓄力;架势",
      "Rarity": "基础",
      "Keywords": "",
      "Description": "获得蓄力1。",
      "Effects": [
        {
          "op": "gain_charge",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C002",
      "Name": "深呼吸",
      "Type": "法术",
      "Archetype": "抽牌",
      "Tags": "抽牌;蓄力",
      "Rarity": "基础",
      "Keywords": "",
      "Description": "获得蓄力1。额外抽1张牌并打出，无法打出则弃置。",
      "Effects": [
        {
          "op": "gain_charge",
          "amount": 1
        },
        {
          "op": "draw",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C003",
      "Name": "偷袭",
      "Type": "动作",
      "Archetype": "攻击",
      "Tags": "攻击;匕首",
      "Rarity": "基础",
      "Keywords": "攻击",
      "Description": "攻击，造成10%武器伤害。",
      "Effects": [
        {
          "op": "weapon_attack",
          "multiplier": 0.1
        }
      ]
    },
    {
      "CardID": "C004",
      "Name": "双发",
      "Type": "动作",
      "Archetype": "连携",
      "Tags": "连携;蓄力",
      "Rarity": "稀有",
      "Keywords": "消耗;沉稳",
      "Description": "消耗、沉稳。下一次攻击前的动作牌触发两次。",
      "Effects": [
        {
          "op": "repeat_next_actions",
          "times": 2
        }
      ]
    },
    {
      "CardID": "C005",
      "Name": "重劈",
      "Type": "动作",
      "Archetype": "攻击",
      "Tags": "攻击;蓄力",
      "Rarity": "普通",
      "Keywords": "攻击",
      "Description": "获得蓄力1。攻击，造成60%武器伤害。",
      "Effects": [
        {
          "op": "gain_charge",
          "amount": 1
        },
        {
          "op": "weapon_attack",
          "multiplier": 0.6
        }
      ]
    },
    {
      "CardID": "C006",
      "Name": "蓄势斩",
      "Type": "动作",
      "Archetype": "蓄力",
      "Tags": "攻击;蓄力",
      "Rarity": "普通",
      "Keywords": "攻击",
      "Description": "获得蓄力2。攻击，造成35%武器伤害。",
      "Effects": [
        {
          "op": "gain_charge",
          "amount": 2
        },
        {
          "op": "weapon_attack",
          "multiplier": 0.35
        }
      ]
    },
    {
      "CardID": "C007",
      "Name": "稳步推进",
      "Type": "动作",
      "Archetype": "防御",
      "Tags": "格挡;蓄力",
      "Rarity": "普通",
      "Keywords": "沉稳",
      "Description": "沉稳。获得格挡6和蓄力1。",
      "Effects": [
        {
          "op": "gain_block",
          "amount": 6
        },
        {
          "op": "gain_charge",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C008",
      "Name": "收刀",
      "Type": "动作",
      "Archetype": "抽牌",
      "Tags": "抽牌;蓄力",
      "Rarity": "普通",
      "Keywords": "沉稳",
      "Description": "沉稳。额外抽1张牌并打出，无法打出则弃置。获得蓄力1。",
      "Effects": [
        {
          "op": "draw",
          "amount": 1
        },
        {
          "op": "gain_charge",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C009",
      "Name": "战吼",
      "Type": "法术",
      "Archetype": "蓄力",
      "Tags": "蓄力;易伤",
      "Rarity": "普通",
      "Keywords": "",
      "Description": "获得蓄力1。敌人获得易伤1。",
      "Effects": [
        {
          "op": "gain_charge",
          "amount": 1
        },
        {
          "op": "apply_status",
          "target": "enemy",
          "status": "vulnerable",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C010",
      "Name": "破甲斩",
      "Type": "动作",
      "Archetype": "攻击",
      "Tags": "攻击;易伤",
      "Rarity": "普通",
      "Keywords": "攻击",
      "Description": "敌人获得易伤2。攻击，造成30%武器伤害。",
      "Effects": [
        {
          "op": "apply_status",
          "target": "enemy",
          "status": "vulnerable",
          "amount": 2
        },
        {
          "op": "weapon_attack",
          "multiplier": 0.3
        }
      ]
    },
    {
      "CardID": "C011",
      "Name": "割裂",
      "Type": "动作",
      "Archetype": "流血",
      "Tags": "流血;攻击",
      "Rarity": "基础",
      "Keywords": "",
      "Description": "造成3点伤害，施加流血2。",
      "Effects": [
        {
          "op": "damage",
          "amount": 3
        },
        {
          "op": "apply_status",
          "target": "enemy",
          "status": "bleed",
          "amount": 2
        }
      ]
    },
    {
      "CardID": "C012",
      "Name": "放血",
      "Type": "动作",
      "Archetype": "流血",
      "Tags": "流血;攻击",
      "Rarity": "普通",
      "Keywords": "攻击",
      "Description": "敌人每层流血造成2点伤害，然后攻击造成25%武器伤害。",
      "Effects": [
        {
          "op": "bleed_strike",
          "per": 2
        },
        {
          "op": "weapon_attack",
          "multiplier": 0.25
        }
      ]
    },
    {
      "CardID": "C013",
      "Name": "血印",
      "Type": "法术",
      "Archetype": "流血",
      "Tags": "流血",
      "Rarity": "普通",
      "Keywords": "",
      "Description": "施加流血3。",
      "Effects": [
        {
          "op": "apply_status",
          "target": "enemy",
          "status": "bleed",
          "amount": 3
        }
      ]
    },
    {
      "CardID": "C014",
      "Name": "撕裂追击",
      "Type": "动作",
      "Archetype": "流血",
      "Tags": "流血;攻击",
      "Rarity": "稀有",
      "Keywords": "攻击",
      "Description": "若敌人有流血，获得蓄力1。攻击造成45%武器伤害。",
      "Effects": [
        {
          "op": "if_enemy_status",
          "status": "bleed",
          "op2": "gain_charge",
          "amount": 1
        },
        {
          "op": "weapon_attack",
          "multiplier": 0.45
        }
      ]
    },
    {
      "CardID": "C015",
      "Name": "火花",
      "Type": "法术",
      "Archetype": "火焰",
      "Tags": "火焰;伤害",
      "Rarity": "基础",
      "Keywords": "",
      "Description": "造成4点伤害。",
      "Effects": [
        {
          "op": "damage",
          "amount": 4
        }
      ]
    },
    {
      "CardID": "C016",
      "Name": "火球",
      "Type": "法术",
      "Archetype": "火焰",
      "Tags": "火焰;燃烧",
      "Rarity": "普通",
      "Keywords": "",
      "Description": "造成7点伤害，施加燃烧2。",
      "Effects": [
        {
          "op": "damage",
          "amount": 7
        },
        {
          "op": "apply_status",
          "target": "enemy",
          "status": "burn",
          "amount": 2
        }
      ]
    },
    {
      "CardID": "C017",
      "Name": "引燃",
      "Type": "法术",
      "Archetype": "火焰",
      "Tags": "火焰;燃烧",
      "Rarity": "稀有",
      "Keywords": "",
      "Description": "敌人每层燃烧造成3点伤害，然后清除燃烧。",
      "Effects": [
        {
          "op": "ignite",
          "per": 3
        }
      ]
    },
    {
      "CardID": "C018",
      "Name": "霜针",
      "Type": "法术",
      "Archetype": "冰霜",
      "Tags": "冰霜;迟缓",
      "Rarity": "基础",
      "Keywords": "",
      "Description": "造成3点伤害，施加迟缓1。",
      "Effects": [
        {
          "op": "damage",
          "amount": 3
        },
        {
          "op": "apply_status",
          "target": "enemy",
          "status": "slow",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C019",
      "Name": "寒潮",
      "Type": "法术",
      "Archetype": "冰霜",
      "Tags": "冰霜;格挡",
      "Rarity": "普通",
      "Keywords": "",
      "Description": "获得格挡6，敌人获得迟缓2。",
      "Effects": [
        {
          "op": "gain_block",
          "amount": 6
        },
        {
          "op": "apply_status",
          "target": "enemy",
          "status": "slow",
          "amount": 2
        }
      ]
    },
    {
      "CardID": "C020",
      "Name": "雷击",
      "Type": "法术",
      "Archetype": "雷电",
      "Tags": "雷电;抽牌",
      "Rarity": "普通",
      "Keywords": "",
      "Description": "造成6点伤害。额外抽1张牌并打出，无法打出则弃置。",
      "Effects": [
        {
          "op": "damage",
          "amount": 6
        },
        {
          "op": "draw",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C021",
      "Name": "连锁闪电",
      "Type": "法术",
      "Archetype": "雷电",
      "Tags": "雷电;连携",
      "Rarity": "稀有",
      "Keywords": "",
      "Description": "造成4点伤害三次。",
      "Effects": [
        {
          "op": "damage",
          "amount": 4
        },
        {
          "op": "damage",
          "amount": 4
        },
        {
          "op": "damage",
          "amount": 4
        }
      ]
    },
    {
      "CardID": "C022",
      "Name": "格挡",
      "Type": "动作",
      "Archetype": "防御",
      "Tags": "格挡",
      "Rarity": "基础",
      "Keywords": "",
      "Description": "获得格挡8。",
      "Effects": [
        {
          "op": "gain_block",
          "amount": 8
        }
      ]
    },
    {
      "CardID": "C023",
      "Name": "盾反",
      "Type": "动作",
      "Archetype": "防御",
      "Tags": "格挡;攻击",
      "Rarity": "普通",
      "Keywords": "攻击",
      "Description": "获得格挡4。攻击，造成20%武器伤害。",
      "Effects": [
        {
          "op": "gain_block",
          "amount": 4
        },
        {
          "op": "weapon_attack",
          "multiplier": 0.2
        }
      ]
    },
    {
      "CardID": "C024",
      "Name": "铁壁",
      "Type": "动作",
      "Archetype": "防御",
      "Tags": "格挡",
      "Rarity": "稀有",
      "Keywords": "沉稳",
      "Description": "沉稳。获得格挡12。",
      "Effects": [
        {
          "op": "gain_block",
          "amount": 12
        }
      ]
    },
    {
      "CardID": "C025",
      "Name": "治疗术",
      "Type": "法术",
      "Archetype": "回复",
      "Tags": "治疗",
      "Rarity": "普通",
      "Keywords": "",
      "Description": "回复6点生命。",
      "Effects": [
        {
          "op": "heal",
          "amount": 6
        }
      ]
    },
    {
      "CardID": "C026",
      "Name": "净化",
      "Type": "法术",
      "Archetype": "回复",
      "Tags": "治疗;净化",
      "Rarity": "普通",
      "Keywords": "",
      "Description": "清除自身流血、燃烧和中毒，回复2点生命。",
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
      "CardID": "C027",
      "Name": "吸气",
      "Type": "法术",
      "Archetype": "抽牌",
      "Tags": "抽牌;蓄力",
      "Rarity": "稀有",
      "Keywords": "",
      "Description": "立即抽3张牌，打出第一张抽到的蓄力牌，弃置其他牌。",
      "Effects": [
        {
          "op": "inhale",
          "draw": 3,
          "tag": "蓄力"
        }
      ]
    },
    {
      "CardID": "C028",
      "Name": "筛选",
      "Type": "法术",
      "Archetype": "抽牌",
      "Tags": "抽牌",
      "Rarity": "普通",
      "Keywords": "",
      "Description": "额外抽2张牌，弃置其中1张非动作牌；若没有则弃置最后1张。打出未弃置的牌。",
      "Effects": [
        {
          "op": "filter_draw",
          "draw": 2
        }
      ]
    },
    {
      "CardID": "C029",
      "Name": "预谋",
      "Type": "动作",
      "Archetype": "连携",
      "Tags": "抽牌;法术",
      "Rarity": "普通",
      "Keywords": "沉稳",
      "Description": "沉稳。额外抽1张牌并打出，无法打出则弃置。下一张法术伤害+3。",
      "Effects": [
        {
          "op": "draw",
          "amount": 1
        },
        {
          "op": "gain_spell_power",
          "amount": 3
        }
      ]
    },
    {
      "CardID": "C030",
      "Name": "回收",
      "Type": "法术",
      "Archetype": "抽牌",
      "Tags": "洗牌",
      "Rarity": "普通",
      "Keywords": "",
      "Description": "将弃牌堆洗入抽牌堆。额外抽1张牌并打出，无法打出则弃置。",
      "Effects": [
        {
          "op": "reshuffle_discard"
        },
        {
          "op": "draw",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C031",
      "Name": "过牌动作",
      "Type": "动作",
      "Archetype": "抽牌",
      "Tags": "抽牌;蓄力",
      "Rarity": "基础",
      "Keywords": "",
      "Description": "额外抽1张牌并打出，无法打出则弃置。获得蓄力1。",
      "Effects": [
        {
          "op": "draw",
          "amount": 1
        },
        {
          "op": "gain_charge",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C032",
      "Name": "快速装填",
      "Type": "法术",
      "Archetype": "节奏",
      "Tags": "急速;抽牌",
      "Rarity": "普通",
      "Keywords": "",
      "Description": "获得急速2。额外抽1张牌并打出，无法打出则弃置。",
      "Effects": [
        {
          "op": "apply_status",
          "target": "self",
          "status": "haste",
          "amount": 2
        },
        {
          "op": "draw",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C033",
      "Name": "双重准备",
      "Type": "动作",
      "Archetype": "蓄力",
      "Tags": "蓄力;连携",
      "Rarity": "稀有",
      "Keywords": "",
      "Description": "获得蓄力1。若自身已有蓄力，再获得蓄力1。",
      "Effects": [
        {
          "op": "gain_charge",
          "amount": 1
        },
        {
          "op": "if_self_status",
          "status": "charge",
          "op2": "gain_charge",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C034",
      "Name": "聚气",
      "Type": "动作",
      "Archetype": "蓄力",
      "Tags": "蓄力",
      "Rarity": "普通",
      "Keywords": "",
      "Description": "获得蓄力2。",
      "Effects": [
        {
          "op": "gain_charge",
          "amount": 2
        }
      ]
    },
    {
      "CardID": "C035",
      "Name": "爆发",
      "Type": "动作",
      "Archetype": "蓄力",
      "Tags": "攻击;蓄力",
      "Rarity": "稀有",
      "Keywords": "攻击",
      "Description": "攻击，造成60%武器伤害。本次最终武器攻击伤害+25%。",
      "Effects": [
        {
          "op": "weapon_attack",
          "multiplier": 0.6
        },
        {
          "op": "final_attack_bonus",
          "amount": 0.25
        }
      ]
    },
    {
      "CardID": "C036",
      "Name": "终结动作",
      "Type": "动作",
      "Archetype": "蓄力",
      "Tags": "攻击;蓄力",
      "Rarity": "稀有",
      "Keywords": "攻击",
      "Description": "若蓄力至少3，攻击造成120%武器伤害；否则造成45%。",
      "Effects": [
        {
          "op": "finisher",
          "high": 1.2,
          "low": 0.45,
          "need": 3
        }
      ]
    },
    {
      "CardID": "C037",
      "Name": "节拍",
      "Type": "动作",
      "Archetype": "连携",
      "Tags": "连携;急速",
      "Rarity": "普通",
      "Keywords": "",
      "Description": "获得急速1。若武器槽已有2张牌，额外抽1张牌并打出，无法打出则弃置。",
      "Effects": [
        {
          "op": "apply_status",
          "target": "self",
          "status": "haste",
          "amount": 1
        },
        {
          "op": "if_slots_at_least",
          "count": 2,
          "op2": "draw",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C038",
      "Name": "毒刃",
      "Type": "动作",
      "Archetype": "中毒",
      "Tags": "中毒;攻击",
      "Rarity": "基础",
      "Keywords": "攻击",
      "Description": "施加中毒2。攻击，造成20%武器伤害。",
      "Effects": [
        {
          "op": "apply_status",
          "target": "enemy",
          "status": "poison",
          "amount": 2
        },
        {
          "op": "weapon_attack",
          "multiplier": 0.2
        }
      ]
    },
    {
      "CardID": "C039",
      "Name": "毒雾",
      "Type": "法术",
      "Archetype": "中毒",
      "Tags": "中毒",
      "Rarity": "普通",
      "Keywords": "",
      "Description": "施加中毒3。",
      "Effects": [
        {
          "op": "apply_status",
          "target": "enemy",
          "status": "poison",
          "amount": 3
        }
      ]
    },
    {
      "CardID": "C040",
      "Name": "毒爆",
      "Type": "法术",
      "Archetype": "中毒",
      "Tags": "中毒;爆发",
      "Rarity": "稀有",
      "Keywords": "",
      "Description": "敌人每层中毒造成2点伤害，然后清除中毒。",
      "Effects": [
        {
          "op": "poison_burst",
          "per": 2
        }
      ]
    },
    {
      "CardID": "C041",
      "Name": "法力护盾",
      "Type": "法术",
      "Archetype": "防御",
      "Tags": "格挡;法术",
      "Rarity": "普通",
      "Keywords": "",
      "Description": "获得格挡5。额外抽1张牌并打出，无法打出则弃置。",
      "Effects": [
        {
          "op": "gain_block",
          "amount": 5
        },
        {
          "op": "draw",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C042",
      "Name": "奥术蓄能",
      "Type": "法术",
      "Archetype": "法术",
      "Tags": "蓄力;法术",
      "Rarity": "普通",
      "Keywords": "",
      "Description": "获得蓄力2。下一张法术伤害+2。",
      "Effects": [
        {
          "op": "gain_charge",
          "amount": 2
        },
        {
          "op": "gain_spell_power",
          "amount": 2
        }
      ]
    },
    {
      "CardID": "C043",
      "Name": "奥术飞弹",
      "Type": "法术",
      "Archetype": "法术",
      "Tags": "法术;伤害",
      "Rarity": "普通",
      "Keywords": "",
      "Description": "造成2点伤害三次。",
      "Effects": [
        {
          "op": "damage",
          "amount": 2
        },
        {
          "op": "damage",
          "amount": 2
        },
        {
          "op": "damage",
          "amount": 2
        }
      ]
    },
    {
      "CardID": "C044",
      "Name": "武器附魔",
      "Type": "法术",
      "Archetype": "法术",
      "Tags": "攻击;蓄力",
      "Rarity": "稀有",
      "Keywords": "",
      "Description": "下一次武器攻击伤害+40%。",
      "Effects": [
        {
          "op": "weapon_power",
          "amount": 0.4
        }
      ]
    },
    {
      "CardID": "C045",
      "Name": "沉稳切入",
      "Type": "动作",
      "Archetype": "连携",
      "Tags": "蓄力;易伤",
      "Rarity": "普通",
      "Keywords": "沉稳",
      "Description": "沉稳。获得蓄力1，施加易伤1。",
      "Effects": [
        {
          "op": "gain_charge",
          "amount": 1
        },
        {
          "op": "apply_status",
          "target": "enemy",
          "status": "vulnerable",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C046",
      "Name": "急速刺击",
      "Type": "动作",
      "Archetype": "节奏",
      "Tags": "急速;攻击",
      "Rarity": "普通",
      "Keywords": "攻击",
      "Description": "获得急速1。攻击，造成25%武器伤害。",
      "Effects": [
        {
          "op": "apply_status",
          "target": "self",
          "status": "haste",
          "amount": 1
        },
        {
          "op": "weapon_attack",
          "multiplier": 0.25
        }
      ]
    },
    {
      "CardID": "C047",
      "Name": "拖延术",
      "Type": "法术",
      "Archetype": "节奏",
      "Tags": "迟缓",
      "Rarity": "普通",
      "Keywords": "",
      "Description": "施加迟缓3。",
      "Effects": [
        {
          "op": "apply_status",
          "target": "enemy",
          "status": "slow",
          "amount": 3
        }
      ]
    },
    {
      "CardID": "C048",
      "Name": "弃牌打击",
      "Type": "动作",
      "Archetype": "抽牌",
      "Tags": "弃牌;攻击",
      "Rarity": "稀有",
      "Keywords": "",
      "Description": "弃牌堆每有1张牌造成1点伤害，最多12点。",
      "Effects": [
        {
          "op": "discard_strike",
          "cap": 12
        }
      ]
    },
    {
      "CardID": "C049",
      "Name": "洗牌术",
      "Type": "法术",
      "Archetype": "抽牌",
      "Tags": "洗牌;抽牌",
      "Rarity": "普通",
      "Keywords": "",
      "Description": "将弃牌堆洗回抽牌堆，获得急速1。",
      "Effects": [
        {
          "op": "reshuffle_discard"
        },
        {
          "op": "apply_status",
          "target": "self",
          "status": "haste",
          "amount": 1
        }
      ]
    },
    {
      "CardID": "C050",
      "Name": "试探步",
      "Type": "动作",
      "Archetype": "节奏",
      "Tags": "急速;格挡",
      "Rarity": "基础",
      "Keywords": "",
      "Description": "获得格挡3和急速1。",
      "Effects": [
        {
          "op": "gain_block",
          "amount": 3
        },
        {
          "op": "apply_status",
          "target": "self",
          "status": "haste",
          "amount": 1
        }
      ]
    }
  ],
  "characters": [
    {
      "CharacterID": "R001",
      "Name": "新手大剑士",
      "Stage": "发育前",
      "HP": 40,
      "WeaponID": "W_GREAT_SWORD",
      "AIStyle": "蓄力",
      "DeckList": {
        "C001": 2,
        "C003": 1,
        "C004": 1,
        "C027": 1,
        "C050": 1
      },
      "Description": "复现示例用卡组，含偷袭陷阱和双发蓄力。"
    },
    {
      "CharacterID": "R002",
      "Name": "成型蓄力剑士",
      "Stage": "发育后",
      "HP": 56,
      "WeaponID": "W_GREAT_SWORD",
      "AIStyle": "蓄力",
      "DeckList": {
        "C001": 4,
        "C004": 2,
        "C027": 2,
        "C034": 2,
        "C036": 2,
        "C045": 2
      },
      "Description": "稳定围绕双发、沉稳和高蓄力终结。"
    },
    {
      "CharacterID": "R003",
      "Name": "盗贼学徒",
      "Stage": "发育前",
      "HP": 34,
      "WeaponID": "W_DAGGER",
      "AIStyle": "快攻",
      "DeckList": {
        "C003": 2,
        "C011": 2,
        "C028": 1,
        "C046": 1,
        "C050": 2
      },
      "Description": "有快攻雏形，但低倍率攻击和节奏牌会考验是否提前填槽。"
    },
    {
      "CharacterID": "R004",
      "Name": "流血刺客",
      "Stage": "发育后",
      "HP": 42,
      "WeaponID": "W_DAGGER",
      "AIStyle": "流血",
      "DeckList": {
        "C011": 4,
        "C012": 3,
        "C013": 2,
        "C014": 2,
        "C028": 2,
        "C046": 2
      },
      "Description": "通过流血堆叠、放血和急速刺击滚动输出。"
    },
    {
      "CharacterID": "R005",
      "Name": "火花学徒",
      "Stage": "发育前",
      "HP": 30,
      "WeaponID": "W_STAFF",
      "AIStyle": "法术",
      "DeckList": {
        "C015": 3,
        "C016": 1,
        "C018": 1,
        "C041": 1,
        "C050": 2
      },
      "Description": "法术多但缺少稳定燃烧爆发。"
    },
    {
      "CharacterID": "R006",
      "Name": "元素法师",
      "Stage": "发育后",
      "HP": 38,
      "WeaponID": "W_STAFF",
      "AIStyle": "法术",
      "DeckList": {
        "C016": 3,
        "C017": 2,
        "C018": 2,
        "C019": 1,
        "C020": 2,
        "C021": 1,
        "C042": 2,
        "C043": 2
      },
      "Description": "火焰爆发、雷电过牌和冰霜迟缓形成完整法术循环。"
    },
    {
      "CharacterID": "R007",
      "Name": "盾卫新兵",
      "Stage": "发育前",
      "HP": 52,
      "WeaponID": "W_TOWER_SHIELD",
      "AIStyle": "防御",
      "DeckList": {
        "C022": 3,
        "C023": 1,
        "C024": 1,
        "C025": 1,
        "C050": 2
      },
      "Description": "生存能力强，但输出不足且槽位利用率低。"
    },
    {
      "CharacterID": "R008",
      "Name": "反击堡垒",
      "Stage": "发育后",
      "HP": 68,
      "WeaponID": "W_TOWER_SHIELD",
      "AIStyle": "防御",
      "DeckList": {
        "C022": 4,
        "C023": 3,
        "C024": 2,
        "C025": 2,
        "C026": 1,
        "C007": 2,
        "C010": 2
      },
      "Description": "利用沉稳防御、盾反和破甲打持久战。"
    },
    {
      "CharacterID": "R009",
      "Name": "毒术新手",
      "Stage": "发育前",
      "HP": 36,
      "WeaponID": "W_RITUAL_KNIFE",
      "AIStyle": "中毒",
      "DeckList": {
        "C038": 2,
        "C039": 1,
        "C040": 1,
        "C049": 1,
        "C050": 3
      },
      "Description": "有毒爆目标但启动慢，依靠试探步争取抽牌节奏。"
    },
    {
      "CharacterID": "R010",
      "Name": "毒爆大师",
      "Stage": "发育后",
      "HP": 44,
      "WeaponID": "W_RITUAL_KNIFE",
      "AIStyle": "中毒",
      "DeckList": {
        "C038": 4,
        "C039": 3,
        "C040": 3,
        "C028": 2,
        "C030": 1,
        "C032": 2,
        "C048": 2
      },
      "Description": "中毒堆叠、毒爆和弃牌打击组成高频爆发循环。"
    }
  ],
  "config": [
    {
      "Key": "DrawTimeT",
      "Value": 1.0,
      "Description": "基础抽牌时间。"
    },
    {
      "Key": "ShuffleTimeT",
      "Value": 1.0,
      "Description": "抽牌堆为空时，将弃牌堆洗回抽牌堆所需时间。"
    },
    {
      "Key": "UnitMs",
      "Value": 1000,
      "Description": "1T 对应的毫秒数，仅用于前端播放。"
    },
    {
      "Key": "VulnerableBonusPct",
      "Value": 0.25,
      "Description": "易伤状态使受到的伤害提高的比例。"
    },
    {
      "Key": "SlowPenaltyT",
      "Value": 0.2,
      "Description": "每层迟缓增加的下一次计时。"
    },
    {
      "Key": "HasteDiscountT",
      "Value": 0.15,
      "Description": "每层急速减少的下一次抽牌计时。"
    }
  ]
};
