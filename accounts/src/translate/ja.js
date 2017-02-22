/* eslint-disable quotes, quote-props, max-len */

export default {
  "sign-in": {
    "title": "ログイン",
    "action": "ログイン",
    "email": "メールアドレス",
    "password": "パスワード",
    "code": "コード",
    "code-description": "2要素認証が有効になっています。下の欄にAuthy若しくはSMSから取得した認証コードを入力してください。",
    "back": "戻る",
    "new-text": "アカウントをまだ登録しません",
    "new-or": "または",
    // message
    "message-account-confirmed": "アカウント承認に成功しました。",
    "message-password-updated": "パスワード再設定に成功しました。新しいパスワードでログインしてください。",
    "message-signed-out": "ログアウトしました。",
    // Need review
    "message-need-sign-in": "You need to sign in first.",
  },
  "sign-in-error": {
    "you-have-to-confirm-your-account-before-continuing": "新規登録の口座承認が必要です。承認リンクのメールをご確認ください。",
    // Need review
    "your-password-is-incorrect": "パスワードが正しくありません。",
    "token-is-invalid": "無効なトークンです。",
    "invalid-email-or-password": "メールアドレスまたはパスワードをもう一度確認してください。",
    // Need review
    "verification-failed": "Authentication code is not valid.",
  },
  "forgot-password": {
    "action-resend": "パスワード再設定用メールを再送信",
    "action-send": "パスワード再設定用メールを送信",
    "description": "アカウントのメールアドレスを入力してください。このメールアドレスにパスワード再設定のURLを送信します。",
    "title": "パスワードをお忘れですか？",
    "message-sent": "ご登録のメールアドレスにパスワード再設定用のリンクを送信しました。ご確認ください。",
    "email": "メールアドレス",
  },
  "forgot-password-error": {
    "email-not-found": "このメールアドレスはまだ登録されていません。",
    // Need review
    "email-can-t-be-blank": "Email is required.",
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
    "action-next": "次",
    "action-done": "新規登録",
    "back": "戻る",
    "reset": "元に戻る",
    // ===
    "step-2": "1. アカウント情報",
    "step-3-individual": "2. 個人情報",
    "step-3-corporate": "2. 法人情報",
    "step-4": "3. 終了",
    // ===
    "type-corporate-title": "法人",
    "type-corporate-description": "法人の代表者としてアカウントを開設します。仮想通貨トレードのため、本アカウントは複数人で使われます。",
    "type-individual-title": "個人",
    "type-individual-description": "個人ユーザーとしてアカウントを開設します。仮想通貨トレードのため、本アカウントは本人のみに使われます。",
    // ===
    // step 2
    "input-email": "メールアドレス",
    "input-password": "パスワード",
    "input-password-hint": "8文字以上、大文字・小文字・数字が必要",
    "input-first-name": "名",
    "input-last-name": "姓",
    "input-business-name": "会社名",
    "input-business-type": "業務形態",
    // step 3
    "input-country": "居住国",
    "input-address": "住所",
    "input-nationality": "国籍",
    "input-birthdate": "生年月日",
    // individual / income
    "input-income": "収入源",
    "income-type-employed": "会社員",
    "income-type-retired": "退職",
    "income-type-other": "その他",
    "income-type-self-employed": "自営業",
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
    "input-accept-terms": "下記の<a href=\"https://www.quoine.com/terms\" target=\"_blank\">利用規約</a>に同意します。",
    // ===
    "success-message": "ご登録頂きまして、誠にありがとうございます。あと少しで完了です。詳しい説明を記載したメールを送信いたしましたので、ご確認ください。",
  },
  "sign-up-error": {
    "email-has-already-been-taken": "既に登録済みのメールアドレスです。",
    "password-too-weak": "パスワードは最低8文字で、かつ1文字以上の大文字、小文字、数字を含む必要があります。",
    "all-is-required": "全てのフィールドに入力する必要があります。",
    "terms": "利用規約に同意する必要があります。",
    "reset-password-token-can-t-be-blank": "トークンを入力しませんでした。ホームページに戻り、もう一度ご実行ください。",
    "reset-password-token-is-invalid": "トークンは無効になりました。ホームページに戻り、もう一度ご実行ください。",
    "reset-password-token-expired": "トークンは無効になりました。ホームページに戻り、もう一度ご実行してください。",
    "password-update-failed": "パスワード更新に失敗しました。",
    "your-password-is-incorrect": "パスワードが不正解です。",
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
    "new-overview": "デモアカウントでQUOINEアプリの機能をテストできます。",
    "new-description": "下記のメールアドレスで新規デモアカウントを作成します。将来にはこのデモアカウントを利用し続ける場合、このメールアドレスをメモしてください。",
  },
  "sign-out": {
    "action": "ログアウト",
    "description": "このブラウザーからログアウトするためこのボタンをクリックしてください。全てのディバイス／ブラウザーからログアウトには下のボックスをチェックしてください。",
    "all": "全てのデバイス、ブラウザからログアウトしても宜しいですか？",
    "title": "ログアウトしますか？",
  },
  "settings": {
    "title": "設定",
    "back-to-trading": "取引に戻る",
    // ===
    "application-title": "アプリケーション",
    "theme-title": "テーマ",
    // ===
    "profile-title": "プロファイル",
    // ===
    "security-title": "安全性",
    "password-title": "パスワード",
    "sign-in-title": "ログイン",
    // ===
    "api-title": "API",
  },
  "daily-report": {
    "title": "取引レポート",
    "label": "毎日の取引レポートを登録する",
  },
  "user": {
    "verification": "アカウント認証",
    // ===
    "status": "Status",
    "status-documents-submitted": "認証中",
    "status-approved": "認証済み",
    "status-declined": "認証不合格",
    "status-pending": "未認証",
    // ===
    "help-documents-submitted": "本人確認書類をご送付いただきありがとうございます。認証手続きは1-2営業日かかりますので、ご了解のほどよろしくお願いいたします。",
    "help-approved": "このアカウントは認証済みです。",
    "help-declined": "アカウント認証に失敗しました。下記の追加書類をご送付お願いいたします：{{ reason }}。",
    "help-pending": "このアカウントは未認証です。下記の本人確認書類をアップロードしてください。 ",
    // ===
    "document-id": "IDドキュメント",
    "document-id-help": "運転免許書、パスポートなど",
    "document-address": "住所証明書",
    "document-address-help": "住民票、公共料金領収書など（発行日から3ヶ月以内のもの）",
    "document-bank": "銀行口座照会の明細",
    "document-bank-help": "バンクブック、口座取引明細、口座照会明細、ネットバンクのスクリーンショットなど",
    "document-action": "本人確認書類をアップロードする",
    // ===
    "id": "ユーザーID",
    "first-name": "名",
    "last-name": "姓",
    "email": "メールアドレス",
    "since": "入会日",
    "affiliate-code": "アフリェイトコード",
  },
  "user-error": {
    "invalid-types": "無効なファイルタイプです。PDF／XPS／JPG／JPEG／PNG／GIFのファイルをアップロードしてください。",
  },
  "tfa-manage": {
    "phone": "携帯番号",
    "title": "二段階認証",
    "status-none": "未設定",
    "status-added": "未認証",
    "status-enabled": "認証済み",
    // ===
    "help-enabled": "携帯番号を更新するためまず二段階認証を無効化してください。",
    // ===
    "change-title-change": "携帯番号を更新する",
    "change-title-add": "携帯番号を設定する",
    "change-action": "更新",
    "change-label": "携帯番号",
    "change-description": "新しい携帯番号をご入力ください。",
    "change-success": "携帯番号更新に成功しました。",
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
    // Need review
    "en-authy-token-is-blank": "Authentication code is required.",
    "token-is-invalid": "無効なトークンです",
  },
  "token": {
    "id": "ID",
    "value": "トークン",
    "value-copy": "コピーする",
    "permissions": "許可",
    "none": "無い",
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
