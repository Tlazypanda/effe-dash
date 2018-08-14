import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import TableList from "views/TableList/TableList";
import Typography from "views/Typography/Typography";
import Icons from "views/Icons/Icons";
import Notifications from "views/Notifications/Notifications";
import Upgrade from "views/Upgrade/Upgrade";
import BrowserSupport, { detectBrowser } from 'react-browser-support'

const minBrowserVersions = {
    chrome: '4.10',
    edge: '6',
    firefox: '19.5',
    ie: '10',
    opera: '10.0',
    safari: '10.2',
}

const dashboardRoutes = [
  {
    path: "/events",
    name: "Events",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  // {
  //   path: "http://ca.effe.org.in/account/",
  //   name: "Account",
  //   icon: "pe-7s-user",
  //   component: UserProfile
  // },
  /*{
    path: "/leaderboard",
    name: "Leaderboard",
    icon: "pe-7s-note2",
    component: TableList
  },*/


  { redirect: true, path: "/", to: "/events", name: "Dashboard" }
];

export default dashboardRoutes;
