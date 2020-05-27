const locale = 'en-US';
const options = {
  timeZone: 'America/New_York'
};

export function formatDate (date, onlyTime = false) {
  const [datestamp, ...timestamps] = date
    .toLocaleString(locale, options)
    .split(' ');

  if (onlyTime) {
    return timestamps.join(' ');
  }

  return `${datestamp} ${timestamps.join(' ')}`;
}

export default formatDate;
