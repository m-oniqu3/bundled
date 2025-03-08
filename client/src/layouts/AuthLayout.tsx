import Logo from "@/components/Logo";
import { Link, Outlet, useLocation } from "react-router";

function AuthLayout() {
  const { pathname } = useLocation();

  const isLoginPage = pathname === "/login";

  return (
    <div>
      <header className=" h-16 flex justify-center">
        <nav className="wrapper flex items-center ">
          <Logo className="size-6 text-zinc-500" />
        </nav>
      </header>

      <div className=" h-[calc(100vh-4rem)] wrapper flex flex-col justify-center max-w-[20rem] mx-auto">
        <header className="mb-4">
          <h2 className="font-semibold text-xl capitalize">
            Think it. make it.
          </h2>
          <h2 className="font-semibold text-xl capitalize text-zinc-400">
            {isLoginPage ? "Log in" : "Create"} your bundled account.
          </h2>

          <p className="text-xs mt-1 ">
            {isLoginPage ? "New to Bundled?" : "Already have an account?"}
            &nbsp;
            <Link
              to={isLoginPage ? "/register" : "/login"}
              className="text-zinc-600 underline underline-offset-1"
            >
              {isLoginPage ? "Create an account" : "Log in"}
            </Link>
          </p>
        </header>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
