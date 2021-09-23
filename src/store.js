import localStore from './utils/LocalStorageStore';

const store = localStore({
  identifier: 'gun',
  ifNull: {
    teams: [],
  },
});

export default store;
