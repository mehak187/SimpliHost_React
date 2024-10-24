import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<FaChevronDown sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function AddWidget() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [searchBoxColor, setSearchBoxColor] = useState('#3551B6');
    const [primaryColor, setPrimaryColor] = useState('#3551B6');
    const [buttonColor, setButtonColor] = useState('#3551B6');
    const [headerColor, setHeaderColor] = useState('#3551B6');
    const [footerColor, setFooterColor] = useState('#3551B6');
    const [middleColor, setMiddleColor] = useState('#3551B6');

    return (
        <div>
            <div className='d-sm-flex align-items-center mb-4'>
                <div>
                    <button className='bg-blue w-100 text-white rounded-3 border-0 py-2 px-3 fw-semi'>
                        <FaChevronRight className='me-2 mb-1' /> Expand All
                    </button>
                </div>
                <div>
                    <button className='bg-lgrey w-100 text-blue fw-semi rounded-3 border py-2 px-3 ms-sm-2 mt-sm-0 mt-3'>
                        <FaChevronRight className='me-2 mb-1' /> Collapse All
                    </button>
                </div>
            </div>
            <form action="">
                <Accordion className='border-0 mb-3' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary className='bg-white shadow border-0 rounded-3' aria-controls="panel1d-content" id="panel1d-header">
                        <Typography className='fw-semibold'>Add New Booking Widget</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='border-0 bg-lgrey'>
                        <Typography>
                            <div>
                                <h5>Color Scheme</h5>
                                <p>Select a color scheme for your widget from our Simplihost site colors, or set a custom color scheme using any hex color code or writing in common HTML color names.
                                    You update at any time without having to update widget code.</p>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="row">
                                            <div className="col-12 col-md-12 col-sm-6 mb-2">
                                                <label htmlFor="" className='fw-semi'>Select Theme</label>
                                                <select name="" id="" className='inputstyle form-select py-2 bg-white'>
                                                    <option value="">Custom</option>
                                                    <option value="">Sunset Glow</option>
                                                    <option value="">Ocean Breeze</option>
                                                    <option value="">Misty Forest</option>
                                                    <option value="">Desert Oasis</option>
                                                    <option value="">Cosmic Twilight</option>
                                                    <option value="">Tropical Vibes</option>
                                                    <option value="">Golden Hour</option>
                                                    <option value="">Midnight Blue</option>
                                                    <option value="">Muted Earth</option>
                                                    <option value="">Vibrant Pop</option>
                                                    <option value="">Rustic Charm</option>
                                                    <option value="">Neon Dreams</option>
                                                    <option value="">Lunar Eclipse</option>
                                                    <option value="">Spring Blossom</option>
                                                    <option value="">Autumn Harvest</option>
                                                    <option value="">Pastel Palette</option>
                                                    <option value="">Urban Jungle</option>
                                                    <option value="">Candy Crush</option>
                                                    <option value="">Coral Reef</option>
                                                    <option value="">Frosted Morning</option>
                                                </select>
                                            </div>
                                            <div className="mb-2">
                                                <label htmlFor="" className='fw-semi'>Primary Color</label>
                                                <div className='d-flex align-items-center'>
                                                    <input type="color" className='col-in shadow rounded-3'
                                                        value={primaryColor}
                                                        onChange={(e) => setPrimaryColor(e.target.value)} />
                                                    <p className='bg-white border rounded-3 w-100 mb-0 p-1'>{primaryColor}</p>
                                                </div>
                                            </div>
                                            <div className="mb-2">
                                                <label htmlFor="" className='fw-semi'>Button Color</label>
                                                <div className='d-flex align-items-center'>
                                                    <input type="color" className='col-in shadow rounded-3'
                                                        value={buttonColor}
                                                        onChange={(e) => setButtonColor(e.target.value)} />
                                                    <p className='bg-white border rounded-3 w-100 mb-0 p-1'>{buttonColor}</p>
                                                </div>
                                            </div>
                                            <div className="mb-2">
                                                <label htmlFor="" className='fw-semi'>Header Color</label>
                                                <div className='d-flex align-items-center'>
                                                    <input type="color" className='col-in shadow rounded-3'
                                                        value={headerColor}
                                                        onChange={(e) => setHeaderColor(e.target.value)} />
                                                    <p className='bg-white border rounded-3 w-100 mb-0 p-1'>{headerColor}</p>
                                                </div>
                                            </div>
                                            <div className="mb-2">
                                                <label htmlFor="" className='fw-semi'>Footer Color</label>
                                                <div className='d-flex align-items-center'>
                                                    <input type="color" className='col-in shadow rounded-3'
                                                        value={footerColor}
                                                        onChange={(e) => setFooterColor(e.target.value)} />
                                                    <p className='bg-white border rounded-3 w-100 mb-0 p-1'>{footerColor}</p>
                                                </div>
                                            </div>
                                            <div className="mb-2">
                                                <label htmlFor="" className='fw-semi'>Middle Color</label>
                                                <div className='d-flex align-items-center'>
                                                    <input type="color" className='col-in shadow rounded-3'
                                                        value={middleColor}
                                                        onChange={(e) => setMiddleColor(e.target.value)} />
                                                    <p className='bg-white border rounded-3 w-100 mb-0 p-1'>{middleColor}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='border-0 mb-3' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary className='bg-white shadow border-0 rounded-3' aria-controls="panel2d-content" id="panel2d-header">
                        <Typography className='fw-semibold'>Search Box</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='border-0 bg-lgrey'>
                        <Typography>
                            <div className="row">
                                <div className="col-xxl-4 col-sm-9">
                                    <div className="mb-2">
                                        <label htmlFor="" className='fw-semi'>Search Box Background Color</label>
                                        <div className='d-flex align-items-center'>
                                            <input type="color" className='col-in shadow rounded-3'
                                                value={searchBoxColor}
                                                onChange={(e) => setSearchBoxColor(e.target.value)} />
                                            <p className='bg-white border rounded-3 w-100 mb-0 p-1'>{searchBoxColor}</p>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="" className='fw-semi'>Button Color</label>
                                        <div className='d-flex align-items-center'>
                                            <input type="color" className='col-in shadow rounded-3'
                                                value={buttonColor}
                                                onChange={(e) => setButtonColor(e.target.value)} />
                                            <p className='bg-white border rounded-3 w-100 mb-0 p-1'>{buttonColor}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-8 mt-xxl-0 mt-3">
                                    <div>
                                        <div className='bg-lgrey border rounded-3 p-sm-3'>
                                            <div className='bg-white shadow p-3 rounded-3 d-xl-flex align-items-center'>
                                                <div className='border-end w-100'>
                                                    <label htmlFor="" className='fw-semi'>Location</label>
                                                    <input type="text" className='w-100 border-0 small mt-2' placeholder='Which city do you prefer?' />
                                                </div>
                                                <div className='d-sm-flex align-items-center mt-xl-0 mt-3'>
                                                <div className='border-end w-100 px-xl-2'>
                                                    <label htmlFor="" className='fw-semi'>Check In</label>
                                                    <input type="date" className='w-100 border-0 small mt-2' placeholder='Which city do you prefer?' />
                                                </div>
                                                <div className='border-end w-100 px-sm-2'>
                                                    <label htmlFor="" className='fw-semi'>Check Out</label>
                                                    <input type="date" className='w-100 border-0 small mt-2' placeholder='Which city do you prefer?' />
                                                </div>
                                                <div className='border-end w-100 px-sm-2'>
                                                    <label htmlFor="" className='fw-semi'>Guest</label>
                                                    <input type="text" className='w-100 border-0 small mt-2' placeholder='Add Guest' />
                                                </div>
                                                </div>
                                                <div className='d-flex justify-content-end'>
                                                    <button type='button' className='bg-blue rounded-circle border-0 d-inline-flex p-2 text-white m-2 justify-content-end'>
                                                        <FaSearch className='fs-5' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <div className='d-sm-flex align-items-center mt-5'>
                    <div>
                        <button className='border w-100 bg-grey px-5 py-2 rounded-3'>Cancel</button>
                    </div>
                    <div className='ms-sm-2 mt-sm-0 mt-3'>
                        <button type='submit' className='bg-blue w-100 text-white py-2 px-5 border-0 rounded-3'>Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

