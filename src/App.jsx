import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/main.css";
import "./assets/css/main1.css";
import "./assets/css/main2.css";
import "./assets/css/main3.css";
import Main from "./Layouts/Main";
import Dashboard from "./Pages/Dashboard";
import Inbox from "./Pages/Inbox";
import Calendar from "./Pages/Calendar";
import Properties from "./Pages/Properties";
import Tasks from "./Pages/Tasks";
import AddTasks from "../src/Components/Tasks/AddTask";
import Checklist from "./Pages/Checklist";
import Inventory from "./Pages/Inventory";
import AddInventory from "../src/Components/Inventory/AddItems";
import EditInventory from "../src/Components/Inventory/EditItems";
import CoHosting from "./Pages/CoHosting";
import SmartDevices from "./Pages/SmartDevices";
import Automations from "./Pages/Automations";
import Integrations from "./Pages/Integrations";
import DirectBooking from "./Pages/DirectBooking";
import Reports from "./Pages/Reports";
import Users from "./Pages/Users";
import HelpCenter from "./Pages/HelpCenter";
import Settings from "./Pages/Settings";
import ReplenishItems from "./Components/Inventory/ReplenishItems";
import GettingStart from "./Components/StepperForm/GettingStart";
import LabelStepper from "./Components/StepperForm/LabelStepper";
import CohostingDetails from "./Pages/CohostingDetails";
import UserDetails from "./Pages/UserDetails";
import AddAutomation from "./Components/Automations/AddAutomation";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Notifications from "./Pages/Notifications";
import AddNewOwner from "./Components/CoHosting/AddNewOwner";
import AddNewInvoice from "./Components/CoHosting/AddNewInvoice";
function App() {
  return (
   <div>
     <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="admin/dashboard" element={<Dashboard />} />
          <Route path="admin/inbox" element={<Inbox />} />
          <Route path="admin/calendar" element={<Calendar />} />
          <Route path="admin/properties" element={<Properties />} />
          <Route path="admin/tasks" element={<Tasks />} />
          <Route path="admin/add-tasks" element={<AddTasks />} />
          <Route path="admin/checklist" element={<Checklist />} />
          <Route path="admin/inventory" element={<Inventory />} />
          <Route path="admin/add-inventory" element={<AddInventory />} />
          <Route path="admin/edit-inventory" element={<EditInventory />} />
          <Route path="admin/replenish-items" element={<ReplenishItems />} />
          <Route path="admin/co-hosting" element={<CoHosting />} />
          <Route path="admin/co-hosting-details" element={<CohostingDetails />} />
          <Route path="admin/smart-devices" element={<SmartDevices />} />
          <Route path="admin/automations" element={<Automations />} />
          <Route path="admin/integrations" element={<Integrations />} />
          <Route path="admin/direct-booking" element={<DirectBooking />} />
          <Route path="admin/reports" element={<Reports />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/user-details" element={<UserDetails />} />
          <Route path="admin/help-center" element={<HelpCenter />} />
          <Route path="admin/settings" element={<Settings />} />
          <Route path="admin/addAutomation" element={<AddAutomation />} />
          <Route path="admin/profile" element={<Profile />} />
          <Route path="admin/Notifications" element={<Notifications />} />
          <Route path="admin/add-owner" element={<AddNewOwner />} />
          <Route path="admin/add-invoice" element={<AddNewInvoice />} />
        </Route>
          <Route path="admin/stepper" element={<GettingStart />} />
          <Route path="admin/labelStepper" element={<LabelStepper />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
