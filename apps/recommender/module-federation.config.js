module.exports = {
  name: 'recommender',
  exposes: {
    './Module': 'apps/recommender/src/app/remote-entry/entry.module.ts',
  },
};
