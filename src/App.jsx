import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchUsersRequest } from "./store/user-slice";
import { useDispatch } from "react-redux";
import RootLayout from "./pages/Root";
import ProfilePage from "./pages/Profile";
import FriendsPage from "./pages/Friends";
import ErrorPage from "./pages/Error";
import FriendsDetailPage from "./pages/FriendsDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ProfilePage /> },
      { path: "/friends", element: <FriendsPage /> },
      {
        path: "/friends/:id",
        element: <FriendsDetailPage />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
