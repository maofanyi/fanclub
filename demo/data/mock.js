// ================================================
// 星彩 FANCLUB 演示用模拟数据
// ================================================

const MOCK = {

  // 当前登录用户
  currentUser: {
    id: 'u001',
    name: '小星星',
    avatar: '🌟',
    level: 'SSR粉丝',
    balance: 580.00,
    joinDate: '2025-06-01',
    vouchers: [
      { merchantId: 'm001', merchantName: '星彩 Official 周边店', count: 3 },
      { merchantId: 'm002', merchantName: '光芒应援团', count: 2 },
    ]
  },

  // 商家列表
  merchants: [
    {
      id: 'm001',
      name: '星彩 Official 周边店',
      avatar: '⭐',
      cover: '',
      desc: '团体官方授权周边，限定商品优先发售',
      tags: ['官方授权', '限定'],
      productCount: 12,
      rating: 4.9,
    },
    {
      id: 'm002',
      name: '光芒应援团',
      avatar: '🌈',
      cover: '',
      desc: '粉丝自制应援物、集体应援活动物料',
      tags: ['应援', '粉丝制作'],
      productCount: 8,
      rating: 4.8,
    },
    {
      id: 'm003',
      name: '梦幻唱片屋',
      avatar: '🎵',
      cover: '',
      desc: '数字写真、音乐专辑、限定数字内容',
      tags: ['数字商品', '专辑'],
      productCount: 6,
      rating: 4.7,
    }
  ],

  // 商品列表
  products: [
    {
      id: 'p001', merchantId: 'm001',
      name: '演唱会小物包', emoji: '🎁',
      price: 88, type: 'voucher',
      stock: 50, sold: 234,
      desc: '内含荧光棒、小卡、贴纸、应援毛巾各一份，演唱会必备应援套装！',
      tags: ['热销', '套装']
    },
    {
      id: 'p002', merchantId: 'm001',
      name: '成员签名照片组', emoji: '📸',
      price: 45, type: 'voucher',
      stock: 30, sold: 189,
      desc: '全员签名大幅照片组，五款随机发售，精美收藏',
      tags: ['签名', '限定']
    },
    {
      id: 'p003', merchantId: 'm001',
      name: '限定徽章套装', emoji: '🏅',
      price: 60, type: 'voucher',
      stock: 100, sold: 312,
      desc: '成员主题图案亚克力徽章，全套5枚，限量发售',
      tags: ['限定', '徽章']
    },
    {
      id: 'p004', merchantId: 'm002',
      name: '应援毛巾', emoji: '🏳️',
      price: 35, type: 'voucher',
      stock: 200, sold: 456,
      desc: '超细纤维应援毛巾，印有团体LOGO及成员名字',
      tags: ['应援']
    },
    {
      id: 'p005', merchantId: 'm002',
      name: '荧光棒套装', emoji: '🔦',
      price: 55, type: 'voucher',
      stock: 80, sold: 201,
      desc: '官方色荧光棒2支+电池，可切换成员专属颜色',
      tags: ['应援', '荧光棒']
    },
    {
      id: 'p006', merchantId: 'm003',
      name: '数字写真集 Vol.3', emoji: '💿',
      price: 29, type: 'digital',
      stock: 999, sold: 678,
      desc: '高清数字写真集，80P精美图文，购买后即时到账',
      tags: ['数字', '写真']
    },
    {
      id: 'p007', merchantId: 'm001',
      name: '见面会代金券', emoji: '🎫',
      price: 120, type: 'activity',
      stock: 20, sold: 98,
      desc: '2026春季见面会单次入场代金券，可兑换现场物品',
      tags: ['见面会', '活动']
    },
    {
      id: 'p008', merchantId: 'm002',
      name: '联名帆布包', emoji: '👜',
      price: 79, type: 'voucher',
      stock: 60, sold: 134,
      desc: '与知名动漫IP联名款帆布包，附赠专属贴纸',
      tags: ['联名', '限定']
    }
  ],

  // 活动列表
  activities: [
    {
      id: 'a001',
      name: '2026 春季见面会',
      date: '2026-03-22',
      time: '14:00 - 17:00',
      location: '北京五棵松体育馆 B区',
      emoji: '🌸',
      merchantIds: ['m001', 'm002'],
      desc: '春季主题见面会，包含歌曲演出、互动游戏、握手会等环节',
      tags: ['见面会', '限定'],
      status: 'upcoming'
    },
    {
      id: 'a002',
      name: '粉丝市集 FanFest',
      date: '2026-03-15',
      time: '10:00 - 18:00',
      location: '上海世博展览馆 3号馆',
      emoji: '🎪',
      merchantIds: ['m001', 'm002', 'm003'],
      desc: '粉丝自制周边展售会，多家应援团联合举办',
      tags: ['市集', '周边'],
      status: 'upcoming'
    },
    {
      id: 'a003',
      name: '周年纪念线下活动',
      date: '2026-04-10',
      time: '13:00 - 20:00',
      location: '广州白云国际会议中心',
      emoji: '🎂',
      merchantIds: ['m001'],
      desc: '团体出道三周年庆典活动，特别限定商品发售',
      tags: ['周年', '限定'],
      status: 'upcoming'
    },
    {
      id: 'a004',
      name: 'Winter Live 2025',
      date: '2025-12-25',
      time: '19:00 - 21:30',
      location: '北京工人体育馆',
      emoji: '❄️',
      merchantIds: ['m001', 'm002'],
      desc: '冬季演唱会，クリスマス特别公演',
      tags: ['演唱会'],
      status: 'past'
    }
  ],

  // 订单列表
  orders: [
    {
      id: 'ord20260310001',
      productId: 'p001',
      productName: '演唱会小物包',
      emoji: '🎁',
      merchantId: 'm001',
      merchantName: '星彩 Official 周边店',
      qty: 2,
      price: 88,
      total: 176,
      payMethod: '钱包余额',
      paidAt: '2026-03-10 14:23',
      status: 'paid'
    },
    {
      id: 'ord20260308002',
      productId: 'p006',
      productName: '数字写真集 Vol.3',
      emoji: '💿',
      merchantId: 'm003',
      merchantName: '梦幻唱片屋',
      qty: 1,
      price: 29,
      total: 29,
      payMethod: '支付宝',
      paidAt: '2026-03-08 20:01',
      status: 'paid'
    },
    {
      id: 'ord20260301003',
      productId: 'p007',
      productName: '见面会代金券',
      emoji: '🎫',
      merchantId: 'm001',
      merchantName: '星彩 Official 周边店',
      qty: 1,
      price: 120,
      total: 120,
      payMethod: '微信支付',
      paidAt: '2026-03-01 09:45',
      status: 'verified'
    }
  ],

  // 核销记录
  verifyRecords: [
    {
      id: 'vr001',
      merchantId: 'm001',
      merchantName: '星彩 Official 周边店',
      goods: [
        { name: '演唱会小物包', emoji: '🎁', qty: 1 }
      ],
      staffName: '工作人员 - 小A',
      verifiedAt: '2026-03-01 10:15',
      location: '北京五棵松 - 核销点2'
    },
    {
      id: 'vr002',
      merchantId: 'm002',
      merchantName: '光芒应援团',
      goods: [
        { name: '应援毛巾', emoji: '🏳️', qty: 2 },
        { name: '荧光棒套装', emoji: '🔦', qty: 1 }
      ],
      staffName: '工作人员 - 小B',
      verifiedAt: '2025-12-25 18:30',
      location: '北京工人体育馆 - 核销点1'
    }
  ],

  // 核销演示用 - 工作人员端目标用户
  demoTargetUser: {
    id: 'u001',
    name: '小星星',
    avatar: '🌟',
    level: 'SSR粉丝',
    vouchers: [
      { productId: 'p001', name: '演唱会小物包', emoji: '🎁', count: 2 },
      { productId: 'p002', name: '成员签名照片组', emoji: '📸', count: 1 },
      { productId: 'p003', name: '限定徽章套装', emoji: '🏅', count: 1 },
      { productId: 'p007', name: '见面会代金券', emoji: '🎫', count: 1 },
    ]
  }
};

