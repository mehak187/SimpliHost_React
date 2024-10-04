import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/main.css";
import "./assets/css/main1.css";
import Main from "./Layouts/Main";
import Dashboard from "./Pages/Dashboard";
import Inbox from "./Pages/Inbox";
import Calendar from "./Pages/Calendar";
import Properties from "./Pages/Properties";
import Tasks from "./Pages/Tasks";
import Checklist from "./Pages/Checklist";
import Inventory from "./Pages/Inventory";
import CoHosting from "./Pages/CoHosting";
import SmartDevices from "./Pages/SmartDevices";
import Automations from "./Pages/Automations";
import Integrations from "./Pages/Integrations";
import DirectBooking from "./Pages/DirectBooking";
import Reports from "./Pages/Reports";
import Users from "./Pages/Users";
import HelpCenter from "./Pages/HelpCenter";
import Settings from "./Pages/Settings";

function App() {
  return (
   <div>
     <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/co-hosting" element={<CoHosting />} />
          <Route path="/smart-devices" element={<SmartDevices />} />
          <Route path="/automations" element={<Automations />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/direct-booking" element={<DirectBooking />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/users" element={<Users />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
