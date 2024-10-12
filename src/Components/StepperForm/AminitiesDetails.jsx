import React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaChevronDown } from "react-icons/fa";
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
    expandIcon={<FaChevronDown style={{ fontSize: '1rem' }} />}
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
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const AmenityOption = ({ imgSrc, label }) => (
  <div className="col-sm-6 border-end">
    <div className='d-flex align-items-center'>
      <input type="checkbox" className='chk me-3' />
      <label>
        <img src={imgSrc} alt="" className='sm-img me-2' />{label}
      </label>
    </div>
  </div>
);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const amenityOptions = [
    { imgSrc: Bathtub, label: 'Bathtub' },
    { imgSrc: Hairdryer, label: 'Hair dryer' },
    { imgSrc: Basket, label: 'Cleansing Products' },
    { imgSrc: Shampoo, label: 'Shampoo' },
    { imgSrc: Conditioner, label: 'Conditioner' },
    { imgSrc: FaceCleanser, label: 'Body Soap' },
    
  ];

  return (
    <div className='container pt-5 pb-4'>
      <div className="row">
        <div className="col-lg-6">
          <p className='bg-lgrey rounded-pill py-2 px-4 max fw-semi border'>Step 06</p>
          <h2 className='step-font mt-4'>Show Off Your Place’s Amenities!</h2>
          <p className='fw-normal lh-2 mt-3'>
            Got more perks? No problem—add extra amenities anytime after you publish!
          </p>
        </div>
        <div className="col-lg-6">
          <div className='pet-height'>
            <div className='p-2'>
            <Accordion className='mb-2 rounded-3 border-0' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary className='rounded-3 border' aria-controls="panel1d-content" id="panel1d-header">
                  <Typography className='fw-semibold'>Amenities Detail</Typography>
                </AccordionSummary>
                <AccordionDetails className='border-0'>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion className='mb-2 rounded-3 border-0' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary className='rounded-3 border' aria-controls="panel2d-content" id="panel2d-header">
                  <Typography className='fw-semibold'>Bathroom</Typography>
                </AccordionSummary>
                <AccordionDetails  className='border-0'>
                  <div className="row border-bottom pb-2">
                    {amenityOptions.slice(0, 2).map((option, index) => (
                      <AmenityOption key={index} imgSrc={option.imgSrc} label={option.label} />
                    ))}
                  </div>
                  <div className="row border-bottom pb-2 mt-3">
                    {amenityOptions.slice(2, 4).map((option, index) => (
                      <AmenityOption key={index} imgSrc={option.imgSrc} label={option.label} />
                    ))}
                  </div>
                  <div className="row border-bottom pb-2 mt-3">
                    {amenityOptions.slice(4, 6).map((option, index) => (
                      <AmenityOption key={index} imgSrc={option.imgSrc} label={option.label} />
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>

              {['Bedroom', 'Laundry', 'Entertainment', 'Family', 'Heating and Cooling'].map((title, index) => (
                <Accordion className='mb-2 rounded-3 border-0' key={index + 3} expanded={expanded === `panel${index + 3}`} onChange={handleChange(`panel${index + 3}`)}>
                  <AccordionSummary className='rounded-3 border' aria-controls={`panel${index + 3}d-content`} id={`panel${index + 3}d-header`}>
                    <Typography className='fw-semibold'>{title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
