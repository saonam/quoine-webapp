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
    "spine-title": "資金及提現",
    "account": "Account",
  },
  "blotters": {
    "spine-title": "訂單、持倉及交易",
  },
  "volume-balance-panel": {
    "title-spine": "Volumes & Balances",
  },
  "balance-total": {
    "title": "Total Balance",
    "currency": "Currency",
    "total-fiat": "Total Fiat Balance",
    "total-crypto": "Total Crypto Balance",
    "total-balance": "Total Balance",
  },
  "balance-detail": {
    "title": "Detail Balance",
    "account": "Account",
  },
  "execution": {
    "title": "交易",
    // ===
    "side": "方",
    "side-all": "全部",
    "side-buy": "購買",
    "side-sell": "銷售",
    // ===
    "created-at": "已創建在",
    "id": "身份",
    "order-id": "訂單 ID",
    "price": "價格",
    "product": "產品",
    "quantity": "數量",
    "time": "時間",
    // ===
    "target": "目標",
    "target-new": "新",
    "target-settle": "解決",
    "target-spot": "Spot",
  },
  // ===
  "order": {
    "title": "訂單",
    // ===
    "distance": "價格差距",
    "distance-type": "差距類型",
    "distance-type-fiat": "批准",
    "distance-type-percentage": "百分率",
    // ===
    "margin": "保證金",
    "fx-rate": "匯率 ({{ first }}/{{ second }})",
    "cost": "預期成本",
    "fee": "費",
    "filled": "填寫的",
    "id": "ID",
    "interest": "每日利息",
    "leverage": "資本負債比率",
    "leverage-help": "槓桿越大，風險越大。在進行此類交易前，請確保您充分了解可能涉及的風險。",
    "product": "產品",
    "slippage": "下降",
    "spot": "現貨買賣的",
    "time": "時間",
    "created-at": "已創建於",
    // ===
    "quantity": "數量",
    "quantity-disclose": "披露數量",
    "qty-filled": "填寫的數量",
    "qty-disc": "披露數量",
    "qty-disclose": "披露數量",
    // ===
    "target": "目標",
    "target-settle": "結算",
    "target-spot": "Spot",
    // ===
    "price-open": "公開價格",
    "price-average": "平均價格",
    "price-avg": "平均價格",
    "price": "價格",
    // ===
    "side": "方",
    "side-all": "全部",
    "side-sell": "銷售",
    "side-buy": "購買",
    // ===
    "type": "類型",
    "type-limit": "限制",
    "type-market": "市場",
    "type-stop": "停止",
    "type-trailing-stop": "移動止損",
    // ===
    "status": "狀態",
    "status-all": "全部",
    "status-rejected": "被拒絕的",
    "status-rejected-help": "交易已被拒絕。",
    "status-live": "即時的",
    "status-live-help": "交易當前有效",
    "status-cancelled": "已取消",
    "status-cancelled-help": "交易已被取消",
    "status-filled": "填寫的",
    "status-filled-help": "交易已經達成",
    // ===
    "direction": "模式",
    "direction-help": "單向：只能提交買或賣地訂單。<br />雙向交易：可以提交買賣雙向的訂單。<br />平倉：提交等量反向訂單來平衡倉位。 ",
    "direction-two-direction": "雙向",
    "direction-net-out": "淨收入",
    "direction-netout": "淨收入",
    "direction-one-direction": "單向",
  },
  "order-cancel": {
    "title": "取消",
    "confirm": "取消訂單？",
  },
  "order-add": {
    "confirm-title": "確認訂單",
    "confirm-action": "提交訂單",
    "confirm-dismiss": "取消",
    "report-title": "訂單已提交",
  },
  "order-edit": {
    "confirm": "更新此訂單？",
  },
  "order-error": {
    "user-not-enough-fund": "您的賬戶資金不足。",
    "direction-long-need-empty": "建立空頭持倉前，需清空多頭持倉。",
    "direction-short-need-empty": "建立多頭持倉前，需要清空空頭持倉。",
    "price-bigger-than-min": "您的出價需高於0。",
    "price-limit-bigger-than-market-bid": "所限定的售出訂單價格需高於當前市價，",
    "price-limit-smaller-than-market-ask": "所限定的購買訂單價格需低於當前市價。",
    "price-stop-bigger-than-market-ask": "購買訂單的止損價格需高於當前市價。",
    "price-stop-smaller-than-market-bid": "售出訂單的止損價格需低於當前市價。",
    "quantity-max-BTC": "訂單數量不可超過 100 BTC。",
    "quantity-max-ETH": "訂單數量不可超過 1000 ETH。",
    "quantity-min-BTC": "訂單數量不可少於 0.01 BTC。",
    "quantity-min-ETH": "訂單數量不可少於 0.5 ETH。",
    "quantity-integer": "訂單數必須為整數",
    "user-free-margin-below-tolerance-level": "Free margin is below tolerance level",
  },
  // ===
  "position": {
    "title": "倉位",
    // ===
    "status": "狀態",
    "status-all": "全部",
    "status-closed": "已關閉",
    "status-open": "公開",
    // ===
    "side": "方",
    "side-all": "全部",
    "side-long": "長",
    "side-short": "不足的",
    // ===
    "pnl": "損益表L",
    "pnl-close": "已兌現盈虧",
    "pnl-open": "未兌盈虧",
    "pnl-realised": "已實現的盈虧",
    "pnl-total": "總損益表",
    "pnl-unrealised": "未實現的盈虧",
    "pnl-w-fee": "損益表及費用",
    // ===
    "price-close": "成交價",
    "price-liq": "速動價格",
    "price-mark": "標價",
    "price-open": "開盤價格",
    // ===
    "qty-close": "關閉數量",
    "qty-open": "打開數量",
    "quantity": "數量",
    "quantity-close": "關閉數量",
    "quantity-open": "打開數量",
    // ===
    "int-total": "Total Int.",
    "interest-total": "總盈利",
    // ===
    "created-at": "已創建於",
    "fee": "費",
    "id": "身份",
    "leverage": "資本負債比率",
    "margin": "保證金",
    "product": "產品",
    "sl": "SL",
    "stop-loss": "止損",
    "take-profit": "獲利",
    "time": "時間",
    "tp": "市場促銷費用",
    "updated-at": "已更新，於",
    "value": "價值",
  },
  "position-claim": {
    "title": "執行",
    "confirm": "執行此頭寸？",
  },
  "position-close": {
    "title": "平倉",
    "confirm": "平倉？",
  },
  "position-edit": {
    "confirm": "更新倉位？",
  },
  "position-error": {
    "you-do-not-have-enough-balance-to-claim-this-position": "您沒有足夠的餘額來執行此頭寸",
    "close-quantity-larger-than-open-quantity": "平倉數量需小於建倉數量。",
    "stop-loss-larger-than-market-ask": "止損倉位需高於市價。",
    "stop-loss-smaller-than-market-bid": "止損倉位需低於市價。",
    "take-profit-larger-than-market-bid": "止盈倉位需高於市價。",
    "take-profit-smaller-than-market-ask": "止盈倉位需低於市價。",
    "claiming-this-position-will-result-in-a-margin-call-due-to-insufficient-free-margin-in-other-positions": "Claiming this position will result",
  },
  // ===
  "trans": {
    "title": "交易",
    "title-spine": "交易",
    "account": "賬戶",
    // ===
    "direction": "方向",
    "direction-all": "所有",
    "direction-in": "入向",
    "direction-out": "出向",
    // ===
    "created-at": "Created At",
    "id": "ID",
    "notes": "註釋",
    "quantity-gross": "總量",
    "quantity-net": "淨量",
    "business-date": "商務日期",
    "loan": "貸款",
    "loan-quantity": "數量",
    "loan-rate": "利率",
    "fee": "費用",
    "fee-exchange": "交易費用",
    "fee-network": "網絡費用",
    "hash": "Hash",
    // ===
    "state": "狀態",
    "state-pending": "待處理",
    // ===
    "type": "類型",
    "type-all": "全部",
    "type-bought": "Bought",
    "type-credit": "信用",
    "type-credit-new-register": "新用戶信用",
    "type-credit-referrer": "Referral Credit",
    "type-cross-ccy-trade": "Cross CCY Trade",
    "type-debit": "貸記",
    "type-direct-trade": "交易",
    "type-fund": "Funding",
    "type-hot-wallet-settlement": "取回",
    "type-in​​terest-transfer": "利息轉賬",
    "type-loan": "貸款",
    "type-loan-fee": "利息支付費用",
    "type-loan-trade": "償還",
    "type-repay": "償還",
    "type-sold": "已售",
    "type-system-transfer": "系統轉賬",
    "type-trade-fee": "交易費用",
    "type-withdraw": "取回",
  },
  // ===
  "fund-withdrawal": {
    "message-documents-submitted": "您已提交賬戶認證所需材料。我們的工作人員正在審核您的資料。當您的賬戶被確認並通過後，即可進行出入金操作。",
    // ===
    "message-declined": "您的賬戶認證申請被拒絕。",
    "help-declined": "請根據郵件中的提示重新在 目錄 > 設置 > 個人賬戶 中重新提交材料。",
    // ===
    "message-pending": "執行出入金操作前請先進行賬戶認證。",
    "help-pending": "請在 目錄 > 設置 > 個人賬戶 中上傳您的身份證件。",
    // ===
    "message-limit-accounts": "目前我們僅支持 JPY、BTC 和 ETH 的存款/取款。",
    // ===
    "message-need-tfa": "在這個點位交易會使其他點位交易的可用保證金不足從而導致追加保證金。",
    "help-need-tfa": "請到菜單 > 設置 > 安全中為您的賬戶開啟 2 步認證。",
    // ===
    "goto-settings": "轉至設置",
  },
  // ===
  "fund": {
    "title": "Fund",
    // ===
    "method": "入金方式",
    "method-bank": "銀行",
    "method-cash": "現金",
    // ===
    "amount": "數額",
    "bank": "銀行名稱",
    "time": "Created At",
    "id": "唯一確認碼",
    "notes": "Note",
    "notes-none": "(None)",
    "transaction-id": "交易號",
    "inr-transfer": "INR 轉賬類型",
    "inr-transfer-note": "當前存款方式只適用於從本地印度賬戶的INR國內轉賬。",
    "guide": "支付流程",
    "deadline": "截止日期",
    "status": "Status",
    // ===
    "recent-empty": "No Recent Funds",
    "recent-title": "Recent Funds",
    // ===
    "status-pending": "Pending",
    "status-approved": "Approved",
  },
  "fund-bank": {
    "help-1": "第一步",
    "help-1-note": "提交入金申請時，您會收到一個 \"唯一確認碼\"，請在存款時填寫。",
    "help-2": "第二步. 向我們的賬戶存入款項",
    "help-2-note": "請確認在支付過程中填入在第一步中收到的 \"唯一確認碼\" ",
    // ===
    "success": "謝謝！本次入金的 \"唯一確認碼\" 為 {{id}}. 請繼續第二步。",
    // ===
    "submit": "提交",
    "open": "創建入金請求",
    "dismiss": "取消",
    // ===
    "not-support": "我們暫不支持以此貨幣入金。如有疑問請聯繫我們",
  },
  "fund-cash": {
    "success-1": "請點擊下面的鏈接，按提示操作",
    "success-2": "在\"等待中的資金\" 中也可找到此鏈接。",
    "dismiss": "取消",
    "submit": "繼續",
  },
  "fund-crypto": {
    "help": "請將款項存入如下地址",
    "help-XMR": "請將款項匯入下方提示的地址，並且保留支付單號，以便查詢相關的匯款信息。",
    "help-XRP": " Ripple Base Reserve機制，即基本準備金制度，是指交易總賬中的每個地址會要求存入一個指定最少數量的XRP作為基本準備金，目前被要求的基本準備金數量是20 XRP，在用戶第一次匯入款項時自動留存。此後的交易中用戶可以收到所有匯入的款項。",
    // ===
    "address": "地址",
    "payment-id": "支付單號",
    // ===
    "copy": "複製",
    "copy-address": "複製地址",
    "copy-payment-id": "複製支付單號",
  },
  "fund-error": {
    "you-are-not-approved": "您的賬戶需要被審核通過，才能執行入金",
  },
  // ===
  "withdrawal": {
    "title": "出金",
    "submit": "提交出金申請",
    // ===
    "not-support": "我們暫不支持以此貨幣出金。如有疑問請聯繫我們",
    // ===
    "id": "ID",
    "time": "Created At",
    "quantity": "金額",
    "address": "{{ currency}} Address",
    "bank": "銀行名稱",
    "inr-transfer": "INR轉賬類型",
    "inr-transfer-note": "This deposit method is only for INR domestic transfers from local India bank accounts.",
    "code": "授權碼",
    "fee": "我們收取的費用",
    "fee-help": "(未包含銀行收取的費用)",
    "maximum": "最高限額（每日）",
    "minimum": "最小限額（每筆）",
    "none": "無",
    // ===
    "pending-title": "等待中的出金",
    "pending-empty": "無等待中的出金",
    // ===
    "success": "出金請求已提交",
    // ===
    "dismiss": "Dismiss",
    "check-email-message": "A crypto withdrawal confirmation link has been sent to your email address. Please check and click this link within 30 minutes of this notification to confirm your withdrawal.",
    // ===
    "status": "Status",
    "status-pending": "Pending",
    "status-processing": "Processing",
    "status-awaiting-confirmation": "Unconfirmed",
  },
  "withdrawal-cancel": {
    "confirm": "取消出金？",
  },
  "withdrawal-error": {
    "bank-account-can-t-be-blank": "請選擇一個銀行賬戶",
    "can-not-cancel-withdrawal": "無法取消本次出金。如有疑問請聯繫我們",
    "withdrawal-cannot-be-canceled": "無法取消本次出金。",
    "quantity-must-be-larger-than-minimum": "必須高於最小數量",
    "user-bitcoin-address-invalid": "這個Bitcoin地址無效，請檢查",
    "user-not-enough-fund": "餘額不足",
    "token-is-invalid": "此券無效",
    "verification-failed": "此授權碼無效",
  },
  // ===
  "futures-balance": {
    "help-fund": "請從您的BTC賬戶轉賬，以為您的期貨賬戶充值。",
    "help-withdrawal": "請向您的BTC賬戶轉賬，以從您的期貨賬戶取款。",
    "balance-btc": "BTC餘額",
    "balance-futures": "期貨餘額",
    "action-fund": "轉賬到期貨賬戶",
    "action-withdrawal": "轉賬到BTC賬戶",
    "quantity": "數量",
    "success": "轉賬成功。",
  },
  "futures-balance-error": {
    "transfer-failed": "轉賬失敗，請重試",
    "quantity-too-large": "轉賬數量不得超過餘額",
  },
  // ===
  "bank": {
    "account-name": "賬戶名稱",
    "account-number": "賬號",
    "account-type": "賬戶類型",
    "bank-address": "銀行地址",
    "bank-name": "銀行名稱",
    "bank-branch": "銀行分行",
    "bank-swift": "銀行迅速代碼",
    "country": "國家",
    "joint-account": "聯名賬戶",
    "joint-account-name": "聯名帳戶持有人姓名",
    "joint-address": "聯名帳戶持有人地址",
    "joint-city": "J聯名帳戶城市",
    "joint-country": "聯名帳戶國家",
    "joint-document-id": "ID 文件",
    "joint-document-address": "地址證明",
    "document": "銀行賬單",
    "document-uploaded": "文件已上傳",
    "reason": "原因",
    "swift-check": "如果您的銀行帳戶。",
    // ===
    "status": "狀態",
    "status-pending": "待定",
    "status-pending-help": "您仍然可以提交出金申請，即使您的銀行賬戶仍在等待中。",
    // ===
    "add-action": "添加銀行賬戶",
    "add-submit": "添加銀行賬戶",
    "add-dismiss": "回到取款頁面",
    "add-success": "添加銀行賬戶成功。您可以回到取款頁面繼續",
    // ===
    "edit-action": "更改",
    "edit-submit": "更改銀行賬戶",
    "edit-dismiss": "回到取款頁面",
    "edit-success": "銀行賬戶更改成功。您可以回到取款頁面繼續",
    // ===
    "remove-confirm": "刪除這個銀行賬戶？",
    "remove-action": "刪除",
    "detail-show": "更多",
    "detail-hide": "隱藏",
  },
  "bank-error": {
    "acc-number-already-in-use-for-you": "此賬號已被使用",
    "bank-statement-can-t-be-blank": "請上傳銀行賬單",
    "bank-statement-you-are-not-allowed-to-upload-\"exe\"-files,-prohibited-types": "您只能上傳圖片或PDF文件",
    "country-can-t-be-blank": "國家為必填項",
    "joint-country-can-t-be-blank": "國家為必填項",
    "en-bank-account-errors-withdrawal-exist-can-not-delete-this-bank-account": "這個銀行賬戶無法刪除。因為有一筆等待中的取款。請先取消等待中的取款。",
  },
  // ===
  "volume": {
    "title": "累計交易量",
    "action-close": "關閉",
    "from": "從",
    "to": "到",
    "range": "範圍",
    "report-action": "發送郵件報告",
    "report-dismiss": "取消",
    "report-success": "報告已寄出，請在您的郵箱中查收",
    "empty": "在指定時間段無任何交易的賬戶不會被顯示",
  },
  "volume-error": {
    "choose-range-first": "請為郵件報告選擇 \"從\" 和 \"至\" 日期",
  },
  // ===
  "charts": {
    "not-ready": "報表尚未準備好",
    "spine-title": "表格",
  },
  "trade-feed": {
    "title": "交易資訊",
  },
  "order-book": {
    "sells": "賣出",
    "buys": "買入",
    "mode": "Mode",
    "mode-normal": "Normal",
    "mode-depth-chart": "Depth Chart",
  },
  "product": {
    "high": "高",
    "low": "低",
    "last": "最新價格",
    "volume": "24 小時量",
    "volume-short": "24 小時量",
  },
  // ===
  "mrg-acc": {
    "base-open-price": "基礎價",
    "pnl": "P&L",
    "pnl-total": "總P&L",
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
    "confirm-description": "以下倉位將全部平倉",
    "confirm-action": "全部平倉",
    "confirm-dismiss": "取消",
    "report-title": "成功",
    "report-description": "{{ count }} {{ side }} 已全部平倉",
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
    "trading-description": "這些是與當前選定賬戶所關聯的全部保證金交易產品。如果您選擇隱藏產品，它將不會顯示在控制面板頭部。隱藏產品不會影響您的交易賬戶或交易活動。",
    // ===
    "hidden-title": "隱藏產品",
    "hidden-description": "",
    // ===
    "add-title": "添加產品",
    "add-description": "這些是可以添加到當前選定賬戶的全部保證金交易產品。添加新產品後，您就可以使用當前選定賬戶的資金進行該產品的保證金交易。請注意，在一個賬戶內添加過多產品可能會增加加載時間。",
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
    "spot": "Spot",
  },
  // ===
  "futures": {
    "activate-description": "您尚未沒有在期貨市場有過交易。在您確認後，我們會為您創建一個用於期貨交易的BTC賬戶。完成後APP將重新啟動。",
    "activate-cancel": "取消",
    "activate-title": "建立期貨賬戶",
    "activate-action": "確認",
  },
  // ===
  "dashboard": {
    "basic": "賬戶總覽及訂單管理",
    "product": "訂閱書籍及交易諮詢",
    "chart": "圖表",
    "blotter": "記錄本",
  },
  "panels": {
    "expand": "擴展",
    "collapse": "崩潰",
  },
};
