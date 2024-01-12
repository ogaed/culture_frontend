import { lazy } from 'react';
const Calendar = lazy(() => import('../pages/Calendar'));
const AddProducts = lazy(() => import('../pages/AddProduct'));
const Profile = lazy(() => import('../pages/Profile'));
const Tables = lazy(() => import('../pages/users'));
const Product = lazy(() => import('../pages/Products'));
const Orders = lazy(() => import('../pages/Orders'));
const Payments = lazy(() => import('../pages/Payments'));
const EditProfile = lazy(()=> import('../pages/EditProfile'))

const coreRoutes = [
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
    path: 'add-product',
    title: 'Add Product',
    component: AddProducts,
  },

  {
    path: '/product',
    title: 'Product',
    component: Product,
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

];

const routes = [...coreRoutes];
export default routes;
