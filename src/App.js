import { navActiveState } from "@/utility/nav";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "@/utility/auth";
function AppLayout() {
  const auth = useAuth();
  const handleLogout = () => auth.logout(null);
  return (
    <>
      <header>
        <nav className="primary-nav">
          <NavLink style={navActiveState} to="/">
            Home
          </NavLink>
          <NavLink style={navActiveState} to="/products">
            Products
          </NavLink>
          <NavLink style={navActiveState} to="/profile">
            Profile
          </NavLink>
          <NavLink style={navActiveState} to="/albums">
            Albums
          </NavLink>
          <NavLink style={navActiveState} to="/contact">
            Contact
          </NavLink>
          {auth.token ? (
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <NavLink style={navActiveState} to="/login">
              Login
            </NavLink>
          )}
        </nav>
      </header>
      <main>
        {/* render nested or child routes */}
        <Outlet />
      </main>
    </>
  );
}
export default AppLayout;
