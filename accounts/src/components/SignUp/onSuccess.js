const removeElement = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.parentNode.removeChild(element);
  }
};

const appendImgs = (imgSrcs) => {
  imgSrcs.forEach((src, index) => {
    // generate id
    const id = `affliate-tag-img--${index}`;

    // remove if exist
    removeElement(id);

    // create affilate tag
    const tag = new Image(1, 1);
    tag.id = id;
    tag.src = src;
    tag.style.display = 'none';

    // append the tag to body
    document.body.appendChild(tag);
  });
};

const appendScripts = (innerHTMLs) => {
  innerHTMLs.forEach((innerHTML, index) => {
    // generate id
    const id = `affiliate-tag-script--${index}`;

    // remove if exist
    removeElement(id);

    // create affilate tag
    const script = document.createElement('script');
    script.id = id;
    script.type = 'text/javascript';
    script.innerHTML = innerHTML;

    // append the tag to body
    document.body.appendChild(script);
  });
};

const onSuccess = (userId) => {
  if (process.env.REACT_APP_VENDOR === 'traders') {
    // For TRADERS
    const imgSrcs = [
      `https://admin.mtrf.net/ac/action.php?cid=AD000153&uid=${userId}&pid=1`,
      `https://action.j-a-net.jp///${userId}/405949`,
      `https://www.tcs-asp.net/aresult?LC=MBTC1&NK=${userId}`,
      `https://is.accesstrade.net/cgi-bin/isatV2/min-btc/isatWeaselV2.cgi?result_id=100&verify=${userId}`,
      `https://fx-on.com/rc.php?t=0&m=0&e=${userId}`,
    ];
    appendImgs(imgSrcs);
  } else {
    // For QUOINE
    const clientId = '7F4H6';

    // add images
    const imgSrcs = [
      `//t.82comb.net/cv?t=img&guid=ON&ak=${clientId}&uq=${userId}&ec=`,
      `https://admin.mtrf.net/ac/action.php?cid=AD000158&uid=${userId}&pid=1`,
      `https://action.j-a-net.jp/${userId}/405926`,
      `https://px.a8.net/cgi-bin/a8fly/sales?pid=s00000017973001&so=${userId}&si=1.1.1.a8`,
      `//t.82comb.net/cv?t=img&guid=ON&ak=${clientId}&uq=${userId}&ec=`,
    ];
    appendImgs(imgSrcs);

    // add scripts
    const innerHTMLs = [
      `
        /* <![CDATA[ */
        var hc_access_key = "${clientId}";
        var hc_unique_id = ${userId};
        var hc_measure1 = "";
        var hc_measure2 = "";
        var hc_measure3 = "";
        var hc_ec_value = "";
        /* ]]> */
        (function() {
        var hc = document.createElement('script'); hc.type = 'text/javascript'; hc.async = true;
        hc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 't.82comb.net/tk/conversion.js';
        var ps = document.getElementsByTagName('script')[0]; ps.parentNode.insertBefore(hc, ps);
        })();
      `,
      `
        /* <![CDATA[ */
        var hc_access_key = "${clientId}";
        var hc_unique_id = ${userId};
        var hc_measure1 = "";
        var hc_measure2 = "";
        var hc_measure3 = "";
        var hc_ec_value = "";
        /* ]]> */
        (function() {
        var hc = document.createElement('script'); hc.type = 'text/javascript'; hc.async = true;
        hc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 't.82comb.net/tk/conversion.js';
        var ps = document.getElementsByTagName('script')[0]; ps.parentNode.insertBefore(hc, ps);
        })();
      `,
    ];
    appendScripts(innerHTMLs);
  }
};

export default onSuccess;
