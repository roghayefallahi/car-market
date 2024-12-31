import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout({ children }) {
  return (
    <>
      <header className="flex flex-col items-center px-2 sm:px-0 py-5 w-fit  my-2 mt-5 mx-auto rounded-md">
        <Link href="/">
          <h2 className="w-fit text-[2.5rem] font-bold">ROFACAR</h2>
          <p className="border-t-[1px] border-t-solid border-t-black text-center">
            Choose and Buy your car
          </p>
        </Link>
      </header>
      <div className="min-h-[1000px] container mx-auto">{children}</div>
      <footer className="text-center bg-black text-white  py-4">
        <p className="max-sm:text-[15px]">Developed by Roghayeh with ❤️</p>
      </footer>
      <ToastContainer />
    </>
  );
}

export default Layout;
