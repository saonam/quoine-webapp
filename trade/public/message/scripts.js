var tranlations = {
  "header": {
    "en": "Message",
    "ja": "Message",
    "zhcn": "Message",
    "zhtw": "Message",
  },
  "ip-confirm": {
    "en": "IP confirm",
    "ja": "IP confirm",
    "zhcn": "IP confirm",
    "zhtw": "IP confirm",
  },
  "user-banned": {
    "en": "Your account has been frozen. All trading and withdrawal activities are now suspended. <br /><br />To unfreeze your account, please contact <a href=\"mailto:support@quoine.com\">support@quoine.com</a>",
    "ja": "お客様のアカウントは停止されました。アカウントを復旧するには、 <a href=\"mailto:support@quoine.com\">support@quoine.com</a> へご連絡ください。",
    "zhcn": "Your account has been frozen. All trading and withdrawal activities are now suspended. <br /><br />To unfreeze your account, please contact <a href=\"mailto:support@quoine.com\">support@quoine.com</a>",
    "zhtw": "Your account has been frozen. All trading and withdrawal activities are now suspended. <br /><br />To unfreeze your account, please contact <a href=\"mailto:support@quoine.com\">support@quoine.com</a>",
  },
};

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var message = getParameterByName("message");
var language = getParameterByName("language") || "en";

var header = tranlations.header[language];
var body = tranlations[message][language];

document.getElementById("header").innerHTML = header;
document.getElementById("body").innerHTML = body;
