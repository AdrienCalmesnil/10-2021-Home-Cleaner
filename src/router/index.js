import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";
import NotFound from "@/views/NotFound.vue";
import Services from "@/views/Services.vue";
import Header from "@/components/Header.vue";
import Contact from "@/views/Contact.vue";
import Reserve from "@/views/Reserve.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
    meta: {
      title: "Accueil",
    },
  },
  {
    name: "About",
    path: "/about",
    component: About,
    meta: {
      title: "A propos",
    },
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)",
    component: NotFound,
    meta: {
      title: "404 Not Found",
    },
  },
  {
    name: "Services",
    path: "/services",
    component: Services,
    meta: {
      title: "Services",
    },
  },
  {
    name: "Header",
    path: "/header",
    component: Header,
    meta: {
      title: "Header",
    },
  },
  {
    name: "Contact",
    path: "/contact/:id",
    component: Contact,
    meta: {
      title: "Contact",
    },
  },
  {
    name: "Reserve",
    path: "/reserve/:id",
    component: Reserve,
    meta: {
      title: "Reserve",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  console.log(from, to);
  document.title = to.meta.title;
});

export default router;
