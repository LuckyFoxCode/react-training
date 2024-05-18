import { Challenge_01, Challenge_02, Challenge_03 } from 'components/layout';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

export const AppRouters = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<h1>My components</h1>}
        />
        <Route
          path='/challenge01'
          element={<Challenge_01 />}
        />
        <Route
          path='/challenge02'
          element={<Challenge_02 />}
        />
        <Route
          path='/challenge03'
          element={<Challenge_03 />}
        />
      </Routes>
    </Router>
  );
};
