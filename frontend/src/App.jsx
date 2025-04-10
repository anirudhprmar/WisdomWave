import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import AuthLayout from './components/layout/AuthLayout';
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Discover from './pages/home/Discover';
import Feed from './pages/home/Feed';
import Saved from './pages/home/Saved';
import UserProfile from './pages/profile/UserProfile';
import NotFound from './pages/NotFound';
import UploadQuote from './pages/home/UploadQuote';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import { useThemeStore } from './store/useThemeStore';


function App() {

const {theme} = useThemeStore()

  return (
      <div data-theme={theme}>
        <Routes>

           {/* Public routes */}
          <Route path='/' element={<Landing/>}/>

           {/* Auth routes */}
          <Route element={<AuthLayout />}>
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
          </Route>
        
          
          {/* Protected routes */}
          <Route element={<ProtectedRoute />} >
              <Route element={<AppLayout/>} >
                  <Route path='/discover' element={<Discover/>} />
                  <Route path='/upload' element={<UploadQuote/>} />
                  <Route path='/my-feed' element={<Feed />} />
                  <Route path='/saved' element={<Saved/>} />
                  <Route path='/profile' element={<UserProfile/>} />
              </Route>
          </Route>

          {/* Catch-all route */}
          <Route path='*' element={<NotFound/>} />         

        </Routes>

        <Toaster/>
      </div>
  );
}

export default App;



