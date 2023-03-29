import "./App.css";
import MainContainer from "./components/MainTitle/MainContainer";
import { DataContextProvider } from "./Store/DataProvider";
import { Fragment, useEffect } from "react";
import { RouterProvider } from "react-router";
import GameDetails from "./Pages/GameDetails/GameDetails";
import Notification from "./components/UI/Notification";
import Genre from "./Pages/collection pages/Genre";
import Games from "./Pages/AllGames/Games";
import Cart from "./components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData, sendCartData } from "./Store/Redux/store/cart-actions";
import { LoadingProvider } from "./Store/Loading-Context";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import Authentication, { action as authAction } from "./SignIn/Authentication";
import { action as logoutAction } from "./Pages/Logout";
import { chechAuthLoader, tokenLoader } from "./components/util/auth";
let isInitial = true;
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      id: "root",
      loader: tokenLoader,
      children: [
        {
          path: "auth",
          element: <Authentication />,
          action: authAction,
        },
        {
          index: true,
          element: <MainContainer />,
          loader: chechAuthLoader,
        },
        { path: "/games", element: <Games />, loader: chechAuthLoader },
        { path: "/games/:genre", element: <Genre />, loader: chechAuthLoader },
        {
          path: "game/:gameId",
          element: <GameDetails />,
          loader: chechAuthLoader,
        },
        { path: "logout", action: logoutAction },
      ],
    },
  ]);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  //cart updates notification state
  const notification = useSelector((state) => state.ui.Notification);
  const NotificationIsVisible = useSelector(
    (state) => state.ui.NotificationIsVisible
  );

  //a side effect working seperately to just fetch cart data
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  /*a side effect that handles dispatching redux(sendcartdata) function if we add an item
  not everytime the component has been mounted even if no items has been added
  so here isInitial is what handles this process
  */
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <div className="App">
      <div>
        <DataContextProvider>
          <LoadingProvider>
            <Fragment>
              {notification && NotificationIsVisible && (
                <Notification
                  status={notification.status}
                  title={notification.title}
                  message={notification.message}
                />
              )}

              {showCart && <Cart />}
              <RouterProvider router={router} />
            </Fragment>
          </LoadingProvider>
        </DataContextProvider>
      </div>
    </div>
  );
}

export default App;
