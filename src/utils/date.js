const locale = 'en-US';
const options = {
  timeZone: 'America/New_York'
};

export function formatTime (ts) {
  const date = new Date(ts);
  return date
    .toLocaleString(locale, options)
    .split(' ')
    .splice(1)
    .join(' ');
}

export function formatDate (ts) {
  const date = new Date(ts);
  const [datestamp, ...timestamps] = date
    .toLocaleString(locale, options)
    .split(' ');

  return `${datestamp} ${timestamps.join(' ')}`;
}
