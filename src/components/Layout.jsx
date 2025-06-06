import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="text-white p-4 flex flex-row items-center justify-between shadow-lg">
        <nav className="flex w-full justify-center sm:justify-end items-center sm:mr-10">
          <ul className="flex space-x-8">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="about">
              <li>About</li>
            </Link>
          </ul>
        </nav>
      </header>

      <main className="flex-grow p-4">
        <Outlet />
      </main>

      <footer className="bg-black/70 text-white p-4 text-center">
        <div className="text-sm">&copy; 2025 Emma Caroline Brander</div>
      </footer>
    </div>
  );
};

export default Layout;
