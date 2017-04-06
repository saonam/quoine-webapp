/* eslint-disable quotes, quote-props, max-len */

// quoine

export default {
  "product-book": {
    "spine-title": "板情報＆約定フィード",
  },
  "news": {
    "spine-title": "ニュース",
  },
  "transfer": {
    "spine-title": "入出金",
    "account": "口座情報",
  },
  "volume-balance-panel": {
    "title-spine": "取引高＆残高",
  },
  "blotters": {
    "spine-title": "注文、ポジション、約定",
  },
  "balance-total": {
    "title": "合計残高",
    "currency": "通貨",
    "total-fiat": "合計現金残高",
    "total-crypto": "合計仮想通貨残高",
    "total-balance": "合計残高",
  },
  "balance-detail": {
    "title": "残高の詳細",
    "account": "口座情報",
  },
  "execution": {
    "title": "約定",
    // ===
    "side": "売買",
    "side-all": "ALL",
    "side-buy": "買",
    "side-sell": "売",
    // ===
    "created-at": "約定日時",
    "id": "約定ID",
    "order-id": "注文ID",
    "price": "約定価格",
    "product": "通貨ペア",
    "quantity": "数量",
    "time": "注文日時",
    // ===
    "target": "種別",
    "target-new": "新規",
    "target-settle": "決済",
    "target-spot": "指値",
  },
  // ===
  "order": {
    "title": "注文履歴",
    // ===
    "distance": "トレール幅",
    "distance-type": "トレールタイプ",
    "distance-type-fiat": "価格",
    "distance-type-percentage": "パーセント",
    // ===
    "margin": "証拠金",
    "fx-rate": "FXレート({{ first }}/{{ second }})",
    "cost": "約定代金（概算）",
    "fee": "取引手数料",
    "filled": "約定",
    "id": "注文ID",
    "interest": "ポジション料",
    "leverage": "レバレッジ",
    "leverage-help": "証拠金以上の損失が発生する可能性があります。本リスクを十分理解のうえ、レバレッジ取引を実施ください。",
    "product": "通貨ペア",
    "slippage": "スリッページ",
    "spot": "現物",
    "time": "注文日時",
    "created-at": "注文日時",
    // ===
    "quantity": "数量",
    "quantity-disclose": "非開示注文数量",
    "qty-filled": "約定数量",
    "qty-disc": "非開示注文数量",
    "qty-disclose": "非開示注文数量",
    // ===
    "target": "指値",
    "target-settle": "指値決済",
    "target-spot": "指値",
    // ===
    "price-open": "注文レート",
    "price-average": "平均約定レート",
    "price-avg": "平均約定レート",
    "price": "レート",
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
    "status": "ステータス",
    "status-all": "ALL",
    "status-rejected": "取消済",
    "status-rejected-help": "注文が約定されませんでした。",
    "status-live": "注文中",
    "status-live-help": "注文中の注文です。",
    "status-cancelled": "取消済",
    "status-cancelled-help": "注文が取り消されました。",
    "status-filled": "約定",
    "status-filled-help": "注文が約定しました。",
    // ===
    "direction": "両建設定",
    "direction-help": "両建なし：保有ポジションと反対ポジションの注文は発注できないモード<br />両建あり：保有ポジションと反対ポジションの注文が発注できるモード（証拠金は双方に必要となります）<br />ネットアウト：約定日時が古い反対ポジションから順にネッティング決済されるモード",
    "direction-two-direction": "両建あり",
    "direction-net-out": "ネットアウト",
    "direction-netout": "ネットアウト",
    "direction-one-direction": "両建なし",
  },
  "order-cancel": {
    "title": "取消",
    "confirm": "注文を取消しますか？",
  },
  "order-add": {
    "confirm-title": "注文を取消しますか？",
    "confirm-action": "Yes",
    "confirm-dismiss": "No",
    "report-title": "注文を出しました。",
  },
  "order-edit": {
    "confirm": "注文を訂正しますか？",
  },
  "order-error": {
    "user-not-enough-fund": "口座の残高が足りません。",
    "direction-long-need-empty": "買ポジションが存在しているため売注文を発注することができません。",
    "direction-short-need-empty": "売ポジションが存在しているため買注文を発注することができません。",
    "price-bigger-than-min": "注文レートは0以上で入力してください。",
    "price-limit-bigger-than-market-bid": "指値の売り注文の場合、現在の最良買気配より高いレートを入力してください。",
    "price-limit-smaller-than-market-ask": "指値の買い注文の場合、現在の最良売気配より低いレートを入力してください。",
    "price-stop-bigger-than-market-ask": "逆指値の買い注文の場合、現在の最良売気配より高いレートを入力してください。",
    "price-stop-smaller-than-market-bid": "逆指値売り注文の場合、現在の最良買気配より低いレートを入力してください。",
    "quantity-max-BTC": "最大発注量は100BTCです。",
    "quantity-max-ETH": "最大発注量は1000ETHです。",
    "quantity-min-BTC": "最低発注量は0.01BTCです。",
    "quantity-min-ETH": "最低発注量は0.5ETHです。",
    "quantity-integer": "注文数量は整数を入力してください。",
    "user-free-margin-below-tolerance-level": "証拠金維持率が110％以下になるため注文することができません",
  },
  // ===
  "position": {
    "title": "ポジション",
    // ===
    "status": "ステータス",
    "status-all": "ALL",
    "status-closed": "クローズ",
    "status-open": "オープン",
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
    "pnl-unrealised": "評価損益",
    "pnl-w-fee": "損益 & 決済手数料",
    // ===
    "price-close": "決済レート",
    "price-liq": "ロスカットレート",
    "price-mark": "決済レート",
    "price-open": "オープンレート",
    // ===
    "qty-close": "決済数量",
    "qty-open": "数量",
    "quantity": "数量",
    "quantity-close": "決済数量",
    "quantity-open": "数量",
    // ===
    "int-total": "ポジション料合計",
    "interest-total": "ポジション料合計",
    // ===
    "created-at": "約定日時",
    "fee": "取引手数料",
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
    "confirm": "現引・現渡を行いますか?",
  },
  "position-close": {
    "title": "決済",
    "confirm": "ポジションを決済しますか?",
  },
  "position-edit": {
    "confirm": "ポジションをアップデートしますか？",
  },
  "position-error": {
    "you-do-not-have-enough-balance-to-claim-this-position": "残高が不足しています。",
    "close-quantity-larger-than-open-quantity": "決済数量はオープン数量を超えています。",
    "stop-loss-larger-than-market-ask": "決済逆指値は現在の最良売気配より高いレートを指定してください。",
    "stop-loss-smaller-than-market-bid": "決済逆指値は現在の最良買気配より低いレートを指定してください。",
    "take-profit-larger-than-market-bid": "決済指値は現在の最良買気配より高いレートを指定してください。",
    "take-profit-smaller-than-market-ask": "決済指値は現在の最良売気配より低いレートを指定してください。",
    "claiming-this-position-will-result-in-a-margin-call-due-to-insufficient-free-margin-in-other-positions": "このポジションを現引・現渡するとマージンコールが発生する可能性があります。",
  },
  // ===
  "trans": {
    "title": "取引履歴",
    "title-spine": "取引履歴",
    "account": "通貨選択",
    // ===
    "direction": "取引種別",
    "direction-all": "ALL",
    "direction-in": "受入",
    "direction-out": "払出",
    // ===
    "created-at": "取引日時",
    "id": "取引ID",
    "notes": "メモ",
    "quantity-gross": "取引量",
    "quantity-net": "取引量",
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
    "state-pending": "ペンディング",
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
    "type-interest-transfer": "ポジション料",
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
    "message-need-tfa": "安全性のため、2段階認証がないと出金が不可能になります。",
    "help-need-tfa": "「メインメニュー」＞「設定」＞「セキュリティ」で2段階認証を有効にしてください。",
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
    "amount": "入金金額",
    "bank": "銀行名",
    "time": "入金依頼日時",
    "id": "入金ID",
    "notes": "メモ",
    "notes-none": "(無し)",
    "transaction-id": "トランザクションID",
    "inr-transfer": "送金方法",
    "inr-transfer-note": "この振込みの方法はインド銀行口座よりINR入金のみ対応いたします。",
    "guide": "手順",
    "deadline": "締切",
    // ===
    "pending-empty": "入金履歴はありません。",
    "pending-title": "入金履歴",
  },
  "fund-bank": {
    "help-1": "①入金情報を作成する",
    "help-1-note": "入金情報作成後に表示される入金 IDをメモしてください。",
    "help-2": "②当社の銀行口座までお振込",
    "help-2-note": "\"振込名義は「入金ID お客様氏名」にてお振込ください。",
    // ===
    "success": "入金情報をご作成いただきありがとうございます。この入金情報の \"入金 ID\" は{{id}}です。",
    // ===
    "submit": "送信",
    "open": "入金情報を作成する",
    "dismiss": "閉じる",
    // ===
    "not-support": "この通貨の入金にはただいま対応しておりません。ご理解のほどよろしくお願いいたします。",
  },
  "fund-cash": {
    "success-1": "下記のURLをご参照ください。",
    "success-2": "このURLは下記の「Pending Funds」リストにもあります。",
    "dismiss": "閉じる",
    "submit": "次",
  },
  "fund-crypto": {
    "help": "下記のアドレスにご送金ください：",
    "copy": "アドレスをコピーする",
  },
  "fund-error": {
    "you-are-not-approved": "このアカウントは承認中のため入金情報を作成できません。",
  },
  // ===
  "withdrawal": {
    "title": "出金",
    "submit": "出金依頼を送信する",
    // ===
    "not-support": "この通貨の出金はただいま対応しておりません。ご了解のほどよろしくお願いいたします。",
    // ===
    "id": "ID",
    "time": "出金依頼日時",
    "quantity": "出金金額",
    "address": "銀行住所（{{ currency }}）",
    "bank": "口座名義",
    "inr-transfer": "送金方法",
    "inr-transfer-note": "この振込みの方法はインド銀行口座よりINR入金のみ対応いたします。",
    "code": "トークン",
    "fee": "出金手数料",
    "fee-help": "（銀行手数料は別）",
    "maximum": "1日の上限",
    "minimum": "最低出金金額",
    "none": "無し",
    // ===
    "pending-title": "出金履歴",
    "pending-empty": "出金履歴がありません。",
    // ===
    "success": "出金依頼を出しました。",
  },
  "withdrawal-cancel": {
    "confirm": "出金依頼をキャンセルしますか？",
  },
  "withdrawal-error": {
    "bank-account-can-t-be-blank": "銀行口座を設定してください。",
    "can-not-cancel-withdrawal": "この出金依頼はキャンセルできません。サポート窓口までご連絡ください。",
    "withdrawal-cannot-be-canceled": "出金不可",
    "quantity-must-be-larger-than-minimum": "最低出金金額以上を入力してください",
    "user-bitcoin-address-invalid": "無効なアドレスです",
    "user-not-enough-fund": "出金可能金額を確認してください",
    "token-is-invalid": "無効なトークンです",
    "verification-failed": "認証に失敗しました。",
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
    "success": "口座振替は成功しました。",
  },
  "futures-balance-error": {
    "transfer-failed": "振込に失敗しました。もう一度ご実行ください。",
    "quantity-too-large": "振込の金額は残高より小さいとなっております。",
  },
  // ===
  "bank": {
    "account-name": "口座名義",
    "account-number": "口座番号",
    "account-type": "預金科目",
    "bank-address": "銀行住所",
    "bank-name": "銀行名",
    "bank-branch": "支店名",
    "bank-swift": "Swift",
    "country": "国",
    "joint-account": "共有口座",
    "joint-account-name": "共有口座の口座名義",
    "joint-address": "共有口座共有者の住所",
    "joint-city": "共有口座共有者の都市",
    "joint-country": "共有口座共有者の国",
    "joint-document-id": "身分明細書（共有口座共有者）",
    "joint-document-address": "住所証明書（共有口座共有者）",
    "document": "ファイル",
    "document-uploaded": "ファイルアップロード",
    "reason": "備考",
    "swift-check": "日本銀行口座の場合はこれをチェックしてください。",
    // ===
    "status": "ステータス",
    "status-pending": "確認中",
    "status-pending-help": "確認中の銀行口座でも出金依頼は可能です。",
    // ===
    "add-action": "銀行口座を設定する",
    "add-submit": "設定",
    "add-dismiss": "戻る",
    "add-success": "銀行口座の設定が完了しました。",
    // ===
    "edit-action": "更新",
    "edit-submit": "銀行口座を更新する",
    "edit-dismiss": "出金へ戻る",
    "edit-success": "更新に成功しました。出金へ戻れます。",
    // ===
    "remove-confirm": "この銀行口座情報を削除してもよろしいですか？",
    "remove-action": "削除",
    "detail-show": "詳細",
    "detail-hide": "閉じる",
  },
  "bank-error": {
    "acc-number-already-in-use-for-you": "この口座番号は既に登録されています。",
    "bank-statement-can-t-be-blank": "銀行証明書がアップロードされていません。",
    "bank-statement-you-are-not-allowed-to-upload-\"exe\"-files,-prohibited-types": "PDFまたは画像ファイルのみアップロードできます。",
    "country-can-t-be-blank": "国を選択してください。",
    "joint-country-can-t-be-blank": "共有口座共有者の国選択してください。",
    "en-bank-account-errors-withdrawal-exist-can-not-delete-this-bank-account": "この銀行口座は削除できません。出金依頼を削除してから再度お試しください。",
  },
  // ===
  "volume": {
    "title": "取引レポート",
    "action-close": "閉じる",
    "from": "起点日",
    "to": "終点日",
    "range": "期間",
    "report-action": "レポートをメールで送信する",
    "report-dismiss": "閉じる",
    "report-success": "レポートをメールで送信しました。ご確認ください。レポート期間を「起点日」及び「終点日」から指定してください。",
    "empty": "該当するデータがありません。",
  },
  "volume-error": {
    "choose-range-first": "期間を選択してください",
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
    "last": "最終レート",
    "volume": "24H出来高",
    "volume-short": "24H出来高",
  },
  // ===
  "mrg-acc": {
    "base-open-price": "平均約定レート",
    "pnl": "概算損益",
    "pnl-total": "損益",
    "position": "ポジション照会",
    "position-total": "ポジション合計",
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
    "confirm-description": "下記の条件を満たすポジションを一括決済します。",
    "confirm-action": "一括決済",
    "confirm-dismiss": "キャンセル",
    "report-title": "決済完了",
    "report-description": "{{ count }} {{ side }} のポジションが一括決済されました。",
    "report-long": "買",
    "report-short": "売",
    "action-both": "一括決済",
    "action-long": "買いポジション一括決済",
    "action-short": "売りポジション一括決済",
  },
  "mrg-acc-manage": {
    "title": "通貨ペア選択",
    // ===
    "trading-title": "表示する通貨ペア",
    "trading-description": "",
    // ===
    "hidden-title": "非表示にする通貨ペア",
    "hidden-description": "",
    // ===
    "add-title": "表示",
    "add-description": "（表示）を選択すると表示した通貨ペアでの取引が可能になります。",
    // ===
    "action-manage": "通貨ペア選択",
    "action-done": "決定",
    "action-hide": "非表示",
    "action-show": "表示",
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
    "expand": "拡大",
    "collapse": "縮小",
  },
};
