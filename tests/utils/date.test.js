import { formatDate, formatTime } from 'utils/date';

describe('formatDate function', function () {
  const ts = 1574818337 * 1000; // November 26th, 2019 at 20:32

  it('should correctly format timestamps', function ()  {
    const formattedTime = formatTime(ts);

    expect(formattedTime).toEqual('8:32:17 PM');
  });

  it('should correctly format date + timestamps', function ()  {
    const formattedDateTime = formatDate(ts);

    expect(formattedDateTime).toEqual('11/26/2019, 8:32:17 PM');
  });
});
