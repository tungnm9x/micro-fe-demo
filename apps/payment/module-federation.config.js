module.exports = {
  name: 'payment',
  exposes: {
    './Module': 'apps/payment/src/app/remote-entry/entry.module.ts',
  },
};
