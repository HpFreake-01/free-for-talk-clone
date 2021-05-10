import {createRouter, createWebHistory} from "vue-router";
import Groups from "../views/Groups";

import PrivacyPolicy from "../views/PrivacyPolicy";
import Group from "../components/Group";

const routes = [
    {
        path:'/',
        name:'groups',
        component: Groups
    },
    {
        path:'/privacy-policy',
        name:'Privacy Policy',
        component: PrivacyPolicy
    },
    {
        path:'/group/:id',
        component: Group
    }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router