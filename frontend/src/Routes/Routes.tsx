import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyProfile from "../Component/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Component/IncomeStatement/IncomeStatement";
import DesignPage from "../Pages/DesignPage/DesignPage";
import BalanceSheet from "../Component/BalanceSheet/BalanceSheet";
import CashFlowStatement from "../Component/CashFlowStatement/CashFlowStatement";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "search", element:<ProtectedRoute> <SearchPage /></ProtectedRoute> },
      { path: "design-guide", element: <DesignPage /> },
      {
        path: "company/:ticker",
        element: <ProtectedRoute><CompanyPage /></ProtectedRoute>,
        children: [{ path: "company-profile", element: <CompanyProfile /> },
                   { path: "income-statement", element: <IncomeStatement /> },
                   { path: "balance-sheet", element: <BalanceSheet /> },
                   { path: "cashflow-statement", element: <CashFlowStatement /> },
                   
        ],
      },
    ],
  },
]);
