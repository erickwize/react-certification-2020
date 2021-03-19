function random(limit) {
  return Math.floor(Math.random() * limit);
}

function getReadableDate(timeStamp) {
  const date = new Date(timeStamp)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return date.toLocaleDateString(undefined, options)
}

export { random, getReadableDate };
