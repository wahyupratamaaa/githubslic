import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
