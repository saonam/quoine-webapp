export default (message) => {
  switch (message) {
    case 'password-updated':
      return 'sign-in:message-password-updated';
    case 'signed-out':
      return 'sign-in:message-signed-out';
    case 'need-sign-in':
      return 'sign-in:message-need-sign-in';
    // TODO: this is too generic and redundant
    default:
      return 'sign-in:message-account-confirmed';
  }
};
