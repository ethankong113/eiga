import _ from 'lodash';

export const extractList = list => {
  if (_.isNull(list)) return [];
  return _.values(list);
};
