import { lazy } from 'react';
const Calendar = lazy(() => import('../pages/Calendar'));
const AddWeight = lazy(() => import('../pages/AddWeight'));
const AddCar = lazy(() => import('../pages/AddCar'));
const AddLoader = lazy(() => import('../pages/AddLoader'));
const Profile = lazy(() => import('../pages/Profile'));
const Tables = lazy(() => import('../pages/users'));
const Weights = lazy(() => import('../pages/Weights'));
const Cars = lazy(() => import('../pages/Cars'));
const Loaders = lazy(() => import('../pages/Loaders'));
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
    path: '/weight',
    title: 'Weights',
    component: Weights,
  },
  {
    path: '/cars',
    title: 'Cars',
    component: Cars,
  },
  {
    path: '/loaders',
    title: 'Loaders',
    component: Loaders,
  },

  {
    path: 'add-weight',
    title: 'Add Weight',
    component: AddWeight,
  },
  {
    path: 'add-car',
    title: 'Add Car',
    component: AddCar,
  },
  {
    path: 'add-loader',
    title: 'Add Loader',
    component: AddLoader,
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
