import React, { useState } from 'react';
import RoadPic from '../../assets/img/small-img.png';
import { BsThreeDots } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { IoPricetags } from "react-icons/io5";
import { BsExclamationDiamondFill } from "react-icons/bs";
import { CiEdit, CiSearch } from 'react-icons/ci';
import { RiFileEditLine } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";
import DetailPropertyAccordion from './DetailPropertyAccordion';

function Detail() {
    const [imagePreviews, setImagePreviews] = useState(Array(4).fill(null));
    const [isHovered, setIsHovered] = useState(Array(4).fill(false));
    const [dropdownOpen, setDropdownOpen] = useState(Array(4).fill(false));
    const [errorMessages, setErrorMessages] = useState(Array(4).fill(''));

    const handleImageUpload = (event, index) => {
        const file = event.target.files[0];
        if (file) {
            if (file.size < 50 * 1024) {
                const newErrors = [...errorMessages];
                newErrors[index] = (
                    <span className="text-danger d-flex ">
                        <BsExclamationDiamondFill className="me-1 fs-1" />
                        The file is too small. Please upload a photo that exceeds 50 KB.
                    </span>
                );
                setErrorMessages(newErrors);
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const newPreviews = [...imagePreviews];
                newPreviews[index] = reader.result;
                setImagePreviews(newPreviews);

                const newErrors = [...errorMessages];
                newErrors[index] = '';
                setErrorMessages(newErrors);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddCover = (index) => {
        document.getElementById(`input-file-${index}`).click();
    };

    const toggleDropdown = (index) => {
        const newDropdownOpen = [...dropdownOpen];
        newDropdownOpen[index] = !newDropdownOpen[index];
        setDropdownOpen(newDropdownOpen);
    };

    const [bedroomCount, setBedroomCount] = useState(2);
    const [bathroomCount, setBathroomCount] = useState(2);
    const [bedCount, setBedCount] = useState(1);

    const modifyCount = (count, setCount, increment) => {
        if (increment) {
            setCount(count + 1);
        } else if (count > 0) {
            setCount(count - 1);
        }
    };
    return (
        <div>
            <div className='bg-white py-3 px-3 shadow rounded-3'>
                <h6 className='mb-0 fw-semi'>Property Detail</h6>
            </div>
            <form action="">
                <div className="row mt-4">
                    {imagePreviews.map((imagePreview, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-3">
                            <div className="w-100 h-100">
                                {!imagePreview ? (
                                    <label
                                        htmlFor={`input-file-${index}`}
                                        className="upload-img w-100 mt-1 d-flex flex-column py-4 px-1 justify-content-center align-items-center position-relative"
                                        onMouseEnter={() => {
                                            const newHovered = [...isHovered];
                                            newHovered[index] = true;
                                            setIsHovered(newHovered);
                                        }}
                                        onMouseLeave={() => {
                                            const newHovered = [...isHovered];
                                            newHovered[index] = false;
                                            setIsHovered(newHovered);
                                        }}
                                    >
                                        <img src={RoadPic} alt="Small Preview" />
                                        <div className="mt-2">
                                            <p className="text-center ex-small fw-semi">
                                                Drag and Drop
                                            </p>
                                        </div>
                                    </label>
                                ) : (
                                    <div
                                        className="w-100 upload-img mt-1 d-flex flex-column py-4 px-1 justify-content-center align-items-center position-relative"
                                        onMouseEnter={() => {
                                            const newHovered = [...isHovered];
                                            newHovered[index] = true;
                                            setIsHovered(newHovered);
                                        }}
                                        onMouseLeave={() => {
                                            const newHovered = [...isHovered];
                                            newHovered[index] = false;
                                            setIsHovered(newHovered);
                                        }}
                                    >
                                        <img src={imagePreview} alt="Preview" className='w-100 h-100 object-fit-contain' />
                                        {isHovered[index] && (
                                            <>
                                                <button
                                                    type='button'
                                                    className="add-cover-button shadow"
                                                    onClick={() => handleAddCover(index)}
                                                >
                                                    Add Cover
                                                </button>
                                                <div className="position-absolute top-0 end-0 p-2">
                                                    <div className='d-flex align-items-center'>
                                                        <div className="btn bg-white rounded-circle shadow">
                                                            <IoPricetags />
                                                        </div>
                                                        <div className="dropdown ms-2">
                                                            <button className="btn bg-white rounded-circle shadow" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <BsThreeDots />
                                                            </button>
                                                            <ul className="dropdown-menu">
                                                                <li><Link className="dropdown-item ex-small" to="#">Edit</Link></li>
                                                                <li><Link className="dropdown-item ex-small" to="#">Move Forward</Link></li>
                                                                <li><Link className="dropdown-item ex-small" to="#">Move Backward</Link></li>
                                                                <li><Link className="dropdown-item ex-small" to="#">Make cover photo</Link></li>
                                                                <li><Link className="dropdown-item ex-small" to="#">Delete</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}
                                <input
                                    type="file"
                                    className="d-none"
                                    id={`input-file-${index}`}
                                    onChange={(event) => handleImageUpload(event, index)}
                                />
                                {errorMessages[index] && (
                                    <span className="text-danger">{errorMessages[index]}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row border-bottom mx-2">
                    <div className="col-xl-8 p-0">
                        <div className="row">
                            <div className="col-6 mb-3">
                                <label htmlFor="" className='fw-semi'>Property Title</label>
                                <input type="text" placeholder='Type property title here' className='inputstyle bg-white' />
                            </div>
                            <div className="col-6 mb-3">
                                <label htmlFor="" className='fw-semi'>Property Title</label>
                                <select name="" id="" className='inputstyle bg-white'>
                                    <option value="">Select </option>
                                </select>
                            </div>
                            <div className="col-6 mb-3">
                                <label htmlFor="" className='fw-semi'>Property Address</label>
                                <div className='d-flex align-items-center inputstyle bg-white'>
                                    <div>
                                        <CiSearch className='bg-blue fs-3 rounded-2 text-white p-1' />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" className='border-0 px-2' placeholder='Address here' />
                                    </div>
                                    <div>
                                        <CiEdit className='fs-5' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <label htmlFor="" className='fw-semi'>Internal Name</label>
                                <input type="text" placeholder='Type here' className='inputstyle bg-white' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 align-items-end border-bottom pb-2">
                    <h5 className='fw-semi'>Property Availability</h5>
                    <div className="col-xl-8">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <RoomCounter label="Bedroom" count={bedroomCount} setCount={setBedroomCount} />
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <RoomCounter label="Bathroom" count={bathroomCount} setCount={setBathroomCount} />
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <RoomCounter label="Bed" count={bedCount} setCount={setBedCount} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <label htmlFor="" className='fw-semi'>Property Size</label>
                                <input type="text" placeholder='Type property title here' className='inputstyle bg-white' />
                            </div>
                            <div className="col-sm-6 mb-3">
                                <label htmlFor="" className='fw-semi'>Property Unit</label>
                                <select name="" id="" className='inputstyle bg-white'>
                                    <option value="">Sq. ft.</option>
                                    <option value="">m per square</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-8">
                        <div>
                            <label htmlFor="" className='fw-semi'>Listing Title</label>
                            <div className='d-flex inputstyle align-items-center bg-white'>
                                <input type="text" className='border-0 w-100' />
                                <RiFileEditLine />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="" className='fw-semi'>Listing Description</label>
                            <div className='d-flex inputstyle  bg-white'>
                                <textarea className='border-0 w-100' rows={6} placeholder='Located in central La Crosse, we offer: - washer and dryer - fully fenced-in yard - dogs allowed
                                (with pet fee)- King beds with Helix mattresses on every bed - fully stocked...'></textarea>
                                <RiFileEditLine />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center mt-4'>
                    <div>
                        <button className='bg-blue text-white rounded-2 py-2 px-4 border-blue fw-semi'><FiChevronRight className='mb-1'/>Expand All</button>
                    </div>
                    <div className='ms-3'>
                        <button className='bg-lgrey text-blue rounded-2 py-2 px-4 border fw-semi'><FiChevronRight className='mb-1'/>Collapse All</button>
                    </div>
                </div>
                <div>
                    <DetailPropertyAccordion/>
                </div>
            </form>
        </div>
    );
}

const RoomCounter = ({ label, count, setCount }) => {
    const modifyCount = (increment) => {
        if (increment) {
            setCount(count + 1);
        } else if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="room-counter-container bg-white border-0">
            <span className="room-counter-label">{label}</span>
            <div className="room-counter-wrapper">
                <button type='button' className="room-counter-button" onClick={() => modifyCount(false)}>
                    <span>−</span>
                </button>
                <span className="room-counter-count">{count}</span>
                <button type='button' className="room-counter-button" onClick={() => modifyCount(true)}>
                    <span>+</span>
                </button>
            </div>
        </div>
    );
};

export default Detail;
