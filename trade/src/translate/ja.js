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
  "balance": {
    "title": "Balance Details",
    "title-spine": "Balance Details & Volumes",
  },
  "blotters": {
    "spine-title": "Orders, Positions & Executions",
  },
  "execution": {
    "title": "約定履歴",
    // ===
    "side": "売買",
    "side-all": "全",
    "side-buy": "買",
    "side-sell": "売",
    // ===
    "created-at": "約定日時t",
    "id": "注文番号",
    "order-id": "約定番号",
    "price": "約定レート",
    "product": "通貨ペア",
    "quantity": "数量",
    "time": "時点",
    // ===
    "target": "区分",
    "target-new": "New",
    "target-settle": "Settle",
  },
  // ===
  "order": {
    "title": "注文履歴",
    // ===
    "distance": "トレール幅",
    "distance-type": "トレールタイプ",
    "distance-type-percentage": "パーセント",
    "distance-type-fiat": "価格",
    // ===
    "margin": "証拠金概算",
    "fx-rate": "FX Rate ({{ first }}/{{ second }})",
    "cost": "平均約定レート（概算）",
    "fee": "取引手数料",
    "filled": "約定",
    "id": "注文番号",
    "interest": "日歩",
    "leverage": "レバ倍率",
    "leverage-help": "レバレッジを大きくとることで、損失も増大する可能性があります。本リスクを十分理解のうえ、レバレッジ取引を実施ください。",
    "product": "通貨ペア",
    "slippage": "スリッページ",
    "spot": "現物",
    "time": "時点",
    "created-at": "注文日時",
    // ===
    "quantity": "注文数量",
    "quantity-disclose": "開示注文数量",
    "qty-filled": "約定数量",
    "qty-disc": "開示注文数量",
    "qty-disclose": "開示注文数量",
    // ===
    "target": "区分",
    "target-settle": "決済",
    // ===
    "price-open": "注文レート",
    "price-average": "平均約定レート",
    "price-avg": "平均約定レート",
    "price": "約定レート",
    // ===
    "side": "売買",
    "side-all": "全",
    "side-sell": "売",
    "side-buy": "買",
    // ===
    "type": "注文種別",
    "type-limit": "指値",
    "type-market": "成行",
    "type-stop": "逆指値",
    "type-trailing-stop": "トレール",
    // ===
    "status": "状態",
    "status-all": "全",
    "status-rejected": "拒否",
    "status-rejected-help": "Order has been rejected.",
    "status-live": "執行中",
    "status-live-help": "Order is currently live.",
    "status-cancelled": "取消済",
    "status-cancelled-help": "Order has been cancelled.",
    "status-filled": "約定",
    "status-filled-help": "Order has been filled.",
    // ===
    "direction": "両建設定",
    "direction-help": "One-Direction: can only submit buy or sell orders.<br />Two-Direction: can submit both sides of orders.<br />Net-Out: opposite orders net out each other.",
    "direction-two-direction": "両建あり",
    "direction-net-out": "ネットアウト",
    "direction-netout": "ネットアウト",
    "direction-one-direction": "両建なし",
  },
  "order-cancel": {
    "title": "取消",
    "confirm": "注文照会?",
  },
  "order-add": {
    "confirm-title": "注文確認",
    "confirm-action": "Submit Order",
    "confirm-dismiss": "Dismiss",
    "report-title": "Order Submitted",
  },
  "order-edit": {
    "confirm": "注文訂正確認?",
  },
  "order-error": {
    "user-not-enough-fund": "口座の残高が足りません。",
    "direction-long-need-empty": "買いポジションが存在しているため売注文を発注することができません。",
    "direction-short-need-empty": "売りポジションが存在しているため買注文を発注することができません。",
    "price-bigger-than-min": "注文レートは0以上で入力してください。",
    "price-limit-bigger-than-market-bid": "指値の売り注文の場合、現在の最良買気配より高いレートを入力してください。",
    "price-limit-smaller-than-market-ask": "指値の買い注文の場合、現在の最良売気配よりも低いレートを入力してください。",
    "price-stop-bigger-than-market-ask": "逆指値の買い注文の場合、現在の最良売気配より高いレートを入力してください。",
    "price-stop-smaller-than-market-bid": "逆指値売り注文の場合、現在の最良買気配より低いレートを入力してください。",
    "quantity-max-BTC": "最大発注量は100BTCです。",
    "quantity-max-ETH": "最大発注量は1000ETHです。",
    "quantity-min-BTC": "最低発注量は0.01BTCです。",
    "quantity-min-ETH": "最低発注量は0.5ETHです。",
  },
  // ===
  "position": {
    "title": "Positions",
    // ===
    "status": "状態",
    "status-all": "全",
    "status-closed": "決済済",
    "status-open": "新規",
    // ===
    "side": "売買",
    "side-all": "全",
    "side-long": "買",
    "side-short": "売",
    // ===
    "pnl": "損益",
    "pnl-close": "確定損益",
    "pnl-open": "評価損益",
    "pnl-realised": "確定損益",
    "pnl-total": "損益",
    "pnl-unrealised": "評価損益L",
    "pnl-w-fee": "損益 & 決済手数料",
    // ===
    "price-close": "決済レート",
    "price-liq": "ロスカットレート",
    "price-mark": "決済レート",
    "price-open": "オープンレート",
    // ===
    "qty-close": "決済済み数量",
    "qty-open": "数量",
    "quantity": "数量",
    "quantity-close": "決済済み数量",
    "quantity-open": "数量",
    // ===
    "int-total": "合計利息",
    "interest-total": "合計利息",
    // ===
    "created-at": "約定日時",
    "fee": "決済手数料",
    "id": "約定番号",
    "leverage": "レバ倍率",
    "margin": "証拠金",
    "product": "通貨ペア",
    "sl": "決済逆指値",
    "stop-loss": "決済逆指値",
    "take-profit": "決済指値",
    "time": "作成日時",
    "tp": "決済指値",
    "updated-at": "編集日時",
    "value": "評価値",
  },
  "position-claim": {
    "title": "現引・現渡",
    "confirm": "現引・現渡確認?",
  },
  "position-close": {
    "title": "決済",
    "confirm": "ポジション決済確認?",
  },
  "position-edit": {
    "confirm": "Update this position?",
  },
  "position-error": {
    "you-do-not-have-enough-balance-to-claim-this-position": "残高が不足しています。",
    "close-quantity-larger-than-open-quantity": "Position close quantity is larger than open quantity.",
    "stop-loss-larger-than-market-ask": "決済逆指値は現在の最良売気配より高いレートを指定してください。",
    "stop-loss-smaller-than-market-bid": "決済逆指値は現在の最良買気配より低いレートを指定してください。",
    "take-profit-larger-than-market-bid": "決済指値は現在の最良買気配より高いレートを指定してください。",
    "take-profit-smaller-than-market-ask": "決済指値は現在の最良売気配より低いレートを指定してください。",
    "claiming-this-position-will-result-in-a-margin-call-due-to-insufficient-free-margin-in-other-positions": "Claiming this position will result in a margin call due to insufficient free margin in other positions.",
  },
  // ===
  "trans": {
    "title": "全取引",
    "title-spine": "全取引",
    "account": "Account",
    // ===
    "direction": "ダイレクション",
    "direction-all": "All",
    "direction-in": "受入",
    "direction-out": "払戻",
    // ===
    "created-at": "取引日時",
    "id": "取引番号",
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
    "type-bought": "購入",
    "type-credit": "貸方",
    "type-credit-new-register": "新規登録クレジット",
    "type-credit-referrer": "紹介謝礼クレジット",
    "type-cross-ccy-trade": "クロスCCYトレード",
    "type-debit": "借方",
    "type-direct-trade": "トレード",
    "type-fund": "入金",
    "type-hot-wallet-settlement": "出金",
    "type-interest-transfer": "利子",
    "type-loan": "ローン",
    "type-loan-fee": "ローン手数料",
    "type-loan-trade": "返済",
    "type-repay": "返済",
    "type-sold": "売却",
    "type-system-transfer": "システムトランスファー",
    "type-trade-fee": "取引手数料",
    "type-withdraw": "出金",
  },
  // ===
  "fund": {
    "title": "入金",
    // ===
    "method": "Funding Method",
    "method-bank": "Bank",
    "method-cash": "Cash",
    // ===
    "account": "Account",
    "amount": "送金金額",
    "bank": "銀行名",
    "time": "Created At",
    "id": "Unique ID",
    "notes": "メモ",
    "notes-none": "(None)",
    "transaction-id": "トランザクションID",
    "inr-transfer": "INR 送金方法",
    "inr-transfer-note": "この振込みの方法はインド銀行口座よりINR入金のみ対応いたします。",
    "guide": "Payment Guide",
    "deadline": "Deadline",
    // ===
    "pending-empty": "入金履歴はありません。",
    "pending-title": "入金履歴",
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
    "you-are-not-approved": "You are not approved",
  },
  // ===
  "withdrawal": {
    "title": "出金",
    "submit": "Submit Withdrawal",
    // ===
    "not-support": "We are not supporting withdrawals in this currency at the moment. Please contact us if you have any questions.",
    // ===
    "id": "ID",
    "time": "Created At",
    "account": "Account",
    "quantity": "金額",
    "address": "{{ currency}} 銀行住所",
    "bank": "銀行口座",
    "inr-transfer": "INR 送金方法",
    "code": "トークン",
    "fee": "出金手数料",
    "fee-help": "（銀行手数料は別）",
    "maximum": "一日上限",
    "minimum": "下限（各出金依頼）",
    "none": "None",
    // ===
    "pending-title": "出金履歴",
    "pending-empty": "出金履歴がありません。",
    // ===
    "success": "出金依頼を出しました。",
  },
  "withdrawal-cancel": {
    "confirm": "出金依頼をキャンセルしますか?",
  },
  "withdrawal-error": {
    "bank-account-can-t-be-blank": "銀行口座を選択下さい。",
    "can-not-cancel-withdrawal": "この出金依頼はキャンセルできません。サポート（support@quoine.com）までご連絡ください。",
    "withdrawal-cannot-be-canceled": "この出金依頼はキャンセルできません。",
    "quantity-must-be-larger-than-minimum": "Quantity must be larger than minimum.",
    "user-bitcoin-address-invalid": "Address is invalid",
    "user-not-enough-fund": "User does not have enough fund",
    "token-is-invalid": "Token is invalid",
  },
  // ===
  "futures-balance": {
    "help-fund": "To fund your Futures account, please transfer from your BTC account:",
    "help-withdrawal": "To withdraw from your Futures account, please transfer to your BTC account:",
    "balance-btc": "BTC口座",
    "balance-futures": "先物口座",
    "action-fund": "入金管理",
    "action-withdrawal": "入金管理",
    "quantity": "Quantity",
    "success": "口座振替は成功しました。.",
  },
  "futures-balance-error": {
    "transfer-failed": "Fund transfer has failed. Please try again.",
    "quantity-too-large": "Quantity must be less than balance.",
  },
  // ===
  "asset-transfer": {
    "declined": "口座を認証できませんでした。<br/>本人確認書類をもう一度確認して<strong>設定</strong>で再アップロードしてください。",
    "submitted": "送信していただいた本人確認書類を現在認証しております。",
    "pending": "口座を認証するまで入出金はできません。口座を認証するためには本人確認書類のアップロードが必要となります。<br/><strong>設定</strong>に移動してください。",
    "go-to-settings": "「設定」に移動",
  },
  // ===
  "bank": {
    "account-name": "口座名義",
    "acccount-number": "口座番号",
    "acccount-type": "口座タイプ",
    "bank-address": "銀行住所",
    "bank-name": "銀行名",
    "bank-branch": "支店名",
    "bank-swift": "SWIFTコード",
    "country": "国",
    "joint-account": "共有口座",
    "joint-acccount-name": "共有口座共有者名",
    "joint-address": "共有口座共有者の住所",
    "joint-city": "共有口座共有者の都市",
    "joint-country": "共有口座共有者の国",
    "joint-document-id": "身分明細書",
    "joint-document-address": "住所証明書",
    "document": "銀行取引明細書",
    "document-uploaded": "Document Uploaded",
    "reason": "新規作成の理由",
    "swift-check": "日本銀行口座の場合はこれをチェックしてください。",
    // ===
    "action-add": "新規口座",
    "action-submit": "Submit",
    "action-cancel": "Cancel",
    // ===
    "status": "状態",
    "status-pending": "承認中",
    "status-pending-help": "You can still submit withdrawal requests with a pending bank account.",
    // ===
    "add-action": "Add Bank Account",
    "add-submit": "Add Bank Account",
    "add-dismiss": "Back to Withdrawal",
    "add-success": "Add new bank successfully. You can now go back to withdrawal.",
    "remove-confirm": "この銀行口座情報を削除しても宜しいですか？",
    "remove-action": "確認",
    "detail-show": "詳細",
    "detail-hide": "省略",
  },
  "bank-error": {
    "acc-number-already-in-use-for-you": "この口座番号はすでに使用されています。",
    "bank-statement-can-t-be-blank": "銀行取引明細書をアップロードしてください。",
    "bank-statement-you-are-not-allowed-to-upload-\"exe\"-files,-prohibited-types": "swf、exe、dmg、jarのファイルをアップロードできません。",
    "country-can-t-be-blank": "{{placeholder}} は空白にできません",
    "joint-country-can-t-be-blank": "{{placeholder}} は空白にできません",
    "en-bank-account-errors-withdrawal-exist-can-not-delete-this-bank-account": "This bank account cannot be deleted because there are pending withdrawal requests with it. Please cancel these requests first.",
  },
  // ===
  "volume": {
    "title": "Transacted Volumes",
    "action-close": "Close",
    "from": "から",
    "to": "まで",
    "range": "Range",
    "report-action": "レポートをメールする",
    "report-dismiss": "Dismiss",
    "report-success": "レポートを送信しました。レポートをメールで送信しました。ご確認ください。",
    "empty": "Accounts with zero transacted volume in the time range chosen above will not be displayed.",
  },
  "volume-error": {
    "choose-range-first": "レポート期間を「から」及び「まで」から指定してください。",
  },
  // ===
  "charts": {
    "not-ready": "このチャートは準備中です。",
    "spine-title": "Charts",
  },
  "trade-feed": {
    "title": "約定フィード",
  },
  "order-book": {
    "sells": "売",
    "buys": "買",
  },
  "product": {
    "high": "高値",
    "low": "安値",
    "last": "Last Price",
    "volume": "24H出来高",
    "volume-short": "24H出来高",
  },
  // ===
  "mrg-acc": {
    "base-open-price": "平均約定レート",
    "pnl": "概算損益",
    "pnl-total": "損益",
    "position": "ポジション照会",
    "position-total": "Total Positions",
    "account": "アカウント",
    "product": "通貨ペア",
    // ===
    "side": "売買",
    "side-both": "Both",
    "side-short": "売",
    "side-long": "買",
    // ===
    "title-longs": "買",
    "title-shorts": "売",
  },
  "mrg-acc-close": {
    "confirm-title": "Close All Confirmation",
    "confirm-description": "All positions with the following information will be closed:",
    "confirm-action": "一括決済",
    "confirm-dismiss": "Dismiss",
    "report-title": "Success",
    "report-description": "{{ count }} {{ side }} positions have been closed.",
    "report-long": "買",
    "report-short": "売",
    "action-both": "一括決済",
    "action-long": "買いポジション一括決済",
    "action-short": "売りポジション一括決済",
  },
  "mrg-acc-manage": {
    "title": "Manage Products",
    // ===
    "trading-title": "Trading Products",
    "trading-description": "Below are your margin trading products with current account. You can choose to hide a product. It will be hidden from your dashboard header without affect any of your trading activities.",
    // ===
    "hidden-title": "Hidden Products",
    "hidden-description": "",
    // ===
    "add-title": "Add A Product",
    "add-description": "Below are products that you can add with current account. Add a product will allow you to enter margin trading with it. Please note that adding too much products in one account might reduce your app init time.",
    // ===
    "action-manage": "Manage Products",
    "action-done": "Done",
    "action-hide": "Hide",
    "action-show": "Show",
  },
  // ===
  "market": {
    "margin": "レバレッジ",
    "futures": "先物",
    "spot": "現物",
  },
  // ===
  "futures": {
    "activate-description": "先物取引専用のBTC口座を作成します。",
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
