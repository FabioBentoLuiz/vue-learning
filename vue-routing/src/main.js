import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/teams'},
        // {path: '/teams', component: TeamsList, alias:'/' },
        {path: '/teams', components: {default: TeamsList, footer: TeamsFooter}, name: 'teams', children: [
            {path: ':teamId', component: TeamMembers, name: 'team-members', props: true },
        ] },
        {path: '/users', components: {default: UsersList, footer: UsersFooter} },
        // {path: '/:notFound(.*)', redirect: '/teams'}
        {path: '/:notFound(.*)', component: NotFound}
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
