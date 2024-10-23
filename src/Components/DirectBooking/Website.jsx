import React, { useState } from 'react';
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { BsThreeDots } from 'react-icons/bs';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Upload from '../../assets/img/upload-2.png';
import SmallImg from '../../assets/img/small-img.png';
import ColorTheme from './ColorTheme';
import WebsitePageContent from './WebsitePageContent';
import WebsiteAbout from './WebsiteAbout';
import SocialMedia from './SocialMedia';

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
  const [expanded, setExpanded] = useState('panel1');
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [images, setImages] = useState(Array(10).fill(null));
  const maxImages = 10;

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

  const handleFileChange1 = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage = { id: index + 1, src: reader.result, preview: true };
        setImages((prevImages) => {
          const updatedImages = [...prevImages];
          updatedImages[index] = newImage;
          return updatedImages;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='bg-lgrey p-sm-2 rounded-3'>
      <div className='d-sm-flex align-items-center mb-4'>
        <button className='bg-blue w-100 text-white rounded-3 border-0 py-2 px-3 fw-semi'>
          <FaChevronRight className='me-2 mb-1' /> Expand All
        </button>
        <button className='bg-lgrey w-100 text-blue fw-semi rounded-3 border py-2 px-3 ms-sm-2 mt-sm-0 mt-3'>
          <FaChevronRight className='me-2 mb-1' /> Collapse All
        </button>
      </div>
      <form action="">
        <div className='mt-4'>
          <Accordion className='border-0 mb-3' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary className='bg-white shadow border-0 rounded-3' aria-controls="panel1d-content" id="panel1d-header">
              <Typography className='fw-semibold'>Upload Background Image / Video</Typography>
            </AccordionSummary>
            <AccordionDetails className='border-0'>
              <Typography>
                <h5>Upload a Banner Background Image/Video</h5>
                <p className='text-secondary'>For best results, video upload should be at least (1920px x 1080px) in MP4 format.</p>
                <div className='bg-lgrey border p-1 max-p'>
                  <div className='bg-white p-2'>
                    <h5 className='mb-0 text-center'>Drag and drop Image & Video file to upload</h5>
                    <p className='text-center'>Your video will be private until you publish your website banner.</p>
                    <div className='text-center'>
                      {preview ? (
                        <img src={preview} alt="Selected file" className="img-fluid" />
                      ) : (
                        <img src={Upload} alt="Upload placeholder" />
                      )}
                    </div>
                    <div className='text-center mt-3'>
                      <label htmlFor="file-up" className='text-white bg-blue py-1 px-4 rounded-pill shadow'>Upload</label>
                      <input type="file" id='file-up' className='d-none' onChange={handleFileChange} />
                    </div>
                  </div>
                </div>
                <div className='mt-5'>
                  <h5>Hero Background Slider Images</h5>
                  <p>Add 01/10 Images for Website Banner Sliders. Image size (1920px x 1080px) in PNG/JPEG/JPG format.</p>
                  <div className="row">
                    {images.map((image, index) => (
                      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3" key={index}>
                        <div className='position-relative'>
                          {image?.preview ? (
                            <img src={image.src} alt={`Preview ${index + 1}`} className='img-pr w-100' />
                          ) : (
                            <div className='position-relative text-center border rounded-2 h-100 d-flex flex-column justify-content-center align-items-center p-3'>
                              <img src={SmallImg} alt="Placeholder" />
                              <h6 className='text-center'>Drag and Drop</h6>
                              <label htmlFor={`file-u-${index}`} className='text-white bg-blue py-1 px-4 rounded-pill shadow'>Upload</label>
                              <input
                                type="file"
                                id={`file-u-${index}`}
                                className='d-none'
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={(event) => handleFileChange1(event, index)}
                              />
                            </div>
                          )}
                          {image?.preview && (
                            <div className='position-absolute top-0 start-0 m-2'>
                              <div className="dropdown">
                                <button className="btn btn-light text-dark rounded-circle shadow p-1 d-inline-flex" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  <BsThreeDots />
                                </button>
                                <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="#">Edit</a></li>
                                  <li><a className="dropdown-item" href="#">Move Forward</a></li>
                                  <li><a className="dropdown-item" href="#">Move Backward</a></li>
                                  <li><a className="dropdown-item" href="#">Delete</a></li>
                                </ul>
                              </div>
                            </div>
                          )}
                          {image?.preview && (
                            <div className='position-absolute top-0 start-100 translate-middle badge'>
                              <p className='bg-lblue p-2 mb-0 rounded-circle'>{index + 1}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='border-0 mb-3' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary className='bg-white shadow border-0 rounded-3' aria-controls="panel2d-content" id="panel2d-header">
              <Typography className='fw-semibold'>Set Color Theme</Typography>
            </AccordionSummary>
            <AccordionDetails className='border-0 bg-lgrey'>
              <Typography>
                <ColorTheme />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='border-0 mb-3' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary className='bg-white shadow border-0 rounded-3' aria-controls="panel3d-content" id="panel3d-header">
              <Typography className='fw-semibold'>Website Page Content</Typography>
            </AccordionSummary>
            <AccordionDetails className='border-0 bg-lgrey'>
              <Typography>
                <WebsitePageContent />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='border-0 mb-3' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary className='bg-white shadow border-0 rounded-3' aria-controls="panel4d-content" id="panel4d-header">
              <Typography className='fw-semibold'>Website About us Section Content</Typography>
            </AccordionSummary>
            <AccordionDetails className='border-0 bg-lgrey'>
              <Typography>
                <WebsiteAbout />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='border-0 mb-3' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary className='bg-white shadow border-0 rounded-3' aria-controls="panel5d-content" id="panel4d-header">
              <Typography className='fw-semibold'>Social Media Links</Typography>
            </AccordionSummary>
            <AccordionDetails className='border-0 bg-lgrey'>
              <Typography>
                <SocialMedia />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
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

export default Website;
