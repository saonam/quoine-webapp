import resources from './resources';

const onNext = (step, form) => (
  step === 4 ? resources.signUp(form) : Promise.resolve('done')
);

export default onNext;
