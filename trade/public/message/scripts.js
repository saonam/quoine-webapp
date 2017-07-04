var translations = (function getTranslations() {
  var signInUrl = (function getSignInUrl() {
    switch (vendor) {
      case 'traders': return 'https://account.min-btc.com/sign-in';
      case 'qryptos': return 'https://accounts.qryptos.com/sign-in';
      case 'quoine': default: return 'https://accounts.quoinex.com/sign-in';
    }
  })();
  var quoineTranslations = {
    "message": {
      "en": "Message",
      "ja": "メッセージ",
      "zhcn": "信息",
      "zhtw": "信息",
    },
    "ip-confirmed": {
      "en": "Your IP address has been confirmed. Please <a href=\"" + signInUrl + "\">Sign In</a>.",
      "ja": "IPアドレスが確認されました。ログインは<a href=\"" + signInUrl + "\">こちら</a>から",
      "zhcn": "您的IP地址已经被确认，请<a href=\"" + signInUrl + "\">登录</a>.",
      "zhtw": "您的IP地址已經被確認，請<a href=\"" + signInUrl + "\">登錄</a>.",
    },
    "user-banned": {
      "en": "Your account has been frozen. All trading and withdrawal activities are now suspended. <br /><br />To unfreeze your account, please contact <a href=\"mailto:support@quoine.com\">support@quoine.com</a>",
      "ja": "お客様のアカウントは停止されました。<br /><br />アカウントを復旧するには、 <a href=\"mailto:support@quoine.com\">support@quoine.com</a> へご連絡ください。",
      "zhcn": "您的账户已经被冻结，所有交易和存取款活动现已被暂停。<br /><br />解冻您的账户请联系<a href=\"mailto:support@quoine.com\">support@quoine.com</a>",
      "zhtw": "您的賬戶已經被凍結，所有交易和存取款活動現已被暫停。<br /><br />解凍您的賬戶請聯系<a href=\"mailto:support@quoine.com\">support@quoine.com</a>",
    },
  };

  var qryptosTranslations = Object.assign({}, quoineTranslations);
  var tradersTranslations = Object.assign({}, quoineTranslations, {
    "user-banned": {
      "en": "Your account has been frozen. All trading and withdrawal activities are now suspended. <br /><br />To unfreeze your account, please contact <a href=\"mailto:support@min-btc.com\">support@min-btc.com</a>",
      "ja": "お客様のアカウントは停止されました。<br /><br />アカウントを復旧するには、 <a href=\"mailto:support@min-btc.com\">support@min-btc.com</a> へご連絡ください。",
    },
  });

  switch (vendor) {
    case 'traders': return tradersTranslations;
    case 'qryptos': return qryptosTranslations;
    case 'quoine': default: return quoineTranslations;
  }
})();

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var title = getParameterByName("title") || "message";
var message = getParameterByName("message");
var language = getParameterByName("language") || "en";

var header = translations[title][language];
var body = translations[message][language];

document.getElementById("header").innerHTML = header;
document.getElementById("body").innerHTML = body;
