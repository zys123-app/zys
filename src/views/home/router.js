export default [
    {
        path: '/index',
        component: () => import('./Home.vue'),
        name: 'Home'
    },
    {
        path: '/type',
        component: () => import('../type/type.vue'),
        name: 'Type'
    }
]