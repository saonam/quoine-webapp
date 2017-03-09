/* eslint-disable quotes, quote-props, max-len */

export default {
  "product-book": {
    "spine-title": "注文控帳&取引フィード",
  },
  "news": {
    "spine-title": "チャットボックス＆ニュース",
  },
  "transfer": {
    "spine-title": "入出金",
  },
  "volume-panel": {
    "title-spine": "取引高",
  },
  "blotters": {
    "spine-title": "注文、建玉、約定",
  },
  "execution": {
    "title": "約定履歴",
    // ===
    "side": "売買",
    "side-all": "全",
    "side-buy": "買",
    "side-sell": "売",
    // ===
    "created-at": "約定日時",
    "id": "ID",
    "order-id": "注文ID",
    "price": "約定レート",
    "product": "商品",
    "quantity": "数量",
    "time": "時点",
    // ===
    "target": "区分",
    "target-new": "新規作成",
    "target-settle": "決済する",
  },
  // ===
  "order": {
    "title": "注文履歴",
    // ===
    "distance": "トレール幅",
    "distance-type": "トレールのタイプ",
    "distance-type-percentage": "パーセント",
    "distance-type-fiat": "価格",
    // ===
    "margin": "証拠金概算",
    "fx-rate": "FXレート({{ first }}/{{ second }})",
    "cost": "平均約定レート（概算）",
    "fee": "取引手数料",
    "filled": "約定",
    "id": "注文番号",
    "interest": "日歩",
    "leverage": "レバ倍率",
    "leverage-help": "レバレッジを大きくとることで、損失も増大する可能性があります。本リスクを十分理解のうえ、レバレッジ取引を実施ください。",
    "product": "商品",
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
    "status-rejected-help": "未満な残高のため注文が拒否されました。",
    "status-live": "執行中",
    "status-live-help": "注文が十分に約定されません。",
    "status-cancelled": "取消済",
    "status-cancelled-help": "注文が決済されました。",
    "status-filled": "約定",
    "status-filled-help": "注文が十分に躍如されました。",
    // ===
    "direction": "両建設定",
    "direction-help": "両建なし：買い注文だけ、または売り注文だけ出せるモード<br />両建あり：買い注文と売り注文とも出せるモード<br />現引・現渡：信用取引の建玉を新しい建玉で返却するモード",
    "direction-two-direction": "両建あり",
    "direction-net-out": "ネットアウト",
    "direction-netout": "ネットアウト",
    "direction-one-direction": "両建なし",
  },
  "order-cancel": {
    "title": "取消",
    "confirm": "注文を取消しますか。",
  },
  "order-add": {
    "confirm-title": "確認",
    "confirm-action": "注文を出しますか。",
    "confirm-dismiss": "閉じる",
    "report-title": "注文を出しました。",
  },
  "order-edit": {
    "confirm": "注文を訂正しますか。",
  },
  "order-error": {
    "user-not-enough-fund": "口座の残高が足りません。",
    "direction-long-need-empty": "買い建玉が存在しているため売注文を発注することができません。",
    "direction-short-need-empty": "売り建玉が存在しているため買注文を発注することができません。",
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
    "title": "建玉",
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
    "close-quantity-larger-than-open-quantity": "決済数量はオープン数量を超えています。",
    "stop-loss-larger-than-market-ask": "決済逆指値は現在の最良売気配より高いレートを指定してください。",
    "stop-loss-smaller-than-market-bid": "決済逆指値は現在の最良買気配より低いレートを指定してください。",
    "take-profit-larger-than-market-bid": "決済指値は現在の最良買気配より高いレートを指定してください。",
    "take-profit-smaller-than-market-ask": "決済指値は現在の最良売気配より低いレートを指定してください。",
    "claiming-this-position-will-result-in-a-margin-call-due-to-insufficient-free-margin-in-other-positions": "このポジションを原引・現渡するとマージンコールが発生する可能性があります。",
  },
  // ===
  "trans": {
    "title": "全取引",
    "title-spine": "全取引",
    "account": "口座",
    // ===
    "direction": "ダイレクション",
    "direction-all": "All",
    "direction-in": "受入",
    "direction-out": "払戻",
    // ===
    "created-at": "取引日時",
    "id": "取引番号",
    "notes": "メモ",
    "quantity-gross": "総額",
    "quantity-net": "正味量",
    "business-date": "日付",
    "loan": "ローン",
    "loan-quantity": "ローン数量",
    "loan-rate": "レート",
    "fee": "手数料",
    "fee-exchange": "取引手数料",
    "fee-network": "ネットワーク手数料",
    "hash": "ハッシュ",
    // ===
    "state": "ステータス",
    "state-pending": "Pending",
    // ===
    "type": "タイプ",
    "type-all": "全",
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
  "fund-withdrawal": {
    "message-documents-submitted": "送信していただいた本人確認書類を現在認証しております。",
    // ===
    "message-declined": "口座を認証できませんでした。",
    "help-declined": "本人確認書類をもう一度確認して 設定 で再アップロードしてください。",
    // ===
    "message-pending": "口座を認証するまで入出金はできません。",
    "help-pending": "口座を認証するためには本人確認書類のアップロードが必要となります。「設定」に移動してください。",
    // ===
    "message-limit-accounts": "現在、入出金は日本円・BTC・ETHでのみ受け付けております。",
    // ===
    "message-need-tfa": "For security reason, withdrawal not allow without two factor authen.",
    "help-need-tfa": "Please enabel two factor authen for account in Menu > Settings > Security.",
    // ===
    "goto-settings": "「設定」に移動する",
  },
  // ===
  "fund": {
    "title": "入金",
    // ===
    "method": "入金方法",
    "method-bank": "銀行振込",
    "method-cash": "キャッシュ",
    // ===
    "account": "銀行口座番号",
    "amount": "送金金額",
    "bank": "銀行名",
    "time": "作成日付",
    "id": "Unique ID",
    "notes": "メモ",
    "notes-none": "(無し)",
    "transaction-id": "トランザクションID",
    "inr-transfer": "INR 送金方法",
    "inr-transfer-note": "この振込みの方法はインド銀行口座よりINR入金のみ対応いたします。",
    "guide": "手順",
    "deadline": "締切",
    // ===
    "pending-empty": "入金履歴はありません。",
    "pending-title": "入金履歴",
  },
  "fund-bank": {
    "help-1": "①",
    "help-1-note": "入金情報を送信してから、入金情報から発生する \"Unique ID\" を振込にメモしてください。",
    "help-2": "②QUOINEの銀行口座までお振込みください。",
    "help-2-note": "\"Unique ID\" を振込にメモしてください。",
    // ===
    "success": "入金情報をご作成いただきありがとうございます。この入金情報の \"Unique ID\" は {{id}}です。",
    // ===
    "submit": "送信",
    "open": "入金情報を作成する",
    "dismiss": "閉じる",
    // ===
    "not-support": "この通貨の入金はただいま対応しておりません。ご了解のほどよろしくお願いいたします。",
  },
  "fund-cash": {
    "success-1": "下記のURLをご参照ください。",
    "success-2": "You can also find this link in the \"Pending Funds\" list below.",
    "dismiss": "閉じる",
    "submit": "次",
  },
  "fund-crypto": {
    "help": "下記のアドレスにご送金ください：",
    "copy": "アドレスをコピーする",
  },
  "fund-error": {
    "you-are-not-approved": "アカウントは承認中であるため入金情報を作成不可能です。",
  },
  // ===
  "withdrawal": {
    "title": "出金",
    "submit": "出金依頼を送信する",
    // ===
    "not-support": "この通貨の出金はただいま対応しておりません。ご了解のほどよろしくお願いいたします。",
    // ===
    "id": "ID",
    "time": "作成日付",
    "account": "口座",
    "quantity": "金額",
    "address": "{{ currency}} 銀行住所",
    "bank": "銀行口座",
    "inr-transfer": "INR 送金方法",
    "code": "トークン",
    "fee": "出金手数料",
    "fee-help": "（銀行手数料は別）",
    "maximum": "一日上限",
    "minimum": "下限（各出金依頼）",
    "none": "無し",
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
    "quantity-must-be-larger-than-minimum": "最小金額以上をご入力ください。",
    "user-bitcoin-address-invalid": "このBTCアドレスは無効です。もう一度ご確認ください。",
    "user-not-enough-fund": "残高は未満です。",
    "token-is-invalid": "このトークンは無効です。",
    "verification-failed": "この認証コードは無効です。",
  },
  // ===
  "futures-balance": {
    "help-fund": "先物取引の口座を入金するにはBTC口座からお振込ください。",
    "help-withdrawal": "先物取引の口座から出金するにはBTC口座へお振込ください。",
    "balance-btc": "BTC口座",
    "balance-futures": "先物口座",
    "action-fund": "入金管理",
    "action-withdrawal": "入金管理",
    "quantity": "金額",
    "success": "口座振替は成功しました。.",
  },
  "futures-balance-error": {
    "transfer-failed": "振込に失敗しました。もう一度ご実行ください。",
    "quantity-too-large": "振込の金額は残高より小さいとなっております。",
  },
  // ===
  "bank": {
    "account-name": "口座名義",
    "account-number": "口座番号",
    "account-type": "口座タイプ",
    "bank-address": "銀行住所",
    "bank-name": "銀行名",
    "bank-branch": "支店名",
    "bank-swift": "SWIFT",
    "country": "国",
    "joint-account": "共有口座",
    "joint-account-name": "共有口座共有者名",
    "joint-address": "共有口座共有者の住所",
    "joint-city": "共有口座共有者の都市",
    "joint-country": "共有口座共有者の国",
    "joint-document-id": "身分明細書",
    "joint-document-address": "住所証明書",
    "document": "銀行取引明細書",
    "document-uploaded": "アップロードの書類",
    "reason": "新規作成の理由",
    "swift-check": "日本銀行口座の場合はこれをチェックしてください。",
    // ===
    "action-add": "新規口座",
    "action-submit": "送信",
    "action-cancel": "キャンセル",
    // ===
    "status": "状態",
    "status-pending": "承認中",
    "status-pending-help": "承認中の銀行口座でも出金依頼を送信できます。",
    // ===
    "add-action": "銀行口座を設定する",
    "add-submit": "設定",
    "add-dismiss": "戻る",
    "add-success": "口座番号の設定に成功しました。",
    "remove-confirm": "この銀行口座情報を削除しても宜しいですか？",
    "remove-action": "確認",
    "detail-show": "詳細",
    "detail-hide": "省略",
  },
  "bank-error": {
    "acc-number-already-in-use-for-you": "この口座番号はすでに使用されています。",
    "bank-statement-can-t-be-blank": "銀行取引明細書をアップロードしてください。",
    "bank-statement-you-are-not-allowed-to-upload-\"exe\"-files,-prohibited-types": "swf、exe、dmg、jarのファイルをアップロードできません。",
    "country-can-t-be-blank": "{{placeholder}} は空白にできません。",
    "joint-country-can-t-be-blank": "{{placeholder}} は空白にできません。",
    "en-bank-account-errors-withdrawal-exist-can-not-delete-this-bank-account": "Pending出金依頼に付いている銀行口座が削除できません。銀行口座を削除するには、まずそのPending出金依頼をキャンセルしてください。",
  },
  // ===
  "volume": {
    "title": "取引高",
    "action-close": "閉じる",
    "from": "から",
    "to": "まで",
    "range": "Range",
    "report-action": "レポートをメールする",
    "report-dismiss": "閉じる",
    "report-success": "レポートを送信しました。レポートをメールで送信しました。ご確認ください。",
    "empty": "指定した期間にゼロになる取引高がある口座が表示されません。",
  },
  "volume-error": {
    "choose-range-first": "レポート期間を「から」及び「まで」から指定してください。",
  },
  // ===
  "charts": {
    "not-ready": "このチャートは準備中です。",
    "spine-title": "チャート",
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
    "last": "最後のレート",
    "volume": "24H出来高",
    "volume-short": "24H出来高",
  },
  // ===
  "mrg-acc": {
    "base-open-price": "平均約定レート",
    "pnl": "概算損益",
    "pnl-total": "損益",
    "position": "ポジション照会",
    "position-total": "総合建玉",
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
    "confirm-title": "一括決済",
    "confirm-description": "下記の条件を満たす建玉を一括決済します。",
    "confirm-action": "一括決済",
    "confirm-dismiss": "キャンセル",
    "report-title": "成功しました。",
    "report-description": "{{ count }} {{ side }} 建玉が一括決済されました。",
    "report-long": "買",
    "report-short": "売",
    "action-both": "一括決済",
    "action-long": "買いポジション一括決済",
    "action-short": "売りポジション一括決済",
  },
  "mrg-acc-manage": {
    "title": "商品管理",
    // ===
    "trading-title": "取引商品",
    "trading-description": "下記はこの口座に付いている商品です。</br>取引しない商品を隠れます。隠れの商品は全体の取引活動に影響を当たりません。",
    // ===
    "hidden-title": "隠れた商品",
    "hidden-description": "",
    // ===
    "add-title": "商品を追加する",
    "add-description": "下記は追加可能の取引商品です。商品を追加するとその商品で信用取引できます。",
    // ===
    "action-manage": "商品を管理する",
    "action-done": "確認",
    "action-hide": "隠れる",
    "action-show": "表示する",
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
    "activate-cancel": "キャンセル",
    "activate-title": "先物取引の口座を作成する",
    "activate-action": "確認",
  },
  // ===
  "dashboard": {
    "basic": "口座照会＆注文入力",
    "product": "商品",
    "chart": "チャート",
    "blotter": "blotters",
  },
  "panels": {
    "expand": "expand",
    "collapse": "collapse",
  },
};
