import { createWebHistory, createRouter } from "vue-router";
import formBuilder from '../components/form-builder.vue'
import formRender from '../components/form-render.vue'



const routes = [
    {
        path:"/",
        name:"Home",
        component: formBuilder
    },
    {
        path:"/render",
        name:"Render",
        component: formRender
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;