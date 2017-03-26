/* eslint-disable quotes, quote-props, max-len */

export default {
  "product-book": {
    "spine-title": "Order Book & Trade Feed",
  },
  "news": {
    "spine-title": "Chatbox & News",
  },
  "transfer": {
    "spine-title": "Funds & Withdrawals",
  },
  "volume-panel": {
    "title-spine": "Volumes",
  },
  "blotters": {
    "spine-title": "Orders, Positions & Executions",
  },
  "execution": {
    "title": "Executions",
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
    "target-new": "New",
    "target-settle": "Settle",
  },
  // ===
  "order": {
    "title": "Orders",
    // ===
    "distance": "价格差距",
    "distance-type": "差距类型",
    "distance-type-fiat": "批准",
    "distance-type-percentage": "Percent",
    // ===
    "margin": "保证金",
    "fx-rate": "FX Rate ({{ first }}/{{ second }})",
    "cost": "Estimated Cost",
    "fee": "费",
    "filled": "填写的",
    "id": "ID",
    "interest": "每日利息",
    "leverage": "资本负债比率",
    "leverage-help": "With great leverage level come great risks. Please ensure that you fully understand the risk before trading at this level.",
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
    "status-rejected-help": "Order has been rejected.",
    "status-live": "即时的",
    "status-live-help": "Order is currently live.",
    "status-cancelled": "Cancelled",
    "status-cancelled-help": "Order has been cancelled.",
    "status-filled": "填写的",
    "status-filled-help": "Order has been filled.",
    // ===
    "direction": "模式",
    "direction-help": "One-Direction: can only submit buy or sell orders.<br />Two-Direction: can submit both sides of orders.<br />Net-Out: opposite orders net out each other.",
    "direction-two-direction": "双向",
    "direction-net-out": "净收入",
    "direction-netout": "净收入",
    "direction-one-direction": "单向",
  },
  "order-cancel": {
    "title": "Cancel",
    "confirm": "Cancel this order?",
  },
  "order-add": {
    "confirm-title": "Order Confirmation",
    "confirm-action": "Submit Order",
    "confirm-dismiss": "Dismiss",
    "report-title": "Order Submitted",
  },
  "order-edit": {
    "confirm": "Update this order?",
  },
  "order-error": {
    "user-not-enough-fund": "You do not have enough funds in your account.",
    "direction-long-need-empty": "You must not have any long trade to place a sell order.",
    "direction-short-need-empty": "You must not have any short trade to place a buy order.",
    "price-bigger-than-min": "Order price must be greater than 0.",
    "price-limit-bigger-than-market-bid": "Limit price of a sell order must be greater than market bid.",
    "price-limit-smaller-than-market-ask": "Limit price of a buy order must be smaller than market ask.",
    "price-stop-bigger-than-market-ask": "Stop price of a buy order must be greater than market ask.",
    "price-stop-smaller-than-market-bid": "Stop price of a sell order must be smaller than market bid.",
    "quantity-max-BTC": "Order quantity must be smaller than 100 BTC.",
    "quantity-max-ETH": "Order quantity must be smaller than 1000 ETH.",
    "quantity-min-BTC": "Order quantity must be greater than 0.01 BTC.",
    "quantity-min-ETH": "Order quantity must be greater than 0.5 ETH.",
    "quantity-integer": "Order quantity must be an integer.",
  },
  // ===
  "position": {
    "title": "Positions",
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
    "interest-total": "Total Interest",
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
    "time": "Time",
    "tp": "市场促销费用",
    "updated-at": "已更新，于",
    "value": "价值",
  },
  "position-claim": {
    "title": "Claim",
    "confirm": "Claim this position?",
  },
  "position-close": {
    "title": "Close",
    "confirm": "Close this position?",
  },
  "position-edit": {
    "confirm": "Update this position?",
  },
  "position-error": {
    "you-do-not-have-enough-balance-to-claim-this-position": "You do not have enough balance to claim this position.",
    "close-quantity-larger-than-open-quantity": "Position close quantity must be smaller than open quantity.",
    "stop-loss-larger-than-market-ask": "Position stop loss must be larger than market ask.",
    "stop-loss-smaller-than-market-bid": "Position stop loss must be smaller than market bid.",
    "take-profit-larger-than-market-bid": "Position take profit must be larger than market bid.",
    "take-profit-smaller-than-market-ask": "Position take profit must be smaller than market ask.",
    "claiming-this-position-will-result-in-a-margin-call-due-to-insufficient-free-margin-in-other-positions": "Claiming this position will result in a margin call due to insufficient free margin in other positions.",
  },
  // ===
  "trans": {
    "title": "Transactions",
    "title-spine": "Transactions",
    "account": "Account",
    // ===
    "direction": "Direction",
    "direction-all": "All",
    "direction-in": "Incoming",
    "direction-out": "Outcoming",
    // ===
    "created-at": "Created At",
    "id": "ID",
    "notes": "Notes",
    "quantity-gross": "Gross Amount",
    "quantity-net": "Net Amount",
    "business-date": "Business Date",
    "loan": "Loan",
    "loan-quantity": "Quantity",
    "loan-rate": "Rate",
    "fee": "Fee",
    "fee-exchange": "Exchange Fee",
    "fee-network": "Network Fee",
    "hash": "Hash",
    // ===
    "state": "State",
    "state-pending": "Pending",
    // ===
    "type": "Type",
    "type-all": "All",
    "type-bought": "Bought",
    "type-credit": "Credit",
    "type-credit-new-register": "New Client Credit",
    "type-credit-referrer": "Referral Credit",
    "type-cross-ccy-trade": "Cross CCY Trade",
    "type-debit": "Debit",
    "type-direct-trade": "Trade",
    "type-fund": "Funding",
    "type-hot-wallet-settlement": "Withdrawal",
    "type-interest-transfer": "Interest Transfer",
    "type-loan": "Loan",
    "type-loan-fee": "Interest Payment Fee",
    "type-loan-trade": "Repayment",
    "type-repay": "Repayment",
    "type-sold": "Sold",
    "type-system-transfer": "System Transfer",
    "type-trade-fee": "Exchange Fee",
    "type-withdraw": "Withdrawal",
  },
  // ===
  "fund-withdrawal": {
    "message-documents-submitted": "You have submitted documents for account verification. Your documents are being reviewed by our staff. Once your account is verified and approved, you will be able to fund/withdraw.",
    // ===
    "message-declined": "Your account verification request has been declined.",
    "help-declined": "Please reupload documents in Menu > Settings > Profile according to email instructions.",
    // ===
    "message-pending": "Your account must be verified and approved before you can fund/withdraw.",
    "help-pending": "Please upload ID documents for account verification in Menu > Settings > Profile.",
    // ===
    "message-limit-accounts": "Right now we only support JPY, BTC, and ETH deposits/withdrawals.",
    // ===
    "message-need-tfa": "For security reasons, withdrawals are not allowed without 2-factor authentication.",
    "help-need-tfa": "Please enable 2-factor authentication for your account in Menu > Settings > Security.",
    // ===
    "goto-settings": "Go to Settings",
  },
  // ===
  "fund": {
    "title": "Fund",
    // ===
    "method": "Funding Method",
    "method-bank": "Bank",
    "method-cash": "Cash",
    // ===
    "account": "Account",
    "amount": "Amount",
    "bank": "Bank Name",
    "time": "Created At",
    "id": "Unique ID",
    "notes": "Note",
    "notes-none": "(None)",
    "transaction-id": "Transaction ID",
    "inr-transfer": "INR Transfer Type",
    "inr-transfer-note": "This deposit method is only for INR domestic transfers from local India bank accounts.",
    "guide": "Payment Guide",
    "deadline": "Deadline",
    // ===
    "pending-empty": "No Pending Funds",
    "pending-title": "Pending Funds",
  },
  "fund-bank": {
    "help-1": "Step 1.",
    "help-1-note": "Upon submitting the Funding Request, you will receive a \"Unique ID\" to include in your deposit.",
    "help-2": "Step 2. Make a deposit to one of our bank accounts:",
    "help-2-note": "Make sure to include the \"Unique ID\" you received in step 1 in your payment details.",
    // ===
    "success": "Thank you! The \"Unique ID\" of this Funding Request is {{id}}. Please continue with Step 2.",
    // ===
    "submit": "Submit",
    "open": "Create Fund Request",
    "dismiss": "Dismiss",
    // ===
    "not-support": "We are not supporting deposits in this currency at the moment. Please contact us if you have any questions.",
  },
  "fund-cash": {
    "success-1": "Please click on the link below and follow the instructions.",
    "success-2": "You can also find this link in the \"Pending Funds\" list below.",
    "dismiss": "Dismiss",
    "submit": "Continue",
  },
  "fund-crypto": {
    "help": "Please deposit to the address below:",
    "copy": "Copy Address",
  },
  "fund-error": {
    "you-are-not-approved": "Your account has to be approved before you can create a Funding Request.",
  },
  // ===
  "withdrawal": {
    "title": "Withdrawal",
    "submit": "Submit Withdrawal",
    // ===
    "not-support": "We are not supporting withdrawals in this currency at the moment. Please contact us if you have any questions.",
    // ===
    "id": "ID",
    "time": "Created At",
    "account": "Account",
    "quantity": "Amount",
    "address": "{{ currency}} Address",
    "bank": "Bank Account",
    "inr-transfer": "INR Transfer Type",
    "code": "Authentication Code",
    "fee": "Our Fee",
    "fee-help": "(bank fee not included)",
    "maximum": "Maximum (daily)",
    "minimum": "Minimum (per request)",
    "none": "None",
    // ===
    "pending-title": "Pending Withdrawals",
    "pending-empty": "No Pending Withdrawals",
    // ===
    "success": "Withdrawal request has been submitted.",
  },
  "withdrawal-cancel": {
    "confirm": "Cancel this withdrawal?",
  },
  "withdrawal-error": {
    "bank-account-can-t-be-blank": "Please select a bank account to proceed.",
    "can-not-cancel-withdrawal": "This withdrawal cannot be cancelled. Please contact us to receive support.",
    "withdrawal-cannot-be-canceled": "This withdrawal cannot be cancelled.",
    "quantity-must-be-larger-than-minimum": "Quantity must be larger than minimum.",
    "user-bitcoin-address-invalid": "This Bitcoin address is invalid. Please check again.",
    "user-not-enough-fund": "Balance is not enough.",
    "token-is-invalid": "This token is invalid.",
    "verification-failed": "This authentication code is invalid.",
  },
  // ===
  "futures-balance": {
    "help-fund": "To fund your Futures account, please transfer from your BTC account:",
    "help-withdrawal": "To withdraw from your Futures account, please transfer to your BTC account:",
    "balance-btc": "BTC Balance",
    "balance-futures": "Futures Balance",
    "action-fund": "Transfer to Futures Account",
    "action-withdrawal": "Transfer to BTC Account",
    "quantity": "Quantity",
    "success": "Successfully transferred.",
  },
  "futures-balance-error": {
    "transfer-failed": "Fund transfer has failed. Please try again.",
    "quantity-too-large": "Quantity must be less than balance.",
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
    "document": "Bank Statement",
    "document-uploaded": "Document Uploaded",
    "reason": "原因",
    "swift-check": "如果您的银行帐户位于日本，请选中此项。",
    // ===
    "status": "状态",
    "status-pending": "待定",
    "status-pending-help": "You can still submit withdrawal requests with a pending bank account.",
    // ===
    "add-action": "Add Bank Account",
    "add-submit": "Add Bank Account",
    "add-dismiss": "Back to Withdrawal",
    "add-success": "Add new bank successfully. You can now go back to Withdrawal.",
    // ===
    "edit-action": "Edit",
    "edit-submit": "Edit Bank Account",
    "edit-dismiss": "Back to Withdrawal",
    "edit-success": "Bank account details have been edited successfully. You can now go back to Withdrawal.",
    // ===
    "remove-confirm": "Remove this bank account?",
    "remove-action": "Remove",
    "detail-show": "Detail",
    "detail-hide": "Hide",
  },
  "bank-error": {
    "acc-number-already-in-use-for-you": "This account number has been taken.",
    "bank-statement-can-t-be-blank": "Please upload a bank statement to proceed.",
    "bank-statement-you-are-not-allowed-to-upload-\"exe\"-files,-prohibited-types": "You can only upload PDF or image files.",
    "country-can-t-be-blank": "Country cannot be blank.",
    "joint-country-can-t-be-blank": "Joint Country cannot be blank.",
    "en-bank-account-errors-withdrawal-exist-can-not-delete-this-bank-account": "This bank account cannot be deleted because there are pending withdrawal requests with it. Please cancel these requests first.",
  },
  // ===
  "volume": {
    "title": "Transacted Volume",
    "action-close": "Close",
    "from": "从",
    "to": "到",
    "range": "Range",
    "report-action": "Email Report",
    "report-dismiss": "Dismiss",
    "report-success": "Report has been sent. Please check your email Inbox.",
    "empty": "Accounts with zero transacted volume in the time range chosen above will not be displayed.",
  },
  "volume-error": {
    "choose-range-first": "Please select \"From\" and \"To\" dates for the email report.",
  },
  // ===
  "charts": {
    "not-ready": "This chart is not ready yet.",
    "spine-title": "Charts",
  },
  "trade-feed": {
    "title": "Trade Feed",
  },
  "order-book": {
    "sells": "Sells",
    "buys": "Buys",
  },
  "product": {
    "high": "高",
    "low": "低",
    "last": "Last Price",
    "volume": "24 小时量",
    "volume-short": "24 小时量",
  },
  // ===
  "mrg-acc": {
    "base-open-price": "Base Price",
    "pnl": "P&L",
    "pnl-total": "Total P&L",
    "position": "Positions",
    "position-total": "Total Positions",
    "account": "Account",
    "product": "Product",
    // ===
    "side": "Side",
    "side-both": "Both",
    "side-short": "Shorts",
    "side-long": "Longs",
    // ===
    "title-longs": "Longs",
    "title-shorts": "Shorts",
  },
  "mrg-acc-close": {
    "confirm-title": "Close All",
    "confirm-description": "Positions with the following details will be closed.",
    "confirm-action": "Close All",
    "confirm-dismiss": "Dismiss",
    "report-title": "Success",
    "report-description": "{{ count }} {{ side }} positions have been closed.",
    "report-long": "long",
    "report-short": "short",
    "action-both": "Close All",
    "action-long": "Close All Longs",
    "action-short": "Close All Shorts",
  },
  "mrg-acc-manage": {
    "title": "Manage Products",
    // ===
    "trading-title": "Trading Products",
    "trading-description": "These are all margin trading products associated with currently selected account. If you choose to hide a product, it will not be displayed on the dashboard header. Hiding a product does not affect your trading accounts or activities.",
    // ===
    "hidden-title": "Hidden Products",
    "hidden-description": "",
    // ===
    "add-title": "Add A Product",
    "add-description": "These are all margin trading products that can be added to currently selected account. If you add a new product, you will be able to trade margin with it using funds from currently selected account. Note that adding too many products to one account can increase loading time.",
    // ===
    "action-manage": "Manage Products",
    "action-done": "Done",
    "action-hide": "Hide",
    "action-show": "Show",
  },
  // ===
  "market": {
    "margin": "Margin",
    "futures": "Futures",
    "spot": "Spot",
  },
  // ===
  "futures": {
    "activate-description": "You have not traded in Futures market yet. With your confirmation, a BTC trading account (called XBT) will be created for futures trading. The app will reload after the process.",
    "activate-cancel": "Cancel",
    "activate-title": "Create Futures Account",
    "activate-action": "Confirm",
  },
  // ===
  "dashboard": {
    "basic": "account overview & order entry",
    "product": "order book & trade feed",
    "chart": "chart",
    "blotter": "blotters",
  },
  "panels": {
    "expand": "expand",
    "collapse": "collapse",
  },
};
