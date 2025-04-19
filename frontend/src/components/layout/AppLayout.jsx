import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar';
import Sidebar from '../ui/Sidebar';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Fixed Navbar */}
      <Navbar className="fixed top-0 w-full z-50" />

      
      <div > {/* Added h-screen */}
        {/* Fixed Sidebar */}
        <div className='sm:fixed left-0' >
          <Sidebar />
        </div>

        {/* Main Content Area */}
        {/* <div>  */}
          <main className=" p-5 flex-1 sm:ml-64"> {/* Subtract navbar height */}
            <Outlet />
          </main>
        {/* </div> */}
      </div>
    </div>
  );
}