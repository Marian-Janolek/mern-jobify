import { Landing, Register, Error, ProtectedRoute } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  AddJob,
  AllJob,
  SharedLeyout,
  Profile,
  Stats,
} from './pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLeyout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJob />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
