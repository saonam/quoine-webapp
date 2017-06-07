/* eslint-disable quotes, quote-props, max-len */

// quoine

export default {
  "account": {
    "balance": "残高",
    "balance-available": "有効残高",
    "balance-wallet": "ウォレット残高",
    // ===
    "balance-base": "仮想通貨残高",
    "balance-locked": "拘束残高",
    "balance-quote": "現金残高",
    "balance-all": "残高合計",
    "balance-total-crypto": "仮想通貨残高合計",
    "balance-total-fiat": "現金残高合計",
    // ===
    "equity": "純資産",
    "loan-offers": "ローンオファー",
    "loaned": "ローン中",
    "loaned-interest": "ポジション料",
    // ===
    "limit-orders": "指値注文",
    // ===
    "margin-available": "有効証拠金",
    "margin-coverage": "証拠金維持率",
    "margin-used": "必要証拠金",
    "margin": "証拠金",
    "margin-withdrawable": "出金可能額",
    // ===
    "pnl": "損益",
    "pnl-realised": "決済損益",
    "pnl-unrealised": "評価損益",
    // ===
    "spine-title": "アカウント",
    // ===
    "hint-futures": "先物取引のBTC口座",
  },
  "account-manage": {
    "title": "アカウント管理",
    // ===
    "trading-title": "表示する通貨",
    "trading-description": "",
    // ===
    "hidden-title": "非表示にする通貨",
    "hidden-description": "",
    // ===
    "add-title": "表示",
    "add-description": "アカウント（通貨）を表示するとその通貨での取引が可能になります。",
    // ===
    "action-manage": "通貨選択",
    "action-done": "決定",
    "action-fund": "入金/出金",
    "action-hide": "非表示",
    "action-show": "表示",
  },
  "accounts-warning": {
    "title": "マイアカウントページについて",
    "description": "旧マイアカウントページの機能(入出金・残高照会・取引高参照)は、ダッシュボード内の各パネルにてご確認頂けます。",
    "dismiss": "閉じる",
  },
  "menu": {
    "accounts": "マイアカウント",
    "dashboard": "ダッシュボード",
    "lending": "レンディング",
    "settings": "設定",
    // ===
    "faq": "FAQ",
    "fee": "手数料",
    "support": "サポート",
    // ===
    "language": "言語",
    // ===
    "sign-out": "ログアウト",
  },
  "language": {
    "title": "言語",
    "en": "English",
    "ja": "日本語",
  },
  "error": {
    "network": "インターナルエラーが発生しました。",
  },
  "tfa": {
    "sent-sms": "SMSで確認コードを送信しました。",
    "sent-authy": "Authyで確認コードを送信しました。",
    "sent-email": "Eメールで確認コードを送信しました。",
    "sent-ga": "Google認証システムで確認コードを送信しました。",
    // ===
    "resend": "再送",
    "resend-sms": "SMS経由でコードを再送",
    "send": "リクエスト",
  },
  "tfa-error": {
    "en-authy-dos-protection-user-has-requested-too-many-tokens-in-the-last-hour": "トークンの有効期限が切れました。再度送信を依頼してください。",
    "en-authy-sms-token-was-not-sent": "送信に失敗しました。再度送信を依頼してください。",
    "en-authy-token-is-invalid-token-was-used-recently": "使用済みトークンのため無効です。",
  },
  "test": {
    "basic": "english",
    "interpolation": "quoine-{{name}}",
  },
  "month": {
    "1": "１月",
    "2": "２月",
    "3": "３月",
    "4": "４月",
    "5": "５月",
    "6": "６月",
    "7": "７月",
    "8": "８月",
    "9": "９月",
    "10": "１０月",
    "11": "１１月",
    "12": "１２月",
  },
  "file": {
    "choose": "ファイルを選択",
    "none": "ファイルが選択されていません",
  },
  "blotter": {
    "load": "読み込み",
    "loaded": "読み込み済",
  },
  "confirmation": {
    "skip": "今後、この確認画面をスキップします。",
    "skip-hint": "設定画面にて変更可能",
    "no": "No",
    "yes": "Yes",
    "dismiss": "閉じる",
    "title": "ポップアップ設定",
    "help": "確認ポップアップにて取引に関する重要な決定を実行前後に確認できます。",
    "help-none": "現在、スキップ設定にしている確認ポップアップはありません。スキップ設定後はこちらの画面から解除可能です。",
    "help-some": "以下に表示されている確認ポップアップがスキップ設定になっています。再度ポップアップを表示させる場合は、\"x\"ボタンを押してリストから削除してください。",
    "task-order-add-confirm": "注文前",
    "task-order-add-report": "注文後",
    "task-order-cancel-confirm": "注文取り消し前",
    "task-order-cancel-report": "注文取り消し後",
    "task-order-edit-confirm": "注文訂正前",
    "task-order-edit-report": "注文訂正後",
    "task-position-claim-confirm": "現引・現渡注文前",
    "task-position-claim-report": "現引・現渡注文後",
    "task-position-close-confirm": "ポジション決済前",
    "task-position-close-report": "ポジション決済後",
    "task-position-edit-confirm": "ポジション変更前",
    "task-position-edit-report": "ポジション変更後",
    "task-mrg-acc-close-confirm": "ポジション一括決済前",
    "task-mrg-acc-close-report": "ポジション一括決済後",
    "task-tokens-remove-confirm": "APIトークン取り消し前",
    "task-tokens-remove-report": "APIトークン取り消し後",
    "task-wdr-bank-remove-confirm": "銀行口座情報取り消し前",
    "task-wdr-bank-remove-report": "銀行口座情報取り消し後",
    "task-withdrawal-cancel-confirm": "出金申請取り消し前",
    "task-withdrawal-cancel-report": "出金申請取り消し後",
  },
  "form": {
    "cancel": "取り消し",
    "done": "完了",
  },
  "hint": {
    "done": "閉じる",
    "title": "ヘルプ",
  },
  "notifications": {
    "disable-trading": "アカウントが認証されるまではお取引できません。「メインメニュー」＞「設定」＞「プロフィール」より本人確認書類をアップロードし、アカウント認証を行ってください。",
    "dismiss": "閉じる",
  },
  "name": {
    "first": "姓",
    "last": "名",
  },
  "input": {
    "select-placeholder": "選んでください…",
    "phone-title": "数字のみ",
  },
};
