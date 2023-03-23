import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import MainContainer from "./components/MainTitle/MainContainer";
import { DataContextProvider } from "./Store/DataProvider";
import { Fragment, useContext, useEffect } from "react";
import AuthContext from "./Store/Auth-Context";
import { Route, Routes } from "react-router";
import GameDetails from "./Pages/GameDetails/GameDetails";
import Notification from "./components/UI/Notification";
import Genre from "./Pages/collection pages/Genre";
import Games from "./Pages/AllGames/Games";
import Cart from "./components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData, sendCartData } from "./Store/Redux/store/cart-actions";
import { LoadingProvider } from "./Store/Loading-Context";
import { uiActions } from "./Store/Redux/store/ui-slice";
import LoginPage from "./SignIn/LoginPage";
let isInitial = true;
function App() {
  const ctx = useContext(AuthContext);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.Notification);
  const NotificationIsVisible = useSelector(
    (state) => state.ui.NotificationIsVisible
  );
  console.log(NotificationIsVisible);
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
    setTimeout(() => {
      dispatch(uiActions.NotificationIsVisible());
    }, 5000);
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
              <div>{ctx.isLoggedIn ? <Navbar /> : null}</div>
              {showCart && <Cart />}
              <Routes>
                <Route path="auth" element={<LoginPage />} />
                <Route path="/" element={<MainContainer />} />
                <Route path="/game/:gameId" element={<GameDetails />} />
                <Route path="/games" element={<Games />} />
                <Route path="/games/:genre" element={<Genre />} />
              </Routes>
            </Fragment>
          </LoadingProvider>
        </DataContextProvider>
      </div>
    </div>
  );
}

export default App;
