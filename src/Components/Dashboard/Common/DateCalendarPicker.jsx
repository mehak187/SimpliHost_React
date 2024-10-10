import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import { FaCalendarAlt } from "react-icons/fa";

const DateCalendarPicker = () => {
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);

    return (
        <div className='d-flex align-items-center border p-2 rounded-3'>
            <div>
                <FaCalendarAlt className='bg-lblue text-blue p-2 rounded-3 fs-3'/>
            </div>
            <div>
                <Flatpickr className='border-0 ms-2'
                    value={dateRange}
                    onChange={(date) => setDateRange(date)}
                    options={{
                        mode: 'range',
                        minDate: 'today',
                        dateFormat: 'Y-m-d',
                        disable: [
                            function (date) {
                                // Disable every multiple of 8
                                return !(date.getDate() % 8);
                            }
                        ]
                    }}
                />
            </div>
        </div>
    );
};

export default DateCalendarPicker;
