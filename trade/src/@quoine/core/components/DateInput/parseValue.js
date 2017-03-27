const parseValue = (value) => {
  const obj = new Date(value * 1000);
  return {
    year: `${obj.getFullYear()}`,
    month: `${obj.getMonth() + 1}`,
    date: `${obj.getDate()}`,
  };
};

export default parseValue;
