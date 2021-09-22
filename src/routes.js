import Home from './views/Home.svelte';
import Team from './views/TeamViewer.svelte';
import Info from './views/Info.svelte';
import Overlay from './components/Overlay.svelte';
let routes = [
    {
        name: '/',
        component:Home,
    },
    {
        name:'/teams',
        component: Team,
        nestedRoutes: [
            {
                name: 'new',
                component: Overlay
            }
        ]
    },
    {
        name:'/info',
        component: Info
    }
];

export default routes;