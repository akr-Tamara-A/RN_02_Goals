/** Function for generate random number between min and max */
export const genereteRandomNumber = (min, max, exlude) => {
  const rndNum = Math.floor(Math.random() * (max - min + 1)) + min;
  if (rndNum === exlude) {
    return genereteRandomNumber(min, max, exlude);
  } else {
    return rndNum;
  }
};
