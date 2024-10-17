import React, { useState } from 'react';
import { FaCaretRight, FaCaretDown } from 'react-icons/fa';
import UnifiedInboxTab from '../../Components/Website/FaqTab/UnifiedInboxTab';

function Faq() {
    const [activeTab, setActiveTab] = useState('v-pills-home');

    const tabs = [
        { id: 'v-pills-home', label: 'Unified Inbox', content: <UnifiedInboxTab /> },
        { id: 'v-pills-profile', label: 'Smart Device Interaction', content: 'Smart Device Interaction content here' },
        { id: 'v-pills-task', label: 'Task and Checklists', content: 'Task and Checklists content here' },
        { id: 'v-pills-inventory', label: 'Inventory Management', content: 'Inventory Management content here' },
        { id: 'v-pills-maintenance', label: 'Maintenance Tracking', content: 'Maintenance Tracking content here' },
        { id: 'v-pills-cohosting', label: 'Co-Hosting', content: 'Co-Hosting content here' },
        { id: 'v-pills-automation', label: 'Automations', content: 'Automations content here' },
        { id: 'v-pills-booking', label: 'Direct Booking', content: 'Direct Booking content here' }
    ];

    return (
        <div className='container py-5'>
            <h5 className='fw-semi'>About Simplihost</h5>
            <div className="d-flex align-items-start vertical-tab">
                <div className="nav flex-column nav-pills me-3 bg-nav p-2 rounded-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
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
                <div className="tab-content" id="v-pills-tabContent">
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
