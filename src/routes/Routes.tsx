import { Home } from '@pages/Home';
import { Navigate, Route as ReactRoute, Routes as ReactRoutes, BrowserRouter as Router } from 'react-router-dom';
import { paths } from './paths';

export function Routes(): JSX.Element {
  return (
    <Router>
      <ReactRoutes>
        {/** Public routes */}
        <ReactRoute path="*" element={<Navigate to={paths.root.pattern} />} />
        <ReactRoute index path={paths.root.pattern} element={<Home />} />
      </ReactRoutes>
    </Router>
  );
}
