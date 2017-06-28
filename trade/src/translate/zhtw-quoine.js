/* eslint-disable quotes, quote-props, max-len */

// quoine

export default {
  "product-book": {
    "spine-title": "訂閱書籍及交易咨訊",
  },
  "news": {
    "spine-title": "聊天室及消息",
  },
  "transfer": {
    "spine-title": "存取資金",
    "account": "賬戶",
  },
  "blotters": {
    "spine-title": "訂單、持倉及交易",
  },
  "volume-balance-panel": {
    "title-spine": "交易量及結余",
  },
  "balance-total": {
    "title": "結余",
    "currency": "",
    "total-fiat": "法定貨幣結余",
    "total-crypto": "虛擬貨幣結余",
    "total-balance": "結余",
  },
  "balance-detail": {
    "title": "結余明細",
    "account": "賬戶",
  },
  "execution": {
    "title": "交易",
    // ===
    "side": "方",
    "side-all": "全部",
    "side-buy": "買方",
    "side-sell": "賣方",
    // ===
    "created-at": "已創建在",
    "id": "身份",
    "order-id": "訂單ID",
    "price": "價格",
    "product": "產品",
    "quantity": "數量",
    "time": "時間",
    // ===
    "target": "目標",
    "target-new": "創建",
    "target-settle": "清算",
    "target-spot": "現貨",
  },
  // ===
  "order": {
    "title": "訂單",
    // ===
    "distance": "價差",
    "distance-type": "價差類型",
    "distance-type-fiat": "fiat",
    "distance-type-percentage": "百分比",
    // ===
    "margin": "保證金",
    "fx-rate": "匯率 ({{ first }}/{{ second }})",
    "cost": "預期成本",
    "fee": "費用",
    "filled": "填寫的",
    "id": "ID",
    "interest": "每日利息",
    "leverage": "杠桿率",
    "leverage-help": "杠桿越大，風險越大。在進行此類交易前請確保您充分了解可能涉及的風險。",
    "product": "產品",
    "slippage": "滑動",
    "spot": "現貨",
    "time": "時間",
    "created-at": "已創建於",
    // ===
    "quantity": "數量",
    "quantity-disclose": "公開數量",
    "qty-filled": "達成的數量",
    "qty-disc": "公開數量",
    "qty-disclose": "公開數量",
    // ===
    "target": "目標",
    "target-settle": "結算",
    "target-spot": "現貨",
    // ===
    "price-open": "開市價格",
    "price-average": "平均價格",
    "price-avg": "平均價格",
    "price": "價格",
    // ===
    "side": "方",
    "side-all": "全部",
    "side-sell": "賣方",
    "side-buy": "買方",
    // ===
    "type": "類型",
    "type-limit": "限價",
    "type-market": "市價",
    "type-stop": "止損",
    "type-trailing-stop": "移動止損",
    // ===
    "status": "狀態",
    "status-all": "全部",
    "status-rejected": "被拒絕",
    "status-rejected-help": "訂單被拒絕。",
    "status-live": "實時",
    "status-live-help": "訂單實時交易",
    "status-cancelled": "已取消",
    "status-cancelled-help": "交易被取消",
    "status-filled": "達成",
    "status-filled-help": "交易已經達成",
    // ===
    "direction": "模式",
    "direction-help": "單向：只能提交買或賣的訂單。<br />雙向交易：可以提交買賣雙向的訂單。<br />平倉：提交等量反向訂單來平衡倉位。",
    "direction-two-direction": "雙向",
    "direction-net-out": "對向",
    "direction-netout": "對向",
    "direction-one-direction": "單向",
  },
  "order-cancel": {
    "title": "取消",
    "confirm": "取消訂單",
  },
  "order-add": {
    "confirm-title": "訂單確認",
    "confirm-action": "提交訂單",
    "confirm-dismiss": "取消",
    "report-title": "訂單已提交",
  },
  "order-edit": {
    "confirm": "更新訂單",
  },
  "order-error": {
    "user-not-enough-fund": "您的賬戶資金不足",
    "direction-long-need-empty": "建立空倉前，需要清空多倉。",
    "direction-short-need-empty": "建立多倉前，需要清空空倉。",
    "price-bigger-than-min": "出價必須高於0。",
    "price-limit-bigger-than-market-bid": "賣出訂單的限價交易價格必須高於市價",
    "price-limit-smaller-than-market-ask": "買入訂單的限價交易價格必須小於市價",
    "price-stop-bigger-than-market-ask": "買入訂單的市價交易價格必須高於市價",
    "price-stop-smaller-than-market-bid": "賣出訂單的市價交易價格必須小於市價",
    "quantity-max-BTC": "訂單數量不可超過 100 BTC。",
    "quantity-max-ETH": "訂單數量不可超過 1000 ETH。",
    "quantity-min-BTC": "訂單數量不可少於 0.01 BTC。",
    "quantity-min-ETH": "訂單數量不可少於 0.5 ETH。",
    "quantity-integer": "訂單數必須為整數",
    "user-free-margin-below-tolerance-level": "保證金應高於保證金要求額",
    "trailing-stop-value-must-be-positive": "只在訂單盈餘為正的情況下會觸發移動止損。",
  },
  // ===
  "position": {
    "title": "倉位",
    // ===
    "status": "狀態",
    "status-all": "全部",
    "status-closed": "關閉",
    "status-open": "創建",
    // ===
    "side": "方",
    "side-all": "全部",
    "side-long": "多頭",
    "side-short": "空頭",
    // ===
    "pnl": "損益",
    "pnl-close": "收盤損益",
    "pnl-open": "開盤損益",
    "pnl-realised": "實現盈虧",
    "pnl-total": "總損益",
    "pnl-unrealised": "未定盈虧",
    "pnl-w-fee": "損益及費用",
    // ===
    "price-close": "收盤價格",
    "price-liq": "速動價格",
    "price-mark": "標價",
    "price-open": "開盤價格",
    // ===
    "qty-close": "收盤數量",
    "qty-open": "開盤數量",
    "quantity": "數量",
    "quantity-close": "開盤數量",
    "quantity-open": "收盤數量",
    // ===
    "int-total": "Total Int.",
    "interest-total": "總盈利",
    // ===
    "created-at": "已創建於",
    "fee": "費用",
    "id": "身份",
    "leverage": "杠桿率",
    "margin": "保證金",
    "product": "產品",
    "sl": "SL",
    "stop-loss": "止損",
    "take-profit": "獲利",
    "time": "時間",
    "tp": "TP",
    "updated-at": "已更新於",
    "value": "價值",
  },
  "position-claim": {
    "title": "執行",
    "confirm": "執行訂單",
  },
  "position-close": {
    "title": "平倉",
    "confirm": "關閉倉位",
  },
  "position-edit": {
    "confirm": "更改倉位",
  },
  "position-error": {
    "you-do-not-have-enough-balance-to-claim-this-position": "您沒有足夠的余額執行此倉位",
    "close-quantity-larger-than-open-quantity": "平倉數量需小於建倉數量。",
    "stop-loss-larger-than-market-ask": "止損倉位需高於市價。",
    "stop-loss-smaller-than-market-bid": "止損倉位需低於市價。",
    "take-profit-larger-than-market-bid": "止盈倉位需高於市價。",
    "take-profit-smaller-than-market-ask": "止盈倉位需低於市價。",
    "claiming-this-position-will-result-in-a-margin-call-due-to-insufficient-free-margin-in-other-positions": "保證金不足，執行此倉位需追加保證金",
  },
  // ===
  "trans": {
    "title": "交易",
    "title-spine": "交易",
    "account": "賬戶",
    // ===
    "direction": "方向",
    "direction-all": "所有",
    "direction-in": "收入",
    "direction-out": "支出",
    // ===
    "created-at": "創建於",
    "id": "ID",
    "notes": "註釋",
    "quantity-gross": "總量",
    "quantity-net": "凈量",
    "business-date": "日期",
    "loan": "貸款",
    "loan-quantity": "數量",
    "loan-rate": "利率",
    "fee": "費用",
    "fee-exchange": "交易費用",
    "fee-network": "網絡費用",
    "hash": "Hash",
    // ===
    "type": "類型",
    "type-all": "全部",
    "type-bought": "購得",
    "type-credit": "信用",
    "type-credit-new-register": "新用戶信用",
    "type-credit-referrer": "Referral Credit",
    "type-cross-ccy-trade": "貨幣交易",
    "type-debit": "借方",
    "type-direct-trade": "交易",
    "type-fund": "存入",
    "type-hot-wallet-settlement": "取出",
    "type-interest-transfer": "利息轉換",
    "type-loan": "貸款",
    "type-loan-fee": "利息費用",
    "type-loan-trade": "償還",
    "type-repay": "償還",
    "type-sold": "售出",
    "type-system-transfer": "系統轉換",
    "type-trade-fee": "交易費用",
    "type-withdraw": "取出",
  },
  // ===
  "fund-withdrawal": {
    "message-documents-submitted": "您已提交賬戶認證所需材料。我們的工作人員正在審核您的資料。被確認並通過後，即可對賬戶進行存取款操作",
    // ===
    "message-declined": "您的賬戶認證申請被拒絕。",
    "help-declined": "請根據郵件中的提示重新在 目錄 > 設置 > 個人賬戶 中重新提交材料",
    // ===
    "message-pending": "執行存取款操作前請先進行賬戶認證",
    "help-pending": "請在 目錄 > 設置 > 個人賬戶 中上傳您的身份證件",
    // ===
    "message-banned": "您的賬戶已被禁用",
    "help-banned": "請您盡快聯繫我們 support@quoine.com",
    // ===
    "message-limit-accounts": "目前我們僅提供 JPY、BTC 和 ETH 的存款/取款業務",
    // ===
    "message-need-tfa": "從安全方面考慮，沒有二級驗證碼將不能進行取款操作",
    "help-need-tfa": "請到菜單 > 設置 > 安全中為賬戶開通二級認證。",
    // ===
    "message-disabled-in-demo-mode": "在模擬模式下無法存取資金。",
    // ===
    "goto-settings": "轉至設置",
  },
  // ===
  "fund": {
    "title": "Fund",
    // ===
    "method": "存款方式",
    "method-bank": "銀行",
    "method-cash": "現金",
    // ===
    "amount": "數額",
    "bank": "銀行名稱",
    "time": "創建於",
    "id": "身份",
    "notes": "備註",
    "notes-none": "(None)",
    "transaction-id": "交易單號",
    "inr-transfer": "INR 轉賬類型",
    "inr-transfer-note": "當前存款方式只適用於從本地印度賬戶向印度國內轉賬",
    "guide": "支付流程",
    "deadline": "截止日期",
    "status": "狀態",
    // ===
    "recent-empty": "無近期存款",
    "recent-title": "近期存款",
    // ===
    "status-pending": "待定",
    "status-approved": "核準",
  },
  "fund-bank": {
    "help-1": "第一步",
    "help-1-note": "提交存款申請時，在存款清單中將為您提示唯一確認碼 ",
    "help-2": "第二步. 向QRYPTOS的賬戶存入款項",
    "help-2-note": "請確認在您的支付清單中的唯一確認碼是否一致",
    // ===
    "success": "謝謝，本次存款的唯一確認碼為 {{id}}. 請繼續第二步",
    // ===
    "submit": "提交",
    "open": "創建存款請求",
    "dismiss": "取消",
    // ===
    "not-support": "我們暫不支持以此貨幣的存款服務。如果您有任何問題請與我們聯系",
  },
  "fund-cash": {
    "success-1": "請點擊下面的鏈接，按提示操作",
    "success-2": "在款項正在處理中也可找到此鏈接。",
    "dismiss": "取消",
    "submit": "繼續",
  },
  "fund-crypto": {
    "help": "請將款項存入如下地址",
    "help-XMR": "請將款項匯入下方提示的地址，並且保留支付單號，以便查詢相關的匯款信息。",
    "help-XRP": "Ripple Base Reserve機制，即基本留存制度，是指Ripple交易賬戶中會被要求存留指定數量的XRP作為基本保證，現在的存留額度是20 XRP。",
    // ===
    "address": "地址",
    "payment-id": "支付單號",
    // ===
    "copy": "復制",
    "copy-address": "復制地址",
    "copy-payment-id": "復制支付單號",
  },
  "fund-error": {
    "you-are-not-approved": "您的賬戶需要被審核通過，才能執行存款操作",
  },
  // ===
  "withdrawal": {
    "title": "取款",
    "submit": "提交取款申請",
    // ===
    "not-support": "我們暫不支持此貨幣取款服務。如果您有任何問題請與我們聯系",
    "eth-description": "請在確保輸入的不是合約地址（contract address）",
    // ===
    "id": "ID",
    "time": "創建於",
    "quantity": "金額",
    "address": "{{ currency}} 地址",
    "payment-id": "{{ currency}} 支付單號",
    "message": "{{ currency}} 信息",
    "destination-tag": "{{ currency}} 目的標籤",
    "bank": "銀行名稱",
    "inr-transfer": "INR轉賬類型",
    "inr-transfer-note": "當前存款方式只適用於從本地印度賬戶向印度國內轉賬",
    "code": "授權碼",
    "fee": "費用",
    "fee-help": "(未包含銀行收取的費用)",
    "maximum": "最高限額（每日）",
    "minimum": "最小限額（每筆）",
    "none": "無",
    "faq": "FAQ",
    // ===
    "recent-title": "最近的取款",
    "recent-empty": "以前的取款",
    // ===
    "success": "取款請求已提交",
    // ===
    "dismiss": "Dismiss",
    "check-email-message": "虛擬貨幣取款確認連接已發送到您的郵箱，請查收。本條鏈接有效期間為30分鐘",
    // ===
    "status": "狀態",
    "status-pending": "等待中",
    "status-processing": "處理中",
    "status-processed": "取款完成",
    "status-declined": "已刪除",
    "status-cancelled": "已取消",
    "status-awaiting-confirmation": "未確認",
  },
  "withdrawal-cancel": {
    "confirm": "取消取款",
  },
  "withdrawal-error": {
    "bank-account-can-t-be-blank": "請選擇一個銀行賬戶",
    "can-not-cancel-withdrawal": "無法取消本次取款，如果您有任何問題請與我們聯系",
    "withdrawal-cannot-be-canceled": "無法取消本次取款。",
    "quantity-must-be-larger-than-minimum": "交易額必須高於最小數量",
    "user-bitcoin-address-invalid": "這個Bitcoin地址無效，請確認",
    "user-not-enough-fund": "余額不足",
    "token-is-invalid": "此驗證碼無效",
    "verification-failed": "此授權碼無效",
    "address-not-present": "此地址無效，請重新確認。",
  },
  // ===
  "futures-balance": {
    "help-fund": "從BTC賬戶轉入期貨賬戶",
    "help-withdrawal": "從期貨賬戶轉入BTC賬戶",
    "balance-btc": "BTC余額",
    "balance-futures": "期貨余額",
    "action-fund": "轉賬到期貨賬戶",
    "action-withdrawal": "轉賬到BTC賬戶",
    "quantity": "數量",
    "success": "轉賬成功。",
  },
  "futures-balance-error": {
    "transfer-failed": "轉賬失敗，請重試",
    "quantity-too-large": "轉賬金額無法超過余額",
  },
  // ===
  "bank": {
    "account-name": "賬戶名稱",
    "account-number": "賬號",
    "account-type": "賬戶類型",
    "bank-address": "銀行地址",
    "bank-name": "銀行名稱",
    "bank-branch": "銀行分行",
    "bank-swift": "銀行代碼",
    "country": "國家",
    "joint-account": "共同賬戶",
    "joint-account-name": "共同帳戶持有人姓名",
    "joint-address": "共同帳戶持有人地址",
    "joint-city": "J共同帳戶城市",
    "joint-country": "共同帳戶國家",
    "joint-document-id": "共同賬戶證明",
    "joint-document-address": "地址證明",
    "document": "銀行賬單",
    "document-uploaded": "文件已上傳",
    "reason": "原因",
    "swift-check": "如果您的銀行帳戶位於日本，請選中此項。",
    // ===
    "status": "狀態",
    "status-pending": "待定",
    "status-pending-help": "您可以提交取款申請，即使銀行賬戶處於待定狀態。",
    // ===
    "add-action": "添加銀行賬戶",
    "add-submit": "添加銀行賬戶",
    "add-dismiss": "回到取款頁面",
    "add-success": "添加銀行賬戶成功。您可以回到取款頁面繼續",
    // ===
    "edit-action": "更改",
    "edit-submit": "更改銀行賬戶",
    "edit-dismiss": "回到取款頁面",
    "edit-success": "銀行賬戶內容更改成功。您可以回到取款頁面繼續",
    // ===
    "remove-confirm": "移除銀行賬戶",
    "remove-action": "刪除",
    "detail-show": "更多",
    "detail-hide": "隱藏",
  },
  "bank-error": {
    "acc-number-already-in-use-for-you": "此賬號已被使用",
    "bank-statement-can-t-be-blank": "請上傳銀行賬單",
    "bank-statement-you-are-not-allowed-to-upload-\"exe\"-files,-prohibited-types": "只支持上傳圖片或PDF文件",
    "country-can-t-be-blank": "國家不能為空",
    "joint-country-can-t-be-blank": "國家不能為空",
    "en-bank-account-errors-withdrawal-exist-can-not-delete-this-bank-account": "有取款業務正在使用此賬戶，如若移除此賬戶請先取消等待中的取款業務",
  },
  // ===
  "volume": {
    "title": "成交量",
    "action-close": "關閉",
    "from": "從",
    "to": "到",
    "range": "範圍",
    "report-action": "發送郵件報告",
    "report-dismiss": "取消",
    "report-success": "報告已送出，請查收",
    "empty": "在指定時間段無任何交易的賬戶不會被顯示",
  },
  "volume-error": {
    "choose-range-first": "請為郵件報告選擇 \"從\" 和 \"至\" 日期",
  },
  // ===
  "charts": {
    "not-ready": "圖表尚未準備好",
    "spine-title": "圖表",
    "provider": "圖表來源",
    "provider-crypto-watch": "Crypto Watch",
    "provider-trading-view": "Trading View",
  },
  "trade-feed": {
    "title": "交易資訊",
  },
  "order-book": {
    "sells": "賣出",
    "buys": "買入",
    "mode": "模式",
    "mode-normal": "正常",
    "mode-depth-chart": "深度圖",
  },
  "product": {
    "high": "最高價",
    "low": "最低價",
    "last": "最新價格",
    "volume": "24 小時交易量",
    "volume-short": "24 小時交易量",
  },
  // ===
  "mrg-acc": {
    "base-open-price": "基礎價",
    "pnl": "損益",
    "pnl-total": "總損益",
    "position": "持倉",
    "position-total": "總持倉",
    "account": "賬戶",
    "product": "產品",
    // ===
    "side": "方向",
    "side-both": "全部",
    "side-short": "空頭",
    "side-long": "多頭",
    // ===
    "title-longs": "多頭",
    "title-shorts": "空頭",
  },
  "mrg-acc-close": {
    "confirm-title": "全部平倉",
    "confirm-description": "關閉符合條件的全部倉位",
    "confirm-action": "全部平倉",
    "confirm-dismiss": "取消",
    "report-title": "成功",
    "report-description": "{{ count }} {{ side }} 已被平倉",
    "report-long": "多頭",
    "report-short": "空頭",
    "action-both": "全部平倉",
    "action-long": "多頭全部平倉",
    "action-short": "空頭全部平倉",
  },
  "mrg-acc-manage": {
    "title": "管理產品",
    // ===
    "trading-title": "交易產品",
    "trading-description": "這些是與當前選定賬戶所關聯的全部保證金交易產品。如果您選擇隱藏產品，它將不會顯示在控制面板頂部。隱藏產品不會影響您的交易賬戶或交易活動。",
    // ===
    "hidden-title": "隱藏產品",
    "hidden-description": "",
    // ===
    "add-title": "添加產品",
    "add-description": "這些是可以添加到當前選定賬戶的全部保證金交易產品。添加新產品後，您就可以使用當前選定賬戶的資金進行該產品的保證金交易。請註意，在一個賬戶內添加過多產品將可能導致加載時間變長",
    // ===
    "action-manage": "產品管理",
    "action-done": "完成",
    "action-hide": "隱藏",
    "action-show": "顯示",
  },
  // ===
  "market": {
    "margin": "盈利",
    "futures": "期貨",
    "spot": "現貨",
  },
  // ===
  "futures": {
    "activate-description": "您尚未在期貨市場中有過交易。確認後將為您創建用於期貨交易的BTC賬戶。完成後系統將重新載入",
    "activate-cancel": "取消",
    "activate-title": "建立期貨賬戶",
    "activate-action": "確認",
  },
  // ===
  "dashboard": {
    "basic": "賬戶總覽及訂單管理",
    "product": "訂閱書籍及交易咨詢",
    "chart": "圖表",
    "blotter": "記錄本",
  },
  "panels": {
    "expand": "擴展",
    "collapse": "崩潰",
  },
};
