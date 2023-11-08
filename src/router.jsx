import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/login";
import Register, {
  registerAction,
} from "./features/identity/components/register";
import IdentityLyout from "./layouts/identity-layout";

const router = createBrowserRouter([
  {
    element: <IdentityLyout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />,
      },
    ],
  },
]);

export default router;
