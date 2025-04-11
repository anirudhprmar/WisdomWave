import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar';
import Sidebar from '../ui/Sidebar';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Fixed Navbar */}
      <Navbar />

      <div className="flex pt-16"> {/* Add padding-top to account for fixed navbar */}
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 ml-64"> {/* Add margin-left to account for sidebar width */}
          <main className="container mx-auto p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}