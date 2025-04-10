import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar';
// import Sidebar from '../ui/Sidebar';

export default function AppLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar/Navigation */}
      {/* <Sidebar /> */}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <Navbar/>
        
        {/* Main Content Area - Renders child routes */}
        <main className="flex-1 overflow-y-auto p-4 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}