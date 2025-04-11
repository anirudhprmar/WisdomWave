import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { User, MessageSquare, Search, Plus , LogOutIcon, Moon, Sun , Leaf} from "lucide-react";
import { useThemeStore } from "../../store/useThemeStore";
// import { useState } from "react";
import Button from '../../components/ui/Button'

function Navbar() {
  const { authUser, logout } = useAuthStore();
  const {theme,setTheme} = useThemeStore();
  

  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left - Logo/Brand */}
          <div className="flex items-center gap-2">
            <Link to="/discover" className="flex items-center gap-2 font-bold text-xl">
              <Leaf className="size-6 text-primary" />
              <span>WisdomWave</span>
            </Link>
          </div>

          {/* Middle - Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="size-5 text-base-content/60" />
              </div>
              <input
                type="search"
                placeholder="Search quotes..."
                className="input input-bordered w-full pl-10"
              />
            </div>
          </div>

          {/* Right - Actions */}
          <div className="flex items-center gap-4">

            <Button
            onClick={()=> setTheme(theme === 'dark' ? 'light': 'dark')}
            variant="ghost"
            size="sm"
            className={'btn btn-circle'}
            >
              { 
                theme === 'dark' ? (
                  <Sun className="size-5"/>
                ) : (
                  <Moon className="size-5" />
                )
              }
            </Button>
            
            

            {/* Upload Button */}
            <Link 
              to="/upload" 
              className="btn btn-primary btn-sm"
            >
              <Plus className="size-5" />
              <span className="hidden sm:inline">Upload</span>
            </Link>

            {/* Messages */}
            <Link 
              to="/messages" 
              className="btn btn-ghost btn-circle btn-sm"
            >
              <MessageSquare className="size-5" />
            </Link>

            {/* Profile Menu */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-8 rounded-full">
                  <img
                    src={authUser?.profilePic || <User className="size-4" />}
                    alt="profile"
                    className="rounded-full"
                  />
                </div>
              </label>
              { authUser && (
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/profile">
                    <User className="size-4" />
                    Profile
                  </Link>
                </li>
                <li>
                  <button onClick={logout} className="text-error">
                    <LogOutIcon className="size-4" />
                    Logout
                  </button>
                </li>
              </ul>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;