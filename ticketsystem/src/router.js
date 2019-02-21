import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Our different routes through out our website */
export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('./views/Home.vue')
        },
        {
            path: '/tickets',
            name: 'ticket',
            component: () =>
                import ('./views/Tickets.vue')
        },
        {
            path: '/events',
            name: 'events',
            component: () =>
                import ('./views/Events.vue')
        },
        {
            path: '/buy',
            name: 'buy',
            component: () =>
                import ('./views/Buy.vue')
        },
        {
            path: '/admin',
            name: 'admin',
            component: () =>
                import ('./views/Admin.vue')
        },
        {
            path: '/verify',
            name: 'verify',
            component: () =>
                import ('./views/Verify.vue')
        }
    ]
})