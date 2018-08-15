import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import TableList from "views/TableList/TableList";
import Typography from "views/Typography/Typography";
import Icons from "views/Icons/Icons";
import Notifications from "views/Notifications/Notifications";
import Upgrade from "views/Upgrade/Upgrade";


const dashboardRoutes = [
  {
    path: "/events",
    name: "Events",
    icon: "fa fa-calendar",
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
