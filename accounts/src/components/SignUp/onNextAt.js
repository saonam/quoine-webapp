import resources from './resources';

const errorRequired = { message: 'sign-up-error:all-is-required' };

// choose type
const onNext1 = () => Promise.resolve();

// account information
const onNext2 = (form) => {
  if (!form.email || !form.password) {
    return Promise.reject(errorRequired);
  }

  if (form.type === 'individual') {
    if (!form.firstName || !form.lastName) {
      return Promise.reject(errorRequired);
    }
  }

  if (form.type === 'corporate') {
    if (!form.businessName || !form.businessType) {
      return Promise.reject(errorRequired);
    }
  }

  if (
    form.password.length < 8 ||
    form.password.search(/\d/) === -1 ||
    form.password.search(/[a-z]/) === -1 ||
    form.password.search(/[A-Z]/) === -1
  ) {
    return Promise.reject({ message: 'sign-up-error:password-too-weak' });
  }

  return resources.checkEmail(form.email);
};

// personal/business information
const onNext3 = (form) => {
  if (!form.country || !form.address) {
    return Promise.reject(errorRequired);
  }

  if (form.type === 'individual') {
    // don't check birthdate, since birthdate default is 0 but
    // technically, still valid (1/1/1970)
    if (!form.nationality || !form.income) {
      return Promise.reject(errorRequired);
    }
    if (form.income === 'employed' && !form.incomeJob) {
      return Promise.reject(errorRequired);
    }
    if (form.income === 'self-employed') {
      if (!form.incomeBusinessName || !form.incomeBusinessType) {
        return Promise.reject(errorRequired);
      }
    }
    if (form.income === 'other' && !form.incomeDetail) {
      return Promise.reject(errorRequired);
    }
  }

  if (form.type === 'corporate') {
    if (!form.businessWebsite || !form.taxId || !form.vatId) {
      return Promise.reject(errorRequired);
    }
  }

  return Promise.resolve();
};

// sign up baby
const onNext4 = (form) => {
  if (!form.acceptTerms) {
    return Promise.reject({ message: 'sign-up-error:terms' });
  }
  return resources.signUp(form);
};

export default {
  1: onNext1,
  2: onNext2,
  3: onNext3,
  4: onNext4,
};
