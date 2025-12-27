import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Home/Dashboard/Navbar";
import LandingPage from "./components/Home/Dashboard/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import AddTransaction from "./pages/add-transaction";
import BudgetDashboard from "./pages/budget/BudgetDashboard";
import ReportsDashboard from "./pages/reports/ReportsDashboard";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
            </>
          }
        />
        <Route path="/budget/BudgetDashboard" element={<BudgetDashboard />} />
        <Route path="/reports" element={<ReportsDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
