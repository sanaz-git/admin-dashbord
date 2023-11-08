import { RouterProvider } from "react-router-dom"
import router from "./router"
// import Login from "./features/identity/components/login"
// import Register from "./features/identity/components/register"
import './core/i18n'




function App() {


  return (
 <RouterProvider router={router}></RouterProvider>
  )
}

export default App
