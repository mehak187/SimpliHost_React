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
import EditPropertyTabs from "./Components/Properties/EditPropertyTabs";
import AddNewOwner from "./Components/CoHosting/AddNewOwner";
import AddNewInvoice from "./Components/CoHosting/AddNewInvoice";
import AddNewExpenses from "./Components/CoHosting/AddNewExpenses";
import AddOperationsCodes from "./Components/SmartDevices/AddOperationsCodes";
import AddSmartDevice from "./Components/SmartDevices/AddSmartDevice";
import AddCannedText from "./Components/Automations/AddCannedText";
import AddSpecialIndicators from "./Components/Automations/AddSpecialIndicators";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AddChecklistCategory from "./Components/Settings/AddChecklistCategory";
import AddPropertyTags from "./Components/Settings/AddPropertyTags";
import ChecklistTabs from "./Components/ChecklistArrival/ChecklistTabs";
import WebLayout from "./Layouts/WebLayout";
import Home from "./Pages/Website/Home";
import Listings from "./Pages/Website/Listings";
import Feature from "./Pages/Website/Feature";
import TaskandChecklist from "./Pages/Website/TaskandChecklist";
import InventoryManagement from "./Pages/Website/InventoryManagement";
import MaintenanceTracking from "./Pages/Website/MaintenanceTracking";
import CoHostingPage from "./Pages/Website/CoHosting";
import TaskswithAutomation from "./Pages/Website/TaskswithAutomation";
import BookDirect from "./Pages/Website/BookDirect";
import UnifiedInbox from "./Pages/Website/UnifiedInbox";
import Smartdevices from "./Pages/Website/SmartDevices";
import Pricing from "./Pages/Website/Pricing";
import ContactUs from "./Pages/Website/ContactUs";
import ListingDetails from "./Pages/Website/ListingDetails";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Faq from "./Pages/Website/Faq";
import ListingFiltered from "./Pages/Website/ListingFiltered";
import ListingPhotos from "./Pages/Website/ListingPhotos";
import AddFee from "./Components/CoHosting/AddFee";
import AddPromoCode from "./Components/DirectBooking/AddPromoCode";
import AddPolicy from "./Components/DirectBooking/AddPolicy";
import SelectPropertiesModal from "./Components/Modals/SelectPropertiesModal";
import CleaningTask from "./Components/Modals/CleaningTask";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  return (
   <div>
     <BrowserRouter>
     <ScrollToTop />
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
          <Route path="admin/editProperty" element={<EditPropertyTabs />} />
          <Route path="admin/add-owner" element={<AddNewOwner />} />
          <Route path="admin/add-invoice" element={<AddNewInvoice />} />
          <Route path="admin/add-expenses" element={<AddNewExpenses />} />   
          <Route path="admin/add-fee" element={<AddFee />} />
          <Route path="admin/add-smart-device" element={<AddSmartDevice />} />
          <Route path="admin/add-operations-codes" element={<AddOperationsCodes />} />
          <Route path="admin/add-canned-text" element={<AddCannedText />} />
          <Route path="admin/add-special-indicators" element={<AddSpecialIndicators />} />
          <Route path="admin/add-checklist-category" element={<AddChecklistCategory />} />
          <Route path="admin/add-property-tags" element={<AddPropertyTags />} />
          <Route path="admin/checklist-tab" element={<ChecklistTabs />} />
          <Route path="admin/add-promo" element={<AddPromoCode />} />
          <Route path="admin/add-policy" element={<AddPolicy />} />
        </Route>
        <Route element={<WebLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/feature" element={<Feature />} />
         <Route path="/task-and-checklist" element={<TaskandChecklist />} />
          <Route path="/inventory-management" element={<InventoryManagement />} />
          <Route path="/maintenance-tracking" element={<MaintenanceTracking />} />
          <Route path="/cohosting" element={<CoHostingPage />} />
          <Route path="/automation" element={<TaskswithAutomation />} />
          <Route path="/direct-booking" element={<BookDirect />} />
          <Route path="/unified-inbox" element={<UnifiedInbox />} />
          <Route path="/smart-devices" element={<Smartdevices />} />
          <Route path="/simple-price" element={<Pricing />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/listing-details" element={<ListingDetails />} />
          <Route path="/listing-photos" element={<ListingPhotos />} />
          <Route path="/listing-filtered" element={<ListingFiltered />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
          <Route path="admin/stepper" element={<GettingStart />} />
          <Route path="admin/labelStepper" element={<LabelStepper />} />
          <Route path="/login" element={<Login />} />
          <Route path="/connect" element={<SelectPropertiesModal />} />
          <Route path="/clean-task" element={<CleaningTask />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
