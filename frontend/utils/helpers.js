import _ from 'lodash';

export const extractList = list => {
  if (_.isNull(list)) return [];
  return _.values(list);
};

export const convertTime = time => {
  const t = Math.floor(time);
  const sec = _formatTime(t % 60),
        min = _formatTime(Math.floor(t / 60) % 60),
        hr = _formatTime(Math.floor(Math.floor(t / 60) / 60));
  return `${hr}:${min}:${sec}`;
};

const _formatTime = digit => {
  digit = digit.toString();
  if (digit.length === 1) return `0${digit}`;
  return digit;
};
