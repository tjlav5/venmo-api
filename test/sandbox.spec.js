'use strict';

const config = require('../local.env');
const Sandbox = require('../src/sandbox');

var sandbox = new Sandbox(config.VENMO_ACCESS_TOKEN);

sandbox.settledPayment()
  .then(function(r) {
    console.log(r);
  });

sandbox.failedPayment()
  .then(function(r) {
    console.log(r);
  });

sandbox.pendingPayment()
  .then(function(r) {
    console.log(r);
  });

sandbox.settledCharge()
  .then(function(r) {
    console.log(r);
  });

sandbox.pendingCharge()
  .then(function(r) {
    console.log(r);
  });
