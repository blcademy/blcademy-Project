

import Contact from "./Contact";
import Create from "./Create";
import Dashboard from "./Dashboard";
import Explore01 from "./Explore01";
import Faqs from "./Faqs";
import HelpCenter from "./HelpCenter";
import Home01 from "./Home01";
import Login from "./Login";

import SignUp from "./SignUp";
import Wallet from "./Wallet";



const routes = [
  { path: '/', component: <Home01 />},
  { path: '/explore-v1', component: <Explore01 />},

  { path: '/dashboard', component: <Dashboard />},
  { path: '/help-center', component: <HelpCenter />},
  { path: '/faqs', component: <Faqs />},
  { path: '/wallet', component: <Wallet />},
  { path: '/login', component: <Login />},
  { path: '/signup', component: <SignUp />},
  { path: '/create', component: <Create />},
  { path: '/contact', component: <Contact />},



]

export default routes;