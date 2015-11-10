'use strict';

const rp = require('request-promise');
const rpVenmo = rp.defaults({
  baseUrl: 'https://api.venmo.com/v1/',
  json: true
});

class Venmo {
  constructor(accessToken) {
    this.accessToken = accessToken;
  }

  me() {
    return rpVenmo({
      uri: 'me',
      qs: {
        access_token: this.accessToken
      }
    });
  }

  profile(id) {
    return rpVenmo({
      uri: ['users', id].join('/'),
      qs: {
        access_token: this.accessToken
      }
    });
  }

  friends(id, limit, after, before) {
    return rpVenmo({
      uri: ['users', id, 'friends'].join('/'),
      qs: {
        access_token: this.accessToken,
        limit: limit,
        after: after,
        before: before
      }
    });
  }

  getPayments(filter, limit, after, before) {
    filter = filter || {};
    return rpVenmo({
      uri: 'payments',
      qs: {
        access_token: this.accessToken,
        action: filter.action,
        actor: filter.actor,
        status: filter.status,
        limit: limit,
        after: after,
        before: before
      }
    });
  }

  getPayment(id) {
    return rpVenmo({
      uri: ['payments',id].join('/'),
      qs: {
        access_token: this.accessToken
      }
    });
  }

  createPayment(userID, note, amount, audience) {
    return rpVenmo({
      method: 'POST',
      uri: 'payments',
      body: {
        access_token: this.accessToken,
        user_id: userID,
        note: note,
        amount: amount,
        audience: audience
      }
    });
  }

  updatePayment(paymentID, action) {
    return rpVenmo({
      method: 'PUT',
      uri: ['payments', paymentID].join('/'),
      body: {
        access_token: this.accessToken,
        action: action
      }
    });
  }


}

module.exports = Venmo;
