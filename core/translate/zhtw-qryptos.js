/* eslint-disable quotes, quote-props, max-len */

// quoine

export default {
  "account": {
    "balance": "餘額",
    "balance-available": "可用餘額",
    "balance-wallet": "錢包餘額",
    // ===
    "balance-base": "加密餘額",
    "balance-locked": "被鎖定的餘額",
    "balance-quote": "批准餘額",
    "balance-all": "Balance (All Accounts)",
    "balance-total-crypto": "總加密餘額",
    "balance-total-fiat": "總批准餘額",
    // ===
    "equity": "股本",
    "loan-offers": "貸款優惠",
    "loaned": "借出",
    "loaned-interest": "已獲利息",
    // ===
    "limit-orders": "限價訂單",
    // ===
    "margin-available": "剩餘可用的保證金",
    "margin-coverage": "保證金的覆蓋率",
    "margin-used": "已使用的保證金",
    "margin": "頁邊距",
    "margin-withdrawable": "可提取的保證金",
    // ===
    "pnl": "損益表",
    "pnl-realised": "已實現的損益",
    "pnl-unrealised": "未實現的損益",
    // ===
    "spine-title": "賬號",
    // ===
    "hint-futures": "未來交易的BTC賬號",
  },
  "account-manage": {
    "title": "管理賬號",
    // ===
    "trading-title": "交易賬號",
    "trading-description": "您可以選擇隱藏一個賬號。它會從頂部菜單中隱藏，不影響餘額或交易活動（如果有）。現在，只有法定賬號可以被隱藏。",
    // ===
    "hidden-title": "隱藏賬號",
    "hidden-description": "",
    // ===
    "add-title": "添加一個賬號",
    "add-description": "添加賬號讓您能夠投資、交易或取出貨幣。",
    // ===
    "action-manage": "管理賬號",
    "action-done": "完成",
    "action-fund": "投資/取款",
    "action-hide": "隱藏",
    "action-show": "顯示",
  },
  "accounts-warning": {
    "title": "賬號主頁已被移動。",
    "description": "賬號主頁現在和儀錶盤在同一頁上，儀錶盤位於最右邊。現在您不需要跳轉到其他頁面，就可以看見您QUOINE賬號的所有信息（存款/取款、餘額、成交量和交易。）",
    "dismiss": "取消",
  },
  "menu": {
    "accounts": "賬戶",
    "dashboard": "儀錶盤",
    "lending": "Lending",
    "settings": "設置",
    // ===
    "faq": "常見問題",
    "fee": "費",
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
  },
  "error": {
    "network": "Sorry we cannot process your request at the moment.",
  },
  "tfa": {
    "sent-sms": "安全碼已通過短信發送。",
    "sent-authy": "安全碼已通過Authy發送。",
    "sent-email": "安全碼已通過郵件發送。",
    "resend-sms": "通過短信重新發送",
    "send": "請求",
  },
  "tfa-error": {
    "en-authy-dos-protection-user-has-requested-too-many-tokens-in-the-last-hour": "您在前一小時內請求次數太多。請過一會兒再重試。",
    "en-authy-sms-token-was-not-sent": "安全碼無法被發送至您的手機。請重試。",
    "en-authy-token-is-invalid-token-was-used-recently": "這個安全碼不可用，因為它最近已被使用過。",
  },
  "test": {
    "basic": "英語",
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
    "choose": "選擇文件",
    "none": "未選擇文件",
  },
  "blotter": {
    "load": "加載更多",
    "loaded": "已全部加載",
  },
  "confirmation": {
    "skip": "不再顯示此信息（您可以在設置中重新打開確認。）",
    "skip-hint": "您可以在設定中再打開確認。",
    "no": "否",
    "yes": "是",
    "dismiss": "取消",
    "title": "確認",
    "help": "彈出確認幫助您在做重要交易決定，如創建訂單或關閉職位時不犯錯誤。",
    "help-none": "您現在還沒有跳過任何確認。當您跳過一個時，您可以在這裡再打開。",
    "help-some": "以下是您跳過的確認。要再打開，點擊 \"X\" 鍵把它從列表中移除。",
    "task-order-add-confirm": "創建訂單之前",
    "task-order-add-report": "創建訂單之後",
    "task-order-cancel-confirm": "取消訂單之前",
    "task-order-cancel-report": "取消訂單之後",
    "task-order-edit-confirm": "編輯訂單之前",
    "task-order-edit-report": "編輯訂單之後",
    "task-position-claim-confirm": "認領職位之前",
    "task-position-claim-report": "認領職位之後",
    "task-position-close-confirm": "關閉職位之前",
    "task-position-close-report": "關閉職位之後",
    "task-position-edit-confirm": "編輯職位之前",
    "task-position-edit-report": "編輯職位之後",
    "task-mrg-acc-close-confirm": "關閉所有職位之前",
    "task-mrg-acc-close-report": "關閉所有職位之後",
    "task-tokens-remove-confirm": "刪除API代幣之前",
    "task-tokens-remove-report": "刪除API代幣之後",
    "task-wdr-bank-remove-confirm": "刪除銀行賬號之前",
    "task-wdr-bank-remove-report": "刪除銀行賬號之後",
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
    "disable-trading": "交易會被禁用直到您的賬號通過。請去菜單 > 設定 > 個人信息驗證您的賬號。",
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
