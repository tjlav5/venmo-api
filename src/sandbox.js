'use strict';

const rp = require('request-promise');
const rpSandbox = rp.defaults({
  baseUrl: 'https://sandbox-api.venmo.com/v1/',
  json: true
});

class Sandbox {
  constructor(accessToken) {
    this.accessToken = accessToken;
  }

  settledPayment() {
    return rpSandbox({
      uri: 'payments',
      method: 'POST',
      qs: {
        access_token: this.accessToken,
        user_id: '145434160922624933',
        note: 'A message...',
        amount: 0.10
      }
    });
  }

  failedPayment() {
    return rpSandbox({
      uri: 'payments',
      method: 'POST',
      qs: {
        access_token: this.accessToken,
        user_id: '145434160922624933',
        note: 'A message...',
        amount: 0.20
      }
    });
  }

  pendingPayment() {
    return rpSandbox({
      uri: 'payments',
      method: 'POST',
      qs: {
        access_token: this.accessToken,
        email: 'foo@bar.io',
        note: 'A message...',
        amount: 0.30
      }
    });
  }

  settledCharge() {
    return rpSandbox({
      uri: 'payments',
      method: 'POST',
      qs: {
        access_token: this.accessToken,
        user_id: '145434160922624933',
        note: 'A message...',
        amount: -0.10
      }
    });
  }

  pendingCharge() {
    return rpSandbox({
      uri: 'payments',
      method: 'POST',
      qs: {
        access_token: this.accessToken,
        user_id: '145434160922624933',
        note: 'A message...',
        amount: -0.20
      }
    });
  }

}

module.exports = Sandbox;
