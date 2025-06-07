import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="text-secondary text-sm md:text-base p-4 flex flex-row items-center justify-between shadow-lg relative z-10">
        <nav className="flex w-full justify-end items-center mr-4 md:mr-10">
          <ul className="flex space-x-8 font-body">
            <Link to="/">
              <li className="hover:text-primary transition-all duration-300 hover:scale-110">
                Home
              </li>
            </Link>
            <Link to="about">
              <li className="hover:text-primary transition-all duration-300 hover:scale-110">
                About
              </li>
            </Link>
          </ul>
        </nav>
      </header>
      {/* Dark overlay behind everything */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <main className="flex-grow p-4 relative z-10">
        <Outlet />
      </main>

      <footer className="bg-black/70 text-white p-4 text-center relative z-10 mt-10">
        <div className="text-sm">&copy; 2025 Emma Caroline Brander</div>
      </footer>
    </div>
  );
};

export default Layout;
