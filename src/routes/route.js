import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HelpIcon from '@mui/icons-material/Help';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Dashboard from '../pages/Dashboard';

const routes = [
  {
    path: "/",
    element: <Dashboard />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
  },
  {
    path: "/product",
    element: <div>Product</div>,
    state: "product",
    sidebarProps: {
      displayText: "Product",
      icon: <Inventory2Icon />
    },
    child: [
        {
            path: "/dashboard/default",
            element: <></>,
            state: "dashboard.default",
            sidebarProps: {
              displayText: "Default"
            },
          },
    ]
  },
  {
    path: "/customers",
    element: <div>Customers</div>,
    state: "customers",
    sidebarProps: {
      displayText: "customers",
      icon: <SupportAgentIcon />
    }
  },
  {
    path: "/income",
    element: <div>Income</div>,
    state: "income",
    sidebarProps: {
      displayText: "Income",
      icon: <AttachMoneyIcon />
    }
  },
  {
    path: "/promote",
    element: <div>Promote</div>,
    state: "promote",
    sidebarProps: {
      displayText: "Promote",
      icon: <AcUnitIcon />
    }
  },
  {
    path: "/help",
    element: <div>Help</div>,
    state: "help",
    sidebarProps: {
      displayText: "Help",
      icon: <HelpIcon />
    }
  },
];

export default routes;