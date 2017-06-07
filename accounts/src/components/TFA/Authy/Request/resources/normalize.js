export default (raw) => (
  raw.ignored ? 'authy' : 'sms'
);
