const onSuccess = (userId) => {
  if (process.env.REACT_APP_VENDOR === 'traders') {
    // For TRADERS
    const image = new Image(1, 1);
    image.src = `https://admin.mtrf.net/ac/action.php?cid=AD000001&uid=${userId}&pid=1`;
    image.style.display = 'none';
    document.body.appendChild(image);
  } else {
    // For QUOINE
    const clientId = '7F4H6';

    // add script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
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
    `;
    document.body.appendChild(script);

    // add main image
    const main = new Image(1, 1);
    main.src = `//t.82comb.net/cv?t=img&guid=ON&ak=${clientId}&uq=${userId}&ec=`;
    main.style.display = 'none';
    document.body.appendChild(main);

    // tag for mfro
    const mfro = new Image(1, 1);
    mfro.src = `https://admin.mtrf.net/ac/action.php?cid=AD000158&uid=${userId}&pid=1`;
    mfro.style.display = 'none';
    document.body.appendChild(mfro);

    // tag for JAnat
    const JAnat = new Image(1, 1);
    JAnat.src = `https://action.j-a-net.jp/${userId}/405926`;
    JAnat.style.display = 'none';
    document.body.appendChild(JAnat);

    // tag for A8
    const A8 = new Image(1, 1);
    A8.src = `https://px.a8.net/cgi-bin/a8fly/sales?pid=s00000017973001&so=${userId}&si=1.1.1.a8`;
    A8.style.display = 'none';
    document.body.appendChild(A8);
  }
};

export default onSuccess;
