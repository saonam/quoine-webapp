/* eslint-disable quotes, quote-props, max-len */

// quoine

export default {
  "account": {
    "balance": "余額",
    "balance-available": "可用余額",
    "balance-wallet": "錢包余額",
    // ===
    "balance-base": "虛擬貨幣余額",
    "balance-locked": "被鎖定余額",
    "balance-quote": "法定貨幣余額",
    "balance-all": "總余額(All Accounts)",
    "balance-total-crypto": "虛擬貨幣-總余額",
    "balance-total-fiat": "法定貨幣-總余額",
    // ===
    "equity": "股本",
    "loan-offers": "貸款優惠",
    "loaned": "借出",
    "loaned-interest": "已獲利息",
    // ===
    "limit-orders": "限價訂單",
    // ===
    "margin-available": "可用保證金",
    "margin-coverage": "保證金占比",
    "margin-used": "已用保證金",
    "margin": "保證金",
    "margin-withdrawable": "可取保證金",
    // ===
    "pnl": "盈余",
    "pnl-realised": "實際損益",
    "pnl-unrealised": "未定損益",
    // ===
    "spine-title": "賬戶",
    // ===
    "hint-futures": "期貨交易BTC賬戶",
  },
  "account-manage": {
    "title": "管理賬戶",
    // ===
    "trading-title": "交易賬戶",
    "trading-description": "如果選擇隱藏賬戶，則被隱藏賬戶將從頂端菜單中移除，但並不影響賬戶的余額和交易活動。暫時只能隱藏法定貨幣賬戶",
    // ===
    "hidden-title": "被隱藏賬戶",
    "hidden-description": "",
    // ===
    "add-title": "添加一個賬戶",
    "add-description": "可以對添加賬戶進行相應貨幣的存入，取出和交易等活動的操作",
    // ===
    "action-manage": "管理賬戶",
    "action-done": "完成",
    "action-fund": "存入/取出",
    "action-hide": "隱藏",
    "action-show": "顯示",
  },
  "accounts-warning": {
    "title": "賬戶頁面已被移動。",
    "description": "賬戶頁面在交易圖表頁面的最右側，不需要更換頁面就可以查看相關的賬戶信息（存取款項，余額，交易量和交易信息等）",
    "dismiss": "取消",
  },
  "menu": {
    "accounts": "賬戶",
    "dashboard": "交易圖表",
    "lending": "Lending",
    "settings": "設置",
    // ===
    "faq": "常見問題",
    "fee": "費用",
    "support": "支持",
    // ===
    "language": "語言",
    // ===
    "sign-out": "登出",
  },
  "language": {
    "title": "語言",
    "en": "英語",
    "ja": "日本語",
    "zhcn": "簡體中文",
    "zhtw": "繁體中文",
  },
  "tfa": {
    "sent-sms": "驗證碼已通過短信發送。",
    "sent-authy": "驗證碼已通過Authy發送。",
    "sent-email": "驗證碼已通過郵件發送。",
    "sent-ga": "验证码已经通过Google Authenticator发送。",
    // ===
    "resend": "Resend",
    "resend-sms": "通過短信重新發送",
    "send": "請求",
  },
  "error": {
    "network": "對不起，暫時無法處理提交的請求",
  },
  "tfa-error": {
    "en-authy-dos-protection-user-has-requested-too-many-tokens-in-the-last-hour": "您在一小時內請求次數太多。請稍後重試。",
    "en-authy-sms-token-was-not-sent": "驗證碼無法發送至您的手機。請重試。",
    "en-authy-token-is-invalid-token-was-used-recently": "驗證碼已被使用",
    "en-authy-monthly-sms-limit-reached": "验证码使用次数达到每月上限。",
  },
  "test": {
    "basic": "英語",
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
    "choose": "選擇文件",
    "change": "傳送文件",
  },
  "blotter": {
    "load": "加載更多",
    "loaded": "已全部加載",
  },
  "confirmation": {
    "skip": "不再顯示此信息",
    "skip-hint": "您可以在設定中重新打開",
    "no": "否",
    "yes": "是",
    "dismiss": "取消",
    "title": "確認",
    "help": "彈出確認窗口可以幫助您再次確認是否創建倉位或關閉倉位",
    "help-none": "尚未跳過任何確認信息，當您選擇跳過時可以從這裏選擇重新打開",
    "help-some": "以下是您已跳過的確認信息，點擊“X”可以從列表中刪除",
    "task-order-add-confirm": "創建訂單之前",
    "task-order-add-report": "創建訂單之後",
    "task-order-cancel-confirm": "取消訂單之前",
    "task-order-cancel-report": "取消訂單之後",
    "task-order-edit-confirm": "編輯訂單之前",
    "task-order-edit-report": "編輯訂單之後",
    "task-position-claim-confirm": "",
    "task-position-claim-report": "",
    "task-position-close-confirm": "關閉倉位之前",
    "task-position-close-report": "關閉倉位之後",
    "task-position-edit-confirm": "編輯倉位之前",
    "task-position-edit-report": "編輯倉位之後",
    "task-mrg-acc-close-confirm": "關閉所有倉位之前",
    "task-mrg-acc-close-report": "關閉所有倉位之後",
    "task-tokens-remove-confirm": "刪除API驗證碼之前",
    "task-tokens-remove-report": "刪除API驗證碼之後",
    "task-wdr-bank-remove-confirm": "刪除銀行賬戶之前",
    "task-wdr-bank-remove-report": "刪除銀行賬戶之後",
    "task-withdrawal-cancel-confirm": "取消取款之前",
    "task-withdrawal-cancel-report": "取消取款之後",
  },
  "form": {
    "cancel": "取消",
    "done": "完成",
  },
  "hint": {
    "done": "Done",
    "title": "Help",
  },
  "notifications": {
    "disable-trading": "你的賬戶尚未被驗證。請在菜單 > 設定 > 個人信息驗證 選項裏驗證您的賬戶",
    "dismiss": "取消",
  },
  "name": {
    "first": "名",
    "last": "姓",
  },
  "input": {
    "select-placeholder": "選擇…",
    "phone-title": "僅輸入數字",
  },
};
