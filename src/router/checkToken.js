// import { Middleware } from 'vue-router';

const authenticate = (to, from, next) => {
  const token = localStorage.getItem('token');
  if (!token) {
    next({ name: 'login' });
  } else {
    next();
  }
};

export default authenticate;