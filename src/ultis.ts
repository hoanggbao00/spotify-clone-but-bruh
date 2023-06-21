function millisToMinutesAndSeconds(millis: number) {
  let minutes: number = Math.floor(millis / 60000);
  let seconds: number = parseInt(((millis % 60000) / 1000).toFixed(0));
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

function capitalizeFirstLetter(str: string) {
  const arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  const str2 = arr.join(' ');
  return str2;
}

export { millisToMinutesAndSeconds, capitalizeFirstLetter };
