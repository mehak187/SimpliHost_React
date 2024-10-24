import React, { useState } from 'react';
import { FaChevronRight, FaChevronDown, FaSearch, FaCopy } from "react-icons/fa";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import GroupImage from '../Checklist/GroupImage';
import InstantBook from '../../assets/img/instant-book.png'
import LastMin from '../../assets/img/last-min.png'
import ReqRev from '../../assets/img/req-rev.png'
import PromoCode from '../../assets/img/promo-code.png'


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': { borderBottom: 0 },
  '&::before': { display: 'none' },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<FaChevronDown />} {...props} />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': { marginLeft: theme.spacing(1) },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const getStatusClass = (status) => {
  switch (status) {
    case "Inactive": return "text-danger";
    case "Active": return "text-success";
    default: return "";
  }
};


const DataCollection = [
  { id: 1, FirstName: "Promo Code A", FlatFee: "10%", status: "Inactive", lastUsed: "09/25/2024" },
  { id: 2, FirstName: "Promo Code B", FlatFee: "20%", status: "Active", lastUsed: "09/25/2024" },
  { id: 3, FirstName: "Promo Code C", FlatFee: "15%", status: "Active", lastUsed: "09/25/2024" },
  { id: 4, FirstName: "Promo Code D", FlatFee: "5%", status: "Active", lastUsed: "09/25/2024" },
];

