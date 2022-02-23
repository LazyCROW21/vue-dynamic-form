import { createWebHistory, createRouter } from "vue-router";
import formSectionBuilder from '../components/form-section-builder.vue'
import formRender from '../components/form-render.vue'



const routes = [
    {
        path:"/",
        name:"Home",
        component: formSectionBuilder
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