const oid = require('../libs/oid');
require('../models/user');

exports.User = [{
  _id:      oid('user-polpot'),
  email:    "polpothatesyou@gmail.com",
  displayName: 'polpot',
  password: '123456'
}, {
  _id:      oid('user-regizzz'),
  email:    "regis4076@gmail.com",
  displayName: 'regizzz',
  password: '123456'
}];
