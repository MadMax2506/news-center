import { Navigation } from '@components/Navigation';
import { Stack } from '@mui/material';
import { Dashboard } from '@pages/Dashboard';
import { News } from '@pages/News';
import { Weather } from '@pages/Weather';
import { FC } from 'react';
import { Navigate, Route as ReactRoute, Routes as ReactRoutes, BrowserRouter as Router } from 'react-router-dom';
import { paths } from './paths';

const RouterBody: FC = () => {
  return (
    <>
      <Navigation />
      <Stack alignItems="center">
        <ReactRoutes>
          {/** Public routes */}
          <ReactRoute path="*" element={<Navigate to={paths.root.pattern} />} />
          <ReactRoute index path={paths.root.pattern} element={<Dashboard />} />
          <ReactRoute path={paths.news.pattern} element={<News />} />
          <ReactRoute path={paths.weather.pattern} element={<Weather />} />
        </ReactRoutes>
      </Stack>
    </>
  );
};

export const Routes: FC = () => {
  return (
    <Router>
      <RouterBody />
    </Router>
  );
};
