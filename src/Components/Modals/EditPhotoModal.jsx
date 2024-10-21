import React, { useState } from 'react';
import { IoIosCloseCircle, IoMdCloseCircle } from 'react-icons/io';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import Left from "../../assets/img/arrow_left.png";
import rightarrow from "../../assets/img/arrow_right.png";
import SliderProperty from '../../assets/img/slider-property.png';

const images = [
    { src: SliderProperty, alt: 'Image 1' },
    { src: SliderProperty, alt: 'Image 2' },
    { src: SliderProperty, alt: 'Image 3' },
    { src: SliderProperty, alt: 'Image 4' },
    { src: SliderProperty, alt: 'Image 5' },
];

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function EditPhotoModal() {
    const [showModal, setShowModal] = useState(false);
    const [value, setValue] = useState(0);
    const [tags, setTags] = useState(['', '', '', '', '']);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: (
            <div className="slider-img">
                <img src={Left} alt="left arrow" className="slider-pr" />
            </div>
        ),
        nextArrow: (
            <div className="slider-img">
                <img src={rightarrow} alt="right arrow" className="slider-nr" />
            </div>
        ),
    };

    const handleTagChange = (index, value) => {
        const newTags = [...tags];
        newTags[index] = value;
        setTags(newTags);
    };

    return (
        <div>
            <div className="dropdown">
                <button
                    className="bg-white border py-2 px-3 rounded-3 dropdown-toggle d-flex align-items-center justify-content-between"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    Filter
                </button>
            </div>
            {showModal && (
                <>
                    <div className="custom-backdrop" onClick={() => setShowModal(false)}></div>
                    <div className="modal modal-xl d-block" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div></div>
                                    <h5 className="modal-title text-dark fw-semi" id="exampleModalLabel">Edit Photo</h5>
                                    <button
                                        type="button"
                                        className="bg-transparent border-0 text-secondary fs-4"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <IoMdCloseCircle />
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form action="">
                                        <div className="row pb-5">
                                            <div className="col-6">
                                                <div className="image-slider position-relative">
                                                    <Slider {...sliderSettings}>
                                                        {images.map((image, index) => (
                                                            <div key={index}>
                                                                <img src={image.src} alt={image.alt} className='sl-img' />
                                                            </div>
                                                        ))}
                                                    </Slider>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <Box sx={{ width: '100%' }}>
                                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                                            <Tab className='detail-tab' label="Details" {...a11yProps(0)} />
                                                            <Tab className='detail-tab' label="Edit" {...a11yProps(1)} />
                                                            <Tab className='detail-tab' label="Tags" {...a11yProps(2)} />
                                                        </Tabs>
                                                    </Box>
                                                    <CustomTabPanel value={value} index={0}>
                                                        <div>
                                                            <h5 className='fw-semi'>Photo Caption</h5>
                                                            <p>Highlight what makes this spot special, like the cozy furniture or your favorite little details that make it stand out.</p>
                                                            <div>
                                                                <textarea name="" className='inputstyle' id="" rows="5" placeholder='Type here'></textarea>
                                                            </div>
                                                        </div>
                                                    </CustomTabPanel>
                                                    <CustomTabPanel value={value} index={1}>
                                                        <div className='d-flex align-items-center justify-content-between'>
                                                            <div>
                                                                <h6 className='fw-semi'>Enhance Photo</h6>
                                                            </div>
                                                            <div>
                                                                <label className="switch">
                                                                    <input type="checkbox" id="Materials" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className='mt-3'>
                                                            <label htmlFor="" className='mb-0 fw-semi'>Contrast</label>
                                                            <input type="range" className="rangeSlider" />
                                                        </div>
                                                        <div className='mt-3'>
                                                            <label htmlFor="" className='mb-0 fw-semi'>Brightness</label>
                                                            <input type="range" className="rangeSlider" />
                                                        </div>
                                                        <div className='mt-3'>
                                                            <label htmlFor="" className='mb-0 fw-semi'>Zoom</label>
                                                            <input type="range" className="rangeSlider" />
                                                        </div>
                                                        <div className='mt-4'>
                                                            <button className='border py-2 px-5 rounded-3 bg-white fw-semi'>Rotate</button>
                                                        </div>
                                                    </CustomTabPanel>
                                                    <CustomTabPanel value={value} index={2}>
                                                        <div className='border-bottom pb-2'>
                                                            <h5 className='fw-semi'>Will allow for tag for each photo</h5>
                                                            <p className='mb-0'>Use photo tags to automatically add reference images to specific checklists.</p>
                                                        </div>
                                                        <div className="bedroom-tags-container py-3">
                                                            <div className="top-tags">
                                                                <span className="bg-tag rounded-2 d-flex align-items-center py-1 px-3">Bedroom #1<IoIosCloseCircle className='text-danger ms-3' /></span>
                                                                <span className="bg-tag rounded-2 d-flex align-items-center py-1 px-3">Bedroom #2<IoIosCloseCircle className='text-danger ms-3' /></span>
                                                            </div>
                                                            <div className="row pb-2 border-bottom mb-2">
                                                                {tags.map((tag, index) => (
                                                                    <div key={index} className="col-4 mb-2">
                                                                        <input
                                                                            type="text"
                                                                            value={tag}
                                                                            onChange={(e) => handleTagChange(index, e.target.value)}
                                                                            placeholder="Type tag"
                                                                            className="inputstyle py-2"
                                                                        />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="bottom-tags">
                                                                <span className="bg-tag rounded-2 py-1 px-3">Bedroom #1</span>
                                                                <span className="bg-tag rounded-2 py-1 px-3">Bedroom #2</span>
                                                            </div>
                                                        </div>
                                                    </CustomTabPanel>
                                                </Box>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div>
                                                <button className='decrease-active border-0 rounded-3 py-2 px-5 fw-semi'>Delete</button>
                                            </div>
                                            <div>
                                                <button className='bg-tag border-0 rounded-3 py-2 px-5 text-dark fw-semi'>Save</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default EditPhotoModal;
