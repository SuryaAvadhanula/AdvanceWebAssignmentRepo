import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from '../pages/Home.vue';
//import Messages from '../pages/Messages.vue';
import Generic from '../pages/Generic.vue';
import Login from '../pages/Login.vue';
import { useSession } from "../models/session";
import AssignedTasks from "../pages/AssignedTasks.vue";
import AllTasks from "../pages/AllTasks.vue"
import Contact from "../pages/Contact.vue";
import SignUp from "../pages/Signup.vue";
import Wall from "../pages/Wall.vue"

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/messages', component: () => import('../pages/Wall.vue') },
  { path: '/about', component: Generic, props: { title: 'About Page!' } },
  { path: '/contact', component: Contact },
  { path: '/assignedtasks', component: AssignedTasks },
  { path: '/viewAllTasks', component: AllTasks },
  { path: '/signup', component: SignUp },
  { path: '/wall', component: Wall },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
  linkActiveClass: 'is-active',
})

router.beforeEach((to, from) => {
const session = useSession();

  if(session.destinationUrl == null && to.path != '/login') {
      session.destinationUrl = to.path;
  }
  console.log({ to });
  const protectedUrls = ['/assignedtasks', '/viewAllTasks', '/feed', '/hidden'];
  console.log({ protectedUrls });

  if (protectedUrls.includes(to.path)) { // list of paths that require login
      console.log('requires login');
      if (!session.user) {
          return '/login';
      }
  }
})

export default router;