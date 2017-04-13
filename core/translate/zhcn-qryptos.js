/* eslint-disable quotes, quote-props, max-len */

// quoine

export default {
  "account": {
    "balance": "余额",
    "balance-available": "可用余额",
    "balance-wallet": "钱包余额",
    // ===
    "balance-base": "加密余额",
    "balance-locked": "被锁定的余额",
    "balance-quote": "批准余额",
    "balance-all": "Balance (All Accounts)",
    "balance-total-crypto": "总加密余额",
    "balance-total-fiat": "总批准余额",
    // ===
    "equity": "股本",
    "loan-offers": "贷款优惠",
    "loaned": "借出",
    "loaned-interest": "已获利息",
    // ===
    "limit-orders": "限价订单",
    // ===
    "margin-available": "剩余可用的保证金",
    "margin-coverage": "保证金的覆盖率",
    "margin-used": "已使用的保证金",
    "margin": "页边距",
    "margin-withdrawable": "可提取的保证金",
    // ===
    "pnl": "损益表",
    "pnl-realised": "已实现的损益",
    "pnl-unrealised": "未实现的损益",
    // ===
    "spine-title": "账号",
    // ===
    "hint-futures": "未来交易的BTC账号",
  },
  "account-manage": {
    "title": "管理账号",
    // ===
    "trading-title": "交易账号",
    "trading-description": "您可以选择隐藏一个账号。它会从顶部菜单中隐藏，不影响余额或交易活动（如果有）。现在，只有法定账号可以被隐藏。",
    // ===
    "hidden-title": "隐藏账号",
    "hidden-description": "",
    // ===
    "add-title": "添加一个账号",
    "add-description": "添加账号让您能够投资、交易或取出货币。",
    // ===
    "action-manage": "管理账号",
    "action-done": "完成",
    "action-fund": "投资/取款",
    "action-hide": "隐藏",
    "action-show": "显示",
  },
  "accounts-warning": {
    "title": "账号主页已被移动。",
    "description": "账号主页现在和仪表盘在同一页上，仪表盘位于最右边。现在您不需要跳转到其他页面，就可以看见您QUOINE账号的所有信息（存款/取款、余额、成交量和交易。）",
    "dismiss": "取消",
  },
  "menu": {
    "accounts": "账户",
    "dashboard": "仪表盘",
    "lending": "Lending",
    "settings": "设置",
    // ===
    "faq": "常见问题",
    "fee": "费",
    "support": "支持",
    // ===
    "language": "语言",
    // ===
    "sign-out": "登出",
  },
  "language": {
    "title": "语言",
    "en": "英语",
    "ja": "日本語",
  },
  "error": {
    "network": "Sorry we cannot process your request at the moment.",
  },
  "tfa": {
    "sent-sms": "安全码已通过短信发送。",
    "sent-authy": "安全码已通过Authy发送。",
    "sent-email": "安全码已通过邮件发送。",
    "resend-sms": "通过短信重新发送",
    "send": "请求",
  },
  "tfa-error": {
    "en-authy-dos-protection-user-has-requested-too-many-tokens-in-the-last-hour": "您在前一小时内请求次数太多。请过一会儿再重试。",
    "en-authy-sms-token-was-not-sent": "安全码无法被发送至您的手机。请重试。",
    "en-authy-token-is-invalid-token-was-used-recently": "这个安全码不可用，因为它最近已被使用过。",
  },
  "test": {
    "basic": "英语",
    "interpolation": "quoine-{{name}}",
  },
  "month": {
    "1": "一月",
    "2": "二月",
    "3": "三月",
    "4": "四月",
    "5": "五月",
    "6": "六月",
    "7": "七月",
    "8": "八月",
    "9": "九月",
    "10": "十月",
    "11": "十一月",
    "12": "十二月",
  },
  "file": {
    "choose": "选择文件",
    "none": "未选择文件",
  },
  "blotter": {
    "load": "加载更多",
    "loaded": "已全部加载",
  },
  "confirmation": {
    "skip": "不再显示此信息（您可以在设置中重新打开确认。）",
    "skip-hint": "您可以在设定中再打开确认。",
    "no": "否",
    "yes": "是",
    "dismiss": "取消",
    "title": "确认",
    "help": "弹出确认帮助您在做重要交易决定，如创建订单或关闭职位时不犯错误。",
    "help-none": "您现在还没有跳过任何确认。当您跳过一个时，您可以在这里再打开。",
    "help-some": "以下是您跳过的确认。要再打开，点击 \"X\" 键把它从列表中移除。",
    "task-order-add-confirm": "创建订单之前",
    "task-order-add-report": "创建订单之后",
    "task-order-cancel-confirm": "取消订单之前",
    "task-order-cancel-report": "取消订单之后",
    "task-order-edit-confirm": "编辑订单之前",
    "task-order-edit-report": "编辑订单之后",
    "task-position-claim-confirm": "认领职位之前",
    "task-position-claim-report": "认领职位之后",
    "task-position-close-confirm": "关闭职位之前",
    "task-position-close-report": "关闭职位之后",
    "task-position-edit-confirm": "编辑职位之前",
    "task-position-edit-report": "编辑职位之后",
    "task-mrg-acc-close-confirm": "关闭所有职位之前",
    "task-mrg-acc-close-report": "关闭所有职位之后",
    "task-tokens-remove-confirm": "删除API代币之前",
    "task-tokens-remove-report": "删除API代币之后",
    "task-wdr-bank-remove-confirm": "删除银行账号之前",
    "task-wdr-bank-remove-report": "删除银行账号之后",
    "task-withdrawal-cancel-confirm": "取消取款之前",
    "task-withdrawal-cancel-report": "取消取款之后",
  },
  "form": {
    "cancel": "取消",
    "done": "完成",
  },
  "notifications": {
    "disable-trading": "交易会被禁用直到您的账号通过。请去菜单 > 设定 > 个人信息验证您的账号。",
    "dismiss": "取消",
  },
  "name": {
    "first": "名",
    "last": "姓",
  },
  "input": {
    "select-placeholder": "选择…",
    "phone-title": "仅输入数字",
  },
};
