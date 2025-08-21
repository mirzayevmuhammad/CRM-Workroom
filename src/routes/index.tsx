import { Settings } from "lucide-react";
import { createBrowserRouter } from "react-router-dom";
import ProfilControl from "../components/ProfilControl";
import VacationsCalendar from "../components/VacationsCalendar";
import AppWrapperLayout from "../layouts/AppWrapperLayout";
import RootLayout from "../layouts/RootLayout";
import { AddProject } from "../pages/AddProject";
import CalendarPage from "../pages/CalendarPage";
import DashboardPage from "../pages/DashboardPage";
import EmployeesPage from "../pages/EmployeesPage";
import InfoPortalPage from "../pages/InfoPortal";
import MessagerPage from "../pages/MessagePage";
import NearestEventsPage from "../pages/NearestEventsPage";
import ProfilPage from "../pages/Profil";
import ProjectsPage from "../pages/ProjectsPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import { SIgnUpSuccess } from "../pages/SignUpSuccess";
import VacationsPage from "../pages/VacationsPage";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapperLayout />,
    children: [
      {
        element: (
          // <ProtectedRouteComponent>
            <RootLayout />
          /* </ProtectedRouteComponent> */
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
        path: "/success",
        element: <SIgnUpSuccess />,
      },
      {
        path: "/add-project",
        element: <AddProject />,
      },
    ],
  },
]);
