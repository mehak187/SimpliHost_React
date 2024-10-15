import React, { useState } from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs";
import { CiSearch } from 'react-icons/ci';
import { FaChevronRight } from "react-icons/fa6";
import { styled } from '@mui/material/styles';
import { FaChevronDown } from "react-icons/fa";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SettingImg from '../../assets/img/setting-img.png'
import { RiDragMove2Line } from "react-icons/ri";
import DropDetail from './DropDetail';

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
    expandIcon={<FaChevronDown className='text-white' sx={{ fontSize: '0.9rem' }} />}
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

function DetailPage() {

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <form action="">
      <div className='bg-white rounded-3 shadow p-3'>
        <h5 className='mb-0 fw-semi'>Checklist Detail</h5>
      </div>
      <div>
          <div className="row mt-4">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <label htmlFor="" className='fw-semi mb-1'>Checklist Name</label>
                  <input type="text" name="" id="" placeholder='Type text here' className='inputstyle py-2' />
                </div>
                <div className="col-sm-6 mb-3">
                  <label htmlFor="" className='fw-semi mb-1'>Type</label>
                  <select name="" id="" className='inputstyle py-2'>
                    <option value="">Select Type</option>
                  </select>
                </div>
                <div className="col-sm-6 mb-3">
                  <label htmlFor="" className='fw-semi mb-1'>Properties</label>
                  <select name="" id="" className='inputstyle py-2'>
                    <option value="">Select Type</option>
                  </select>
                </div>
                <div className="col-sm-6 mb-3">
                  <label htmlFor="" className='fw-semi mb-1'>Property Group</label>
                  <select name="" id="" className='inputstyle py-2'>
                    <option value="">Select Type</option>
                  </select>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      <label className="switch mx-2">
                        <input type="checkbox" id="Materials" />
                        <span className="slider round"></span>
                      </label>
                      <span className='ex-small'>Account Setting</span>
                    </div>
                    <div>
                      <BsBoxArrowUpRight className='bg-lgrey text-blue p-2 fs-1 rounded-2' />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                      <label className="switch mx-2">
                        <input type="checkbox" id="Materials" />
                        <span className="slider round"></span>
                      </label>
                      <span className='ex-small text-nowrap'>Re-occurring</span>
                    </div>
                    <div className='mx-2'>
                      <input type="number" className='selection-op in-w border ' placeholder='00' />
                    </div>
                    <div className='w-100'>
                      <select name="" id="" className='selection-op w-100 border'>
                        <option value="">Days</option>
                        <option value="">Weeks</option>
                        <option value="">Months</option>
                        <option value="">Year</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='bg-white rounded-3 shadow p-2 d-flex align-items-center justify-content-between'>
        <div>
          <h5 className='mb-0 fw-semi'>Search Checklist Data</h5>
        </div>
        <div>
          <form action="">
            <div className='border p-2 d-flex bg-lgrey rounded-3'>
              <CiSearch className='fs-1 rounded-3 p-2 text-white bg-blue' />
              <input type="search" className='border-0 px-3 w-100 bg-lgrey ex-small' placeholder='Search Checklist by name' />
            </div>
          </form>
        </div>
      </div>
      <div className='d-sm-flex align-items-center mt-4'>
        <div>
          <button className='btn bg-blue text-white py-2 w-100 px-4'><FaChevronRight className='me-2 mb-1' />Expand All</button>
        </div>
        <div className='ms-sm-2 mt-sm-0 mt-3'>
          <button className='btn bg-lgrey border text-blue w-100 py-2 px-4'><FaChevronRight />Collapse All</button>
        </div>
      </div>
      <div className='mt-4'>
        <Accordion className='mb-3 border-0' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary className='border-0 bg-blue text-white rounded-3' aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Kitchen</Typography>
          </AccordionSummary>
          <AccordionDetails className='border-0'>
            <Typography>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Spot check kitchen (dishes/glasses, pots/pans, etc.)</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Verify dishwasher is empty</p>
                    <p className='fw-semi mb-0'>Verify dishwasher does not smell</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Verify microwave</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Verify dishwasher is empty</p>
                    <p className='fw-semi mb-0'>Verify dishwasher does not smell</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='mb-3 border-0' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary className='border-0 bg-blue text-white rounded-3' aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Living Room</Typography>
          </AccordionSummary>
          <AccordionDetails className='border-0'>
          <Typography>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Spot check kitchen (dishes/glasses, pots/pans, etc.)</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Verify dishwasher is empty</p>
                    <p className='fw-semi mb-0'>Verify dishwasher does not smell</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Verify microwave</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Verify dishwasher is empty</p>
                    <p className='fw-semi mb-0'>Verify dishwasher does not smell</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='mb-3 border-0' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary className='border-0 bg-blue text-white rounded-3' aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Bathroom No. 1</Typography>
          </AccordionSummary>
          <AccordionDetails className='border-0'>
          <Typography>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Spot check kitchen (dishes/glasses, pots/pans, etc.)</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Verify dishwasher is empty</p>
                    <p className='fw-semi mb-0'>Verify dishwasher does not smell</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Verify microwave</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Verify dishwasher is empty</p>
                    <p className='fw-semi mb-0'>Verify dishwasher does not smell</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='mb-3 border-0' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary className='border-0 bg-blue text-white rounded-3' aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Bedroom No. 1</Typography>
          </AccordionSummary>
          <AccordionDetails className='border-0'>
          <Typography>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Spot check kitchen (dishes/glasses, pots/pans, etc.)</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Verify dishwasher is empty</p>
                    <p className='fw-semi mb-0'>Verify dishwasher does not smell</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Verify microwave</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Verify dishwasher is empty</p>
                    <p className='fw-semi mb-0'>Verify dishwasher does not smell</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='mb-3 border-0' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary className='border-0 bg-blue text-white rounded-3' aria-controls="panel5d-content" id="panel5d-header">
            <Typography>Basement</Typography>
          </AccordionSummary>
          <AccordionDetails className='border-0'>
          <Typography>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Spot check kitchen (dishes/glasses, pots/pans, etc.)</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Verify dishwasher is empty</p>
                    <p className='fw-semi mb-0'>Verify dishwasher does not smell</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Verify microwave</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
              <div className='bg-lgrey p-2 border rounded-3 d-sm-flex align-items-center justify-content-between mb-2'>
                <div className='d-flex align-items-center'>
                  <div className='border-end d-flex align-items-center px-2'>
                    <div>
                      <input type="checkbox" className='' />
                    </div>
                    <div className='ms-2'>
                      <RiDragMove2Line className='text-blue fs-3' />
                    </div>
                  </div>
                  <div className='ps-3'>
                    <p className='fw-semi mb-0'>Verify dishwasher is empty</p>
                    <p className='fw-semi mb-0'>Verify dishwasher does not smell</p>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-3'>
                  <div>
                    <img src={SettingImg} alt="" className='md-img' />
                  </div>
                  <div className='ms-2'>
                    <DropDetail/>
                  </div>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className='d-sm-flex align-items-center mt-4'>
        <div className=''>
          <button className='btn bg-lgrey w-100 border text-blue py-2 px-5'>Cancel</button>
        </div>
        <div className='ms-sm-2 mt-sm-0 mt-3'>
          <button className='btn bg-blue w-100 text-white py-2 px-5'>Save</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default DetailPage

