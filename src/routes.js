import { wrap } from 'svelte-spa-router/wrap';
import { get } from 'svelte/store';

import Home from './pages/Home.svelte';
import Team from './pages/TeamsPage.svelte';
import ViewTeam from './pages/TeamPage.svelte';
import Unknown from './pages/404.svelte';
import store from './store';

const routes = {
  '/': Home,
  '/teams': Team,
  '/teams/:team': wrap({
    component: ViewTeam,
    conditions: [
      ({ params: { team } }) => {
        const parsedNum = parseInt(team, 10);
        if (parsedNum) {
          const { teams } = get(store);
          // console.log(teams);
          console.log('In here!');
          return parsedNum >= 0 && parsedNum <= teams.length;
        }
        console.log('failed');
        return false;
      },
    ],
  }),
  '/404': Unknown,
};

export default routes;
