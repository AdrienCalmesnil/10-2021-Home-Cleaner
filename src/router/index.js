import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
    {
        name:'Home',
        path:'/',
        component:Home,
        meta:{
            title:"Accueil"
        },
    }, {
        name:'About',
        path:'/about',
        component: About,
        meta:{
            title:"A propos"
        },
    }, 
    {
        name:'Login',
        path:'/login',
        component: Login,
        meta:{
            title:"Login"
        },
    }, 
    {
        name:'NotFound',
        path:'/:pathMatch(.*)',
        component: NotFound,
        meta:{
            title:'404 Not Found'
        }
    },
];

const router =  createRouter({
    history: createWebHistory(),
    routes,
})

router.afterEach((to, from) => {
    console.log(from,to);
    document.title = to.meta.title;
});

export default router;