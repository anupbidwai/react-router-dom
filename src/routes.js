import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import AppLayout from "./App";
import Home from "@/pages/home";
import Login from "@/pages/login";
import PageNotFound from "@/pages/404";
import { RequireAuth } from "@/utility/auth";
// products
import ProductsLayout from "@/pages/products/layout";
import Featured from "@/pages/products/featured";
import NewArrival from "@/pages/products/new-arrival";
import ProductDetails from "@/pages/products/product-details";
// profile
import Profile from "@/pages/profile";
// albums
import AlbumLayout, { albumsLoader } from "@/pages/album/layout";
import AlbumDetails, { albumDetailsLoader } from "@/pages/album/album-details";
import ErrorBoundry from "@/components/error-boundry";
// contact
import ContactLayout, { contactAction } from "@/pages/contact/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<ProductsLayout />}>
        <Route index element={<NewArrival />} />
        <Route path="new" element={<NewArrival />} />
        <Route path="featured" element={<Featured />} />
      </Route>
      {/* dynamic route */}
      <Route path="products/:prodId" element={<ProductDetails />} />
      <Route
        path="profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      {/* route with loader */}
      <Route
        path="albums"
        element={<AlbumLayout />}
        loader={albumsLoader}
        errorElement={<ErrorBoundry />}
      />
      <Route
        path="albums/:albumId"
        element={<AlbumDetails />}
        loader={albumDetailsLoader}
        errorElement={<ErrorBoundry />}
      />
      <Route
        path="contact"
        element={<ContactLayout />}
        action={contactAction}
      />
      <Route path="login" element={<Login />} />
      {/* custom 404 page */}
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
