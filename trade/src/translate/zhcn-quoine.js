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
    "spine-title": "资金及提现",
    "account": "Account",
  },
  "volume-balance-panel": {
    "title-spine": "Volumes & Balances",
  },
  "blotters": {
    "spine-title": "订单、持仓及交易",
  },
  "balance": {
    "title": "Total Balance",
    "currency": "Currency",
    "total-fiat": "Total Fiat Balance",
    "total-crypto": "Total Crypto Balance",
    "total-balance": "Total Balance",
  },
  "execution": {
    "title": "交易",
    // ===
    "side": "方",
    "side-all": "全部",
    "side-buy": "购买",
    "side-sell": "销售",
    // ===
    "created-at": "已创建在",
    "id": "身份",
    "order-id": "订单 ID",
    "price": "价格",
    "product": "产品",
    "quantity": "数量",
    "time": "时间",
    // ===
    "target": "目标",
    "target-new": "新",
    "target-settle": "解决",
    "target-spot": "Spot",
  },
  // ===
  "order": {
    "title": "订单",
    // ===
    "distance": "价格差距",
    "distance-type": "差距类型",
    "distance-type-fiat": "批准",
    "distance-type-percentage": "百分率",
    // ===
    "margin": "保证金",
    "fx-rate": "汇率 ({{ first }}/{{ second }})",
    "cost": "预期成本",
    "fee": "费",
    "filled": "填写的",
    "id": "ID",
    "interest": "每日利息",
    "leverage": "资本负债比率",
    "leverage-help": "杠杆越大，风险越大。在进行此类交易前，请确保您充分了解可能涉及的风险。",
    "product": "产品",
    "slippage": "下降",
    "spot": "现货买卖的",
    "time": "时间",
    "created-at": "已创建于",
    // ===
    "quantity": "数量",
    "quantity-disclose": "披露数量",
    "qty-filled": "填写的数量",
    "qty-disc": "披露数量",
    "qty-disclose": "披露数量",
    // ===
    "target": "目标",
    "target-settle": "结算",
    "target-spot": "Spot",
    // ===
    "price-open": "公开价格",
    "price-average": "平均价格",
    "price-avg": "平均价格",
    "price": "价格",
    // ===
    "side": "方",
    "side-all": "全部",
    "side-sell": "销售",
    "side-buy": "购买",
    // ===
    "type": "类型",
    "type-limit": "限制",
    "type-market": "市场",
    "type-stop": "停止",
    "type-trailing-stop": "移动止损",
    // ===
    "status": "状态",
    "status-all": "全部",
    "status-rejected": "被拒绝的",
    "status-rejected-help": "交易已被拒绝。",
    "status-live": "即时的",
    "status-live-help": "交易当前有效",
    "status-cancelled": "已取消",
    "status-cancelled-help": "交易已被取消",
    "status-filled": "填写的",
    "status-filled-help": "交易已经达成",
    // ===
    "direction": "模式",
    "direction-help": "单向：只能提交买或卖地订单。<br />双向交易：可以提交买卖双向的订单。<br />平仓：提交等量反向订单来平衡仓位。",
    "direction-two-direction": "双向",
    "direction-net-out": "净收入",
    "direction-netout": "净收入",
    "direction-one-direction": "单向",
  },
  "order-cancel": {
    "title": "取消",
    "confirm": "取消订单？",
  },
  "order-add": {
    "confirm-title": "确认订单",
    "confirm-action": "提交订单",
    "confirm-dismiss": "取消",
    "report-title": "订单已提交",
  },
  "order-edit": {
    "confirm": "更新此订单？",
  },
  "order-error": {
    "user-not-enough-fund": "您的账户资金不足。",
    "direction-long-need-empty": "建立空头持仓前，需清空多头持仓。",
    "direction-short-need-empty": "建立多头持仓前，需要清空空头持仓。",
    "price-bigger-than-min": "您的出价需高于0。",
    "price-limit-bigger-than-market-bid": "所限定的售出订单价格需高于当前市价，",
    "price-limit-smaller-than-market-ask": "所限定的购买订单价格需低于当前市价。",
    "price-stop-bigger-than-market-ask": "购买订单的止损价格需高于当前市价。",
    "price-stop-smaller-than-market-bid": "售出订单的止损价格需低于当前市价。",
    "quantity-max-BTC": "订单数量不可超过 100 BTC。",
    "quantity-max-ETH": "订单数量不可超过 1000 ETH。",
    "quantity-min-BTC": "订单数量不可少于 0.01 BTC。",
    "quantity-min-ETH": "订单数量不可少于 0.5 ETH。",
    "quantity-integer": "订单数必须为整数",
    "user-free-margin-below-tolerance-level": "Free margin is below tolerance level",
  },
  // ===
  "position": {
    "title": "仓位",
    // ===
    "status": "状态",
    "status-all": "全部",
    "status-closed": "已关闭",
    "status-open": "公开",
    // ===
    "side": "方",
    "side-all": "全部",
    "side-long": "长",
    "side-short": "不足的",
    // ===
    "pnl": "损益表L",
    "pnl-close": "已兑现盈亏",
    "pnl-open": "未兑盈亏",
    "pnl-realised": "已实现的盈亏",
    "pnl-total": "总损益表",
    "pnl-unrealised": "未实现的盈亏",
    "pnl-w-fee": "损益表及费用",
    // ===
    "price-close": "成交价",
    "price-liq": "速动价格",
    "price-mark": "标价",
    "price-open": "开盘价格",
    // ===
    "qty-close": "关闭数量",
    "qty-open": "打开数量",
    "quantity": "数量",
    "quantity-close": "关闭数量",
    "quantity-open": "打开数量",
    // ===
    "int-total": "Total Int.",
    "interest-total": "总盈利",
    // ===
    "created-at": "已创建于",
    "fee": "费",
    "id": "身份",
    "leverage": "资本负债比率",
    "margin": "保证金",
    "product": "产品",
    "sl": "SL",
    "stop-loss": "止损",
    "take-profit": "获利",
    "time": "时间",
    "tp": "市场促销费用",
    "updated-at": "已更新，于",
    "value": "价值",
  },
  "position-claim": {
    "title": "执行",
    "confirm": "执行此头寸？",
  },
  "position-close": {
    "title": "平仓",
    "confirm": "平仓？",
  },
  "position-edit": {
    "confirm": "更新仓位？",
  },
  "position-error": {
    "you-do-not-have-enough-balance-to-claim-this-position": "您没有足够的余额来执行此头寸",
    "close-quantity-larger-than-open-quantity": "平仓数量需小于建仓数量。",
    "stop-loss-larger-than-market-ask": "止损仓位需高于市价。",
    "stop-loss-smaller-than-market-bid": "止损仓位需低于市价。",
    "take-profit-larger-than-market-bid": "止盈仓位需高于市价。",
    "take-profit-smaller-than-market-ask": "止盈仓位需低于市价。",
    "claiming-this-position-will-result-in-a-margin-call-due-to-insufficient-free-margin-in-other-positions": "Claiming this position will result in a margin call due to insufficient free margin in other positions.",
  },
  // ===
  "trans": {
    "title": "交易",
    "title-spine": "交易",
    "account": "账户",
    // ===
    "direction": "方向",
    "direction-all": "所有",
    "direction-in": "入向",
    "direction-out": "出向",
    // ===
    "created-at": "Created At",
    "id": "ID",
    "notes": "注释",
    "quantity-gross": "总量",
    "quantity-net": "净量",
    "business-date": "商务日期",
    "loan": "贷款",
    "loan-quantity": "数量",
    "loan-rate": "利率",
    "fee": "费用",
    "fee-exchange": "交易费用",
    "fee-network": "网络费用",
    "hash": "Hash",
    // ===
    "state": "状态",
    "state-pending": "待处理",
    // ===
    "type": "类型",
    "type-all": "全部",
    "type-bought": "Bought",
    "type-credit": "信用",
    "type-credit-new-register": "新用户信用",
    "type-credit-referrer": "Referral Credit",
    "type-cross-ccy-trade": "Cross CCY Trade",
    "type-debit": "贷记",
    "type-direct-trade": "交易",
    "type-fund": "Funding",
    "type-hot-wallet-settlement": "取回",
    "type-interest-transfer": "利息转账",
    "type-loan": "贷款",
    "type-loan-fee": "利息支付费用",
    "type-loan-trade": "偿还",
    "type-repay": "偿还",
    "type-sold": "已售",
    "type-system-transfer": "系统转账",
    "type-trade-fee": "交易费用",
    "type-withdraw": "取回",
  },
  // ===
  "fund-withdrawal": {
    "message-documents-submitted": "您已提交账户认证所需材料。我们的工作人员正在审核您的资料。当您的账户被确认并通过后，即可进行出入金操作。",
    // ===
    "message-declined": "您的账户认证申请被拒绝。",
    "help-declined": "请根据邮件中的提示重新在 目录 > 设置 > 个人账户 中重新提交材料。",
    // ===
    "message-pending": "执行出入金操作前请先进行账户认证。",
    "help-pending": "请在 目录 > 设置 > 个人账户 中上传您的身份证件。",
    // ===
    "message-limit-accounts": "目前我们仅支持 JPY、BTC 和 ETH 的存款/取款。",
    // ===
    "message-need-tfa": "在这个点位交易会使其他点位交易的可用保证金不足从而导致追加保证金。",
    "help-need-tfa": "请到菜单 > 设置 > 安全中为您的账户开启 2 步认证。",
    // ===
    "goto-settings": "转至设置",
  },
  // ===
  "fund": {
    "title": "Fund",
    // ===
    "method": "入金方式",
    "method-bank": "银行",
    "method-cash": "现金",
    // ===
    "amount": "数额",
    "bank": "银行名称",
    "time": "Created At",
    "id": "唯一确认码",
    "notes": "Note",
    "notes-none": "(None)",
    "transaction-id": "交易号",
    "inr-transfer": "INR 转账类型",
    "inr-transfer-note": "当前存款方式只适用于从本地印度账户的INR国内转账。",
    "guide": "支付流程",
    "deadline": "截止日期",
    // ===
    "pending-empty": "没有等待中的资金",
    "pending-title": "等待中资金",
  },
  "fund-bank": {
    "help-1": "第一步",
    "help-1-note": "提交入金申请时，您会收到一个 \"唯一确认码\"，请在存款时填写。",
    "help-2": "第二步. 向我们的账户存入款项",
    "help-2-note": "请确认在支付过程中填入在第一步中收到的 \"唯一确认码\" ",
    // ===
    "success": "谢谢！本次入金的 \"唯一确认码\" 为 {{id}}. 请继续第二步。",
    // ===
    "submit": "提交",
    "open": "创建入金请求",
    "dismiss": "取消",
    // ===
    "not-support": "我们暂不支持以此货币入金。如有疑问请联系我们",
  },
  "fund-cash": {
    "success-1": "请点击下面的链接，按提示操作",
    "success-2": "在\"等待中的资金\" 中也可找到此链接。",
    "dismiss": "取消",
    "submit": "继续",
  },
  "fund-crypto": {
    "help": "请将款项存入如下地址",
    "copy": "复制地址",
  },
  "fund-error": {
    "you-are-not-approved": "您的账户需要被审核通过，才能执行入金",
  },
  // ===
  "withdrawal": {
    "title": "出金",
    "submit": "提交出金申请",
    // ===
    "not-support": "我们暂不支持以此货币出金。如有疑问请联系我们",
    // ===
    "id": "ID",
    "time": "Created At",
    "account": "账户",
    "quantity": "金额",
    "address": "{{ currency}} Address",
    "bank": "银行名称",
    "inr-transfer": "INR转账类型",
    "code": "授权码",
    "fee": "我们收取的费用",
    "fee-help": "(未包含银行收取的费用)",
    "maximum": "最高限额（每日）",
    "minimum": "最小限额（每笔）",
    "none": "无",
    // ===
    "pending-title": "等待中的出金",
    "pending-empty": "无等待中的出金",
    // ===
    "success": "出金请求已提交",
  },
  "withdrawal-cancel": {
    "confirm": "取消出金？",
  },
  "withdrawal-error": {
    "bank-account-can-t-be-blank": "请选择一个银行账户",
    "can-not-cancel-withdrawal": "无法取消本次出金。如有疑问请联系我们",
    "withdrawal-cannot-be-canceled": "无法取消本次出金。",
    "quantity-must-be-larger-than-minimum": "必须高于最小数量",
    "user-bitcoin-address-invalid": "这个Bitcoin地址无效，请检查",
    "user-not-enough-fund": "余额不足",
    "token-is-invalid": "此券无效",
    "verification-failed": "此授权码无效",
  },
 // ===
  "futures-balance": {
    "help-fund": "请从您的BTC账户转账，以为您的期货账户充值。",
    "help-withdrawal": "请向您的BTC账户转账，以从您的期货账户取款。",
    "balance-btc": "BTC余额",
    "balance-futures": "期货余额",
    "action-fund": "转账到期货账户",
    "action-withdrawal": "转账到BTC账户",
    "quantity": "数量",
    "success": "转账成功。",
  },
  "futures-balance-error": {
    "transfer-failed": "转账失败，请重试",
    "quantity-too-large": "转账数量不得超过余额",
  },
  // ===
  "bank": {
    "account-name": "账户名称",
    "account-number": "账号",
    "account-type": "账户类型",
    "bank-address": "银行地址",
    "bank-name": "银行名称",
    "bank-branch": "银行分行",
    "bank-swift": "银行迅速代码",
    "country": "国家",
    "joint-account": "联名账户",
    "joint-account-name": "联名帐户持有人姓名",
    "joint-address": "联名帐户持有人地址",
    "joint-city": "J联名帐户城市",
    "joint-country": "联名帐户国家",
    "joint-document-id": "ID 文件",
    "joint-document-address": "地址证明",
    "document": "银行账单",
    "document-uploaded": "文件已上传",
    "reason": "原因",
    "swift-check": "如果您的银行帐户位于日本，请选中此项。",
    // ===
    "status": "状态",
    "status-pending": "待定",
    "status-pending-help": "您仍然可以提交出金申请，即使您的银行账户仍在等待中。",
    // ===
    "add-action": "添加银行账户",
    "add-submit": "添加银行账户",
    "add-dismiss": "回到取款页面",
    "add-success": "添加银行账户成功。您可以回到取款页面继续",
    // ===
    "edit-action": "更改",
    "edit-submit": "更改银行账户",
    "edit-dismiss": "回到取款页面",
    "edit-success": "银行账户更改成功。您可以回到取款页面继续",
    // ===
    "remove-confirm": "删除这个银行账户？",
    "remove-action": "删除",
    "detail-show": "更多",
    "detail-hide": "隐藏",
  },
  "bank-error": {
    "acc-number-already-in-use-for-you": "此账号已被使用",
    "bank-statement-can-t-be-blank": "请上传银行账单",
    "bank-statement-you-are-not-allowed-to-upload-\"exe\"-files,-prohibited-types": "您只能上传图片或PDF文件",
    "country-can-t-be-blank": "国家为必填项",
    "joint-country-can-t-be-blank": "国家为必填项",
    "en-bank-account-errors-withdrawal-exist-can-not-delete-this-bank-account": "这个银行账户无法删除。因为有一笔等待中的取款。请先取消等待中的取款。",
  },
  // ===
  "volume": {
    "title": "累计交易量",
    "action-close": "关闭",
    "from": "从",
    "to": "到",
    "range": "范围",
    "report-action": "发送邮件报告",
    "report-dismiss": "取消",
    "report-success": "报告已寄出，请在您的邮箱中查收",
    "empty": "在指定时间段无任何交易的账户不会被显示",
  },
  "volume-error": {
    "choose-range-first": "请为邮件报告选择 \"从\" 和 \"至\" 日期",
  },
  // ===
  "charts": {
    "not-ready": "报表尚未准备好",
    "spine-title": "表格",
  },
  "trade-feed": {
    "title": "交易资讯",
  },
  "order-book": {
    "sells": "卖出",
    "buys": "买入",
    "mode": "Mode",
    "mode-normal": "Normal",
    "mode-depth-chart": "Depth Chart",
  },
  "product": {
    "high": "高",
    "low": "低",
    "last": "最新价格",
    "volume": "24 小时量",
    "volume-short": "24 小时量",
  },
  // ===
  "mrg-acc": {
    "base-open-price": "基础价",
    "pnl": "P&L",
    "pnl-total": "总P&L",
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
    "confirm-description": "以下仓位将全部平仓",
    "confirm-action": "全部平仓",
    "confirm-dismiss": "取消",
    "report-title": "成功",
    "report-description": "{{ count }} {{ side }} 已全部平仓",
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
    "trading-description": "这些是与当前选定账户所关联的全部保证金交易产品。如果您选择隐藏产品，它将不会显示在控制面板头部。隐藏产品不会影响您的交易账户或交易活动。",
    // ===
    "hidden-title": "隐藏产品",
    "hidden-description": "",
    // ===
    "add-title": "添加产品",
    "add-description": "这些是可以添加到当前选定账户的全部保证金交易产品。添加新产品后，您就可以使用当前选定账户的资金进行该产品的保证金交易。请注意，在一个账户内添加过多产品可能会增加加载时间。",
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
    "spot": "Spot",
  },
  // ===
  "futures": {
    "activate-description": "您尚未没有在期货市场有过交易。在您确认后，我们会为您创建一个用于期货交易的BTC账户。完成后APP将重新启动。",
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
