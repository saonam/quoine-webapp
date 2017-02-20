/* eslint-disable quotes, quote-props, max-len */

export default {
  "sign-in": {
    "title": "ログイン",
    "action": "ログイン",
    "email": "メールアドレス",
    "password": "パスワード",
    "code": "コード",
    "code-description": "2要素認証が有効になっています。下の欄にAuthy若しくはSMSから取得した認証コードを入力してください。",
    "back": "Back",
    "new-text": "Don't have an account?",
    "new-or": "or",
    // message
    "message-account-confirmed": "Your account has been successfully confirmed. You may now sign in.",
    "message-password-updated": "Your password has been successfully updated. You may now sign in with your new password.",
    "message-signed-out": "You have been successfully signed out.",
  },
  "sign-in-error": {
    "you-have-to-confirm-your-account-before-continuing": "新規登録の口座承認が必要です。承認リンクのメールをご確認ください。",
    "your-password-is-incorrect": "パスワードが正しくありません。",
    "token-is-invalid": "無効なトークンです。",
    "invalid-email-or-password": "メールアドレスまたはパスワードをもう一度確認してください。",
  },
  "forgot-password": {
    "action-resend": "パスワード再設定用メールを再送信",
    "action-send": "パスワード再設定用メールを送信",
    "description": "Please enter your email address and we will send you an email containing a link to reset your account password.",
    "title": "パスワードをお忘れですか？",
    "message-sent": "ご登録のメールアドレスにパスワード再設定用のリンクを送信しました。ご確認ください。",
    "email": "メールアドレス",
  },
  "forgot-password-error": {
    "email-not-found": "このメールアドレスはまだ登録されていません。",
  },
  "reset-password": {
    "description": "新しいパスワードを入力してください。",
    "new-password": "パスワード",
    "action": "Update Password",
    "title": "パスワード再設定",
  },
  "change-password": {
    "title": "パスワード変更",
    "action-submit": "Change",
    "action-cancel": "Cancel",
    "action-done": "Done",
    "input-next": "新しいパスワード",
    "input-current": "現在のパスワード",
    "success": "パスワード変更に成功しました。",
  },
  "sign-up": {
    "title": "新規登録",
    "action-next": "Next",
    "action-done": "新規登録",
    "back": "戻る",
    "reset": "Start again",
    // ===
    "step-2": "1. Account Information",
    "step-3-individual": "2. Personal Details",
    "step-3-corporate": "2. Business Details",
    "step-4": "3. Finalization",
    // ===
    "type-corporate-title": "法人",
    "type-corporate-description": "法人の代表者としてアカウントを開設します。仮想通貨トレードのため、本アカウントは複数人で使われます。",
    "type-individual-title": "個人",
    "type-individual-description": "個人ユーザーとしてアカウントを開設します。仮想通貨トレードのため、本アカウントは本人のみに使われます。",
    // ===
    // step 2
    "input-email": "メールアドレス",
    "input-password": "パスワード",
    "input-password-hint": "+8 characters, lowercase, uppercase, number",
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
    "all-is-required": "All fields in this step are required",
    "terms": "利用規約に同意する必要があります。",
    "reset-password-token-can-t-be-blank": "Reset Password attempt has expired. Please return to Home Page and try again.",
    "reset-password-token-is-invalid": "Reset Password attempt has expired. Please return to Home Page and try again.",
    "reset-password-token-expired": "Reset Password attempt has expired. Please return to Home Page and try again.",
    "password-update-failed": "Password update failed",
    "your-password-is-incorrect": "Your password is incorrect",
  },
  "demo": {
    "title": "Use a demo account",
    "email": "Demo account email",
    "action": "Enter demo mode",
    // ===
    "continue-title": "Continue your demo",
    "continue-overview": "Use your previous demo account to continue your trading progress.",
    "continue-description": "Please enter the email of the demo account you want to continue with.",
    "continue-found": "We also filled it with the email of your last demo session in this browser.",
    // ===
    "new-title": "Start a new demo",
    "new-overview": "Create a new demo account to freely try our app and its features.",
    "new-description": "We will create a demo account for you with the below email. Please save the email and use it when you want to continue your demo in future.",
  },
  "sign-out": {
    "action": "ログアウト",
    "description": "Click the button below to sign you out in this browser. We also sign you out automatically when you close this browser's tab or window.<br /><br />To sign you out everywhere, check the box below.",
    "all": "全てのデバイス、ブラウザからログアウトしても宜しいですか？",
    "title": "ログアウトしますか？",
  },
  "settings": {
    "title": "Settings",
    "back-to-trading": "Back to Trading",
    // ===
    "application-title": "Application",
    "theme-title": "Theme",
    // ===
    "profile-title": "Profile",
    // ===
    "security-title": "Security",
    "password-title": "Password",
    "sign-in-title": "Sign In",
    // ===
    "api-title": "API",
  },
  "daily-report": {
    "title": "Report",
    "label": "Receive Daily Reports",
  },
  "user": {
    "verification": "Verification",
    // ===
    "status": "Status",
    "status-documents-submitted": "Documents Submitted",
    "status-approved": "Approved",
    "status-declined": "Declined",
    "status-pending": "Pending",
    // ===
    "help-documents-submitted": "Your documents have been uploaded. Our staff will be reviewing and approving your account shortly. Note that account verification process will take 1-2 working days to be complete.",
    "help-approved": "Your account has been approved. No further action is required.",
    "help-declined": "Your documents have been rejected with the following reason: {{ reason }}. You can upload again:",
    "help-pending": "Your account is not verified. Please upload the following documents for account verification:",
    // ===
    "document-id": "ID Document",
    "document-address": "Proof of Address",
    "document-bank": "Bank Statement",
    "document-action": "Submit Documents",
    // ===
    "id": "User ID",
    "first-name": "First Name",
    "last-name": "Last Name",
    "email": "Email",
    "since": "Joined Since",
    "affiliate-code": "Affiliate code",
  },
  "user-error": {
    "invalid-types": "Please check your file types. Allowed types are: pdf, xps, jpg, jpeg, png, gif.",
  },
  "tfa-manage": {
    "phone": "Phone",
    "title": "Two-Factor Authentication",
    "status-none": "Not Enabled Yet",
    "status-added": "Not Enabled Yet",
    "status-enabled": "Enabled",
    // ===
    "help-enabled": "To change your phone, please disable TFA first.",
    // ===
    "change-title-change": "Change Phone",
    "change-title-add": "Add Phone",
    "change-action": "Change",
    "change-label": "Phone",
    "change-description": "Please enter the new phone number",
    "change-success": "Your phone has been successfully updated.",
    // ===
    "toggle-title-enable": "Enable",
    "toggle-title-disable": "Disable",
    "toggle-action-enable": "Enable",
    "toggle-action-disable": "Disable",
    "toggle-description": "Please enter the code that was sent to your phone.",
    "toggle-label": "Authentication Code",
    // ===
    "action-cancel": "Cancel",
    "action-done": "Done",
  },
  "token": {
    "id": "ID",
    "value": "Token/Secret",
    "value-copy": "Copy",
    "permissions": "Permissions",
    "none": "None",
    // ===
    "remove-title": "Delete Token",
    "remove-action": "Delete",
    "remove-description": "Are you sure want to delete this token? All devices and apps using this token will be unauthorized immediately.",
    // ===
    "add-title": "Create New API Token",
    "add-description": "Please select permissions for the new token:",
    "add-action-submit": "Create Token",
    "add-action-cancel": "Cancel",
    // ===
    "action-r": "Read",
    "action-w": "Write",
    // ===
    "name-accounts": "Accounts",
    "name-executions": "Executions",
    "name-orders": "Orders",
    "name-trades": "Positions",
    "name-trading-accounts": "Trading Accounts",
  },
};
