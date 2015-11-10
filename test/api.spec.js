'use strict';

// import { User, Payment } from 'src';
// const Venmo = require('../src/');

// Venmo('accessToken').me();
// Venmo('accessToken').profile('username');
// Venmo('accessToken').friends('username');
//
// Venmo('accessToken').pay('username', 'note', 'amount', 'audience');
// Venmo('accessToken').payments();
// Venmo('accessToken').payment('paymentID');
// Venmo('accessToken').complete('paymentID', 'action');

const config = require('../local.env');
const Venmo = require('../src/api');

var v = new Venmo(config.VENMO_ACCESS_TOKEN);

// v.createPayment('145434160922624933', 'This is a test', 0.10)
//   .then(function (r) {
//     console.log(r);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

v.me()
  .then(function (r) {
    console.log('GET /ME', r.data.user.email);
    return r.data.user;
  })
  .then(function(me) {
    return v.friends(me.id);
  })
  .then(function (r) {
    return r.data;
  })
  .then(function (friends) {
    let friend = friends[0];
    return v.profile(friend.id);
  })
  .then(function (r) {
    console.log(r);
  });

// v.profile('1403195821654016082')
//   .then(function (r) {
//     console.log(r);
//   });

// v.getPayments()
//   .then(function(r) {
//     let payment = r.data[0];
//     return v.getPayment(payment.id);
//   })
//   .then(function (payment) {
//     console.log(payment);
//   });
