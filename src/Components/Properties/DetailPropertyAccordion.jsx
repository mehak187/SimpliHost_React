import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { IoChevronDownSharp } from "react-icons/io5";
import Bathtub from '../../assets/img/bathtub.png';
import Hairdryer from '../../assets/img/hairdryer.png';
import Basket from '../../assets/img/basket.png';
import Shampoo from '../../assets/img/shampoo.png';
import Conditioner from '../../assets/img/conditioner.png';
import FaceCleanser from '../../assets/img/face-cleanser.png';

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
        expandIcon={<IoChevronDownSharp sx={{ fontSize: '0.9rem' }} />}
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

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [isOn, setIsOn] = React.useState(true)

    const toggleSwitch = () => {
      setIsOn(!isOn)
    }

    return (
        <div>
            <form action="">
            <div className='mt-3'>
                <Accordion className='mb-2 rounded-3 border-0' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary className='rounded-3 border' aria-controls="panel1d-content" id="panel1d-header">
                        <Typography className='fw-semibold'>Amenities Detail</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='border-0'>
                        <Typography>
                            <p className='border-bottom pb-2'>What this place Offered Amenities</p>
                            <div className='row mb-3 border-bottom pb-3'>
                                <h5>Bathroom</h5>
                                <div className="col-lg-4 col-sm-6 mb-3 border-end">
                                    <div className='d-flex align-items-center'>
                                        <div>
                                            <input type="checkbox" className='chk' />
                                        </div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <div>
                                                <img src={Bathtub} alt="" className='sm-img' />
                                            </div>
                                            <div className='ms-2'>
                                                <p className='mb-0'>Bathtub</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 mb-3 border-end">
                                    <div className='d-flex align-items-center'>
                                        <div>
                                            <input type="checkbox" className='chk' />
                                        </div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <div>
                                                <img src={Hairdryer} alt="" className='sm-img' />
                                            </div>
                                            <div className='ms-2'>
                                                <p className='mb-0'>Hair dryer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 mb-3">
                                    <div className='d-flex align-items-center'>
                                        <div>
                                            <input type="checkbox" className='chk' />
                                        </div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <div>
                                                <img src={Basket} alt="" className='sm-img' />
                                            </div>
                                            <div className='ms-2'>
                                                <p className='mb-0'>Cleaning Products</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 mb-3 border-end">
                                    <div className='d-flex align-items-center'>
                                        <div>
                                            <input type="checkbox" className='chk' />
                                        </div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <div>
                                                <img src={Shampoo} alt="" className='sm-img' />
                                            </div>
                                            <div className='ms-2'>
                                                <p className='mb-0'>Shampoo</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 mb-3 border-end">
                                    <div className='d-flex align-items-center'>
                                        <div>
                                            <input type="checkbox" className='chk' />
                                        </div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <div>
                                                <img src={Conditioner} alt="" className='sm-img' />
                                            </div>
                                            <div className='ms-2'>
                                                <p className='mb-0'>Conditioner</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 mb-3">
                                    <div className='d-flex align-items-center'>
                                        <div>
                                            <input type="checkbox" className='chk' />
                                        </div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <div>
                                                <img src={Basket} alt="" className='sm-img' />
                                            </div>
                                            <div className='ms-2'>
                                                <p className='mb-0'>Body Soap</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <h5>Bathroom</h5>
                                <div className="col-lg-4 col-sm-6 mb-3 border-end">
                                    <div className='d-flex align-items-center'>
                                        <div>
                                            <input type="checkbox" className='chk' />
                                        </div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <div>
                                                <img src={Bathtub} alt="" className='sm-img' />
                                            </div>
                                            <div className='ms-2'>
                                                <p className='mb-0'>Bathtub</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 mb-3 border-end">
                                    <div className='d-flex align-items-center'>
                                        <div>
                                            <input type="checkbox" className='chk' />
                                        </div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <div>
                                                <img src={Hairdryer} alt="" className='sm-img' />
                                            </div>
                                            <div className='ms-2'>
                                                <p className='mb-0'>Hair dryer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 mb-3">
                                    <div className='d-flex align-items-center'>
                                        <div>
                                            <input type="checkbox" className='chk' />
                                        </div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <div>
                                                <img src={Basket} alt="" className='sm-img' />
                                            </div>
                                            <div className='ms-2'>
                                                <p className='mb-0'>Cleaning Products</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='mb-2 rounded-3 border-0' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary className='rounded-3 border' aria-controls="panel2d-content" id="panel2d-header">
                        <Typography className='fw-semibold'>Safety</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='border-0'>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='mb-2 rounded-3 border-0' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary className='rounded-3 border' aria-controls="panel3d-content" id="panel3d-header">
                        <Typography className='fw-semibold'>Wifi Network</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='border-0'>
                        <Typography>
                            <div className="row">
                                <div className="col-9">
                                    <div className="row">
                                        <div className="col-6 mb-3">
                                            <label htmlFor="" className='fw-semi'>Wifi Network Name</label>
                                            <input type="text" name="" className='inputstyle bg-white' id="" />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label htmlFor="" className='fw-semi'>Password</label>
                                            <input type="text" name="" className='inputstyle bg-white' id="" />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label htmlFor="" className='fw-semi'>Router Location</label>
                                            <input type="text" name="" className='inputstyle bg-white' id="" />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label htmlFor="" className='fw-semi'>Modem Location</label>
                                            <input type="text" name="" className='inputstyle bg-white' id="" />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label htmlFor="" className='fw-semi'>Notes</label>
                                            <input type="text" name="" className='inputstyle bg-white' id="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='mb-2 rounded-3 border-0' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary className='rounded-3 border' aria-controls="panel4d-content" id="panel4d-header">
                        <Typography className='fw-semibold'>Lock Box</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='border-0'>
                        <Typography>
                            <div className="row">
                                <div className="col-9">
                                    <div className="row">
                                        <div className="col-6 mb-3">
                                            <label htmlFor="" className='fw-semi'>Lockbox Location</label>
                                            <input type="text" name="" className='inputstyle bg-white' id="" />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label htmlFor="" className='fw-semi'>Lockbox Code</label>
                                            <input type="text" name="" className='inputstyle bg-white' id="" />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label htmlFor="" className='fw-semi'>Notes</label>
                                            <input type="text" name="" className='inputstyle bg-white' id="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='mb-2 rounded-3 border-0' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary className='rounded-3 border' aria-controls="panel4d-content" id="panel4d-header">
                        <Typography className='fw-semibold'>Trash/Recycling Info</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='border-0'>
                        <Typography>
                            <div className='d-flex align-items-center'>
                                <label htmlFor="" className='me-2'>Trash Pick-Up Day:</label>
                                <div className="toggle-container">
                                    <div
                                        className={`toggle-switch ${isOn ? 'on' : 'off'}`}
                                        onClick={toggleSwitch}
                                        role="switch"
                                        aria-checked={isOn}
                                        tabIndex={0}
                                    >
                                        <span className="toggle-label off">Weekly</span>
                                        <div className="toggle-slider">
                                            <div className="toggle-knob">
                                                {isOn && <span className="checkmark">✓</span>}
                                            </div>
                                        </div>
                                        <span className="toggle-label on">Bi-weekly</span>
                                    </div>
                                </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <div className="col-2">
                                            <input type="radio" />
                                            <label htmlFor="" className='ms-2'>Monday</label>
                                        </div>
                                        <div className="col-2">
                                            <input type="radio" />
                                            <label htmlFor="" className='ms-2'>Tuesday</label>
                                        </div>
                                        <div className="col-2">
                                            <input type="radio" />
                                            <label htmlFor="" className='ms-2'>Wednesday</label>
                                        </div>
                                        <div className="col-2">
                                            <input type="radio" />
                                            <label htmlFor="" className='ms-2'>Thursday</label>
                                        </div>
                                        <div className="col-2">
                                            <input type="radio" />
                                            <label htmlFor="" className='ms-2'>Friday</label>
                                        </div>
                                        <div className="col-2">
                                            <input type="radio" />
                                            <label htmlFor="" className='ms-2'>Saturday</label>
                                        </div>
                                        <div className="col-2">
                                            <input type="radio" />
                                            <label htmlFor="" className='ms-2'>Sunday</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                <label htmlFor="" className='me-2'>Recycling Pick-Up Day:</label>
                                <div className="toggle-container">
                                    <div
                                        className={`toggle-switch ${isOn ? 'on' : 'off'}`}
                                        onClick={toggleSwitch}
                                        role="switch"
                                        aria-checked={isOn}
                                        tabIndex={0}
                                    >
                                        <span className="toggle-label off">Weekly</span>
                                        <div className="toggle-slider">
                                            <div className="toggle-knob">
                                                {isOn && <span className="checkmark">✓</span>}
                                            </div>
                                        </div>
                                        <span className="toggle-label on">Bi-weekly</span>
                                    </div>
                                </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <div className="col-2">
                                            <input type="radio" />
                                            <label htmlFor="" className='ms-2'>Monday</label>
                                        </div>
                                        <div className="col-2">
                                            <input type="radio" />
                                            <label htmlFor="" className='ms-2'>Tuesday</label>
                                        </div>
                                        <div className="col-2">
                                            <input type="radio" />
                                            <label htmlFor="" className='ms-2'>Wednesday</label>
                                        </div>
                                        <div className="col-2">
                                            <input type="radio" />
                                            <label htmlFor="" className='ms-2'>Thursday</label>
                                        </div>
                                        <div className="col-2">
                                            <input type="radio" />
                                            <label htmlFor="" className='ms-2'>Friday</label>
                                        </div>
                                        <div className="col-2">
                                            <input type="radio" />
                                            <label htmlFor="" className='ms-2'>Saturday</label>
                                        </div>
                                        <div className="col-2">
                                            <input type="radio" />
                                            <label htmlFor="" className='ms-2'>Sunday</label>
                                        </div>
                                    </div>
                                </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='mb-2 rounded-3 border-0' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary className='rounded-3 border' aria-controls="panel5d-content" id="panel5d-header">
                        <Typography className='fw-semibold'>Cleaning Closet</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='border-0'>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='mb-2 rounded-3 border-0' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary className='rounded-3 border' aria-controls="panel4d-content" id="panel4d-header">
                        <Typography className='fw-semibold'>House Rule</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='border-0'>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </form>
        </div>
    );
}


