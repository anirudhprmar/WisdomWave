import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Heart, User, Settings, Bookmark, Plus } from 'lucide-react';

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Discover', path: '/discover' },
    { icon: BookOpen, label: 'My Quotes', path: '/my-quotes' },
    {icon: Plus,label:"Upload", path:'/upload'},
    { icon: Bookmark, label: 'Saved', path: '/saved' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="  fixed sm:top-16 bottom-0 left-0 h-14 sm:h-[calc(100%-4rem)] bg-base-200 sm:border-r sm:border-base-300 w-full sm:w-64 flex  flex-row justify-center sm:justify-start  items-center z-10">

      {/* Navigation Section */}
      <nav className="p-4">
        <ul className="space-y-2 flex flex-row sm:flex-col sm:gap-5 gap-3 ">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={` flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
                    ${isActive 
                      ? 'bg-primary text-primary-content' 
                      : 'hover:bg-base-300'
                    }`}
                >
                  <Icon className="size-5 sm:size-5" />
                  <span className=' text-xl hidden sm:block'>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Settings Section (Bottom) */}
      <div className="absolute right-0 sm:bottom-0 sm:w-full sm:p-4 sm:border-t sm:border-base-300">
        <Link 
          to="/settings" 
          className="sm:flex sm:items-center sm:gap-3 sm:px-4 sm:py-2 sm:rounded-lg sm:hover:bg-base-300 sm:transition-colors hidden "
        >
          <Settings className="size-5 sm:size-5" />
          <span className=' text-xl'>Settings</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;