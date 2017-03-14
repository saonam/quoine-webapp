/* eslint-disable quotes, quote-props, max-len */

export default {
  "sign-in": {
    "title": "ログイン",
    "action": "ログイン",
    "email": "メールアドレス",
    "password": "パスワード",
    "code": "コード",
    "code-description": "2段階認証が有効になっています。SMSから取得した認証コードを入力してください。",
    "back": "戻る",
    "new-text": "新規口座申込はこちら",
    "new-or": "または",
    // message
    "message-account-confirmed": "アカウント承認に成功しました。",
    "message-password-updated": "パスワード再設定に成功しました。新しいパスワードでログインしてください。",
    "message-signed-out": "ログアウトしました。",
    "message-need-sign-in": "ログインしてください。",
  },
  "sign-in-error": {
    "you-have-to-confirm-your-account-before-continuing": "登録いただいたメールアドレスに確認メールを送信いたしました。メールをご確認ください。",
    "your-password-is-incorrect": "パスワードが正しくありません。",
    "token-is-invalid": "無効な認証コードです。",
    "invalid-email-or-password": "メールアドレスまたはパスワードをもう一度確認してください。",
    "verification-failed": "無効な認証コードです。",
  },
  "forgot-password": {
    "action-resend": "メールが届かない場合はこちら（再送信）",
    "action-send": "送信",
    "description": "アカウントのメールアドレスを入力してください。このメールアドレスにパスワード再設定のURLを送信します。",
    "title": "パスワードをお忘れですか？",
    "message-sent": "ご登録のメールアドレスにパスワード再設定用のリンクを送信しました。ご確認ください。",
    "email": "メールアドレス",
  },
  "forgot-password-error": {
    "email-not-found": "このメールアドレスはまだ登録されていません。",
    "email-can-t-be-blank": "メールアドレスが必要です",
  },
  "reset-password": {
    "description": "新しいパスワードを入力してください。",
    "new-password": "パスワード",
    "action": "パスワード再設定",
    "title": "パスワード再設定",
  },
  "change-password": {
    "title": "パスワード変更",
    "action-submit": "更新",
    "action-cancel": "キャンセル",
    "action-done": "確認",
    "input-next": "新しいパスワード",
    "input-current": "現在のパスワード",
    "success": "パスワード変更に成功しました。",
  },
  "sign-up": {
    "title": "新規登録",
    "action-next": "次へ",
    "action-done": "送信",
    "back": "戻る",
    "reset": "リセット",
    // ===
    "step-2": "2.情報",
    "step-3-individual": "3. 終了",
    "step-3-corporate": "3. 終了",
    "step-4": "完了（メール確認）",
    // ===
    "type-corporate-title": "法人",
    "type-corporate-description": "法人口座をお申込みの方はこちら",
    "type-individual-title": "個人",
    "type-individual-description": "個人口座をお申込みの方はこちら",
    // ===
    // step 2
    "input-email": "メールアドレス",
    "input-password": "パスワード",
    "input-password-hint": "8文字以上で、大文字・小文字・数字のすべてを含む必要があります。",
    "input-first-name": "名",
    "input-last-name": "姓",
    "input-business-name": "会社名",
    "input-business-type": "業種",
    // step 3
    "input-country": "居住国",
    "input-address": "住所",
    "input-nationality": "国籍",
    "input-birthdate": "生年月日",
    // individual / income
    "input-income": "ご職業",
    "income-type-employed": "会社員",
    "income-type-retired": "無職",
    "income-type-self-employed": "自営業",
    "income-type-other": "その他",
    // - individual / income / employed
    "input-income-job": "役職",
    // - individual / income / self business
    "input-income-business-name": "会社名",
    "input-income-business-type": "業務形態",
    // - individual / income / other
    "input-income-detail": "収入詳細",
    // corporate
    "input-business-website": "会社ウェブサイト",
    "input-tax-id": "Tax",
    "input-vat-id": "VAT",
    // step 4
    "input-affiliate-code": "プロモコード（任意）",
    "input-accept-terms-quoine": "下記の<a href=\"https://www.quoine.com/terms\" target=\"_blank\">利用規約</a>に同意します。",
    "input-accept-terms-traders": "下記の<a href=\"https://min-btc.com/terms\" target=\"_blank\">利用規約</a>に同意します。",
    // ===
    "success-message": "ご登録頂きまして、誠にありがとうございます。あと少しで完了です。詳しい説明を記載したメールを送信いたしましたので、ご確認ください。",
  },
  "sign-up-error": {
    "email-has-already-been-taken": "既に登録済みのメールアドレスです。",
    "password-too-weak": "パスワードは最低8文字で、かつ1文字以上の大文字、小文字、数字を含む必要があります。",
    "all-is-required": "全てのフィールドに入力する必要があります。",
    "terms": "利用規約に同意する必要があります。",
    "reset-password-token-can-t-be-blank": "トークンを入力してください。ホームページに戻り、もう一度ご実行ください。",
    "reset-password-token-is-invalid": "トークンは無効になりました。ホームページに戻り、もう一度ご実行ください。",
    "reset-password-token-expired": "トークンは無効になりました。ホームページに戻り、もう一度実行してください。",
    "password-update-failed": "パスワード更新に失敗しました。",
    "your-password-is-incorrect": "パスワードが正しくありません。",
  },
  "demo": {
    "title": "デモアカウントを利用する",
    "email": "デモアカウントのメールアドレス",
    "action": "デモアカウントで進む",
    // ===
    "continue-title": "デモアカウントで続ける",
    "continue-overview": "以前のデモアカウントで進むとデモ取引を続けられます。",
    "continue-description": "利用したいデモアカウントのメールアドレスをご入力ください。",
    "continue-found": "下記は以前のデモアカウントのメールアドレスです。",
    // ===
    "new-title": "新規デモアカウントで進む",
    "new-overview": "デモアカウントでアプリの機能をテストできます。",
    "new-description": "下記のメールアドレスで新規デモアカウントを作成します。将来にはこのデモアカウントを利用し続ける場合、このメールアドレスをメモしてください。",
  },
  "sign-out": {
    "action": "ログアウト",
    "description": "このブラウザからログアウトするにはログアウトボタンをクリックしてください。",
    "all": "全てのデバイス、ブラウザからログアウトする。",
    "title": "ログアウトしますか？",
  },
  "settings": {
    "title": "設定",
    "back-to-trading": "ダッシュボードに戻る",
    // ===
    "application-title": "お客様情報",
    "theme-title": "テーマ",
    // ===
    "profile-title": "プロフィール",
    // ===
    "security-title": "セキュリティ",
    "password-title": "パスワード",
    "sign-in-title": "ログイン",
    // ===
    "api-title": "API",
  },
  "daily-report": {
    "title": "取引レポート",
    "label": "取引レポートを受信する。",
  },
  "user": {
    "verification": "審査中",
    // ===
    "status": "ステータス",
    "status-documents-submitted": "書類審査中",
    "status-approved": "審査完了",
    "status-declined": "書類不備",
    "status-pending": "審査中",
    // ===
    "help-documents-submitted": "本人確認書類をご送付いただきありがとうございます。弊社スタッフにより審査を進めさせていただきます。",
    "help-approved": "このアカウントは審査完了済みです。入出金・トレードが可能です。",
    "help-declined": "アカウント認証に失敗しました。下記の書類の再送付をお願いいたします。",
    "help-pending": "取引いただくには下記書類を送付お願いいたします。",
    // ===
    "document-id": "本人確認書類（顔写真付）",
    "document-id-help": "運転免許書、パスポートなど",
    "document-address": "住所証明書",
    "document-address-help": "住民票、公共料金領収書など（本人確認書類とは別の書類が必要です。）",
    "document-bank": "銀行口座照会の明細",
    "document-bank-help": "口座取引明細、口座照会明細、ネットバンクのスクリーンショットなど",
    "document-action": "本人確認書類をアップロードする",
    // ===
    "id": "ユーザーID",
    "first-name": "名",
    "last-name": "姓",
    "email": "メールアドレス",
    "since": "申込日",
    "affiliate-code": "アフィリエイトコード",
  },
  "user-error": {
    "invalid-types": "無効なファイルタイプです。PDF／XPS／JPG／JPEG／PNG／GIFのファイルをアップロードしてください。",
  },
  "tfa-manage": {
    "phone": "携帯番号",
    "title": "二段階認証",
    "status-enabled": "認証済み",
    "status-not-enabled": "未設定",
    // ===
    "help-change-phone": "To change your phone, please contact our support.",
    // ===
    "add-phone-title": "携帯番号を設定する",
    "add-phone-action": "Add",
    "add-phone-label": "携帯番号",
    "add-phone-description": "新しい携帯番号をご入力ください。",
    // ===
    "toggle-title-enable": "有効化",
    "toggle-title-disable": "無効化",
    "toggle-action-enable": "有効化",
    "toggle-action-disable": "無効化",
    "toggle-description": "トークンをご入力ください。",
    "toggle-label": "トークン",
    // ===
    "action-cancel": "キャンセル",
    "action-done": "確認",
  },
  "tfa-manage-error": {
    "en-authy-token-is-blank": "トークンの入力が必要です。",
    "token-is-invalid": "無効なトークンです",
  },
  "token": {
    "id": "ID",
    "value": "値",
    "value-copy": "コピー",
    "permissions": "許可",
    "none": "なし",
    // ===
    "remove-title": "トークンを削除する",
    "remove-action": "削除する",
    "remove-description": "ただいまトークンを利用している全てのディバイスまたはアプリをすぐに無許可します。トークンを削除しますか。",
    // ===
    "add-title": "APIトークンを新規作成する",
    "add-description": "APIトークンの許可をご選択ください。",
    "add-action-submit": "確認",
    "add-action-cancel": "キャンセル",
    // ===
    "action-r": "Read",
    "action-w": "Write",
    // ===
    "name-accounts": "アカウント",
    "name-executions": "実行",
    "name-orders": "注文",
    "name-trades": "ポジション",
    "name-trading-accounts": "取引口座",
  },
};
