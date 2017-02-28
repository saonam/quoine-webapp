export default (raw) => {
  let sent = '';
  if (raw.email_sent) {
    sent = 'email';
  } else {
    sent = raw.ignored ? 'authy' : 'sms';
  }
  return { sent };
};
