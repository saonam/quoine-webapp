/* eslint-disable quotes, quote-props, max-len */

export default {
  "account": {
    "balance": "Balance",
    "balance-available": "Available Balance",
    "balance-wallet": "Wallet Balance",
    // ===
    "balance-base": "Crypto Balance",
    "balance-locked": "Locked Balance",
    "balance-quote": "Fiat Balance",
    "balance-all": "Balance (All Accounts)",
    "balance-total-crypto": "Total Crypto Balance",
    "balance-total-fiat": "Total Fiat Balance",
    // ===
    "equity": "Equity",
    "loan-offers": "Loan Offers",
    "loaned": "Loaned Out",
    "loaned-interest": "Interest Earned",
    // ===
    "limit-orders": "Limit Orders",
    // ===
    "margin-available": "Available Margin",
    "margin-coverage": "Margin Coverage",
    "margin-used": "Used Margin",
    "margin": "Margin",
    "margin-withdrawable": "Withdrawable Margin",
    // ===
    "pnl": "P&L",
    "pnl-realised": "Realised P&L",
    "pnl-unrealised": "Unrealised P&L",
    // ===
    "spine-title": "Account",
  },
  "account-manage": {
    "title": "Manage Accounts",
    // ===
    "trading-title": "Trading Accounts",
    "trading-description": "You can choose to hide an account. It will be hidden from the top menu without affect its balance or trading activities (if any). At the moment, only fiat accounts can be hidden.",
    // ===
    "hidden-title": "Hidden Accounts",
    "hidden-description": "",
    // ===
    "add-title": "Add An Account",
    "add-description": "Adding an account will allow you to fund, trade, and withdraw with its currency.",
    // ===
    "action-manage": "Manage Accounts",
    "action-done": "Done",
    "action-fund": "Fund/Withdraw",
    "action-hide": "Hide",
    "action-show": "Show",
  },
  "menu": {
    "accounts": "Accounts",
    "dashboard": "Dashboard",
    "lending": "Lending",
    "settings": "Settings",
    // ===
    "faq": "FAQ",
    "fee": "Fees",
    "support": "Support",
    // ===
    "language": "Language",
    // ===
    "sign-out": "Sign Out",
  },
  "language": {
    "title": "Language",
    "en": "English",
    "ja": "日本語",
  },
  "tfa": {
    "sent-sms": "Code has been sent via SMS.",
    "sent-authy": "Code has been sent via Authy.",
    "resend-sms": "Resend via SMS",
    "send": "Request",
  },
  "tfa-error": {
    "en-authy-dos-protection-user-has-requested-too-many-tokens-in-the-last-hour": "You have requested too many times in the last hour. Please wait a moment before trying again.",
    "en-authy-sms-token-was-not-sent": "The code was unable to reach your phone. Please try again.",
    "en-authy-token-is-invalid-token-was-used-recently": "This code is invalid because it has been used recently.",
  },
  "test": {
    "basic": "english",
    "interpolation": "quoine-{{name}}",
  },
  "month": {
    "1": "January",
    "2": "February",
    "3": "March",
    "4": "April",
    "5": "May",
    "6": "June",
    "7": "July",
    "8": "August",
    "9": "September",
    "10": "October",
    "11": "November",
    "12": "December",
  },
  "file": {
    "choose": "Choose File",
    "none": "No File Choosen",
  },
  "blotter": {
    "load": "Load more",
    "loaded": "All loaded",
  },
  "confirmation": {
    "skip": "Do not show this again",
    "skip-hint": "You can turn confirmations back on in Settings.",
    "no": "No",
    "yes": "Yes",
    "dismiss": "Dismiss",
    "title": "Confirmation",
    "description": "Confirmation popups help you avoid accidents when making important trading decisions such as creating an order or closing a position. You can choose to receive them before and/or after the action. Check the list below to customize the popups to your needs.",
    // ===
    // Need review
    "task-order-add-confirm": "Create Order Confirm",
    "task-order-add-report": "Create Order Report",
    "task-order-cancel-confirm": "Cancel Order Confirm",
    "task-order-cancel-report": "Cancel Order Report",
    "task-order-edit-confirm": "Edit Order Confirm",
    "task-order-edit-report": "Edit Order Report",
    "task-position-claim-confirm": "Claim Position Confirm",
    "task-position-claim-report": "Claim Position Report",
    "task-position-close-confirm": "Close Position Confirm",
    "task-position-close-report": "Close Position Report",
    "task-position-edit-confirm": "Edit Position Confirm",
    "task-position-edit-report": "Edit Position Report",
    "task-mrg-acc-close-confirm": "Close All Positions Confirm",
    "task-mrg-acc-close-report": "Close All Positions Report",
    "task-tokens-remove-confirm": "Delete API Token Confirm",
    "task-tokens-remove-report": "Delete API Token Report",
    "task-wdr-bank-remove-confirm": "Delete Bank Account Confirm",
    "task-wdr-bank-remove-report": "Delete Bank Account Report",
    "task-withdrawal-cancel-confirm": "Cancel Withdrawal Confirm",
    "task-withdrawal-cancel-report": "Cancel Withdrawal Report",
  },
  "form": {
    "cancel": "Cancel",
    "done": "Done",
  },
};

// lending

// "__loan": {
//   "date": "Date",
//   "id": "ID",
//   "interest-earned": "Interest Earned",
//   "open": "Open",
//   "quantity": "Amount",
//   "rate": "Rate",
//   "reinvest": "Reinvest",
//   "status": "Status",
//   "title": "My Loan"
// },
// "__market-offer": {
//   "quantity": "Amount",
//   "rate": "Interest Rates (%)",
//   "title": "Market Loan Offers"
// },
// "__offer": {
//   "created-at": "Created At",
//   "loaned-out": "Loaned Out",
//   "quantity": "Amount",
//   "rate": "Rate",
//   "status": "Status",
//   "title": "Offers"
// },
// "__offer-form": {
//   "finish-message": "Create Offer Successfully",
//   "finish-title": "Create Offer",
//   "highest": "Offered Rates Highest",
//   "lowest": "Offered Rates Lowest",
//   "quantity": "Amount you Wish To Lend",
//   "rate": "Your Daily Interest Rate (%)"
// },
// "__validation": {
//   "BadInputNumber": "Please enter a number.",
//   "CheckboxMissing": "Please check this box if you want to proceed.",
//   "DateRangeOverflow": "Please select a value that is no later than %l.",
//   "DateRangeUnderflow": "Please select a value that is no earlier than %l.",
//   "FileMissing": "Please select a file.",
//   "InvalidEmail": "Please enter an email address.",
//   "InvalidURL": "Please enter a URL.",
//   "NumberRangeOverflow": "Please select a value that is no more than %l.",
//   "NumberRangeUnderflow": "Please select a value that is no less than %l.",
//   "PatternMismatch": "Please match the requested format.",
//   "PatternMismatchWithTitle": "Please match the requested format: %l.",
//   "RadioMissing": "Please select one of these options.",
//   "SelectMissing": "Please select an item in the list.",
//   "StepMismatch": "Please select a valid value. The two nearest valid values are %l and %l.",
//   "StepMismatchOneValue": "Please select a valid value. The nearest valid value is %l.",
//   "TextTooLong": "Please shorten this text to %l characters or less (you are currently using %l characters).",
//   "TimeRangeOverflow": "Please select a value that is no later than %l.",
//   "TimeRangeUnderflow": "Please select a value that is no earlier than %l.",
//   "ValueMissing": "Please fill out this field."
// },
