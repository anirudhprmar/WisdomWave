import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Heart, User, Settings, Bookmark } from 'lucide-react';

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Discover', path: '/discover' },
    { icon: BookOpen, label: 'My Quotes', path: '/my-quotes' },
    { icon: Bookmark, label: 'Saved', path: '/saved' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-base-200 border-r border-base-300">

      {/* Navigation Section */}
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
                    ${isActive 
                      ? 'bg-primary text-primary-content' 
                      : 'hover:bg-base-300'
                    }`}
                >
                  <Icon className="size-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Settings Section (Bottom) */}
      <div className="absolute bottom-0 w-full p-4 border-t border-base-300">
        <Link 
          to="/settings" 
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-base-300 transition-colors"
        >
          <Settings className="size-5" />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;