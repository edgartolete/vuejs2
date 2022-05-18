import { createRouter, createWebHistory } from 'vue-router' //import the method createRouter and createWebHistory from library vue-router.
import About from '../views/About.vue' //import the About view
import Home from '../views/Home.vue' //import the Home view

const routes = [ //create a route objects array
    {
        path: '/', //URL path designated to the view
        name: 'Home', //name of the view
        component: Home //name of the component
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({ // create a router
    history: createWebHistory(import.meta.env.BASE_URL), //default syntax
    routes, // include the routes created above
})

export default router //export the router
