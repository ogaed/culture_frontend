import { lazy } from 'react';
const Calendar = lazy(() => import('../pages/Calendar'));
const AddProducts = lazy(() => import('../pages/AddProduct'));
const Profile = lazy(() => import('../pages/Profile'));
const Tables = lazy(() => import('../pages/users'));
const Product = lazy(() => import('../pages/Products'));
const Orders = lazy(() => import('../pages/Orders'));
const Payments = lazy(() => import('../pages/Payments'));
const EditProfile = lazy(()=> import('../pages/EditProfile'))
const Dashboard = lazy(()=>import('../pages/Dashboard/ECommerce'))
const Login = lazy(()=>import('../pages/Authentication/SignIn'))




const coreRoutes = [
  {
    path: 'auth/signin',
    title: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: Dashboard,
  },
  
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },

  {
    path: '/edit-profile',
    title: 'Edit Profile',
    component: EditProfile,
  },

  {
    path: '/product',
    title: 'Product',
    component: Product,
  },

  {
    path: 'add-products',
    title: 'Add Product',
    component: AddProducts,
  },

  {
    path: '/users',
    title: 'Users',
    component: Tables,
  },

  {
    path: '/orders',
    title: 'Orders',
    component: Orders,
  },
  {
    path: '/payments',
    title: 'Payments',
    component: Payments,
  },
  {
    path: '/payments',
    title: 'Payments',
    component: Payments,
  },

];

const routes = [...coreRoutes];
export default routes;
