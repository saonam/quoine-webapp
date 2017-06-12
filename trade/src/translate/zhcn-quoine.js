/* eslint-disable quotes, quote-props, max-len */

// quoine

export default {
  "product-book": {
    "spine-title": "订阅书籍及交易咨讯",
  },
  "news": {
    "spine-title": "聊天室及消息",
  },
  "transfer": {
    "spine-title": "存取资金",
    "account": "账户",
  },
  "blotters": {
    "spine-title": "订单、持仓及交易",
  },
  "volume-balance-panel": {
    "title-spine": "交易量及结余",
  },
  "balance-total": {
    "title": "结余",
    "currency": "",
    "total-fiat": "法定货币结余",
    "total-crypto": "虚拟货币结余",
    "total-balance": "结余",
  },
  "balance-detail": {
    "title": "结余明细",
    "account": "账户",
  },
  "execution": {
    "title": "交易",
    // ===
    "side": "方",
    "side-all": "全部",
    "side-buy": "买方",
    "side-sell": "卖方",
    // ===
    "created-at": "已创建在",
    "id": "身份",
    "order-id": "订单ID",
    "price": "价格",
    "product": "产品",
    "quantity": "数量",
    "time": "时间",
    // ===
    "target": "目标",
    "target-new": "创建",
    "target-settle": "清算",
    "target-spot": "现货",
  },
  // ===
  "order": {
    "title": "订单",
    // ===
    "distance": "价差",
    "distance-type": "价差类型",
    "distance-type-fiat": "fiat",
    "distance-type-percentage": "百分比",
    // ===
    "margin": "保证金",
    "fx-rate": "汇率 ({{ first }}/{{ second }})",
    "cost": "预期成本",
    "fee": "费用",
    "filled": "填写的",
    "id": "ID",
    "interest": "每日利息",
    "leverage": "杠杆率",
    "leverage-help": "杠杆越大，风险越大。在进行此类交易前请确保您充分了解可能涉及的风险。",
    "product": "产品",
    "slippage": "滑动",
    "spot": "现货",
    "time": "时间",
    "created-at": "已创建于",
    // ===
    "quantity": "数量",
    "quantity-disclose": "公开数量",
    "qty-filled": "达成的数量",
    "qty-disc": "公开数量",
    "qty-disclose": "公开数量",
    // ===
    "target": "目标",
    "target-settle": "结算",
    "target-spot": "现货",
    // ===
    "price-open": "开市价格",
    "price-average": "平均价格",
    "price-avg": "平均价格",
    "price": "价格",
    // ===
    "side": "方",
    "side-all": "全部",
    "side-sell": "卖方",
    "side-buy": "买方",
    // ===
    "type": "类型",
    "type-limit": "限价",
    "type-market": "市价",
    "type-stop": "止损",
    "type-trailing-stop": "移动止损",
    // ===
    "status": "状态",
    "status-all": "全部",
    "status-rejected": "被拒绝",
    "status-rejected-help": "订单被拒绝。",
    "status-live": "实时",
    "status-live-help": "订单实时交易",
    "status-cancelled": "已取消",
    "status-cancelled-help": "交易被取消",
    "status-filled": "达成",
    "status-filled-help": "交易已经达成",
    // ===
    "direction": "模式",
    "direction-help": "单向：只能提交买或卖的订单。<br />双向交易：可以提交买卖双向的订单。<br />平仓：提交等量反向订单来平衡仓位。",
    "direction-two-direction": "双向",
    "direction-net-out": "对向",
    "direction-netout": "对向",
    "direction-one-direction": "单向",
  },
  "order-cancel": {
    "title": "取消",
    "confirm": "取消订单",
  },
  "order-add": {
    "confirm-title": "订单确认",
    "confirm-action": "提交订单",
    "confirm-dismiss": "取消",
    "report-title": "订单已提交",
  },
  "order-edit": {
    "confirm": "更新订单",
  },
  "order-error": {
    "user-not-enough-fund": "您的账户资金不足",
    "direction-long-need-empty": "建立空仓前，需要清空多仓。",
    "direction-short-need-empty": "建立多仓前，需要清空空仓。",
    "price-bigger-than-min": "出价必须高于0。",
    "price-limit-bigger-than-market-bid": "卖出订单的限价交易价格必须高于市价",
    "price-limit-smaller-than-market-ask": "买入订单的限价交易价格必须小于市价",
    "price-stop-bigger-than-market-ask": "买入订单的市价交易价格必须高于市价",
    "price-stop-smaller-than-market-bid": "卖出订单的市价交易价格必须小于市价",
    "quantity-max-BTC": "订单数量不可超过 100 BTC。",
    "quantity-max-ETH": "订单数量不可超过 1000 ETH。",
    "quantity-min-BTC": "订单数量不可少于 0.01 BTC。",
    "quantity-min-ETH": "订单数量不可少于 0.5 ETH。",
    "quantity-integer": "订单数必须为整数",
    "user-free-margin-below-tolerance-level": "保证金应高于保证金要求额",
    "trailing-stop-value-must-be-positive": "只在订单盈余为正的情况下会触发移动止损。",
  },
  // ===
  "position": {
    "title": "仓位",
    // ===
    "status": "状态",
    "status-all": "全部",
    "status-closed": "关闭",
    "status-open": "创建",
    // ===
    "side": "方",
    "side-all": "全部",
    "side-long": "多头",
    "side-short": "空头",
    // ===
    "pnl": "损益",
    "pnl-close": "收盘损益",
    "pnl-open": "开盘损益",
    "pnl-realised": "实现盈亏",
    "pnl-total": "总损益",
    "pnl-unrealised": "未定盈亏",
    "pnl-w-fee": "损益及费用",
    // ===
    "price-close": "收盘价格",
    "price-liq": "速动价格",
    "price-mark": "标价",
    "price-open": "开盘价格",
    // ===
    "qty-close": "收盘数量",
    "qty-open": "开盘数量",
    "quantity": "数量",
    "quantity-close": "开盘数量",
    "quantity-open": "收盘数量",
    // ===
    "int-total": "Total Int.",
    "interest-total": "总盈利",
    // ===
    "created-at": "已创建于",
    "fee": "费用",
    "id": "身份",
    "leverage": "杠杆率",
    "margin": "保证金",
    "product": "产品",
    "sl": "SL",
    "stop-loss": "止损",
    "take-profit": "获利",
    "time": "时间",
    "tp": "TP",
    "updated-at": "已更新于",
    "value": "价值",
  },
  "position-claim": {
    "title": "执行",
    "confirm": "执行订单",
  },
  "position-close": {
    "title": "平仓",
    "confirm": "关闭仓位",
  },
  "position-edit": {
    "confirm": "更改仓位",
  },
  "position-error": {
    "you-do-not-have-enough-balance-to-claim-this-position": "您没有足够的余额执行此仓位",
    "close-quantity-larger-than-open-quantity": "平仓数量需小于建仓数量。",
    "stop-loss-larger-than-market-ask": "止损仓位需高于市价。",
    "stop-loss-smaller-than-market-bid": "止损仓位需低于市价。",
    "take-profit-larger-than-market-bid": "止盈仓位需高于市价。",
    "take-profit-smaller-than-market-ask": "止盈仓位需低于市价。",
    "claiming-this-position-will-result-in-a-margin-call-due-to-insufficient-free-margin-in-other-positions": "保证金不足，执行此仓位需追加保证金",
  },
  // ===
  "trans": {
    "title": "交易",
    "title-spine": "交易",
    "account": "账户",
    // ===
    "direction": "方向",
    "direction-all": "所有",
    "direction-in": "收入",
    "direction-out": "支出",
    // ===
    "created-at": "创建于",
    "id": "ID",
    "notes": "注释",
    "quantity-gross": "总量",
    "quantity-net": "净量",
    "business-date": "日期",
    "loan": "贷款",
    "loan-quantity": "数量",
    "loan-rate": "利率",
    "fee": "费用",
    "fee-exchange": "交易费用",
    "fee-network": "网络费用",
    "hash": "Hash",
    // ===
    "type": "类型",
    "type-all": "全部",
    "type-bought": "购得",
    "type-credit": "信用",
    "type-credit-new-register": "新用户信用",
    "type-credit-referrer": "Referral Credit",
    "type-cross-ccy-trade": "货币交易",
    "type-debit": "借方",
    "type-direct-trade": "交易",
    "type-fund": "存入",
    "type-hot-wallet-settlement": "取出",
    "type-interest-transfer": "利息转换",
    "type-loan": "贷款",
    "type-loan-fee": "利息费用",
    "type-loan-trade": "偿还",
    "type-repay": "偿还",
    "type-sold": "售出",
    "type-system-transfer": "系统转换",
    "type-trade-fee": "交易费用",
    "type-withdraw": "取出",
  },
  // ===
  "fund-withdrawal": {
    "message-documents-submitted": "您已提交账户认证所需材料。我们的工作人员正在审核您的资料。被确认并通过后，即可对账户进行存取款操作",
    // ===
    "message-declined": "您的账户认证申请被拒绝。",
    "help-declined": "请根据邮件中的提示重新在 目录 > 设置 > 个人账户 中重新提交材料",
    // ===
    "message-pending": "执行存取款操作前请先进行账户认证",
    "help-pending": "请在 目录 > 设置 > 个人账户 中上传您的身份证件",
    // ===
    "message-banned": "您的账户已被禁用",
    "help-banned": "请您尽快联系我们 support@quoine.com",
    // ===
    "message-limit-accounts": "目前我们仅提供 JPY、BTC 和 ETH 的存款/取款业务",
    // ===
    "message-need-tfa": "从安全方面考虑，没有二级验证码将不能进行取款操作",
    "help-need-tfa": "请到菜单 > 设置 > 安全中为账户开通二级认证。",
    // ===
    "goto-settings": "转至设置",
  },
  // ===
  "fund": {
    "title": "Fund",
    // ===
    "method": "存款方式",
    "method-bank": "银行",
    "method-cash": "现金",
    // ===
    "amount": "数额",
    "bank": "银行名称",
    "time": "创建于",
    "id": "身份",
    "notes": "备注",
    "notes-none": "(None)",
    "transaction-id": "交易单号",
    "inr-transfer": "INR 转账类型",
    "inr-transfer-note": "当前存款方式只适用于从本地印度账户向印度国内转账",
    "guide": "支付流程",
    "deadline": "截止日期",
    "status": "状态",
    // ===
    "recent-empty": "无近期存款",
    "recent-title": "近期存款",
    // ===
    "status-pending": "待定",
    "status-approved": "核准",
  },
  "fund-bank": {
    "help-1": "第一步",
    "help-1-note": "提交存款申请时，在存款清单中将为您提示唯一确认码 ",
    "help-2": "第二步. 向QRYPTOS的账户存入款项",
    "help-2-note": "请确认在您的支付清单中的唯一确认码是否一致",
    // ===
    "success": "谢谢，本次存款的唯一确认码为 {{id}}. 请继续第二步",
    // ===
    "submit": "提交",
    "open": "创建存款请求",
    "dismiss": "取消",
    // ===
    "not-support": "我们暂不支持以此货币的存款服务。如果您有任何问题请与我们联系",
  },
  "fund-cash": {
    "success-1": "请点击下面的链接，按提示操作",
    "success-2": "在款项正在处理中也可找到此链接。",
    "dismiss": "取消",
    "submit": "继续",
  },
  "fund-crypto": {
    "help": "请将款项存入如下地址",
    "help-XMR": "请将款项汇入下方提示的地址，并且保留支付单号，以便查询相关的汇款信息。",
    "help-XRP": "Ripple Base Reserve机制，即基本准备金制度，是指交易总账中的每个地址会要求存入一个指定数量的XRP作为基本准备金，目前被要求的基本准备金数量是20 XRP，在用户第一次汇入款项时自动留存。此后的交易中用户可以收到所有汇入的款项。",
    // ===
    "address": "地址",
    "payment-id": "支付单号",
    // ===
    "copy": "复制",
    "copy-address": "复制地址",
    "copy-payment-id": "复制支付单号",
  },
  "fund-error": {
    "you-are-not-approved": "您的账户需要被审核通过，才能执行存款操作",
  },
  // ===
  "withdrawal": {
    "title": "取款",
    "submit": "提交取款申请",
    // ===
    "not-support": "我们暂不支持此货币取款服务。如果您有任何问题请与我们联系",
    // ===
    "id": "ID",
    "time": "创建于",
    "quantity": "金额",
    "address": "{{ currency}} 地址",
    "bank": "银行名称",
    "inr-transfer": "INR转账类型",
    "inr-transfer-note": "当前存款方式只适用于从本地印度账户向印度国内转账",
    "code": "授权码",
    "fee": "费用",
    "fee-help": "(未包含银行收取的费用)",
    "maximum": "最高限额（每日）",
    "minimum": "最小限额（每笔）",
    "none": "无",
    "faq": "FAQ",
    // ===
    "recent-title": "最近的取款",
    "recent-empty": "以前的取款",
    // ===
    "success": "取款请求已提交",
    // ===
    "dismiss": "Dismiss",
    "check-email-message": "虚拟货币取款确认连接已发送到您的邮箱，请查收。本条链接有效期间为30分钟",
    // ===
    "status": "状态",
    "status-pending": "等待中",
    "status-processing": "处理中",
    "status-processed": "取款完成",
    "status-declined": "已删除",
    "status-cancelled": "已取消",
    "status-awaiting-confirmation": "未确认",
  },
  "withdrawal-cancel": {
    "confirm": "取消取款",
  },
  "withdrawal-error": {
    "bank-account-can-t-be-blank": "请选择一个银行账户",
    "can-not-cancel-withdrawal": "无法取消本次取款，如果您有任何问题请与我们联系",
    "withdrawal-cannot-be-canceled": "无法取消本次取款。",
    "quantity-must-be-larger-than-minimum": "交易额必须高于最小数量",
    "user-bitcoin-address-invalid": "这个Bitcoin地址无效，请确认",
    "user-not-enough-fund": "余额不足",
    "token-is-invalid": "此验证码无效",
    "verification-failed": "此授权码无效",
  },
  // ===
  "futures-balance": {
    "help-fund": "从BTC账户转入期货账户",
    "help-withdrawal": "从期货账户转入BTC账户",
    "balance-btc": "BTC余额",
    "balance-futures": "期货余额",
    "action-fund": "转账到期货账户",
    "action-withdrawal": "转账到BTC账户",
    "quantity": "数量",
    "success": "转账成功。",
  },
  "futures-balance-error": {
    "transfer-failed": "转账失败，请重试",
    "quantity-too-large": "转账金额无法超过余额",
  },
  // ===
  "bank": {
    "account-name": "账户名称",
    "account-number": "账号",
    "account-type": "账户类型",
    "bank-address": "银行地址",
    "bank-name": "银行名称",
    "bank-branch": "银行分行",
    "bank-swift": "银行代码",
    "country": "国家",
    "joint-account": "共同账户",
    "joint-account-name": "共同帐户持有人姓名",
    "joint-address": "共同帐户持有人地址",
    "joint-city": "J共同帐户城市",
    "joint-country": "共同帐户国家",
    "joint-document-id": "共同账户证明",
    "joint-document-address": "地址证明",
    "document": "银行账单",
    "document-uploaded": "文件已上传",
    "reason": "原因",
    "swift-check": "如果您的银行帐户位于日本，请选中此项。",
    // ===
    "status": "状态",
    "status-pending": "待定",
    "status-pending-help": "您可以提交取款申请，即使银行账户处于待定状态。",
    // ===
    "add-action": "添加银行账户",
    "add-submit": "添加银行账户",
    "add-dismiss": "回到取款页面",
    "add-success": "添加银行账户成功。您可以回到取款页面继续",
    // ===
    "edit-action": "更改",
    "edit-submit": "更改银行账户",
    "edit-dismiss": "回到取款页面",
    "edit-success": "银行账户内容更改成功。您可以回到取款页面继续",
    // ===
    "remove-confirm": "移除银行账户",
    "remove-action": "删除",
    "detail-show": "更多",
    "detail-hide": "隐藏",
  },
  "bank-error": {
    "acc-number-already-in-use-for-you": "此账号已被使用",
    "bank-statement-can-t-be-blank": "请上传银行账单",
    "bank-statement-you-are-not-allowed-to-upload-\"exe\"-files,-prohibited-types": "只支持上传图片或PDF文件",
    "country-can-t-be-blank": "国家不能为空",
    "joint-country-can-t-be-blank": "国家不能为空",
    "en-bank-account-errors-withdrawal-exist-can-not-delete-this-bank-account": "有取款业务正在使用此账户，如若移除此账户请先取消等待中的取款业务",
  },
  // ===
  "volume": {
    "title": "成交量",
    "action-close": "关闭",
    "from": "从",
    "to": "到",
    "range": "范围",
    "report-action": "发送邮件报告",
    "report-dismiss": "取消",
    "report-success": "报告已送出，请查收",
    "empty": "在指定时间段无任何交易的账户不会被显示",
  },
  "volume-error": {
    "choose-range-first": "请为邮件报告选择 \"从\" 和 \"至\" 日期",
  },
  // ===
  "charts": {
    "not-ready": "图表尚未准备好",
    "spine-title": "图表",
    "mode": "Mode",
    "mode-crypto-watch": "Crypto Watch",
    "mode-trading-view": "Trading View",
  },
  "trade-feed": {
    "title": "交易资讯",
  },
  "order-book": {
    "sells": "卖出",
    "buys": "买入",
    "mode": "模式",
    "mode-normal": "正常",
    "mode-depth-chart": "深度图",
  },
  "product": {
    "high": "最高价",
    "low": "最低价",
    "last": "最新价格",
    "volume": "24 小时交易量",
    "volume-short": "24 小时交易量",
  },
  // ===
  "mrg-acc": {
    "base-open-price": "基础价",
    "pnl": "损益",
    "pnl-total": "总损益",
    "position": "持仓",
    "position-total": "总持仓",
    "account": "账户",
    "product": "产品",
    // ===
    "side": "方向",
    "side-both": "全部",
    "side-short": "空头",
    "side-long": "多头",
    // ===
    "title-longs": "多头",
    "title-shorts": "空头",
  },
  "mrg-acc-close": {
    "confirm-title": "全部平仓",
    "confirm-description": "关闭符合条件的全部仓位",
    "confirm-action": "全部平仓",
    "confirm-dismiss": "取消",
    "report-title": "成功",
    "report-description": "{{ count }} {{ side }} 已被平仓",
    "report-long": "多头",
    "report-short": "空头",
    "action-both": "全部平仓",
    "action-long": "多头全部平仓",
    "action-short": "空头全部平仓",
  },
  "mrg-acc-manage": {
    "title": "管理产品",
    // ===
    "trading-title": "交易产品",
    "trading-description": "这些是与当前选定账户所关联的全部保证金交易产品。如果您选择隐藏产品，它将不会显示在控制面板顶部。隐藏产品不会影响您的交易账户或交易活动。",
    // ===
    "hidden-title": "隐藏产品",
    "hidden-description": "",
    // ===
    "add-title": "添加产品",
    "add-description": "这些是可以添加到当前选定账户的全部保证金交易产品。添加新产品后，您就可以使用当前选定账户的资金进行该产品的保证金交易。请注意，在一个账户内添加过多产品将可能导致加载时间变长",
    // ===
    "action-manage": "产品管理",
    "action-done": "完成",
    "action-hide": "隐藏",
    "action-show": "显示",
  },
  // ===
  "market": {
    "margin": "盈利",
    "futures": "期货",
    "spot": "现货",
  },
  // ===
  "futures": {
    "activate-description": "您尚未在期货市场中有过交易。确认后将为您创建用于期货交易的BTC账户。完成后系统将重新载入",
    "activate-cancel": "取消",
    "activate-title": "建立期货账户",
    "activate-action": "确认",
  },
  // ===
  "dashboard": {
    "basic": "账户总览及订单管理",
    "product": "订阅书籍及交易咨询",
    "chart": "图表",
    "blotter": "记录本",
  },
  "panels": {
    "expand": "扩展",
    "collapse": "崩溃",
  },
};
