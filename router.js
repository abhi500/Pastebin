import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'Home',
            path: '/',
            component: () => import('./src/components/main/Main.vue')
        },
        {
            name: 'ViewCode',
            path: '/:code',
            component: () => import('./src/components/view/ViewCode.vue')
        },
        {
            name: 'Error',
            path: '*',
            component: () => import('./src/components/errors/PageNotFound.vue')
        },
        {
            name: 'SignUp',
            path: '/auth/signup',
            component: () => import('./src/components/auth/Register.vue')
        },
        {
            name: 'SignIn',
            path: '/auth/signin',
            component: () => import('./src/components/auth/Login.vue')
        }
    ]
})
