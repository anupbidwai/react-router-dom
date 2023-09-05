import { navActiveState } from "@/utility/nav";
import { NavLink, Outlet } from "react-router-dom";

function ProductsLayout() {
  return (
    <>
      <h1>Products</h1>
      <nav>
        <NavLink style={navActiveState} to="/products/new">
          New arrival
        </NavLink>
        <NavLink style={navActiveState} to="/products/featured">
          Featured
        </NavLink>
      </nav>
      <main>
        {/* render nested or child routes */}
        <Outlet />
      </main>
    </>
  );
}

export default ProductsLayout;
