/* eslint-disable quotes, quote-props, max-len */

// quoine

export default {
  "account": {
    "balance": "余额",
    "balance-available": "可用余额",
    "balance-wallet": "钱包余额",
    // ===
    "balance-base": "虚拟货币余额",
    "balance-locked": "被锁定余额",
    "balance-quote": "法定货币余额",
    "balance-all": "总余额(All Accounts)",
    "balance-total-crypto": "虚拟货币-总余额",
    "balance-total-fiat": "法定货币-总余额",
    // ===
    "equity": "股本",
    "loan-offers": "贷款优惠",
    "loaned": "借出",
    "loaned-interest": "已获利息",
    // ===
    "limit-orders": "限价订单",
    // ===
    "margin-available": "可用保证金",
    "margin-coverage": "保证金占比",
    "margin-used": "已用保证金",
    "margin": "保证金",
    "margin-withdrawable": "可取保证金",
    // ===
    "pnl": "盈余",
    "pnl-realised": "实际损益",
    "pnl-unrealised": "未定损益",
    // ===
    "spine-title": "账户",
    // ===
    "hint-futures": "期货交易BTC账户",
  },
  "account-manage": {
    "title": "管理账户",
    // ===
    "trading-title": "交易账户",
    "trading-description": "如果选择隐藏账户，则被隐藏账户将从顶端菜单中移除，但并不影响账户的余额和交易活动。暂时只能隐藏法定货币账户",
    // ===
    "hidden-title": "被隐藏账户",
    "hidden-description": "",
    // ===
    "add-title": "添加一个账户",
    "add-description": "可以对添加账户进行相应货币的存入，取出和交易等活动的操作",
    // ===
    "action-manage": "管理账户",
    "action-done": "完成",
    "action-fund": "存入/取出",
    "action-hide": "隐藏",
    "action-show": "显示",
  },
  "accounts-warning": {
    "title": "账户页面已被移动。",
    "description": "账户页面在交易图表页面的最右侧，不需要更换页面就可以查看相关的账户信息（存取款项，余额，交易量和交易信息等）",
    "dismiss": "取消",
  },
  "menu": {
    "accounts": "账户",
    "dashboard": "交易图表",
    "lending": "借出",
    "settings": "设置",
    // ===
    "faq": "常见问题",
    "fee": "费用",
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
    "zhcn": "简体中文",
    "zhtw": "繁体中文",
  },
  "tfa": {
    "sent-sms": "验证码已通过短信发送。",
    "sent-authy": "验证码已通过Authy发送。",
    "sent-email": "验证码已通过邮件发送。",
    "sent-ga": "验证码已经通过Google Authenticator发送。",
    // ===
    "resend": "重新发送",
    "resend-sms": "通过短信重新发送",
    "send": "请求",
  },
  "error": {
    "network": "对不起，暂时无法处理提交的请求",
  },
  "tfa-error": {
    "en-authy-dos-protection-user-has-requested-too-many-tokens-in-the-last-hour": "您在一小时内请求次数太多。请稍后重试。",
    "en-authy-sms-token-was-not-sent": "验证码无法发送至您的手机。请重试。",
    "en-authy-token-is-invalid-token-was-used-recently": "验证码已被使用",
    "en-authy-monthly-sms-limit-reached": "验证码使用次数达到每月上限。",
  },
  "test": {
    "basic": "英语",
    "interpolation": "quoine-{{name}}",
  },
  "month": {
    "1": "1月",
    "2": "2月",
    "3": "2月",
    "4": "4月",
    "5": "5月",
    "6": "6月",
    "7": "7月",
    "8": "8月",
    "9": "9月",
    "10": "10月",
    "11": "11月",
    "12": "12月",
  },
  "file": {
    "choose": "选择文件",
    "change": "上传文件",
  },
  "blotter": {
    "load": "加载更多",
    "loaded": "已全部加载",
  },
  "confirmation": {
    "skip": "不再显示此信息",
    "skip-hint": "您可以在设定中重新打开",
    "no": "否",
    "yes": "是",
    "dismiss": "取消",
    "title": "确认",
    "help": "弹出确认窗口可以帮助您再次确认是否创建仓位或关闭仓位",
    "help-none": "尚未跳过任何确认信息，当您选择跳过时可以从这里选择重新打开",
    "help-some": "以下是您已跳过的确认信息，点击“X”可以从列表中删除",
    "task-order-add-confirm": "创建订单之前",
    "task-order-add-report": "创建订单之后",
    "task-order-cancel-confirm": "取消订单之前",
    "task-order-cancel-report": "取消订单之后",
    "task-order-edit-confirm": "编辑订单之前",
    "task-order-edit-report": "编辑订单之后",
    "task-position-claim-confirm": "",
    "task-position-claim-report": "",
    "task-position-close-confirm": "关闭仓位之前",
    "task-position-close-report": "关闭仓位之后",
    "task-position-edit-confirm": "编辑仓位之前",
    "task-position-edit-report": "编辑仓位之后",
    "task-mrg-acc-close-confirm": "关闭所有仓位之前",
    "task-mrg-acc-close-report": "关闭所有仓位之后",
    "task-tokens-remove-confirm": "删除API验证码之前",
    "task-tokens-remove-report": "删除API验证码之后",
    "task-wdr-bank-remove-confirm": "删除银行账户之前",
    "task-wdr-bank-remove-report": "删除银行账户之后",
    "task-withdrawal-cancel-confirm": "取消取款之前",
    "task-withdrawal-cancel-report": "取消取款之后",
  },
  "form": {
    "cancel": "取消",
    "done": "完成",
  },
  "hint": {
    "done": "完成",
    "title": "帮助",
  },
  "notifications": {
    "disable-trading": "你的账户尚未被验证。请在菜单 > 设定 > 个人信息验证 选项里验证您的账户",
    "need-enable-tfa": "为确保您的账户安全，请设置双因子验证",
    "need-change-tfa-type-to-ga": "通过短信和Authy发送验证码的服务将在近期停运，请在设置>安全选项中将您的双因子验证更新至Google Authenticator应用",
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