function Website() {
  const [expanded, setExpanded] = useState('panel1');

  // State for promo codes
  const [promoCodes, setPromoCodes] = useState([
    { id: 1, FirstName: "Promo Code A", FlatFee: "10%", status: false, lastUsed: "09/25/2024" },
    { id: 2, FirstName: "Promo Code B", FlatFee: "20%", status: true, lastUsed: "09/25/2024" },
    { id: 3, FirstName: "Promo Code C", FlatFee: "15%", status: true, lastUsed: "09/25/2024" },
    { id: 4, FirstName: "Promo Code D", FlatFee: "5%", status: true, lastUsed: "09/25/2024" },
  ]);

  // State for instant booking options
  const [instantData, setInstantData] = useState([
    { label: 'Instant Book', imageSrc: InstantBook, status: false },
    { label: 'Last Minute Instant Book', imageSrc: LastMin, status: true },
    { label: 'Request Reviews', imageSrc: ReqRev, status: false }
  ]);

  // Handle panel expansion
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // Toggle status for promo codes
  const togglePromoCodeStatus = (id) => {
    setPromoCodes(prevPromoCodes =>
      prevPromoCodes.map(promo => 
        promo.id === id ? { ...promo, status: !promo.status } : promo
      )
    );
  };

  // Toggle status for instant booking options
  const toggleInstantStatus = (index) => {
    setInstantData(prevInstantData =>
      prevInstantData.map((item, i) =>
        i === index ? { ...item, status: !item.status } : item
      )
    );
  };

  const DataPolicy = [
    { id: 1, Name: "Flexible", RefundPolicy: "50% refund", Properties: <GroupImage /> },
    { id: 2, Name: "Strict", RefundPolicy: "No refund", Properties: <GroupImage /> },
    { id: 3, Name: "Moderate", RefundPolicy: "75% refund", Properties: <GroupImage /> },
  ];

  return (
    <div className='bg-lgrey p-2 rounded-3'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='border-0 mb-3'>
        <AccordionSummary className='bg-white shadow border-0 rounded-3' aria-controls="panel1d-content" id="panel1d-header">
          <Typography className='fw-semibold'>General Section</Typography>
        </AccordionSummary>
        <AccordionDetails className='border-0'>
          <Typography>
            {instantData.map((item, index) => (
              <div key={index} className='bg-lgrey p-3 rounded-3 d-sm-flex justify-content-between align-items-center mb-3'>
                <div className='d-flex align-items-center'>
                  <div><img src={item.imageSrc} alt="" className='md1-img me-2' /></div>
                  <div><h6 className='mb-0 fw-semi'>{item.label}</h6></div>
                </div>
                <div className='d-flex justify-content-end mt-sm-0 mt-3'>
                  <span>No</span>
                  <label className="switch mx-2">
                    <input type="checkbox" checked={item.status} onChange={() => toggleInstantStatus(index)} />
                    <span className="slider round"></span>
                  </label>
                  <span>Yes</span>
                </div>
              </div>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='border-0 mb-3'>
        <AccordionSummary className='bg-white shadow border-0 rounded-3' aria-controls="panel2d-content" id="panel2d-header">
          <Typography className='fw-semibold'>Promo Codes Section</Typography>
        </AccordionSummary>
        <AccordionDetails className='border-0 bg-lgrey'>
          <Typography>
            <div className='row align-items-center'>
              <div className='col-xl-7'>
                <h5>Promo Codes</h5>
                <p>Generate codes to share with guests, offering discounts for qualifying bookings.</p>
              </div>
              <div className="col-xl-5 col-lg-8 ms-auto">
                <div className='row align-items-center'>
                  <div className="col-sm-7">
                    <div className='border-grey h-100 d-flex custom-rounded'>
                      <input type="search" className="ps-2 small w-100 text-grey bg-transparent border-0 py-2" placeholder="Search promo codes" />
                      <label className="px-sm-3 px-2 d-flex align-items-center search-bg">
                        <FaSearch />
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-5 mt-sm-0 mt-3">
                    <Link to="/admin/add-promo" className='bg-blue py-2 px-2 text-decoration-none w-100 d-inline-block text-white rounded-3 text-center'>Add Promo Code</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-grey p-3 rounded-4 promo-code d-flex flex-column mt-3 justify-content-center align-items-center'>
              <div>
                <img src={PromoCode} alt="" className='img-fluid' />
              </div>
              <h5 className='text-center fw-semi mb-0 mt-3'>No Promo Codes</h5>
              <p className='text-center mb-0'>You haven't Created any promo codes yet.</p>
            </div>
            <div className='table-responsive default-table mt-3'>
              <table className="table">
                <thead>
                  <tr className="align-middle">
                    <th className="small fw-semi">Promo Code Name</th>
                    <th className="small fw-semi">Type (Percentage/Flat Fee)</th>
                    <th className="small fw-semi">Status</th>
                    <th className="small fw-semi">Last Used</th>
                    <th className="small fw-semi text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {DataCollection.map((data) => (
                    <tr key={data.id} className="align-middle">
                      <td className="small">{data.FirstName}</td>
                      <td className="small">{data.FlatFee}</td>
                      <td className={`small fw-semi ${getStatusClass(data.status)}`}>{data.status}</td>
                      <td className="small">{data.lastUsed}</td>
                      <td className="small text-center">
                        <div className="d-flex justify-content-center">
                          <Link to="#" className="mx-1 tblicon"><FaCopy /></Link>
                          <Link to="#" className="mx-1 tblicon"><IoPencil /></Link>
                          <Link to="#" className="mx-1 tblicon"><HiTrash /></Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='border-0 mb-3'>
        <AccordionSummary className='bg-white shadow border-0 rounded-3' aria-controls="panel3d-content" id="panel3d-header">
          <Typography className='fw-semibold'>Cancellation Policies Section</Typography>
        </AccordionSummary>
        <AccordionDetails className='border-0 bg-lgrey'>
          <Typography>
            <div className='row align-items-center justify-content-between'>
              <div className='col-xl-9'>
                <h5>Booking Policy</h5>
                <p>Set cancellation and payment terms for direct bookings that fit your business.</p>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-5 col-sm-7 ms-auto'>
                <Link to="/admin/add-policy" className='bg-blue py-2 px-2 text-decoration-none w-100 d-inline-block text-white rounded-3 text-center'>Add Policy</Link>
              </div>
            </div>
            <div className='table-responsive default-table mt-3'>
              <table className="table">
                <thead>
                  <tr className="align-middle">
                    <th className="small fw-semi">Policy Name</th>
                    <th className="small fw-semi">Refund Policy</th>
                    <th className="small fw-semi">Properties</th>
                    <th className="small fw-semi text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {DataPolicy.map((policy) => (
                    <tr key={policy.id} className="align-middle">
                      <td className="small">{policy.Name}</td>
                      <td className="small">{policy.RefundPolicy}</td>
                      <td className="small">{policy.Properties}</td>
                      <td className="small text-center">
                        <div className="d-flex justify-content-center">
                          <Link to="#" className="mx-1 tblicon"><IoPencil /></Link>
                          <Link to="#" className="mx-1 tblicon"><HiTrash /></Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Website;
