import { createRouter, createWebHistory} from 'vue-router';


const routes=[
    {
        path:'/',
        name:'home',
        component: () => import('@/views/Home'),
    },
    {
        path:'/topRated',
        name:'topRated',
        component: () => import('@/views/topRated'),
    },
    
    {
        path:'/movies/:id',
        name:'movies',
        component: () => import('@/views/movies'),
    },
    
    {
        path:'/movieSelect/',
        name:'movieSelect',
        component: () => import('@/views/movieSelect'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;