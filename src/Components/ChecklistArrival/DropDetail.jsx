import React, { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { MdDelete, MdDriveFileMove } from 'react-icons/md';
import { IoIosCloseCircle } from 'react-icons/io';
import { FaImage, FaRegCopy } from "react-icons/fa6";

function DropDetail() {
    const [copyOpen, setCopyOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [dropOpen, setDropOpen] = useState(false);
    const [moveOpen, setMoveOpen] = useState(false);
    const [checklistOpen, setChecklistOpen] = useState(false);

    const toggleCopyMenu = () => {
        setCopyOpen(prevState => !prevState);
        setCategoryOpen(false);
        setMoveOpen(false);
        setChecklistOpen(false);
    };

    const toggleCategoryMenu = () => {
        setCategoryOpen(prevState => !prevState);
        setCopyOpen(false);
        setMoveOpen(false);
        setChecklistOpen(false);
    };

    const toggleChecklistMenu = () => {
        setChecklistOpen(prevState => !prevState);
        setCopyOpen(false);
        setMoveOpen(false);
        setCategoryOpen(false);
    };

    const toggleDropMenu = () => {
        setDropOpen(prevState => !prevState);
        setCopyOpen(false);
        setCategoryOpen(false);
        setMoveOpen(false);
        setChecklistOpen(false);
    };

    const toggleMoveMenu = () => {
        setMoveOpen(prevState => !prevState);
        setCopyOpen(false);
        setCategoryOpen(false);
        setChecklistOpen(false);
    };

    return (
        <div className="dropdown">
            <button className="btn bg-white rounded-circle shadow" type="button" onClick={toggleDropMenu}>
                <BsThreeDots />
            </button>
            {dropOpen && (
                <ul className="dropdown-menu end-0 d-lg-flex d-block flex-wrap align-items-center max mb-0 p-2 shadow border-0">
                    <div className='d-flex align-items-center'>
                    <div className='bg-blue p-lg-3 p-2 rounded-3 max'>
                        <p className='text-white mb-0'>03</p>
                    </div>
                    <div className='ms-2'>
                        <p className='mb-0 fw-semi'>Checklist Selected</p>
                        <BsThreeDots className='text-blue'/>
                    </div>
                    </div>
                    <div className='d-sm-flex align-items-center justify-content-end'>
                    <div className='ms-2 text-center border-end px-2 position-relative'>
                        <div onClick={toggleCopyMenu}>
                            <FaRegCopy className='bg-lgrey p-2 fs-1 rounded-3 pointer' />
                            <p className='ex-small mb-0'>Copy</p>
                        </div>
                        {copyOpen && (
                            <div className='position-copy position-absolute bg-white max start-0 shadow' style={{ zIndex: 10 }}>
                                <p className='p-3 mb-0'>Copy to Category</p>
                                <hr className='m-0' />
                                <p className='p-3 mb-0'>Copy to Checklist</p>
                            </div>
                        )}
                    </div>
                    <div className='text-center border-end px-2'>
                        <div>
                            <MdDelete className='bg-lgrey p-2 fs-1 rounded-3 pointer' />
                            <p className='ex-small mb-0'>Delete</p>
                        </div>
                    </div>
                    <div className='text-center border-end px-2 position-relative'>
                        <div onClick={toggleMoveMenu}>
                            <MdDriveFileMove className='bg-lgrey p-2 fs-1 rounded-3 pointer' />
                            <p className='ex-small mb-0'>Move</p>
                        </div>
                        {moveOpen && (
                            <div className='position-copy position-absolute bg-white max end-0 shadow' style={{ zIndex: 10 }}>
                                <div className=''>
                                    <p className='p-3 mb-0 pointer' onClick={toggleCategoryMenu}>Move to Category</p>
                                </div>
                                <hr className='m-0' />
                                <div className=''>
                                    <p className='p-3 mb-0 pointer' onClick={toggleChecklistMenu}>Move to Checklist</p>

                                </div>
                            </div>
                        )}
                        {categoryOpen && (
                            <div className='position-copy position-absolute bg-white max end-0 shadow' style={{ zIndex: 20 }}>
                                <div className='d-flex align-items-center justify-content-between bg-blue p-3'>
                                    <p className='mb-0 text-white'>Move to Category</p>
                                    <IoIosCloseCircle className='text-danger ms-3 pointer' onClick={toggleCategoryMenu} />
                                </div>
                                <p className='p-3 mb-0'>Kitchen</p>
                                <hr className='m-0' />
                                <p className='p-3 mb-0'>Living Room</p>
                                <hr className='m-0' />
                                <p className='p-3 mb-0'>Bathroom No. 1</p>
                                <hr className='m-0' />
                                <p className='p-3 mb-0'>Bathroom No. 2</p>
                                <hr className='m-0' />
                                <p className='p-3 mb-0'>Bedroom No. 2</p>
                                <hr className='m-0' />
                                <p className='p-3 mb-0'>Basement</p>
                            </div>
                        )}
                        {checklistOpen && (
                            <div className='position-copy position-absolute bg-white max end-0 shadow' style={{ zIndex: 20 }}>
                                <div className='d-flex align-items-center justify-content-between bg-blue p-3'>
                                    <p className='mb-0 text-white'>Move to Checklist</p>
                                    <IoIosCloseCircle className='text-danger ms-3 pointer' onClick={toggleChecklistMenu} />
                                </div>
                                <p className='p-3 mb-0'>Checklist Item 1</p>
                                <hr className='m-0' />
                                <p className='p-3 mb-0'>Checklist Item 2</p>
                                <hr className='m-0' />
                                <p className='p-3 mb-0'>Checklist Item 3</p>
                                <hr className='m-0' />
                            </div>
                        )}
                    </div>
                    <div className='text-center border-end px-2'>
                        <FaImage className='bg-lgrey p-2 fs-1 rounded-3 pointer' />
                        <p className='ex-small mb-0'>Required Image</p>
                    </div>
                    <div className='px-2 text-center'>
                        <IoIosCloseCircle className='text-danger p-2 fs-1 rounded-3 pointer' onClick={toggleDropMenu} />
                    </div>
                    </div>
                </ul>
            )}
        </div>
    );
}

export default DropDetail;
