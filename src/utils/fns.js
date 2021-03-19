function random(limit) {
  return Math.floor(Math.random() * limit);
}

function getReadableDate(timeStamp) {
  const date = new Date(timeStamp)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return date.toLocaleDateString(undefined, options)
}

export { random, getReadableDate };
