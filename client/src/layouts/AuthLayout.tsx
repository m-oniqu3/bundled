import Logo from "@/components/Logo";
import { Outlet, useLocation } from "react-router";

function AuthLayout() {
  const { pathname } = useLocation();

  const isLoginPage = pathname === "/login";

  return (
    <div>
      <header className=" h-16 flex justify-center">
        <nav className="wrapper flex items-center ">
          <Logo />
        </nav>
      </header>

      <div className=" h-[calc(100vh-4rem)] wrapper">
        <header>
          <h2 className="font-bold text-xl capitalize">Think it. make it.</h2>
          <h2 className="font-bold text-xl capitalize text-zinc-400">
            {isLoginPage ? "Log in" : "Create"} your bundled account.
          </h2>
        </header>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