// 存储演示状态（sessionStorage）
const DEMO_STATE = {
  get: (key) => {
    try { return JSON.parse(sessionStorage.getItem('fanclub_' + key)); } catch { return null; }
  },
  set: (key, val) => {
    sessionStorage.setItem('fanclub_' + key, JSON.stringify(val));
  }
};

// 购物车（localStorage，跨页面持久化）
const CART = {
  _key: 'fanclub_cart',

  getItems() {
    try { return JSON.parse(localStorage.getItem(this._key)) || []; } catch { return []; }
  },

  _save(items) {
    localStorage.setItem(this._key, JSON.stringify(items));
  },

  addItem(productId, qty) {
    qty = qty || 1;
    const items = this.getItems();
    const idx = items.findIndex(i => i.productId === productId);
    const product = MOCK.products.find(p => p.id === productId);
    if (!product) return items;
    if (idx >= 0) {
      items[idx].qty = Math.min(items[idx].qty + qty, product.stock);
    } else {
      items.push({ productId, qty: Math.min(qty, product.stock) });
    }
    this._save(items);
    return items;
  },

  removeItem(productId) {
    const items = this.getItems().filter(i => i.productId !== productId);
    this._save(items);
    return items;
  },

  updateQty(productId, qty) {
    const items = this.getItems();
    const idx = items.findIndex(i => i.productId === productId);
    if (idx >= 0) {
      if (qty <= 0) { items.splice(idx, 1); }
      else { items[idx].qty = qty; }
    }
    this._save(items);
    return items;
  },

  clear() {
    localStorage.removeItem(this._key);
  },

  getCount() {
    return this.getItems().reduce(function(sum, i) { return sum + i.qty; }, 0);
  },

  getTotal() {
    return this.getItems().reduce(function(sum, i) {
      const p = MOCK.products.find(function(x) { return x.id === i.productId; });
      return sum + (p ? p.price * i.qty : 0);
    }, 0);
  },

  // 更新页面里所有购物车角标
  refreshBadge() {
    const count = this.getCount();
    document.querySelectorAll('.cart-nav-badge').forEach(function(el) {
      el.textContent = count > 0 ? (count > 99 ? '99+' : count) : '';
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }
};
