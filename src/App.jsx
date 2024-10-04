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
          <Route path="/dashboard" element={<Inbox />} />
          <Route path="/dashboard" element={<Calendar />} />
          <Route path="/dashboard" element={<Properties />} />
          <Route path="/dashboard" element={<Tasks />} />
          <Route path="/dashboard" element={<Checklist />} />
          <Route path="/dashboard" element={<Inventory />} />
          <Route path="/dashboard" element={<CoHosting />} />
          <Route path="/dashboard" element={<SmartDevices />} />
          <Route path="/dashboard" element={<Automations />} />
          <Route path="/dashboard" element={<Integrations />} />
          <Route path="/dashboard" element={<DirectBooking />} />
          <Route path="/dashboard" element={<Reports />} />
          <Route path="/dashboard" element={<Users />} />
          <Route path="/dashboard" element={<HelpCenter />} />
          <Route path="/dashboard" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
