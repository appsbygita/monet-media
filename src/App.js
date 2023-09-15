import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./routes/home/home.component";
import { OurLogo } from "./routes/our-logo/our-logo.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/our-logo",
    element: <OurLogo />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
