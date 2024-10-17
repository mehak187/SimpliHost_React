import React, { useState } from 'react';
import { FaCaretRight, FaCaretDown } from 'react-icons/fa';
import UnifiedInboxTab from '../../Components/Website/FaqTab/UnifiedInboxTab';
import SmartDeviceInteraction from '../../Components/Website/FaqTab/SmartDeviceInteraction';
import TaskChecklist from '../../Components/Website/FaqTab/TaskChecklist';
import InventoryManagement from '../../Components/Website/FaqTab/InventoryManagement';
import MaintenanceTracking from '../../Components/Website/FaqTab/MaintenanceTracking';
import CoHostingFaq from '../../Components/Website/FaqTab/CoHostingFaq';
import AutomationFaq from '../../Components/Website/FaqTab/AutomationFaq';
import DirectBookingFaq from '../../Components/Website/FaqTab/DirectBookingFaq';

function Faq() {
    const [activeTab, setActiveTab] = useState('v-pills-home');

    const tabs = [
        { id: 'v-pills-home', label: 'Unified Inbox', content: <UnifiedInboxTab /> },
        { id: 'v-pills-profile', label: 'Smart Device Interaction', content: <SmartDeviceInteraction/> },
        { id: 'v-pills-task', label: 'Task and Checklists', content: <TaskChecklist/> },
        { id: 'v-pills-inventory', label: 'Inventory Management', content: <InventoryManagement/> },
        { id: 'v-pills-maintenance', label: 'Maintenance Tracking', content: <MaintenanceTracking/> },
        { id: 'v-pills-cohosting', label: 'Co-Hosting', content: <CoHostingFaq/> },
        { id: 'v-pills-automation', label: 'Automations', content: <AutomationFaq/> },
        { id: 'v-pills-booking', label: 'Direct Booking', content: <DirectBookingFaq/> }
    ];

    return (
        <div className='container py-5'>
            <h5 className='fw-semi ms-sm-3'>About Simplihost</h5>
            <div className="d-flex flex-md-row flex-column align-items-start vertical-tab">
                <div className="nav flex-md-column nav-pills me-md-2 mx-md-0 mx-sm-3 bg-nav p-2 rounded-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`nav-link d-flex justify-content-between align-items-center ${activeTab === tab.id ? 'active' : ''}`}
                            id={`${tab.id}-tab`}
                            data-bs-toggle="pill"
                            data-bs-target={`#${tab.id}`}
                            type="button"
                            role="tab"
                            aria-controls={tab.id}
                            aria-selected={activeTab === tab.id}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                            {activeTab === tab.id ? <FaCaretRight className='fs-3' /> : <FaCaretDown className='fs-3' />}
                        </button>
                    ))}
                </div>
                <div className="tab-content p-0 w-100 mt-md-0 mt-3" id="v-pills-tabContent">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
                            id={tab.id}
                            role="tabpanel"
                            aria-labelledby={`${tab.id}-tab`}
                            tabIndex="0"
                        >
                            {tab.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Faq;
