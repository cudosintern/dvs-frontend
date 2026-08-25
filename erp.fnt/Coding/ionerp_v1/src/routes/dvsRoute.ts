import Home from "../pages/ems/home";
import DepartmentPage from "../pages/ems/configuration/departmentDetail/departmentPage";
import { Outlet } from "react-router-dom";
import ChangePasswordPage from "../pages/changepassword";
import EvaluatorPage from "../pages/dvs/userManagement/evaluator/evaluatorPage";
import EvaluatorEditPage from "../pages/dvs/userManagement/evaluator/evaluatorEditPage";

export const DVSROUTE = [
  {
    name: "Home",
    href: "/",
    element: Home,
    roles: [],
    subItems: [],
  },
  {
    name: "Change Password",
    href: "/change_password",
    element: ChangePasswordPage,
    roles: [],
    subItems: [],
  },
  {
    name: "Master",
    href: "",
    element: Outlet,
    roles: [],
    subItems: [
      {
        name: "Department",
        href: "Department",
        roles: [],
        element: DepartmentPage,
        subItems: [],
      },
    ],
  },
  {
    name: "DVS",
    href: "",
    element: Outlet,
    roles: [],
    subItems: [
      {
        name: "User Management",
        href: "user_management",
        element: Outlet,
        roles: [],
        subItems: [
          {
            name: "Evaluator",
            href: "/user_management/evaluator",
            element: Outlet,
            roles: [],
            subItems: [
              {
                name: "",
                href: "",
                element: EvaluatorPage,
                roles: [],
                subItems: [],
              },
              {
                name: "Edit Evaluator",
                href: "edit",
                element: EvaluatorEditPage,
                roles: [],
                hidden: true,
                subItems: [],
              },
              {
                name: "Edit Evaluator",
                href: "edit/:id",
                element: EvaluatorEditPage,
                roles: [],
                hidden: true,
                subItems: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default DVSROUTE;
