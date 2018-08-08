import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import TableList from "views/TableList/TableList";
import Typography from "views/Typography/Typography";
import Icons from "views/Icons/Icons";
import Notifications from "views/Notifications/Notifications";
import Upgrade from "views/Upgrade/Upgrade";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  /*{
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
    icon: "pe-7s-note2",
    component: TableList
  },*/


  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
