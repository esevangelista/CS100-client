import Home from '../features/home/Home';
import Profile from '../features/profile/Profile';

const routes = [
  {
    type: 'route',
    path: '/',
    exact: true,
    component: Home
  },
  {
    type: 'route',
    path: '/profile',
    exact: true,
    component: Profile
  },
  {
    type: 'redirect',
    to: '/'
  }
];

export default routes;
