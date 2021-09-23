import Home from './pages/Home.svelte';
import Team from './pages/TeamViewer.svelte';
import ViewTeam from './pages/ViewTeam.svelte';

const routes = {
  '/': Home,
  '/teams': Team,
  '/teams:team': ViewTeam,
};

export default routes;
