/* eslint-disable quotes, quote-props, max-len */

// quoine

export default {
  "product-book": {
    "spine-title": "Order Book & Trade Feed",
  },
  "news": {
    "spine-title": "Chatbox & News",
  },
  "transfer": {
    "spine-title": "Funds & Withdrawals",
    "account": "Account",
  },
  "blotters": {
    "spine-title": "Orders, Positions & Executions",
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
    "title": "Executions",
    // ===
    "side": "Side",
    "side-all": "All",
    "side-buy": "Buy",
    "side-sell": "Sell",
    // ===
    "created-at": "Created At",
    "id": "ID",
    "order-id": "Order ID",
    "price": "Price",
    "product": "Product",
    "quantity": "Quantity",
    "time": "Time",
    // ===
    "target": "Target",
    "target-new": "New",
    "target-settle": "Settle",
    "target-spot": "Spot",
  },
  // ===
  "order": {
    "title": "Orders",
    // ===
    "distance": "Price Distance",
    "distance-type": "Distance Type",
    "distance-type-fiat": "Fiat",
    "distance-type-percentage": "Percent",
    // ===
    "margin": "Estimated Margin",
    "fx-rate": "FX Rate ({{ first }}/{{ second }})",
    "cost": "Estimated Cost",
    "fee": "Fee",
    "filled": "Filled",
    "id": "ID",
    "interest": "Daily Interest",
    "leverage": "Leverage",
    "leverage-help": "With great leverage level come great risks. Please ensure that you fully understand the risk before trading at this level.",
    "product": "Product",
    "slippage": "Slippage",
    "spot": "Spot",
    "time": "Time",
    "created-at": "Created At",
    // ===
    "quantity": "Quantity",
    "quantity-disclose": "Disclosed Quantity",
    "qty-filled": "Filled Qty",
    "qty-disc": "Disc. Qty",
    "qty-disclose": "Disclosed Qty",
    // ===
    "target": "Target",
    "target-settle": "Settle",
    "target-spot": "Spot",
    // ===
    "price-open": "Open Price",
    "price-average": "Average Price",
    "price-avg": "Avg. Price",
    "price": "Price",
    // ===
    "side": "Side",
    "side-all": "All",
    "side-sell": "Sell",
    "side-buy": "Buy",
    // ===
    "type": "Type",
    "type-limit": "Limit",
    "type-market": "Market",
    "type-stop": "Stop",
    "type-trailing-stop": "Trailing Stop",
    // ===
    "status": "Status",
    "status-all": "All",
    "status-rejected": "Rejected",
    "status-rejected-help": "Order has been rejected.",
    "status-live": "Live",
    "status-live-help": "Order is currently live.",
    "status-cancelled": "Cancelled",
    "status-cancelled-help": "Order has been cancelled.",
    "status-filled": "Filled",
    "status-filled-help": "Order has been filled.",
    // ===
    "direction": "Mode",
    "direction-help": "One-Direction: can only submit buy or sell orders.<br />Two-Direction: can submit both sides of orders.<br />Net-Out: opposite orders net out each other.",
    "direction-two-direction": "Two-Direction",
    "direction-net-out": "Net-Out",
    "direction-netout": "Net-Out",
    "direction-one-direction": "One-Direction",
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
    "user-free-margin-below-tolerance-level": "Free margin is below tolerance level",
  },
  // ===
  "position": {
    "title": "Positions",
    // ===
    "status": "Status",
    "status-all": "All",
    "status-closed": "Closed",
    "status-open": "Open",
    // ===
    "side": "Side",
    "side-all": "All",
    "side-long": "Long",
    "side-short": "Short",
    // ===
    "pnl": "P&L",
    "pnl-close": "Close P&L",
    "pnl-open": "Open P&L",
    "pnl-realised": "Realised P&L",
    "pnl-total": "Total P&L",
    "pnl-unrealised": "Unrealised P&L",
    "pnl-w-fee": "P&L & Fee",
    // ===
    "price-close": "Close Price",
    "price-liq": "Liq Price",
    "price-mark": "Mark Price",
    "price-open": "Open Price",
    // ===
    "qty-close": "Close Qty.",
    "qty-open": "Open Qty.",
    "quantity": "Quantity",
    "quantity-close": "Close Quantity",
    "quantity-open": "Open Quantity",
    // ===
    "int-total": "Total Int.",
    "interest-total": "Total Interest",
    // ===
    "created-at": "Created At",
    "fee": "Trade Fee",
    "id": "ID",
    "leverage": "Leverage",
    "margin": "Margin",
    "product": "Product",
    "sl": "SL",
    "stop-loss": "Stop Loss",
    "take-profit": "Take Profit",
    "time": "Time",
    "tp": "TP",
    "updated-at": "Updated At",
    "value": "Value",
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
    "status": "Status",
    // ===
    "recent-empty": "No Recent Funds",
    "recent-title": "Recent Funds",
    // ===
    "status-pending": "Pending",
    "status-approved": "Approved",
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
    "help-XMR": "Please deposit to the address below and remember to include the Payment ID in your deposit. Failure to do so may result in the loss of your deposit.",
    "help-XRP": "Ripple Base Reserve is a minimum amount of XRP that is required for every address in the ledger. Currently this is 20 XRP, which will be held as reserve the first time you deposit. After that you will be able to receive your full deposit.",
    // ===
    "address": "Address",
    "payment-id": "Payment ID",
    // ===
    "copy": "Copy",
    "copy-address": "Copy Address",
    "copy-payment-id": "Copy Payment ID",
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
    "quantity": "Amount",
    "address": "{{ currency}} Address",
    "bank": "Bank Account",
    "inr-transfer": "INR Transfer Type",
    "inr-transfer-note": "This deposit method is only for INR domestic transfers from local India bank accounts.",
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
    "account-name": "Account Name",
    "account-number": "Account Number",
    "account-type": "Account Type",
    "bank-address": "Bank Address",
    "bank-name": "Bank Name",
    "bank-branch": "Bank Branch",
    "bank-swift": "Bank SWIFT",
    "country": "Country",
    "joint-account": "Joint Account",
    "joint-account-name": "Joint Account Holder Name",
    "joint-address": "Joint Account Holder Address",
    "joint-city": "Joint Account City",
    "joint-country": "Joint Account Country",
    "joint-document-id": "ID Document",
    "joint-document-address": "Proof of Address",
    "document": "Bank Statement",
    "document-uploaded": "Document Uploaded",
    "reason": "Reason",
    "swift-check": "Check this if your bank account is located in Japan.",
    // ===
    "status": "Status",
    "status-pending": "Pending",
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
    "from": "From",
    "to": "To",
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
    "mode": "Mode",
    "mode-normal": "Normal",
    "mode-depth-chart": "Depth Chart",
  },
  "product": {
    "high": "High",
    "low": "Low",
    "last": "Last Price",
    "volume": "24h Volume",
    "volume-short": "24h Volume",
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
