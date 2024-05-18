import { Challenge_01, Challenge_02, Challenge_03, Home } from 'pages';
import { Route, Routes } from 'react-router-dom';

export const AppRouters = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/challenge-01'
        element={<Challenge_01 />}
      />
      <Route
        path='/challenge-02'
        element={<Challenge_02 />}
      />
      <Route
        path='/challenge-03'
        element={<Challenge_03 />}
      />
    </Routes>
  );
};
