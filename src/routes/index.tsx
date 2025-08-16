import { createBrowserRouter } from "react-router-dom";
import AppWrapperLayout from "../layouts/AppWrapperLayout";
import RootLayout from "../layouts/RootLayout";
import DashboardPage from "../pages/DashboardPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import { SIgnUpSuccess } from "../pages/SignUpSuccess";
import ProjectsPage from "../pages/ProjectsPage";
import CalendarPage from "../pages/CalendarPage";
import VacationsPage from "../pages/VacationsPage";
import EmployeesPage from "../pages/EmployeesPage";
import MessagerPage from "../pages/MessagePage";
import InfoPortalPage from "../pages/InfoPortal";
import NearestEventsPage from "../pages/NearestEventsPage";
import VacationsCalendar from "../components/VacationsCalendar";
import ProfilPage from "../pages/Profil";
import ProtectedRouteComponent from "../components/protected.route";
import ProfilControl from "../components/ProfilControl";
import { Settings } from "lucide-react";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapperLayout />,
    children: [
      {
        element: (
          <ProtectedRouteComponent>
            <RootLayout />
          </ProtectedRouteComponent>
        ),
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "/nearest-events",
            element: <NearestEventsPage />,
          },
          {
            path: "/projects",
            element: <ProjectsPage />,
          },
          {
            path: "/calendar",
            element: <CalendarPage />,
          },
          {
            path: "/vacations",
            element: <VacationsPage />,
          },
          {
            path: "/vacations/calendar",
            element: <VacationsCalendar />,
          },
          {
            path: "/employees",
            element: <EmployeesPage />,
          },
          {
            path: "/messenger",
            element: <MessagerPage />,
          },
          {
            path: "/info-portal",
            element: <InfoPortalPage />,
          },
          {
            path: "/my-profil",
            element: <ProfilPage />,
          },
          {
            path: "/profil-control",
            element: <ProfilControl />,
          },
          {
            path: "/settings",
            element: <Settings />,
          },
        ],
      },
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "sign-up/success",
        element: <SIgnUpSuccess />,
      },
    ],
  },
]);
