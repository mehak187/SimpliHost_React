import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaChevronDown } from "react-icons/fa";
import { styled } from '@mui/material/styles';
import Upload from '../../assets/img/upload-2.png';
import Property from '../../assets/img/property-1.png';
import { BsThreeDots } from 'react-icons/bs';
import SmallImg from '../../assets/img/small-img.png';

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

function Website() {
  const [expanded, setExpanded] = React.useState('panel1');
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [images, setImages] = useState(new Array(10).fill(null));


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const fileURL = URL.createObjectURL(file);
      setPreview(fileURL);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreview(null);
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImages = [...images];
        newImages[index] = reader.result;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div>
      <div className='d-flex align-items-center'>
        <div>
          <button className='bg-blue text-white rounded-3 border-0 py-2 px-3 fw-semi'><FaChevronRight className='me-2 mb-1' /> Expand All</button>
        </div>
        <div className='ms-2'>
          <button className='bg-lgrey text-blue fw-semi rounded-3 border py-2 px-3'><FaChevronRight className='me-2 mb-1' />Collapse All</button>
        </div>
      </div>
      <div className='mt-4'>
        <Accordion className='border-0 mb-3' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary className='bg-white shadow border-0 rounded-3' aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Upload Background Image / Video</Typography>
          </AccordionSummary>
          <AccordionDetails className='border-0'>
            <Typography>
              <h5>Upload a Banner Background Image/Video</h5>
              <p className='text-secondary'>For Best results, Video upload should be at least (1920px 1080px) in MP4 format.</p>
              <div className='bg-lgrey border p-1 max-p'>
                <div className='bg-white p-2'>
                  <h5 className='mb-0 text-center'>Drag and drop Image & Video file to upload</h5>
                  <p className='text-center'>Your video will be private until you publish your website Banner</p>

                  <div className='text-center'>
                    {preview ? (
                      <>
                        <img src={preview} alt="Selected file" className="img-fluid" />
                        <button className='btn btn-danger mt-3' onClick={handleRemoveFile}>Remove</button>
                      </>
                    ) : (
                      <img src={Upload} alt="" />
                    )}
                  </div>

                  <div className='text-center mt-3'>
                    <label htmlFor="file-up" className='text-white bg-blue py-1 px-4 rounded-pill shadow'>Upload</label>
                    <input type="file" id='file-up' className='d-none' onChange={handleFileChange} />
                  </div>
                </div>
              </div>
              <div className='mt-5'>
                <h5>Hero background slider images</h5>
                <p>Add 01/10 Images For Website Banner Sliders. Add image Size (1920px 1080px) in format png/jpeg/jpg.</p>
                <div className="row">
                  {images.map((image, index) => (
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3" key={index}>
                      <div className='position-relative text-center border rounded-2 h-100 d-flex flex-column justify-content-center align-items-center p-3'>
                        {image ? (
                          <img src={image} alt={`Slider ${index + 1}`} className='w-100' />
                        ) : (
                          <>
                            <img src={SmallImg} alt="" className='' />
                            <h6 className='text-center'>Drag and Drop</h6>
                            <div>
                              <label htmlFor={`file-u-${index}`} className='text-white bg-blue py-1 px-4 rounded-pill shadow'>Upload</label>
                              <input
                                type="file"
                                id={`file-u-${index}`}
                                className='d-none'
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={(e) => handleImageChange(e, index)}
                              />
                            </div>
                          </>
                        )}
                        <div className='position-absolute top-0 start-100 translate-middle badge'>
                          <p className='bg-lblue mb-0 p-1 rounded-circle d-inline-flex ex-small'>{index + 1}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Website;
