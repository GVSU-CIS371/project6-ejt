import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./components/Home.vue";
import Electronics from "./components/Electronics.vue";
import Clothing from "./components/Clothing.vue";
import BestSeller from "./components/BestSeller.vue";
import Groceries from "./components/Groceries.vue";
const routes = [
  {
    path: "/",
    name: "home",
    props: true,
    component: HomeView,
  },
  {
    path: "/electronics",
    name: "electronics",
    props: true,
    component: Electronics,
  },
  {
    path: "/clothing",
    name: "clothing",
    props: true,
    component: Clothing,
  },
  {
    path: "/bestseller",
    name: "best sellers",
    props: true,
    component: BestSeller,
  },
  {
    path: "/groceries",
    name: "groceries",
    props: true,
    component: Groceries,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
