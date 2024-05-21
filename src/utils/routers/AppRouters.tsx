import {
  Challenge_01,
  Challenge_02,
  Challenge_03,
  Challenge_04,
  Challenge_05,
  Challenge_06,
  Challenge_07,
  Challenge_08,
  Challenge_09,
  Home,
} from 'pages';
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
      <Route
        path='/challenge-04'
        element={<Challenge_04 />}
      />
      <Route
        path='/challenge-05'
        element={<Challenge_05 />}
      />
      <Route
        path='/challenge-06'
        element={<Challenge_06 />}
      />
      <Route
        path='/challenge-07'
        element={<Challenge_07 />}
      />
      <Route
        path='/challenge-08'
        element={<Challenge_08 />}
      />
      <Route
        path='/challenge-09'
        element={<Challenge_09 />}
      />
    </Routes>
  );
};
