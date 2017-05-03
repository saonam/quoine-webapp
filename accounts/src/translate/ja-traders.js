/* eslint-disable quotes, quote-props, max-len */

// traders

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
    "new-password": "パスワード",
    "new-password-help": "8文字以上かつ、大文字・小文字・数字のすべてを含む必要があります。",
    "token": "トークンをリセットする",
    "token-help": "送信したリセットトークンをご入力ください。",
    "action": "パスワード再設定",
    "title": "パスワード再設定",
  },
  "reset-password-error": {
    "reset-password-token-can-t-be-blank": "認証コードの入力が必要です。登録メールアドレスに送付されたメールをご確認ください。",
    "reset-password-token-is-invalid": "認証コードが違います。 登録メールアドレスに送付されたメールを再度ご確認ください。",
    "reset-password-token-expired": "トークンは無効になりました。ホームページに戻り、もう一度実行してください。",
    "password-is-too-short-minimum-is-8-characters": "パスワードは最低8文字で、かつ1文字以上の大文字、小文字、数字を含む必要があります。",
  },
  "change-password": {
    "title": "パスワード変更",
    "action-submit": "更新",
    "action-cancel": "キャンセル",
    "action-done": "確認",
    "input-next": "新しいパスワード",
    "input-current": "現在のパスワード",
    "success": "パスワードの変更に成功しました。",
  },
  "change-password-error": {
    "password-update-failed": "パスワード更新に失敗しました。",
    "your-password-is-incorrect": "パスワードが間違っています",
  },
  "sign-up": {
    "title": "新規登録",
    "action-next": "次",
    "action-done": "新規登録",
    "action-sign-in": "ログインページへ進む",
    "back": "戻る",
    // ===
    "message-success": "ご登録頂きまして、誠にありがとうございます。あと少しで完了です。詳しい説明を記載したメールを送信いたしましたので、ご確認ください。",
    // ===
    "step-1": "１. 口座の種類",
    "step-2": "２. 口座[アカウント]状況",
    "step-3": "３. アカウントの詳細",
    "step-4": "４. 確認",
    // ===
    "type-corporate-title": "法人",
    "type-corporate-description": "法人口座をお申込みの方はこちら",
    "type-individual-title": "個人",
    "type-individual-description": "個人口座をお申込みの方はこちら",
    // ===
    "email": "メールアドレス",
    "email-help": "メールアドレスはアカウントにサインインするために使用されます。",
    "password": "パスワード",
    "password-help": "8文字以上で、大文字・小文字・数字のすべてを含む必要があります。",
    "country": "居住地国",
    "referral": "プロモコード（任意）",
    "term-quoine": "下記の<a href=\"https://www.quoine.com/terms\" target=\"_blank\">利用規約</a>に同意します。",
    "term-traders": "下記の<a href=\"https://www.min-btc.com/document/terms.pdf\" target=\"_blank\">利用規約</a>に同意します。",
  },
  "sign-up-pi": {
    "name": "名前",
    "nationality": "国籍",
    "address": "住所",
    "birth": "生年月日",
    "income": "収入源",
    "income-employed": "会社員",
    "income-retired": "退職",
    "income-other": "その他",
    "income-self-employed": "自営業",
    "income-job": "役職",
    "income-business-name": "会社名",
    "income-business-type": "業務形態",
    "income-detail": "収入詳細",
  },
  "sign-up-pc": {
    "name": "会社名",
    "type": "業務形態",
    "address": "Address",
    "website": "会社ウェブサイト",
    "tax-id": "Tax",
    "vat-id": "VAT",
  },
  "sign-up-error": {
    "email-has-already-been-taken": "既に登録済みのメールアドレスです。",
    "all-is-required": "全てのフィールドに入力する必要があります。",
    "terms": "利用規約に同意する必要があります。",
    "password-is-too-short-minimum-is-8-characters": "パスワードは最低8文字で、かつ1文字以上の大文字、小文字、数字を含む必要があります。",
  },
  "demo": {
    "title": "デモアカウントを利用する",
    "email": "デモアカウントのメールアドレス",
    "action": "デモアカウントで進む",
    // ===
    "continue-title": "デモアカウントで続ける",
    "continue-overview": "以前使用されたデモアカウントで進むとデモ取引を続けられます。",
    "continue-description": "ご利用のデモアカウントのメールアドレスを入力ください。",
    "continue-found": "下記は以前使用したデモアカウントのメールアドレスです。",
    // ===
    "new-title": "新規デモアカウントで進む",
    "new-overview": "デモアカウントでトレード機能を無料体験できます。",
    "new-description": "下記のメールアドレスで新規デモアカウントを作成します。本デモアカウントを利用し続ける場合、このメールアドレスをメモしてください。",
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
    "verification": "口座開設状況",
    // ===
    "status": "ステータス",
    "status-documents-submitted": "書類審査中",
    "status-approved": "開設済",
    "status-declined": "書類不備",
    "status-pending": "書類提出前",
    // ===
    "help-documents-submitted": "本人確認書類をご送付いただきありがとうございます。弊社スタッフにより審査を進めさせていただきます。",
    "help-approved": "入出金及びお取引が可能です。",
    "help-declined": "アカウント認証に失敗しました。下記の書類の再送付をお願いいたします。",
    "help-pending": "お取引いただくには下記書類を送付が必要となります。",
    "help-pending-jp": "お取引いただくには本人確認書類をアップロードしてください。",
    "help-pending-jp-link": "本人確認書類",
    // ===
    "document-id": "本人確認書類（顔写真付）",
    "document-id-help": "運転免許書、パスポートなど",
    "document-address": "住所証明書",
    "document-address-help": "住民票、公共料金領収書など（本人確認書類とは別の書類が必要です。）",
    "document-bank": "銀行口座照会の明細",
    "document-bank-help": "通帳の見開き、口座取引明細、口座照会明細、ネットバンクのスクリーンショットなど口座名・口座番号・支店情報がわかるもの",
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
  "edit-user": {
    "title": "口座情報変更",
    "action": "口座情報変更",
    "action-submit": "変更",
    "action-cancel": "取り消し",
    "description": "以下の場合は、support@quoine.comまでご連絡ください。<br />１）転勤等で海外居住となる場合<br />２）外国PEPsに該当することとなった場合<br />３）米国納税義務が発生することとなった場合",
    "message-no-changes": "登録情報が変更されていません。",
  },
  "tfa-manage": {
    "phone": "携帯番号",
    "title": "二段階認証",
    "status-enabled": "認証済",
    "status-not-enabled": "未設定",
    // ===
    "help-change-phone": "電話番号を更新するには、カスタマーサポート窓口(問合せ)へご連絡ください。",
    // ===
    "add-phone-title": "携帯番号を設定する",
    "add-phone-action": "設定",
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
    "value-message": "このトークンは一度しか表示されません。",
    // ===
    "remove-title": "トークンを削除する",
    "remove-action": "削除する",
    "remove-description": "ただいまトークンを利用している全てのデバイスまたはアプリをすぐに無許可します。トークンを削除しますか。",
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
