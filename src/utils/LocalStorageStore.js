import { writable } from 'svelte/store';

const alt = { identifier: '', ifNull: {} };

/**
 *
 * @param {{identifier:String,ifNull:Object}} init
 *
 */
export default function localStorageStore(init = alt) {
  if (typeof init !== 'object') {
    throw Error('Object not provided');
  }

  const { identifier } = init;

  if (!localStorage[identifier]) {
    localStorage.setItem(identifier, JSON.stringify(init.ifNull));
  }

  const { subscribe, set, update } = writable(
    JSON.parse(localStorage[identifier])
  );

  return { identifier, subscribe, set, update };
}
