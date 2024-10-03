import HomeView from '@/views/HomeView.vue';
import SearchResultView from '@/views/SearchResultView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path:"/result",
        name: "search",
        component: SearchResultView
    }
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
});
 
  export default router;