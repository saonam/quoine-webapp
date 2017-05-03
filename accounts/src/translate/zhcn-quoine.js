/* eslint-disable quotes, quote-props, max-len */

// quoine

export default {
  "sign-in": {
    "title": "登录",
    "action": "登录",
    "email": "电子邮件地址",
    "password": "密码",
    "code": "验证码",
    "code-description": "需要验证码才能登录。该验证码已通过 Authy 或短信发送至您的手机。",
    "back": "返回",
    "new-text": "没有账户？",
    "new-or": "或者",
    // message
    "message-account-confirmed": "您的账户已确认。您现在可以登录。",
    "message-password-updated": "您的密码已更新。您现在可以使用新密码登录。",
    "message-signed-out": "您已经登出。",
    "message-need-sign-in": "请先登录。",
  },
  "sign-in-error": {
    "you-have-to-confirm-your-account-before-continuing": "请确认您的账户后再继续。",
    "your-password-is-incorrect": "您的密码不正确。",
    "token-is-invalid": "代码无效。",
    "invalid-email-or-password": "电子邮件地址或密码无效。",
    "verification-failed": "验证码无效。",
  },
  "forgot-password": {
    "action-resend": "重新发送密码重置链接",
    "action-send": "发送密码重置链接",
    "description": "请输入您的电子邮件地址以收取密码重置链接。",
    "title": "忘记密码？",
    "message-sent": "密码重置链接已发送。请在您的收件箱和/或垃圾箱找到该链接后继续操作。如果 10 分钟后仍未看到我们的电子邮件，请点击重新发送。",
    "email": "电子邮件地址",
  },
  "forgot-password-error": {
    "email-not-found": "未找到电子邮件地址。",
    "email-can-t-be-blank": "电子邮件地址必填。",
  },
  "reset-password": {
    "new-password": "新密码",
    "new-password-help": "Password must have at least 8 characters and contain at least 1 lowercase letter, 1 uppercase letter, and 1 number.",
    "token": "Reset Token",
    "token-help": "Please enter the reset token that was sent to your email address.",
    "action": "更新密码",
    "title": "重置密码",
  },
  "change-password": {
    "title": "更改密码",
    "action-submit": "更改",
    "action-cancel": "取消",
    "action-done": "完成",
    "input-next": "新密码",
    "input-current": "现有密码",
    "success": "您的密码已成功更新。",
  },
  "sign-up": {
    "title": "注册",
    "action-next": "下一项",
    "action-done": "完成",
    "action-sign-in": "转至登录页",
    "back": "返回",
    // ===
    "message-success": "感谢您注册。整个过程已接近完成！进一步指示将发送至您的电子邮件地址。",
    // ===
    "step-1": "1. 账户类型",
    "step-2": "2. 账户概览",
    "step-3": "3. 账户详情",
    "step-4": "4. 条款及条件",
    // ===
    "type-corporate-title": "公司",
    "type-corporate-description": "注册账户将用于公司。",
    "type-individual-title": "个人",
    "type-individual-description": "注册账户将用于个人。",
    // ===
    "email": "电子邮件",
    "email-help": "此电子邮件将用于登录您的账户。",
    "password": "密码",
    "password-help": "密码必须至少包含 8 个字符并且包含至少 1 个小写字母、1 个大写字母和 1 个数字。",
    "country": "居住国",
    "country-sure": "我确认我住在日本。",
    "country-sure-help": "如有任何变更，请在变更日起 3 个月内告知该变更情况。",
    "us": "美国纳税义务",
    "us-no": "否",
    "us-yes": "是",
    "us-help": "如果您是\"美国公民\"或\"美国居民（在美国有永久居留权的人，在美国居住超过 183 天的人\"），请选择\"是\"。",
    "referral": "促销码（选填）",
    "term-quoine": "我同意<a href=\"https://www.quoine.com/terms\" target=\"_blank\">条款及条件</a>。",
    "term-traders": "我同意<a href=\"https://min-btc.com/terms\" target=\"_blank\">条款及条件</a>。",
  },
  "sign-up-pi": {
    "name": "姓名",
    "nationality": "国籍",
    "address": "地址",
    "birth": "生日",
    "income": "主要收入来源",
    "income-employed": "就业",
    "income-other": "其他",
    "income-retired": "退休",
    "income-self-employed": "自雇业者",
    "income-job": "职位",
    "income-business-name": "企业名称",
    "income-business-type": "企业类型",
    "income-detail": "收入来源详情",
  },
  "sign-up-pc": {
    "name": "企业名称",
    "type": "企业类型",
    "address": "地址",
    "website": "网站",
    "tax-id": "TAX",
    "vat-id": "VAT",
  },
  "sign-up-error": {
    "email-has-already-been-taken": "此电子邮件已被占用。",
    "password-too-weak": "密码必须至少包含 8 个字符并且包含至少 1 个小写字母、1 个大写字母和 1 个数字。",
    "all-is-required": "所有字段都为必填项。",
    "terms": "请仔细阅读条款及条件并在接受它们后再继续。",
    "reset-password-token-can-t-be-blank": "重置密码尝试已过期。请返回首页并重试。",
    "reset-password-token-is-invalid": "重置密码尝试已过期。请返回首页并重试。",
    "reset-password-token-expired": "重置密码尝试已过期。请返回首页并重试。",
    "password-update-failed": "密码更新失败。",
    "your-password-is-incorrect": "您的密码不正确。",
  },
  "demo": {
    "title": "使用演示账户",
    "email": "演示账户电子邮件",
    "action": "进入演示模式",
    // ===
    "continue-title": "继续您的演示",
    "continue-overview": "使用您之前的演示账户继续您的交易进程。",
    "continue-description": "请输入您希望恢复的演示账户的电子邮件地址。",
    "continue-found": "下方是您在此浏览器上最后一次演示会话所用的地址。",
    // ===
    "new-title": "开始新的演示",
    "new-overview": "创建一个新的演示账户并尽情试用我们的应用及其功能！",
    "new-description": "下方电子邮件地址将用于为您创建一个演示账户。您可通过所有支持的系统和浏览器访问此演示账户，只要使用此地址恢复操作即可。",
  },
  "sign-out": {
    "action": "登出",
    "description": "点击登出以结束您在此标签页中的会话。当您关闭标签页时您也将自动登出。<br /><br />如要结束您在所有设备和浏览器中的会话，请勾选下方方框。",
    "all": "结束所有会话",
    "title": "您要登出吗？",
  },
  "settings": {
    "title": "设置",
    "back-to-trading": "返回交易",
    // ===
    "application-title": "申请",
    "theme-title": "主题",
    // ===
    "profile-title": "个人资料",
    // ===
    "security-title": "安全",
    "password-title": "密码",
    "sign-in-title": "登录",
    // ===
    "api-title": "应用程序界面",
  },
  "daily-report": {
    "title": "报告",
    "label": "接收每日报告",
  },
  "user": {
    "verification": "核验",
    // ===
    "status": "状态",
    "status-documents-submitted": "文件已提交",
    "status-approved": "已批准",
    "status-declined": "已拒绝",
    "status-pending": "待定",
    // ===
    "help-documents-submitted": "您的文件已上传。我们的员工将很快审阅并批准您的账户。请注意账户核验过程需要 1-2 个工作日。",
    "help-approved": "您的账户已被批准。无需进一步操作。",
    "help-declined": "您的账户核准请求已被拒绝。请注意以下指示并更新您的文件：{{ reason }}.",
    "help-pending": "您的账户尚未得到核准。请上传以下文件供账户核准使用：",
    "help-pending-jp": "您的账户尚未得到核准。请上传以下文件供账户核准使用：",
    "help-pending-jp-link": "文件说明",
    // ===
    "document-id": "身份文件",
    "document-id-help": "",
    "document-address": "地址证明",
    "document-address-help": "",
    "document-bank": "银行账单",
    "document-bank-help": "",
    "document-action": "提交文件",
    // ===
    "id": "用户身份",
    "first-name": "名",
    "last-name": "姓",
    "email": "电子邮件",
    "since": "注册日",
    "affiliate-code": "联盟代码",
  },
  "user-error": {
    "invalid-types": "请检查您的文件类型。允许以下类型：pdf、xps、jpg、jpeg、png 和 gif。",
  },
  "edit-user": {
    "title": "更新用户个人资料",
    "action": "更新用户个人资料",
    "action-submit": "提交",
    "action-cancel": "取消",
    "description": "如果您成为美国公民，将适用不同的 KYC/AML 规定，因此请通过 support@quoine.com 联系我们。",
    "message-no-changes": "Your information has not been changed.",
  },
  "tfa-manage": {
    "phone": "电话",
    "title": "双重验证",
    "status-enabled": "启用",
    "status-not-enabled": "尚未启用",
    // ===
    "help-change-phone": "如要更改您的电话号码，请通过 support@quoine.com 联系我们的支持人员。",
    // ===
    "add-phone-title": "添加电话号码",
    "add-phone-action": "添加",
    "add-phone-label": "电话号码",
    "add-phone-description": "请输入新的电话号码。",
    // ===
    "toggle-title-enable": "启用",
    "toggle-title-disable": "禁用",
    "toggle-action-enable": "启用",
    "toggle-action-disable": "禁用",
    "toggle-description": "请输入发送至您电话的代码。",
    "toggle-label": "验证码",
    // ===
    "action-cancel": "取消",
    "action-done": "确认",
  },
  "tfa-manage-error": {
    "en-authy-token-is-blank": "验证码为必填项。",
    "token-is-invalid": "令牌无效。",
  },
  "token": {
    "id": "编号",
    "value": "令牌/密钥",
    "value-copy": "复制",
    "permissions": "权限",
    "none": "无",
    "value-message": "This Token/Secret is displayed one time only.",
    // ===
    "remove-title": "删除令牌",
    "remove-action": "删除",
    "remove-description": "您确定要删除此令牌吗？使用该令牌的所有设备和应用程序都将立即失去授权。",
    // ===
    "add-title": "创建新的 API 令牌",
    "add-description": "请为新令牌选择许可权限：",
    "add-action-submit": "创建令牌",
    "add-action-cancel": "取消",
    // ===
    "action-r": "读取",
    "action-w": "写入",
    // ===
    "name-accounts": "账户",
    "name-executions": "执行",
    "name-orders": "订单",
    "name-trades": "仓位",
    "name-trading-accounts": "交易账户",
  },
};
