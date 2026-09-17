/**
 * 权威处方库（R2.0.5）
 * ----------------------------------------------------------------
 * 共 45 条处方，严格依据：
 *   · 《针灸学》第9版（中国中医药出版社）
 *   · 中国针灸学会《循证针灸临床实践指南》
 *   · GB/T 13734-2008《耳穴名称与定位》
 *   · WHO 针灸适应症清单
 *
 * 证据分级：GRADE 系统
 *   A = 教材明确处方 + RCT 支持
 *   B = 教材明确处方，临床证据有限
 *   C = 教材处方来自临床经验总结
 *
 * 推荐强度：
 *   1 = 强推荐  2 = 弱推荐
 */
module.exports = {
  type: 'prescription',
  version: '2.0.4',
  entities: [

    // ========== 1. 气虚证 ==========
    {
      id: 'P:气虚证-艾灸', name: '气虚证·艾灸方', icon: '📋',
      searchText: '气虚 艾灸 补气 足三里 气海 关元',
      fields: {
        syndromeName: '气虚证', therapyName: '艾灸', priority: 'primary', category: '补气',
        mainPoints: ['A:足三里', 'A:气海', 'A:关元'],
        adjunctPoints: ['A:脾俞', 'A:胃俞'],
        mainAreas: [],
        operation: '补法。艾条温和灸，每穴 5-7 壮或 10-15 分钟，以皮肤潮红为度',
        course: '每日 1 次，7 次为一疗程，疗程间休息 2 天',
        modifications: ['咳嗽加肺俞', '腹胀加中脘', '便溏加天枢'],
        source: '《针灸学》第9版 · 针灸治疗总论 · 补益类处方',
        evidenceLevel: 'A',
        recommendationStrength: '1',
        contraindications: '孕妇腰骶腹部禁灸；高热、出血倾向、恶性肿瘤局部禁灸',
        discussionPoints: ['足三里、气海、关元为补气三方', '虚证宜灸不宜针，忌攻伐']
      },
      relations: [{ type: 'treats', target: 'T:气虚证' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:气虚证-耳穴', name: '气虚证·耳穴方', icon: '📋',
      searchText: '气虚 耳穴 补气 脾 肺 肾',
      fields: {
        syndromeName: '气虚证', therapyName: '耳穴', priority: 'alternative', category: '补气',
        mainPoints: ['E:脾', 'E:肺', 'E:肾'],
        adjunctPoints: ['E:神门', 'E:交感'],
        mainAreas: [],
        operation: '王不留行籽贴压，每日按压 3 次，每次 1-2 分钟',
        course: '隔日 1 次，10 次为一疗程',
        modifications: ['失眠加心', '纳呆加胃'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '耳周皮肤破损禁贴压；孕妇慎用内分泌穴',
        discussionPoints: ['无创、老年/儿童适用', '耳穴补气以脾、肺、肾三穴为主']
      },
      relations: [{ type: 'treats', target: 'T:气虚证' }, { type: 'uses', target: 'M:耳穴' }]
    },

    // ========== 2. 血虚证 ==========
    {
      id: 'P:血虚证-艾灸', name: '血虚证·艾灸方', icon: '📋',
      searchText: '血虚 艾灸 补血 血海 膈俞 足三里',
      fields: {
        syndromeName: '血虚证', therapyName: '艾灸', priority: 'primary', category: '补血',
        mainPoints: ['A:血海', 'A:膈俞', 'A:足三里'],
        adjunctPoints: ['A:三阴交', 'A:脾俞'],
        mainAreas: [],
        operation: '补法。艾条温和灸，每穴 5-7 壮',
        course: '每日 1 次，10 次为一疗程，疗程间休息 2-3 天',
        modifications: ['失眠加神门', '头晕加百会'],
        source: '《针灸学》第9版 · 血证篇',
        evidenceLevel: 'A',
        recommendationStrength: '1',
        contraindications: '孕妇腰骶腹部禁灸',
        discussionPoints: ['血海、膈俞为补血要穴', '配足三里健脾生血，取"气血同源"之意']
      },
      relations: [{ type: 'treats', target: 'T:血虚证' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:血虚证-耳穴', name: '血虚证·耳穴方', icon: '📋',
      searchText: '血虚 耳穴 补血 脾 肝 心',
      fields: {
        syndromeName: '血虚证', therapyName: '耳穴', priority: 'alternative', category: '补血',
        mainPoints: ['E:脾', 'E:肝', 'E:心'],
        adjunctPoints: ['E:神门', 'E:交感'],
        mainAreas: [],
        operation: '王不留行籽贴压，每日按压 3 次',
        course: '隔日 1 次，10 次为一疗程',
        modifications: [],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '耳周皮肤破损禁贴压',
        discussionPoints: ['耳穴补血以脾（生血）、肝（藏血）、心（主血）为主']
      },
      relations: [{ type: 'treats', target: 'T:血虚证' }, { type: 'uses', target: 'M:耳穴' }]
    },

    // ========== 3. 气血两虚证 ==========
    {
      id: 'P:气血两虚证-艾灸', name: '气血两虚证·艾灸方', icon: '📋',
      searchText: '气血两虚 艾灸 足三里 血海 关元',
      fields: {
        syndromeName: '气血两虚证', therapyName: '艾灸', priority: 'primary', category: '补气养血',
        mainPoints: ['A:足三里', 'A:血海', 'A:关元'],
        adjunctPoints: ['A:气海', 'A:脾俞'],
        mainAreas: [],
        operation: '补法。艾条温和灸，每穴 5-7 壮',
        course: '每日 1 次，10 次为一疗程，连续 2-3 疗程',
        modifications: [],
        source: '《针灸学》第9版 · 虚劳篇',
        evidenceLevel: 'B',
        recommendationStrength: '1',
        contraindications: '孕妇腰骶腹部禁灸',
        discussionPoints: ['补气与补血并重', '虚劳篇以足三里、关元为补益基础方']
      },
      relations: [{ type: 'treats', target: 'T:气血两虚证' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:气血两虚证-耳穴', name: '气血两虚证·耳穴方', icon: '📋',
      searchText: '气血两虚 耳穴 脾 心 肝',
      fields: {
        syndromeName: '气血两虚证', therapyName: '耳穴', priority: 'alternative', category: '补气养血',
        mainPoints: ['E:脾', 'E:心', 'E:肝'],
        adjunctPoints: ['E:肾', 'E:交感'],
        mainAreas: [],
        operation: '王不留行籽贴压',
        course: '隔日 1 次，10 次为一疗程',
        modifications: [],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '耳周皮肤破损禁贴压',
        discussionPoints: ['与艾灸交替使用，可减少灸法频次']
      },
      relations: [{ type: 'treats', target: 'T:气血两虚证' }, { type: 'uses', target: 'M:耳穴' }]
    },

    // ========== 4. 气滞证 ==========
    {
      id: 'P:气滞证-耳穴', name: '气滞证·耳穴方', icon: '📋',
      searchText: '气滞 耳穴 理气 肝 胆 胸',
      fields: {
        syndromeName: '气滞证', therapyName: '耳穴', priority: 'primary', category: '理气',
        mainPoints: ['E:肝', 'E:胆', 'E:胸'],
        adjunctPoints: ['E:神门', 'E:交感'],
        mainAreas: [],
        operation: '王不留行籽贴压，力度适中',
        course: '隔日 1 次，7 次为一疗程',
        modifications: ['腹胀加胃', '失眠加心'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '耳周皮肤破损禁贴压',
        discussionPoints: ['气滞多与情志相关，宜疏肝理气']
      },
      relations: [{ type: 'treats', target: 'T:气滞证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:气滞证-刮痧', name: '气滞证·刮痧方', icon: '📋',
      searchText: '气滞 刮痧 理气 胁肋 肝经',
      fields: {
        syndromeName: '气滞证', therapyName: '刮痧', priority: 'alternative', category: '理气',
        mainPoints: [],
        adjunctPoints: [],
        mainAreas: ['胁肋部、肝经循行部位'],
        operation: '泻法为主。沿肝经、胆经刮拭，力度适中',
        course: '隔日 1 次，5 次为一疗程',
        modifications: [],
        source: '中国针灸学会《循证针灸临床实践指南 · 刮痧》',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '孕妇禁用；出血倾向、抗凝禁用',
        discussionPoints: ['气滞刮痧，行气解郁']
      },
      relations: [{ type: 'treats', target: 'T:气滞证' }, { type: 'uses', target: 'M:刮痧' }]
    },

    // ========== 5. 血瘀证 ==========
    {
      id: 'P:血瘀证-耳穴', name: '血瘀证·耳穴方', icon: '📋',
      searchText: '血瘀 耳穴 活血 肝 心 交感',
      fields: {
        syndromeName: '血瘀证', therapyName: '耳穴', priority: 'primary', category: '活血化瘀',
        mainPoints: ['E:肝', 'E:心', 'E:交感'],
        adjunctPoints: ['E:神门', 'E:皮质下'],
        mainAreas: [],
        operation: '王不留行籽贴压，力度适中',
        course: '隔日 1 次，10 次为一疗程',
        modifications: ['痛经加内生殖器'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '出血倾向禁耳尖放血；孕妇慎用',
        discussionPoints: ['气行则血行，理气活血并重']
      },
      relations: [{ type: 'treats', target: 'T:血瘀证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:血瘀证-拔罐', name: '血瘀证·拔罐方', icon: '📋',
      searchText: '血瘀 拔罐 活血 膈俞 血海',
      fields: {
        syndromeName: '血瘀证', therapyName: '拔罐', priority: 'alternative', category: '活血化瘀',
        mainPoints: [],
        adjunctPoints: [],
        mainAreas: ['背部膀胱经（膈俞、肝俞区域）'],
        operation: '留罐 10-15 分钟，可配合刺络拔罐',
        course: '每周 2-3 次，5 次为一疗程',
        modifications: [],
        source: '中国针灸学会《循证针灸临床实践指南 · 拔罐》',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '孕妇、出血倾向、抗凝禁用',
        discussionPoints: ['刺络拔罐对血瘀实证效果更佳']
      },
      relations: [{ type: 'treats', target: 'T:血瘀证' }, { type: 'uses', target: 'M:拔罐' }]
    },

    // ========== 6. 水湿内停证 ==========
    {
      id: 'P:水湿内停证-艾灸', name: '水湿内停证·艾灸方', icon: '📋',
      searchText: '水湿 水肿 艾灸 阴陵泉 足三里 水分',
      fields: {
        syndromeName: '水湿内停证', therapyName: '艾灸', priority: 'primary', category: '利水渗湿',
        mainPoints: ['A:阴陵泉', 'A:足三里', 'A:水分'],
        adjunctPoints: ['A:三阴交', 'A:脾俞'],
        mainAreas: [],
        operation: '平补平泻。艾条温和灸，每穴 5 壮',
        course: '每日 1 次，10 次为一疗程',
        modifications: ['腰酸加肾俞'],
        source: '《针灸学》第9版 · 水肿篇',
        evidenceLevel: 'B',
        recommendationStrength: '1',
        contraindications: '孕妇腰骶腹部禁灸',
        discussionPoints: ['阴陵泉为利水第一要穴', '水分穴为治水要穴']
      },
      relations: [{ type: 'treats', target: 'T:水湿内停证' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:水湿内停证-足浴', name: '水湿内停证·足浴方', icon: '📋',
      searchText: '水湿 水肿 足浴 利水',
      fields: {
        syndromeName: '水湿内停证', therapyName: '足浴', priority: 'alternative', category: '利水渗湿',
        mainPoints: [],
        adjunctPoints: [],
        mainAreas: ['足部（茯苓、猪苓、泽泻煎汤）'],
        operation: '水温 40-42℃，20-30 分钟',
        course: '每日 1 次，10 次为一疗程',
        modifications: [],
        source: '《中医外治学》',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '糖尿病足禁用；心衰患者慎用',
        discussionPoints: ['足浴利水，配合艾灸效果更佳']
      },
      relations: [{ type: 'treats', target: 'T:水湿内停证' }, { type: 'uses', target: 'M:足浴' }]
    },

    // ========== 7. 心脾两虚证 ==========
    {
      id: 'P:心脾两虚证-艾灸', name: '心脾两虚证·艾灸方', icon: '📋',
      searchText: '心脾两虚 艾灸 心俞 脾俞 足三里',
      fields: {
        syndromeName: '心脾两虚证', therapyName: '艾灸', priority: 'primary', category: '补益心脾',
        mainPoints: ['A:心俞', 'A:脾俞', 'A:足三里'],
        adjunctPoints: ['A:神门', 'A:三阴交'],
        mainAreas: [],
        operation: '补法。艾条温和灸，每穴 5 壮',
        course: '每日 1 次，10 次为一疗程',
        modifications: ['失眠加安眠'],
        source: '《针灸学》第9版 · 不寐篇',
        evidenceLevel: 'B',
        recommendationStrength: '1',
        contraindications: '孕妇腰骶腹部禁灸',
        discussionPoints: ['心俞、脾俞为心脾两虚对穴', '补益心脾，标本兼顾']
      },
      relations: [{ type: 'treats', target: 'T:心脾两虚证' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:心脾两虚证-耳穴', name: '心脾两虚证·耳穴方', icon: '📋',
      searchText: '心脾两虚 耳穴 心 脾 神门',
      fields: {
        syndromeName: '心脾两虚证', therapyName: '耳穴', priority: 'alternative', category: '补益心脾',
        mainPoints: ['E:心', 'E:脾', 'E:神门'],
        adjunctPoints: ['E:皮质下', 'E:交感'],
        mainAreas: [],
        operation: '王不留行籽贴压，每日按压 3 次',
        course: '隔日 1 次，10 次为一疗程',
        modifications: ['失眠加垂前'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '耳周皮肤破损禁贴压',
        discussionPoints: ['E:神门、E:皮质下为国标安神要穴']
      },
      relations: [{ type: 'treats', target: 'T:心脾两虚证' }, { type: 'uses', target: 'M:耳穴' }]
    },

    // ========== 8-10. 心气虚 / 心血虚 / 心火亢盛 ==========
    {
      id: 'P:心气虚证-艾灸', name: '心气虚证·艾灸方', icon: '📋',
      searchText: '心气虚 艾灸 养心 内关 心俞 足三里',
      fields: {
        syndromeName: '心气虚证', therapyName: '艾灸', priority: 'primary', category: '益气养心',
        mainPoints: ['A:内关', 'A:心俞', 'A:足三里'],
        adjunctPoints: ['A:膻中', 'A:气海'],
        mainAreas: [],
        operation: '补法。艾条温和灸，每穴 5 壮',
        course: '每日或隔日 1 次，10 次为一疗程',
        modifications: ['失眠加神门', '胸闷加膻中'],
        source: '《针灸学》第9版 · 心悸篇',
        evidenceLevel: 'B',
        recommendationStrength: '1',
        contraindications: '心脏病患者艾灸需在监护下进行',
        discussionPoints: ['心气虚者灸内关、心俞、足三里，忌峻补']
      },
      relations: [{ type: 'treats', target: 'T:心气虚证' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:心血虚证-耳穴', name: '心血虚证·耳穴方', icon: '📋',
      searchText: '心血虚 耳穴 养心 心 神门 交感',
      fields: {
        syndromeName: '心血虚证', therapyName: '耳穴', priority: 'primary', category: '养血安神',
        mainPoints: ['E:心', 'E:神门', 'E:交感'],
        adjunctPoints: ['E:皮质下', 'E:脾'],
        mainAreas: [],
        operation: '王不留行籽贴压，力度宜轻',
        course: '隔日 1 次，10 次为一疗程',
        modifications: ['失眠加垂前'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '耳周皮肤破损禁贴压',
        discussionPoints: ['心血虚宜补血养心，耳穴相对安全']
      },
      relations: [{ type: 'treats', target: 'T:心血虚证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:心血虚证-艾灸', name: '心血虚证·艾灸方', icon: '📋',
      searchText: '心血虚 艾灸 心俞 膈俞 血海',
      fields: {
        syndromeName: '心血虚证', therapyName: '艾灸', priority: 'alternative', category: '养血安神',
        mainPoints: ['A:心俞', 'A:膈俞', 'A:血海'],
        adjunctPoints: ['A:神门', 'A:足三里'],
        mainAreas: [],
        operation: '补法。艾条温和灸，每穴 5 壮',
        course: '每日 1 次，10 次为一疗程',
        modifications: ['失眠加安眠'],
        source: '《针灸学》第9版 · 心悸篇',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '孕妇腰骶腹部禁灸',
        discussionPoints: ['膈俞、血海为养血要穴']
      },
      relations: [{ type: 'treats', target: 'T:心血虚证' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:心火亢盛证-耳穴', name: '心火亢盛证·耳穴方', icon: '📋',
      searchText: '心火 耳穴 清心 心 神门 小肠',
      fields: {
        syndromeName: '心火亢盛证', therapyName: '耳穴', priority: 'primary', category: '清心泻火',
        mainPoints: ['E:心', 'E:神门', 'E:小肠'],
        adjunctPoints: ['E:耳尖', 'E:交感'],
        mainAreas: [],
        operation: '耳尖放血 3-5 滴；其余穴贴压，每日按压 3 次',
        course: '隔日 1 次，5 次为一疗程；耳尖放血每周 1-2 次',
        modifications: ['失眠加垂前', '口疮加口'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '出血倾向、抗凝禁耳尖放血',
        discussionPoints: ['心火亢盛禁灸，耳尖放血为要法', '出血倾向、抗凝禁放血']
      },
      relations: [{ type: 'treats', target: 'T:心火亢盛证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:心火亢盛证-刮痧', name: '心火亢盛证·刮痧方', icon: '📋',
      searchText: '心火 刮痧 清心 心经 心包经',
      fields: {
        syndromeName: '心火亢盛证', therapyName: '刮痧', priority: 'alternative', category: '清心泻火',
        mainPoints: [],
        adjunctPoints: [],
        mainAreas: ['心经、心包经循行部位（上肢内侧）'],
        operation: '泻法为主，以出痧为度',
        course: '每周 2 次，3-5 次为一疗程',
        modifications: [],
        source: '中国针灸学会《循证针灸临床实践指南 · 刮痧》',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '出血倾向、抗凝禁用',
        discussionPoints: ['配合耳尖放血，加强清热']
      },
      relations: [{ type: 'treats', target: 'T:心火亢盛证' }, { type: 'uses', target: 'M:刮痧' }]
    },

    // ========== 11-13. 心血瘀阻 / 心肾不交 ==========
    {
      id: 'P:心血瘀阻证-耳穴', name: '心血瘀阻证·耳穴方', icon: '📋',
      searchText: '心血瘀阻 胸痹 耳穴 心 胸 交感',
      fields: {
        syndromeName: '心血瘀阻证', therapyName: '耳穴', priority: 'primary', category: '活血通脉',
        mainPoints: ['E:心', 'E:胸', 'E:交感'],
        adjunctPoints: ['E:神门', 'E:皮质下'],
        mainAreas: [],
        operation: '王不留行籽贴压，力度宜轻',
        course: '隔日 1 次，10 次为一疗程',
        modifications: ['心悸加神门'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '心脏病患者按压力度宜轻；急性发作期禁用',
        discussionPoints: ['胸痹缓解期用，急性期须急诊处理']
      },
      relations: [{ type: 'treats', target: 'T:心血瘀阻证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:心肾不交证-耳穴', name: '心肾不交证·耳穴方', icon: '📋',
      searchText: '心肾不交 耳穴 交通心肾 心 肾 神门',
      fields: {
        syndromeName: '心肾不交证', therapyName: '耳穴', priority: 'primary', category: '交通心肾',
        mainPoints: ['E:心', 'E:肾', 'E:神门'],
        adjunctPoints: ['E:交感', 'E:皮质下'],
        mainAreas: [],
        operation: '王不留行籽贴压，力度宜轻',
        course: '隔日 1 次，10 次为一疗程',
        modifications: ['失眠加垂前'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '耳周皮肤破损禁贴压',
        discussionPoints: ['交通心肾，水火既济']
      },
      relations: [{ type: 'treats', target: 'T:心肾不交证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:心肾不交证-足浴', name: '心肾不交证·足浴方', icon: '📋',
      searchText: '心肾不交 足浴 引火归元 涌泉',
      fields: {
        syndromeName: '心肾不交证', therapyName: '足浴', priority: 'alternative', category: '交通心肾',
        mainPoints: [],
        adjunctPoints: [],
        mainAreas: ['足部（吴茱萸、肉桂、黄连煎汤）'],
        operation: '水温 38-42℃，20-30 分钟，睡前用',
        course: '每日 1 次，10 次为一疗程',
        modifications: [],
        source: '《中医外治学》',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '糖尿病足禁用',
        discussionPoints: ['引火归元，改善失眠多梦']
      },
      relations: [{ type: 'treats', target: 'T:心肾不交证' }, { type: 'uses', target: 'M:足浴' }]
    },

    // ========== 14-16. 肺气虚 / 肺阴虚 / 风寒束肺 ==========
    {
      id: 'P:肺气虚证-艾灸', name: '肺气虚证·艾灸方', icon: '📋',
      searchText: '肺气虚 艾灸 补肺 肺俞 太渊 足三里',
      fields: {
        syndromeName: '肺气虚证', therapyName: '艾灸', priority: 'primary', category: '补肺气',
        mainPoints: ['A:肺俞', 'A:太渊', 'A:足三里'],
        adjunctPoints: ['A:气海', 'A:脾俞'],
        mainAreas: [],
        operation: '补法。艾条温和灸，每穴 5-7 壮',
        course: '每日或隔日 1 次，10 次为一疗程',
        modifications: ['咳嗽加天突', '自汗加复溜'],
        source: '《针灸学》第9版 · 咳嗽篇',
        evidenceLevel: 'B',
        recommendationStrength: '1',
        contraindications: '皮肤破损处禁灸；高热禁灸',
        discussionPoints: ['肺气虚者，补肺与补气并重', '太渊为肺经原穴，补肺要穴']
      },
      relations: [{ type: 'treats', target: 'T:肺气虚证' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:肺气虚证-中药贴敷', name: '肺气虚证·中药贴敷方', icon: '📋',
      searchText: '肺气虚 贴敷 三伏贴 肺俞 膏肓',
      fields: {
        syndromeName: '肺气虚证', therapyName: '中药贴敷', priority: 'alternative', category: '补肺气',
        mainPoints: ['A:肺俞', 'A:膏肓', 'A:大椎'],
        adjunctPoints: ['A:膻中', 'A:脾俞'],
        mainAreas: [],
        operation: '白芥子、细辛、甘遂等，姜汁调敷，4-6 小时',
        course: '三伏天/三九天各贴 3 次，每年 6 次',
        modifications: [],
        source: '中国针灸学会《循证针灸临床实践指南 · 穴位贴敷》',
        evidenceLevel: 'A',
        recommendationStrength: '1',
        contraindications: '贴敷部位皮肤破损、过敏禁用',
        discussionPoints: ['冬病夏治，三伏贴效果尤佳']
      },
      relations: [{ type: 'treats', target: 'T:肺气虚证' }, { type: 'uses', target: 'M:中药贴敷' }]
    },
    {
      id: 'P:肺阴虚证-耳穴', name: '肺阴虚证·耳穴方', icon: '📋',
      searchText: '肺阴虚 耳穴 滋阴 肺 肾 内分泌',
      fields: {
        syndromeName: '肺阴虚证', therapyName: '耳穴', priority: 'primary', category: '滋阴润肺',
        mainPoints: ['E:肺', 'E:肾', 'E:内分泌'],
        adjunctPoints: ['E:神门', 'E:交感'],
        mainAreas: [],
        operation: '王不留行籽贴压，力度宜轻',
        course: '隔日 1 次，10 次为一疗程',
        modifications: ['失眠加心', '盗汗加交感'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '孕妇慎用内分泌穴',
        discussionPoints: ['肺阴虚忌灸，耳穴、贴敷滋阴']
      },
      relations: [{ type: 'treats', target: 'T:肺阴虚证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:肺阴虚证-中药贴敷', name: '肺阴虚证·中药贴敷方', icon: '📋',
      searchText: '肺阴虚 贴敷 滋阴 肺俞 膏肓',
      fields: {
        syndromeName: '肺阴虚证', therapyName: '中药贴敷', priority: 'alternative', category: '滋阴润肺',
        mainPoints: ['A:肺俞', 'A:膏肓', 'A:太溪'],
        adjunctPoints: ['A:膻中', 'A:太渊'],
        mainAreas: [],
        operation: '百合、麦冬、五味子等，醋调敷穴',
        course: '每日 1 次，7 次为一疗程',
        modifications: [],
        source: '《中医外治学》',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '贴敷部位皮肤破损禁用',
        discussionPoints: ['滋阴润肺，配合食疗更佳']
      },
      relations: [{ type: 'treats', target: 'T:肺阴虚证' }, { type: 'uses', target: 'M:中药贴敷' }]
    },
    {
      id: 'P:风寒束肺证-艾灸', name: '风寒束肺证·艾灸方', icon: '📋',
      searchText: '风寒 感冒 艾灸 大椎 风门 肺俞',
      fields: {
        syndromeName: '风寒束肺证', therapyName: '艾灸', priority: 'primary', category: '疏风散寒',
        mainPoints: ['A:大椎', 'A:风门', 'A:肺俞'],
        adjunctPoints: ['A:列缺', 'A:合谷'],
        mainAreas: [],
        operation: '雀啄灸或温和灸，每穴 3-5 壮，以皮肤潮红为度',
        course: '每日 1 次，3 次为一疗程，表解即止',
        modifications: ['头痛加风池', '鼻塞加迎香'],
        source: '《针灸学》第9版 · 感冒篇',
        evidenceLevel: 'A',
        recommendationStrength: '1',
        contraindications: '高热者慎灸',
        discussionPoints: ['WHO 将感冒列为针灸有效适应症', '风寒证宜灸不宜针，以温散为主']
      },
      relations: [{ type: 'treats', target: 'T:风寒束肺证' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:风寒束肺证-中药贴敷', name: '风寒束肺证·中药贴敷方', icon: '📋',
      searchText: '风寒 贴敷 散寒 大椎 肺俞',
      fields: {
        syndromeName: '风寒束肺证', therapyName: '中药贴敷', priority: 'alternative', category: '疏风散寒',
        mainPoints: ['A:大椎', 'A:肺俞', 'A:天突'],
        adjunctPoints: ['A:膻中', 'A:风门'],
        mainAreas: [],
        operation: '麻黄、桂枝、杏仁等，姜汁调敷，4-6 小时',
        course: '每日 1 次，3 次为一疗程',
        modifications: [],
        source: '《中医外治学》',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '皮肤破损、过敏禁用',
        discussionPoints: ['风寒咳嗽贴敷效果好']
      },
      relations: [{ type: 'treats', target: 'T:风寒束肺证' }, { type: 'uses', target: 'M:中药贴敷' }]
    },

    // ========== 17-19. 风热犯肺 / 痰浊阻肺 ==========
    {
      id: 'P:风热犯肺证-刮痧', name: '风热犯肺证·刮痧方', icon: '📋',
      searchText: '风热 刮痧 清热 大椎 肺俞',
      fields: {
        syndromeName: '风热犯肺证', therapyName: '刮痧', priority: 'primary', category: '疏风清热',
        mainPoints: [],
        adjunctPoints: [],
        mainAreas: ['背部膀胱经（大椎→肺俞）', '前臂肺经（尺泽→太渊）'],
        operation: '泻法为主，自上而下刮拭，以出痧为度',
        course: '每日或隔日 1 次，3-5 次为一疗程；热退即止',
        modifications: ['咽痛加少商点刺放血', '发热加曲池'],
        source: '中国针灸学会《循证针灸临床实践指南 · 刮痧》',
        evidenceLevel: 'B',
        recommendationStrength: '1',
        contraindications: '孕妇腰骶腹部禁刮；出血倾向、抗凝禁用',
        discussionPoints: ['风热证禁温灸，宜刮痧清热']
      },
      relations: [{ type: 'treats', target: 'T:风热犯肺证' }, { type: 'uses', target: 'M:刮痧' }]
    },
    {
      id: 'P:风热犯肺证-耳穴', name: '风热犯肺证·耳穴方', icon: '📋',
      searchText: '风热 耳穴 清热 肺 气管 耳尖',
      fields: {
        syndromeName: '风热犯肺证', therapyName: '耳穴', priority: 'alternative', category: '疏风清热',
        mainPoints: ['E:肺', 'E:气管', 'E:耳尖'],
        adjunctPoints: ['E:神门', 'E:交感'],
        mainAreas: [],
        operation: '耳尖放血 3-5 滴；其余穴贴压',
        course: '隔日 1 次，3-5 次为一疗程',
        modifications: ['咽痛加咽喉'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '出血倾向禁耳尖放血',
        discussionPoints: ['耳尖放血清热效佳']
      },
      relations: [{ type: 'treats', target: 'T:风热犯肺证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:痰浊阻肺证-艾灸', name: '痰浊阻肺证·艾灸方', icon: '📋',
      searchText: '痰浊 艾灸 化痰 丰隆 阴陵泉 中脘',
      fields: {
        syndromeName: '痰浊阻肺证', therapyName: '艾灸', priority: 'primary', category: '化痰祛湿',
        mainPoints: ['A:丰隆', 'A:阴陵泉', 'A:中脘'],
        adjunctPoints: ['A:足三里', 'A:脾俞'],
        mainAreas: [],
        operation: '平补平泻。艾条温和灸，每穴 5-7 壮',
        course: '每日 1 次，10 次为一疗程',
        modifications: ['胸闷加膻中', '纳呆加胃俞'],
        source: '《针灸学》第9版 · 咳嗽篇',
        evidenceLevel: 'B',
        recommendationStrength: '1',
        contraindications: '皮肤破损处禁灸',
        discussionPoints: ['痰湿之源在脾，健脾为治本之策', '丰隆为化痰第一要穴']
      },
      relations: [{ type: 'treats', target: 'T:痰浊阻肺证' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:痰浊阻肺证-拔罐', name: '痰浊阻肺证·拔罐方', icon: '📋',
      searchText: '痰浊 拔罐 化痰 背俞穴',
      fields: {
        syndromeName: '痰浊阻肺证', therapyName: '拔罐', priority: 'alternative', category: '化痰祛湿',
        mainPoints: [],
        adjunctPoints: [],
        mainAreas: ['背部膀胱经（肺俞、脾俞区域）'],
        operation: '留罐 10-15 分钟',
        course: '每周 2-3 次，5 次为一疗程',
        modifications: [],
        source: '中国针灸学会《循证针灸临床实践指南 · 拔罐》',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '皮肤破损、出血倾向禁用',
        discussionPoints: ['背部拔罐助肺脾运化水湿']
      },
      relations: [{ type: 'treats', target: 'T:痰浊阻肺证' }, { type: 'uses', target: 'M:拔罐' }]
    },

    // ========== 20-22. 脾气虚 / 脾阳虚 ==========
    {
      id: 'P:脾气虚证-艾灸', name: '脾气虚证·艾灸方', icon: '📋',
      searchText: '脾气虚 艾灸 健脾 足三里 脾俞 中脘',
      fields: {
        syndromeName: '脾气虚证', therapyName: '艾灸', priority: 'primary', category: '健脾益气',
        mainPoints: ['A:足三里', 'A:脾俞', 'A:中脘'],
        adjunctPoints: ['A:胃俞', 'A:气海'],
        mainAreas: [],
        operation: '补法。艾条温和灸，每穴 5-7 壮',
        course: '每日 1 次，10 次为一疗程',
        modifications: ['便溏加天枢', '腹胀加气海'],
        source: '《针灸学》第9版 · 胃痛篇',
        evidenceLevel: 'A',
        recommendationStrength: '1',
        contraindications: '孕妇腰骶腹部禁灸',
        discussionPoints: ['脾为后天之本，足三里、脾俞、中脘为健脾三方']
      },
      relations: [{ type: 'treats', target: 'T:脾气虚证' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:脾气虚证-耳穴', name: '脾气虚证·耳穴方', icon: '📋',
      searchText: '脾气虚 耳穴 健脾 脾 胃 小肠',
      fields: {
        syndromeName: '脾气虚证', therapyName: '耳穴', priority: 'alternative', category: '健脾益气',
        mainPoints: ['E:脾', 'E:胃', 'E:小肠'],
        adjunctPoints: ['E:交感', 'E:神门'],
        mainAreas: [],
        operation: '王不留行籽贴压',
        course: '隔日 1 次，10 次为一疗程',
        modifications: [],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '耳周皮肤破损禁贴压',
        discussionPoints: ['耳穴健脾，配合饮食调养']
      },
      relations: [{ type: 'treats', target: 'T:脾气虚证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:脾阳虚证-艾灸', name: '脾阳虚证·艾灸方', icon: '📋',
      searchText: '脾阳虚 艾灸 温中 中脘 神阙 足三里',
      fields: {
        syndromeName: '脾阳虚证', therapyName: '艾灸', priority: 'primary', category: '温中健脾',
        mainPoints: ['A:中脘', 'A:神阙', 'A:足三里'],
        adjunctPoints: ['A:脾俞', 'A:关元'],
        mainAreas: [],
        operation: '补法。隔姜灸或温和灸，每穴 5-7 壮',
        course: '每日 1 次，10 次为一疗程',
        modifications: ['便溏加天枢', '腹痛加气海'],
        source: '《针灸学》第9版 · 胃痛篇',
        evidenceLevel: 'A',
        recommendationStrength: '1',
        contraindications: '孕妇腰骶腹部禁灸',
        discussionPoints: ['脾阳虚者灸中脘、神阙、足三里，忌生冷']
      },
      relations: [{ type: 'treats', target: 'T:脾阳虚证' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:脾阳虚证-中药熨烫', name: '脾阳虚证·中药熨烫方', icon: '📋',
      searchText: '脾阳虚 中药熨烫 温中 腹部',
      fields: {
        syndromeName: '脾阳虚证', therapyName: '中药熨烫', priority: 'alternative', category: '温中健脾',
        mainPoints: [],
        adjunctPoints: [],
        mainAreas: ['腹部（干姜、肉桂、艾叶）'],
        operation: '温度 60-70℃，20-30 分钟',
        course: '每日 1 次，7 次为一疗程',
        modifications: [],
        source: '《中医外治学》',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '孕妇腹部禁；皮肤破损禁',
        discussionPoints: ['熨烫温中，效果显著']
      },
      relations: [{ type: 'treats', target: 'T:脾阳虚证' }, { type: 'uses', target: 'M:中药熨烫' }]
    },

    // ========== 23-25. 寒湿困脾 / 脾胃湿热 / 胃火炽盛 ==========
    {
      id: 'P:脾胃湿热证-耳穴', name: '脾胃湿热证·耳穴方', icon: '📋',
      searchText: '脾胃湿热 耳穴 清热 脾 胃 三焦',
      fields: {
        syndromeName: '脾胃湿热证', therapyName: '耳穴', priority: 'primary', category: '清热化湿',
        mainPoints: ['E:脾', 'E:胃', 'E:三焦'],
        adjunctPoints: ['E:耳尖', 'E:交感'],
        mainAreas: [],
        operation: '耳尖放血 3-5 滴；其余穴贴压',
        course: '隔日 1 次，7 次为一疗程',
        modifications: [],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '耳周皮肤破损禁贴压',
        discussionPoints: ['耳尖放血清热，三焦利湿']
      },
      relations: [{ type: 'treats', target: 'T:脾胃湿热证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:胃火炽盛证-耳穴', name: '胃火炽盛证·耳穴方', icon: '📋',
      searchText: '胃火 牙痛 耳穴 胃 牙 屏尖',
      fields: {
        syndromeName: '胃火炽盛证', therapyName: '耳穴', priority: 'primary', category: '清胃泻火',
        mainPoints: ['E:胃', 'E:牙', 'E:屏尖'],
        adjunctPoints: ['E:耳尖', 'E:神门'],
        mainAreas: [],
        operation: '耳尖放血 3-5 滴；其余穴贴压，每日按压 3 次',
        course: '隔日 1 次，5 次为一疗程',
        modifications: ['口臭加口', '便秘加大肠'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '出血倾向禁耳尖放血',
        discussionPoints: ['胃火者耳尖放血清热止痛', 'WHO 将牙痛列为针灸有效适应症']
      },
      relations: [{ type: 'treats', target: 'T:胃火炽盛证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:胃阴虚证-耳穴', name: '胃阴虚证·耳穴方', icon: '📋',
      searchText: '胃阴虚 耳穴 滋阴 胃 脾 内分泌',
      fields: {
        syndromeName: '胃阴虚证', therapyName: '耳穴', priority: 'primary', category: '滋阴养胃',
        mainPoints: ['E:胃', 'E:脾', 'E:内分泌'],
        adjunctPoints: ['E:神门', 'E:交感'],
        mainAreas: [],
        operation: '王不留行籽贴压，力度宜轻',
        course: '隔日 1 次，10 次为一疗程',
        modifications: [],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '孕妇慎用内分泌穴',
        discussionPoints: ['胃阴虚忌灸，宜耳穴养阴']
      },
      relations: [{ type: 'treats', target: 'T:胃阴虚证' }, { type: 'uses', target: 'M:耳穴' }]
    },

    // ========== 26-28. 肝气郁结 / 肝火上炎 / 肝阳上亢 ==========
    {
      id: 'P:肝气郁结证-耳穴', name: '肝气郁结证·耳穴方', icon: '📋',
      searchText: '肝气郁结 耳穴 疏肝 肝 胆 交感',
      fields: {
        syndromeName: '肝气郁结证', therapyName: '耳穴', priority: 'primary', category: '疏肝解郁',
        mainPoints: ['E:肝', 'E:胆', 'E:交感'],
        adjunctPoints: ['E:神门', 'E:心'],
        mainAreas: [],
        operation: '王不留行籽贴压，力度适中',
        course: '隔日 1 次，10 次为一疗程',
        modifications: ['失眠加垂前', '月经不调加内生殖器'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '耳周皮肤破损禁贴压',
        discussionPoints: ['肝郁为百病之源，疏肝为要']
      },
      relations: [{ type: 'treats', target: 'T:肝气郁结证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:肝气郁结证-刮痧', name: '肝气郁结证·刮痧方', icon: '📋',
      searchText: '肝气郁结 刮痧 疏肝 胁肋',
      fields: {
        syndromeName: '肝气郁结证', therapyName: '刮痧', priority: 'alternative', category: '疏肝解郁',
        mainPoints: [],
        adjunctPoints: [],
        mainAreas: ['胁肋部、肝经循行部位'],
        operation: '泻法为主',
        course: '每周 2 次，5 次为一疗程',
        modifications: [],
        source: '中国针灸学会《循证针灸临床实践指南 · 刮痧》',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '孕妇、出血倾向禁用',
        discussionPoints: ['刮痧行气，解郁效果显著']
      },
      relations: [{ type: 'treats', target: 'T:肝气郁结证' }, { type: 'uses', target: 'M:刮痧' }]
    },
    {
      id: 'P:肝火上炎证-耳穴', name: '肝火上炎证·耳穴方', icon: '📋',
      searchText: '肝火 耳穴 清肝 肝 胆 耳尖',
      fields: {
        syndromeName: '肝火上炎证', therapyName: '耳穴', priority: 'primary', category: '清肝泻火',
        mainPoints: ['E:肝', 'E:胆', 'E:耳尖'],
        adjunctPoints: ['E:神门', 'E:交感'],
        mainAreas: [],
        operation: '耳尖放血 3-5 滴；其余穴贴压，每日按压 3 次',
        course: '隔日 1 次，5 次为一疗程',
        modifications: ['头痛加颞、枕', '目赤加眼'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '出血倾向、抗凝禁耳尖放血',
        discussionPoints: ['肝火上炎属实证热证，禁温灸', '耳尖放血为要法']
      },
      relations: [{ type: 'treats', target: 'T:肝火上炎证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:肝火上炎证-刮痧', name: '肝火上炎证·刮痧方', icon: '📋',
      searchText: '肝火 刮痧 清肝 肝经 胆经',
      fields: {
        syndromeName: '肝火上炎证', therapyName: '刮痧', priority: 'alternative', category: '清肝泻火',
        mainPoints: [],
        adjunctPoints: [],
        mainAreas: ['肝经、胆经循行部位', '头面部（太阳、风池）'],
        operation: '泻法为主，以出痧为度',
        course: '每周 2 次，3-5 次为一疗程',
        modifications: [],
        source: '中国针灸学会《循证针灸临床实践指南 · 刮痧》',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '孕妇、出血倾向禁用',
        discussionPoints: ['刮痧清热，清肝泻火']
      },
      relations: [{ type: 'treats', target: 'T:肝火上炎证' }, { type: 'uses', target: 'M:刮痧' }]
    },
    {
      id: 'P:肝阳上亢证-耳穴', name: '肝阳上亢证·耳穴方', icon: '📋',
      searchText: '高血压 肝阳上亢 耳穴 耳背沟 肝 神门',
      fields: {
        syndromeName: '肝阳上亢证', therapyName: '耳穴', priority: 'primary', category: '平肝潜阳',
        mainPoints: ['E:耳背沟', 'E:肝', 'E:神门'],
        adjunctPoints: ['E:交感', 'E:枕'],
        mainAreas: [],
        operation: '王不留行籽贴压，力度适中，每日按压 3 次',
        course: '隔日 1 次，10 次为一疗程',
        modifications: ['头痛加颞', '失眠加垂前'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '耳周皮肤破损禁贴压',
        discussionPoints: ['E:耳背沟又称"降压沟"，为降压要穴', '不可替代降压药物，仅作辅助']
      },
      relations: [{ type: 'treats', target: 'T:肝阳上亢证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:肝阳上亢证-足浴', name: '肝阳上亢证·足浴方', icon: '📋',
      searchText: '高血压 足浴 平肝 涌泉 吴茱萸',
      fields: {
        syndromeName: '肝阳上亢证', therapyName: '足浴', priority: 'alternative', category: '平肝潜阳',
        mainPoints: [],
        adjunctPoints: [],
        mainAreas: ['足部（吴茱萸、牛膝、钩藤煎汤）'],
        operation: '水温 38-40℃，20-30 分钟',
        course: '每日 1 次，10 次为一疗程',
        modifications: [],
        source: '《中医外治学》',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '糖尿病足禁用',
        discussionPoints: ['引火归元，辅助降压', '不可替代降压药']
      },
      relations: [{ type: 'treats', target: 'T:肝阳上亢证' }, { type: 'uses', target: 'M:足浴' }]
    },

    // ========== 29-30. 肝血虚 / 肝胆湿热 ==========
    {
      id: 'P:肝血虚证-艾灸', name: '肝血虚证·艾灸方', icon: '📋',
      searchText: '肝血虚 艾灸 养肝 肝俞 血海 足三里',
      fields: {
        syndromeName: '肝血虚证', therapyName: '艾灸', priority: 'primary', category: '养肝血',
        mainPoints: ['A:肝俞', 'A:血海', 'A:足三里'],
        adjunctPoints: ['A:膈俞', 'A:三阴交'],
        mainAreas: [],
        operation: '补法。艾条温和灸，每穴 5 壮',
        course: '每日 1 次，10 次为一疗程',
        modifications: ['失眠加神门', '头晕加百会'],
        source: '《针灸学》第9版 · 眩晕篇',
        evidenceLevel: 'B',
        recommendationStrength: '1',
        contraindications: '孕妇腰骶腹部禁灸',
        discussionPoints: ['肝血虚者，宜养血柔肝']
      },
      relations: [{ type: 'treats', target: 'T:肝血虚证' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:肝血虚证-耳穴', name: '肝血虚证·耳穴方', icon: '📋',
      searchText: '肝血虚 耳穴 养肝血 肝 脾 心',
      fields: {
        syndromeName: '肝血虚证', therapyName: '耳穴', priority: 'alternative', category: '养肝血',
        mainPoints: ['E:肝', 'E:脾', 'E:心'],
        adjunctPoints: ['E:神门', 'E:交感'],
        mainAreas: [],
        operation: '王不留行籽贴压',
        course: '隔日 1 次，10 次为一疗程',
        modifications: [],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '耳周皮肤破损禁贴压',
        discussionPoints: ['耳穴养肝，配合艾灸更佳']
      },
      relations: [{ type: 'treats', target: 'T:肝血虚证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:肝胆湿热证-耳穴', name: '肝胆湿热证·耳穴方', icon: '📋',
      searchText: '肝胆湿热 耳穴 清肝 肝 胆 耳尖',
      fields: {
        syndromeName: '肝胆湿热证', therapyName: '耳穴', priority: 'primary', category: '清利肝胆',
        mainPoints: ['E:肝', 'E:胆', 'E:耳尖'],
        adjunctPoints: ['E:神门', 'E:交感'],
        mainAreas: [],
        operation: '耳尖放血 3-5 滴；其余穴贴压',
        course: '隔日 1 次，5 次为一疗程',
        modifications: ['胁痛加胸'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '耳周皮肤破损禁贴压',
        discussionPoints: ['肝胆湿热证禁温灸，宜耳尖放血清利']
      },
      relations: [{ type: 'treats', target: 'T:肝胆湿热证' }, { type: 'uses', target: 'M:耳穴' }]
    },

    // ========== 31-34. 肾阳虚 / 肾阴虚 / 肾气不固 / 肾虚水泛 ==========
    {
      id: 'P:肾阳虚证-艾灸', name: '肾阳虚证·艾灸方', icon: '📋',
      searchText: '肾阳虚 艾灸 温肾 关元 命门 肾俞',
      fields: {
        syndromeName: '肾阳虚证', therapyName: '艾灸', priority: 'primary', category: '温肾阳',
        mainPoints: ['A:关元', 'A:命门', 'A:肾俞'],
        adjunctPoints: ['A:神阙', 'A:足三里'],
        mainAreas: [],
        operation: '补法。隔姜灸或温和灸，每穴 5-7 壮',
        course: '每日 1 次，10 次为一疗程，连续 2-3 疗程',
        modifications: ['腰痛加腰阳关', '遗尿加中极'],
        source: '《针灸学》第9版 · 腰痛篇',
        evidenceLevel: 'A',
        recommendationStrength: '1',
        contraindications: '孕妇腰骶腹部禁灸',
        discussionPoints: ['肾阳虚者灸关元、命门、肾俞，以温阳为要']
      },
      relations: [{ type: 'treats', target: 'T:肾阳虚证' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:肾阳虚证-足浴', name: '肾阳虚证·足浴方', icon: '📋',
      searchText: '肾阳虚 足浴 温肾 艾叶 肉桂',
      fields: {
        syndromeName: '肾阳虚证', therapyName: '足浴', priority: 'alternative', category: '温肾阳',
        mainPoints: [],
        adjunctPoints: [],
        mainAreas: ['足部（艾叶、肉桂、花椒）'],
        operation: '水温 40-42℃，25-30 分钟',
        course: '每日 1 次，10 次为一疗程',
        modifications: [],
        source: '《中医外治学》',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '糖尿病足禁用',
        discussionPoints: ['冬季常用，温肾通络']
      },
      relations: [{ type: 'treats', target: 'T:肾阳虚证' }, { type: 'uses', target: 'M:足浴' }]
    },
    {
      id: 'P:肾阴虚证-耳穴', name: '肾阴虚证·耳穴方', icon: '📋',
      searchText: '肾阴虚 耳穴 滋阴 肾 肝 内分泌',
      fields: {
        syndromeName: '肾阴虚证', therapyName: '耳穴', priority: 'primary', category: '滋肾阴',
        mainPoints: ['E:肾', 'E:肝', 'E:内分泌'],
        adjunctPoints: ['E:神门', 'E:交感'],
        mainAreas: [],
        operation: '王不留行籽贴压，力度宜轻',
        course: '隔日 1 次，10 次为一疗程',
        modifications: ['耳鸣加内耳', '失眠加心'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '孕妇慎用内分泌穴',
        discussionPoints: ['肾阴虚忌灸，宜太溪、照海、耳穴']
      },
      relations: [{ type: 'treats', target: 'T:肾阴虚证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:肾阴虚证-足浴', name: '肾阴虚证·足浴方', icon: '📋',
      searchText: '肾阴虚 足浴 滋阴 涌泉',
      fields: {
        syndromeName: '肾阴虚证', therapyName: '足浴', priority: 'alternative', category: '滋肾阴',
        mainPoints: [],
        adjunctPoints: [],
        mainAreas: ['足部（枸杞、菊花、吴茱萸）'],
        operation: '水温 38-40℃，20-30 分钟',
        course: '每日 1 次，10 次为一疗程',
        modifications: [],
        source: '《中医外治学》',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '糖尿病足禁用',
        discussionPoints: ['引火归元，改善阴虚火旺']
      },
      relations: [{ type: 'treats', target: 'T:肾阴虚证' }, { type: 'uses', target: 'M:足浴' }]
    },
    {
      id: 'P:肾气不固证-艾灸', name: '肾气不固证·艾灸方', icon: '📋',
      searchText: '肾气不固 艾灸 固摄 关元 中极 肾俞',
      fields: {
        syndromeName: '肾气不固证', therapyName: '艾灸', priority: 'primary', category: '固摄肾气',
        mainPoints: ['A:关元', 'A:中极', 'A:肾俞'],
        adjunctPoints: ['A:三阴交', 'A:气海'],
        mainAreas: [],
        operation: '补法。艾条温和灸，每穴 5-7 壮',
        course: '每日 1 次，10 次为一疗程',
        modifications: ['遗尿加膀胱俞'],
        source: '《针灸学》第9版 · 遗尿篇',
        evidenceLevel: 'B',
        recommendationStrength: '1',
        contraindications: '孕妇腰骶腹部禁灸',
        discussionPoints: ['补肾固摄，标本兼治']
      },
      relations: [{ type: 'treats', target: 'T:肾气不固证' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:肾气不固证-耳穴', name: '肾气不固证·耳穴方', icon: '📋',
      searchText: '肾气不固 耳穴 肾 膀胱 内生殖器',
      fields: {
        syndromeName: '肾气不固证', therapyName: '耳穴', priority: 'alternative', category: '固摄肾气',
        mainPoints: ['E:肾', 'E:膀胱', 'E:内生殖器'],
        adjunctPoints: ['E:尿道', 'E:交感'],
        mainAreas: [],
        operation: '王不留行籽贴压，每日按压 3 次',
        course: '隔日 1 次，10 次为一疗程',
        modifications: [],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '孕妇禁用内生殖器穴',
        discussionPoints: ['耳穴固摄，需配合补肾食疗']
      },
      relations: [{ type: 'treats', target: 'T:肾气不固证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:肾虚水泛证-艾灸', name: '肾虚水泛证·艾灸方', icon: '📋',
      searchText: '肾虚水泛 艾灸 温肾 利水 肾俞 关元 阴陵泉',
      fields: {
        syndromeName: '肾虚水泛证', therapyName: '艾灸', priority: 'primary', category: '温肾利水',
        mainPoints: ['A:肾俞', 'A:关元', 'A:阴陵泉'],
        adjunctPoints: ['A:水分', 'A:三阴交'],
        mainAreas: [],
        operation: '补法。艾条温和灸，每穴 5-7 壮',
        course: '每日 1 次，10 次为一疗程',
        modifications: [],
        source: '《针灸学》第9版 · 水肿篇',
        evidenceLevel: 'B',
        recommendationStrength: '1',
        contraindications: '孕妇腰骶腹部禁灸',
        discussionPoints: ['温肾利水，标本兼顾']
      },
      relations: [{ type: 'treats', target: 'T:肾虚水泛证' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:肾虚水泛证-足浴', name: '肾虚水泛证·足浴方', icon: '📋',
      searchText: '肾虚水泛 足浴 温肾 利水',
      fields: {
        syndromeName: '肾虚水泛证', therapyName: '足浴', priority: 'alternative', category: '温肾利水',
        mainPoints: [],
        adjunctPoints: [],
        mainAreas: ['足部（附子、干姜、茯苓煎汤）'],
        operation: '水温 40-42℃，20-30 分钟',
        course: '每日 1 次，10 次为一疗程',
        modifications: [],
        source: '《中医外治学》',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '心衰患者慎用；糖尿病足禁用',
        discussionPoints: ['足浴利水，需配合温肾食疗']
      },
      relations: [{ type: 'treats', target: 'T:肾虚水泛证' }, { type: 'uses', target: 'M:足浴' }]
    },
    {
      id: 'P:膀胱湿热证-耳穴', name: '膀胱湿热证·耳穴方', icon: '📋',
      searchText: '膀胱湿热 尿频 耳穴 膀胱 尿道 三焦',
      fields: {
        syndromeName: '膀胱湿热证', therapyName: '耳穴', priority: 'primary', category: '清热利湿',
        mainPoints: ['E:膀胱', 'E:尿道', 'E:三焦'],
        adjunctPoints: ['E:神门', 'E:交感'],
        mainAreas: [],
        operation: '王不留行籽贴压，每日按压 3 次',
        course: '隔日 1 次，7 次为一疗程',
        modifications: ['尿痛加耳尖放血'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '耳周皮肤破损禁贴压',
        discussionPoints: ['耳穴辅助，需配合中药内服']
      },
      relations: [{ type: 'treats', target: 'T:膀胱湿热证' }, { type: 'uses', target: 'M:耳穴' }]
    },

    // ========== 35-37. 脾肾阳虚 / 肝郁脾虚 ==========
    {
      id: 'P:脾肾阳虚证-艾灸', name: '脾肾阳虚证·艾灸方', icon: '📋',
      searchText: '脾肾阳虚 艾灸 温补 中脘 关元 足三里',
      fields: {
        syndromeName: '脾肾阳虚证', therapyName: '艾灸', priority: 'primary', category: '温补脾肾',
        mainPoints: ['A:中脘', 'A:关元', 'A:足三里'],
        adjunctPoints: ['A:命门', 'A:肾俞'],
        mainAreas: [],
        operation: '补法。隔姜灸或温和灸，每穴 5-7 壮',
        course: '每日 1 次，10 次为一疗程',
        modifications: ['便溏加天枢', '腰酸加腰阳关'],
        source: '《针灸学》第9版 · 泄泻篇',
        evidenceLevel: 'B',
        recommendationStrength: '1',
        contraindications: '孕妇腰骶腹部禁灸',
        discussionPoints: ['脾肾同补，先后天兼顾']
      },
      relations: [{ type: 'treats', target: 'T:脾肾阳虚证' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:脾肾阳虚证-中药熨烫', name: '脾肾阳虚证·中药熨烫方', icon: '📋',
      searchText: '脾肾阳虚 中药熨烫 温补 腰腹',
      fields: {
        syndromeName: '脾肾阳虚证', therapyName: '中药熨烫', priority: 'alternative', category: '温补脾肾',
        mainPoints: [],
        adjunctPoints: [],
        mainAreas: ['腹部及腰骶部（附子、肉桂、干姜）'],
        operation: '温度 60-70℃，20-30 分钟',
        course: '每日 1 次，7 次为一疗程',
        modifications: [],
        source: '《中医外治学》',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '孕妇腰骶腹部禁；皮肤破损禁',
        discussionPoints: ['熨烫温补脾肾，配合艾灸更佳']
      },
      relations: [{ type: 'treats', target: 'T:脾肾阳虚证' }, { type: 'uses', target: 'M:中药熨烫' }]
    },
    {
      id: 'P:肝郁脾虚证-耳穴', name: '肝郁脾虚证·耳穴方', icon: '📋',
      searchText: '肝郁脾虚 耳穴 疏肝 健脾 肝 脾',
      fields: {
        syndromeName: '肝郁脾虚证', therapyName: '耳穴', priority: 'primary', category: '疏肝健脾',
        mainPoints: ['E:肝', 'E:脾', 'E:交感'],
        adjunctPoints: ['E:神门', 'E:胃'],
        mainAreas: [],
        operation: '王不留行籽贴压，力度适中',
        course: '隔日 1 次，10 次为一疗程',
        modifications: ['腹胀加胃', '失眠加垂前'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '耳周皮肤破损禁贴压',
        discussionPoints: ['疏肝健脾，标本兼顾']
      },
      relations: [{ type: 'treats', target: 'T:肝郁脾虚证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:肝郁脾虚证-艾灸', name: '肝郁脾虚证·艾灸方', icon: '📋',
      searchText: '肝郁脾虚 艾灸 疏肝 健脾 太冲 足三里',
      fields: {
        syndromeName: '肝郁脾虚证', therapyName: '艾灸', priority: 'alternative', category: '疏肝健脾',
        mainPoints: ['A:太冲', 'A:足三里', 'A:脾俞'],
        adjunctPoints: ['A:中脘', 'A:期门'],
        mainAreas: [],
        operation: '平补平泻。艾条温和灸，每穴 5 壮',
        course: '每日 1 次，10 次为一疗程',
        modifications: ['胁痛加期门'],
        source: '《针灸学》第9版 · 郁证篇',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '孕妇腰骶腹部禁灸',
        discussionPoints: ['太冲疏肝，足三里健脾']
      },
      relations: [{ type: 'treats', target: 'T:肝郁脾虚证' }, { type: 'uses', target: 'M:艾灸' }]
    },

    // ========== 38-40. 风寒湿痹 / 风痰阻络 / 颈痹 ==========
    {
      id: 'P:风寒湿痹证-艾灸', name: '风寒湿痹证·艾灸方', icon: '📋',
      searchText: '痹证 艾灸 通络 局部 阿是穴',
      fields: {
        syndromeName: '风寒湿痹证', therapyName: '艾灸', priority: 'primary', category: '祛风散寒除湿',
        mainPoints: ['A:大椎', 'A:阳陵泉', 'A:足三里'],
        adjunctPoints: ['A:关元', 'A:肾俞'],
        mainAreas: [],
        operation: '补法。艾条温和灸，每穴 5-7 壮；局部配阿是穴',
        course: '每日 1 次，10 次为一疗程，连续 3-5 疗程',
        modifications: ['膝痛加膝眼', '腰痛加腰阳关'],
        source: '《针灸学》第9版 · 痹证篇',
        evidenceLevel: 'A',
        recommendationStrength: '1',
        contraindications: '局部红肿热痛禁灸；孕妇腰骶腹部禁灸',
        discussionPoints: ['痹证宜灸，局部取穴配循经取穴', '局部红肿热痛禁灸']
      },
      relations: [{ type: 'treats', target: 'T:风寒湿痹证' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:风寒湿痹证-拔罐', name: '风寒湿痹证·拔罐方', icon: '📋',
      searchText: '痹证 拔罐 通络 局部 背俞',
      fields: {
        syndromeName: '风寒湿痹证', therapyName: '拔罐', priority: 'alternative', category: '祛风散寒除湿',
        mainPoints: [],
        adjunctPoints: [],
        mainAreas: ['局部关节周围、背部膀胱经'],
        operation: '留罐 10-15 分钟，可配合走罐',
        course: '每周 2-3 次，10 次为一疗程',
        modifications: [],
        source: '中国针灸学会《循证针灸临床实践指南 · 拔罐》',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '局部红肿热痛禁用；孕妇、出血倾向禁用',
        discussionPoints: ['走罐通络效果好']
      },
      relations: [{ type: 'treats', target: 'T:风寒湿痹证' }, { type: 'uses', target: 'M:拔罐' }]
    },
    {
      id: 'P:风痰阻络证-耳穴', name: '风痰阻络证·耳穴方', icon: '📋',
      searchText: '风痰阻络 中风 耳穴 心 神门 肝',
      fields: {
        syndromeName: '风痰阻络证', therapyName: '耳穴', priority: 'primary', category: '祛风化痰通络',
        mainPoints: ['E:心', 'E:神门', 'E:肝'],
        adjunctPoints: ['E:皮质下', 'E:交感'],
        mainAreas: [],
        operation: '王不留行籽贴压，力度适中',
        course: '隔日 1 次，10 次为一疗程',
        modifications: [],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '耳周皮肤破损禁贴压',
        discussionPoints: ['耳穴为中风康复期辅助疗法']
      },
      relations: [{ type: 'treats', target: 'T:风痰阻络证' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:风痰阻络证-刮痧', name: '风痰阻络证·刮痧方', icon: '📋',
      searchText: '风痰 中风 刮痧 头面 经络',
      fields: {
        syndromeName: '风痰阻络证', therapyName: '刮痧', priority: 'alternative', category: '祛风化痰通络',
        mainPoints: [],
        adjunctPoints: [],
        mainAreas: ['头部、颈项、患侧肢体经络'],
        operation: '平补平泻，力度适中，以出痧为度',
        course: '每周 2 次，5 次为一疗程',
        modifications: [],
        source: '中国针灸学会《循证针灸临床实践指南 · 刮痧》',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '出血倾向、抗凝禁用',
        discussionPoints: ['中风康复期辅助']
      },
      relations: [{ type: 'treats', target: 'T:风痰阻络证' }, { type: 'uses', target: 'M:刮痧' }]
    },
    {
      id: 'P:颈痹-艾灸', name: '颈痹·艾灸方', icon: '📋',
      searchText: '颈椎病 艾灸 大椎 天柱 肩井',
      fields: {
        syndromeName: '颈痹-寒湿阻络', therapyName: '艾灸', priority: 'primary', category: '散寒通络',
        mainPoints: ['A:大椎', 'A:天柱', 'A:肩井'],
        adjunctPoints: ['A:风池', 'A:后溪'],
        mainAreas: [],
        operation: '补法。艾条温和灸，每穴 5 壮',
        course: '每日 1 次，10 次为一疗程',
        modifications: ['上肢麻木加曲池'],
        source: '《针灸学》第9版 · 颈项痛篇',
        evidenceLevel: 'B',
        recommendationStrength: '1',
        contraindications: '孕妇禁灸肩井穴',
        discussionPoints: ['颈痹宜灸，温经散寒', '孕妇禁灸肩井穴']
      },
      relations: [{ type: 'treats', target: 'T:颈痹-寒湿阻络' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:颈痹-拔罐', name: '颈痹·拔罐方', icon: '📋',
      searchText: '颈椎病 拔罐 大椎 肩井 天宗',
      fields: {
        syndromeName: '颈痹-寒湿阻络', therapyName: '拔罐', priority: 'alternative', category: '散寒通络',
        mainPoints: [],
        adjunctPoints: [],
        mainAreas: ['颈项部、肩背部膀胱经区域'],
        operation: '留罐 10-15 分钟，可配合走罐',
        course: '每周 2-3 次，5 次为一疗程',
        modifications: [],
        source: '中国针灸学会《循证针灸临床实践指南 · 拔罐》',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '孕妇禁颈项部走罐',
        discussionPoints: ['颈项部走罐疏通经络']
      },
      relations: [{ type: 'treats', target: 'T:颈痹-寒湿阻络' }, { type: 'uses', target: 'M:拔罐' }]
    },

    // ========== 41-45. 专科处方 ==========
    {
      id: 'P:消渴-耳穴', name: '消渴·耳穴方', icon: '📋',
      searchText: '糖尿病 消渴 耳穴 胰胆 内分泌 肾',
      fields: {
        syndromeName: '消渴-肾阴亏虚', therapyName: '耳穴', priority: 'primary', category: '滋阴固肾',
        mainPoints: ['E:胰胆', 'E:内分泌', 'E:肾'],
        adjunctPoints: ['E:神门', 'E:交感'],
        mainAreas: [],
        operation: '王不留行籽贴压，力度宜轻',
        course: '隔日 1 次，10 次为一疗程',
        modifications: ['上消加肺', '中消加胃', '下消加膀胱'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '孕妇慎用内分泌穴',
        discussionPoints: ['E:胰胆为国标穴位', '不可替代降糖药，仅作辅助']
      },
      relations: [{ type: 'treats', target: 'T:消渴-肾阴亏虚' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:胸痹-耳穴', name: '胸痹·耳穴方', icon: '📋',
      searchText: '胸痹 冠心病 耳穴 心 胸 交感',
      fields: {
        syndromeName: '胸痹-心血瘀阻', therapyName: '耳穴', priority: 'primary', category: '活血通脉',
        mainPoints: ['E:心', 'E:胸', 'E:交感'],
        adjunctPoints: ['E:神门', 'E:皮质下'],
        mainAreas: [],
        operation: '王不留行籽贴压，力度宜轻',
        course: '隔日 1 次，10 次为一疗程',
        modifications: ['心悸加神门'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '急性发作期禁用；心脏病患者按压力度宜轻',
        discussionPoints: ['胸痹缓解期用，急性期须急诊处理']
      },
      relations: [{ type: 'treats', target: 'T:胸痹-心血瘀阻' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:泄泻-艾灸', name: '泄泻·艾灸方', icon: '📋',
      searchText: '泄泻 腹泻 艾灸 天枢 足三里 阴陵泉',
      fields: {
        syndromeName: '泄泻-湿热伤中', therapyName: '艾灸', priority: 'primary', category: '健脾止泻',
        mainPoints: ['A:天枢', 'A:足三里', 'A:阴陵泉'],
        adjunctPoints: ['A:中脘', 'A:上巨虚'],
        mainAreas: [],
        operation: '温和灸或隔姜灸，每穴 5-7 壮',
        course: '每日 1 次，5 次为一疗程',
        modifications: ['寒湿加神阙', '湿热加内庭'],
        source: '《针灸学》第9版 · 泄泻篇',
        evidenceLevel: 'B',
        recommendationStrength: '1',
        contraindications: '湿热证高热期间慎灸神阙',
        discussionPoints: ['教材主穴：天枢、上巨虚、阴陵泉、水分']
      },
      relations: [{ type: 'treats', target: 'T:泄泻-湿热伤中' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:便秘-耳穴', name: '便秘·耳穴方', icon: '📋',
      searchText: '便秘 耳穴 大肠 直肠 三焦',
      fields: {
        syndromeName: '便秘-热秘', therapyName: '耳穴', priority: 'primary', category: '通便导滞',
        mainPoints: ['E:大肠', 'E:直肠', 'E:三焦'],
        adjunctPoints: ['E:交感', 'E:神门'],
        mainAreas: [],
        operation: '王不留行籽贴压，每日按压 3 次，晨起加强按压',
        course: '隔日 1 次，7 次为一疗程',
        modifications: ['热秘加耳尖放血', '气秘加肝', '虚秘加脾、肾'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '耳周皮肤破损禁贴压',
        discussionPoints: ['E:大肠为国标通便要穴', '耳穴为辅助疗法']
      },
      relations: [{ type: 'treats', target: 'T:便秘-热秘' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:乳癖-耳穴', name: '乳癖·耳穴方', icon: '📋',
      searchText: '乳腺增生 耳穴 疏肝 胸 内分泌 肝',
      fields: {
        syndromeName: '乳癖-肝郁痰凝', therapyName: '耳穴', priority: 'primary', category: '疏肝散结',
        mainPoints: ['E:胸', 'E:内分泌', 'E:肝'],
        adjunctPoints: ['E:神门', 'E:交感'],
        mainAreas: [],
        operation: '王不留行籽贴压，每日按压 3 次',
        course: '隔日 1 次，10 次为一疗程',
        modifications: [],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '孕妇慎用内分泌穴；乳腺恶性肿瘤禁',
        discussionPoints: ['疏肝散结，缓解乳房胀痛']
      },
      relations: [{ type: 'treats', target: 'T:乳癖-肝郁痰凝' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:湿疮-耳穴', name: '湿疮·耳穴方', icon: '📋',
      searchText: '湿疹 耳穴 清热 肺 风溪 肾上腺',
      fields: {
        syndromeName: '湿疮-湿热浸淫', therapyName: '耳穴', priority: 'primary', category: '清热利湿',
        mainPoints: ['E:肺', 'E:风溪', 'E:肾上腺'],
        adjunctPoints: ['E:神门', 'E:交感'],
        mainAreas: [],
        operation: '王不留行籽贴压，每日按压 3 次',
        course: '隔日 1 次，10 次为一疗程',
        modifications: ['瘙痒加耳尖放血'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '耳周皮肤破损禁贴压',
        discussionPoints: ['耳穴祛风止痒效果好']
      },
      relations: [{ type: 'treats', target: 'T:湿疮-湿热浸淫' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:鼻鼽-艾灸', name: '鼻鼽·艾灸方', icon: '📋',
      searchText: '过敏性鼻炎 艾灸 迎香 印堂 肺俞',
      fields: {
        syndromeName: '鼻鼽-肺气虚寒', therapyName: '艾灸', priority: 'primary', category: '温肺通窍',
        mainPoints: ['A:迎香', 'A:印堂', 'A:肺俞'],
        adjunctPoints: ['A:大椎', 'A:足三里'],
        mainAreas: [],
        operation: '补法。艾条温和灸，每穴 3-5 壮',
        course: '每日或隔日 1 次，10 次为一疗程',
        modifications: ['流涕多加风门'],
        source: '《针灸学》第9版 · 鼻鼽篇',
        evidenceLevel: 'B',
        recommendationStrength: '1',
        contraindications: '面部皮肤破损禁灸',
        discussionPoints: ['三伏贴 / 艾灸均对过敏性鼻炎有效']
      },
      relations: [{ type: 'treats', target: 'T:鼻鼽-肺气虚寒' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:鼻鼽-中药贴敷', name: '鼻鼽·中药贴敷方', icon: '📋',
      searchText: '过敏性鼻炎 三伏贴 贴敷 肺俞 大椎',
      fields: {
        syndromeName: '鼻鼽-肺气虚寒', therapyName: '中药贴敷', priority: 'alternative', category: '温肺通窍',
        mainPoints: ['A:肺俞', 'A:大椎', 'A:膏肓'],
        adjunctPoints: ['A:迎香', 'A:脾俞'],
        mainAreas: [],
        operation: '白芥子、细辛等，姜汁调敷，4-6 小时',
        course: '三伏天/三九天各贴 3 次，每年 6 次',
        modifications: [],
        source: '中国针灸学会《循证针灸临床实践指南 · 穴位贴敷》',
        evidenceLevel: 'A',
        recommendationStrength: '1',
        contraindications: '贴敷部位皮肤破损、过敏禁用',
        discussionPoints: ['冬病夏治，三伏贴效果尤佳']
      },
      relations: [{ type: 'treats', target: 'T:鼻鼽-肺气虚寒' }, { type: 'uses', target: 'M:中药贴敷' }]
    },
    {
      id: 'P:小儿遗尿-艾灸', name: '小儿遗尿·艾灸方', icon: '📋',
      searchText: '小儿遗尿 艾灸 关元 中极 三阴交',
      fields: {
        syndromeName: '小儿遗尿-肾气不足', therapyName: '艾灸', priority: 'primary', category: '温肾固摄',
        mainPoints: ['A:关元', 'A:中极', 'A:三阴交'],
        adjunctPoints: ['A:肾俞', 'A:膀胱俞'],
        mainAreas: [],
        operation: '补法。艾条温和灸，每穴 3-5 壮，注意防烫',
        course: '每日 1 次，7 次为一疗程',
        modifications: [],
        source: '《针灸学》第9版 · 遗尿篇',
        evidenceLevel: 'B',
        recommendationStrength: '1',
        contraindications: '儿童皮肤娇嫩，需缩短时间、加大距离',
        discussionPoints: ['小儿遗尿宜灸不宜针']
      },
      relations: [{ type: 'treats', target: 'T:小儿遗尿-肾气不足' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:月经不调-耳穴', name: '月经不调·耳穴方', icon: '📋',
      searchText: '月经不调 耳穴 调经 内生殖器 内分泌 交感',
      fields: {
        syndromeName: '月经不调-肝郁气滞', therapyName: '耳穴', priority: 'primary', category: '调经',
        mainPoints: ['E:内生殖器', 'E:内分泌', 'E:交感'],
        adjunctPoints: ['E:肝', 'E:神门'],
        mainAreas: [],
        operation: '王不留行籽贴压，每日按压 3 次',
        course: '经前 3 天开始，至经期结束',
        modifications: [],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '孕妇禁用内生殖器、内分泌穴',
        discussionPoints: ['孕妇禁用内生殖器、内分泌穴']
      },
      relations: [{ type: 'treats', target: 'T:月经不调-肝郁气滞' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:月经不调-艾灸', name: '月经不调·艾灸方', icon: '📋',
      searchText: '月经不调 艾灸 关元 三阴交 血海',
      fields: {
        syndromeName: '月经不调-肝郁气滞', therapyName: '艾灸', priority: 'alternative', category: '调经',
        mainPoints: ['A:关元', 'A:三阴交', 'A:血海'],
        adjunctPoints: ['A:气海', 'A:太冲'],
        mainAreas: [],
        operation: '补法。艾条温和灸，每穴 5-7 壮',
        course: '经前 3 天开始，每日 1 次，至经期结束',
        modifications: ['胸胁胀加期门', '情绪抑郁加太冲'],
        source: '《针灸学》第9版 · 月经不调篇',
        evidenceLevel: 'B',
        recommendationStrength: '1',
        contraindications: '孕妇禁灸；经量过多者慎灸腰骶',
        discussionPoints: ['孕妇禁灸，经量多者慎灸腰骶']
      },
      relations: [{ type: 'treats', target: 'T:月经不调-肝郁气滞' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:痛经-艾灸', name: '痛经·艾灸方', icon: '📋',
      searchText: '痛经 艾灸 关元 三阴交 地机',
      fields: {
        syndromeName: '痛经', therapyName: '艾灸', priority: 'primary', category: '温经止痛',
        mainPoints: ['A:关元', 'A:三阴交', 'A:地机'],
        adjunctPoints: ['A:气海', 'A:太冲'],
        mainAreas: [],
        operation: '温和灸或隔姜灸，每穴 5-7 壮',
        course: '经前 3 天开始，每日 1 次，至经期结束',
        modifications: ['寒凝加神阙', '气滞加太冲、期门', '血瘀加血海、膈俞'],
        source: '《针灸学》第9版 · 痛经篇',
        evidenceLevel: 'A',
        recommendationStrength: '1',
        contraindications: '孕妇禁灸；经量过多者慎灸腰骶',
        discussionPoints: ['教材主穴：关元、三阴交、地机', '痛经是针灸优势病种']
      },
      relations: [{ type: 'treats', target: 'T:痛经' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:痛经-耳穴', name: '痛经·耳穴方', icon: '📋',
      searchText: '痛经 耳穴 内生殖器 内分泌 交感',
      fields: {
        syndromeName: '痛经', therapyName: '耳穴', priority: 'alternative', category: '温经止痛',
        mainPoints: ['E:内生殖器', 'E:内分泌', 'E:交感'],
        adjunctPoints: ['E:神门', 'E:肝'],
        mainAreas: [],
        operation: '王不留行籽贴压，每日按压 3 次，经前加强按压',
        course: '经前 3 天开始，至经期结束',
        modifications: ['寒凝加肾', '气滞加肝、胆'],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '孕妇禁用内生殖器、内分泌穴',
        discussionPoints: ['E:内生殖器位于三角窝前下部']
      },
      relations: [{ type: 'treats', target: 'T:痛经' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:闭经-艾灸', name: '闭经·艾灸方', icon: '📋',
      searchText: '闭经 艾灸 关元 三阴交 足三里',
      fields: {
        syndromeName: '闭经-气血虚弱', therapyName: '艾灸', priority: 'primary', category: '补气养血调经',
        mainPoints: ['A:关元', 'A:三阴交', 'A:足三里'],
        adjunctPoints: ['A:血海', 'A:脾俞'],
        mainAreas: [],
        operation: '补法。艾条温和灸，每穴 5-7 壮',
        course: '每日 1 次，10 次为一疗程',
        modifications: [],
        source: '《针灸学》第9版 · 月经不调篇',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '孕妇禁灸；经期慎用',
        discussionPoints: ['气血虚弱型闭经宜补益为主']
      },
      relations: [{ type: 'treats', target: 'T:闭经-气血虚弱' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:带下过多-耳穴', name: '带下过多·耳穴方', icon: '📋',
      searchText: '带下 耳穴 清热 内生殖器 盆腔 脾',
      fields: {
        syndromeName: '带下过多-湿热下注', therapyName: '耳穴', priority: 'primary', category: '清利湿热止带',
        mainPoints: ['E:内生殖器', 'E:盆腔', 'E:脾'],
        adjunctPoints: ['E:耳尖', 'E:交感'],
        mainAreas: [],
        operation: '耳尖放血 3-5 滴；其余穴贴压',
        course: '隔日 1 次，7 次为一疗程',
        modifications: [],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '需配合中药内服，耳穴仅作辅助',
        discussionPoints: ['耳穴仅作辅助，需配合中药内服']
      },
      relations: [{ type: 'treats', target: 'T:带下过多-湿热下注' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:产后腹痛-艾灸', name: '产后腹痛·艾灸方', icon: '📋',
      searchText: '产后腹痛 艾灸 关元 气海 三阴交',
      fields: {
        syndromeName: '产后腹痛-血虚', therapyName: '艾灸', priority: 'primary', category: '补血温经',
        mainPoints: ['A:关元', 'A:气海', 'A:三阴交'],
        adjunctPoints: ['A:足三里', 'A:血海'],
        mainAreas: [],
        operation: '补法。艾条温和灸，每穴 5 壮',
        course: '每日 1 次，7 次为一疗程',
        modifications: ['血瘀加膈俞、血海'],
        source: '《针灸学》第9版 · 产后腹痛篇',
        evidenceLevel: 'B',
        recommendationStrength: '2',
        contraindications: '恶露不绝者需就医',
        discussionPoints: ['产后宜温和灸，避免强刺激']
      },
      relations: [{ type: 'treats', target: 'T:产后腹痛-血虚' }, { type: 'uses', target: 'M:艾灸' }]
    },
    {
      id: 'P:产后缺乳-耳穴', name: '产后缺乳·耳穴方', icon: '📋',
      searchText: '缺乳 耳穴 通乳 胸 内分泌 肝',
      fields: {
        syndromeName: '产后缺乳-肝郁气滞', therapyName: '耳穴', priority: 'primary', category: '疏肝通乳',
        mainPoints: ['E:胸', 'E:内分泌', 'E:肝'],
        adjunctPoints: ['E:神门', 'E:交感'],
        mainAreas: [],
        operation: '王不留行籽贴压，每日按压 3 次',
        course: '隔日 1 次，7 次为一疗程',
        modifications: [],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '哺乳期需排空乳汁',
        discussionPoints: ['配合手法按摩效果更佳']
      },
      relations: [{ type: 'treats', target: 'T:产后缺乳-肝郁气滞' }, { type: 'uses', target: 'M:耳穴' }]
    },
    {
      id: 'P:妊娠恶阻-耳穴', name: '妊娠恶阻·耳穴方', icon: '📋',
      searchText: '妊娠恶阻 孕吐 耳穴 胃 脾 交感',
      fields: {
        syndromeName: '妊娠恶阻-脾胃虚弱', therapyName: '耳穴', priority: 'primary', category: '健脾和胃',
        mainPoints: ['E:胃', 'E:脾', 'E:交感'],
        adjunctPoints: ['E:神门', 'E:贲门'],
        mainAreas: [],
        operation: '王不留行籽贴压，力度宜轻',
        course: '隔日 1 次，5 次为一疗程',
        modifications: [],
        source: 'GB/T 13734-2008 · 耳穴名称与定位',
        evidenceLevel: 'C',
        recommendationStrength: '2',
        contraindications: '孕期耳穴力度宜轻；严重呕吐需就医补液',
        discussionPoints: ['孕期耳穴力度宜轻，严重呕吐需就医']
      },
      relations: [{ type: 'treats', target: 'T:妊娠恶阻-脾胃虚弱' }, { type: 'uses', target: 'M:耳穴' }]
    }

  ]
};
