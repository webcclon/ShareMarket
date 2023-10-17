import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './route';

export const AppRoutes = () => {
  const appRoutes = useRoutes(routes);
  return appRoutes;
}
