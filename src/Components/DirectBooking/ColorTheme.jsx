import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

function ColorTheme() {
    const [searchBoxColor, setSearchBoxColor] = useState('#3551B6');
    const [primaryColor, setPrimaryColor] = useState('#3551B6');
    const [buttonColor, setButtonColor] = useState('#3551B6');
    const [headerColor, setHeaderColor] = useState('#3551B6');
    const [footerColor, setFooterColor] = useState('#3551B6');
    const [middleColor, setMiddleColor] = useState('#3551B6');

    return (
        <div>
            <h5>Select a Color Scheme for Website</h5>
            <p>Select a color scheme for your widget from our Simplihost site colors, or set a custom color scheme using any hex color code or writing in common HTML color names.
                You update at any time without having to update widget code.</p>
            <div className="row">
                <div className="col-xl-7">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6 mb-2">
                            <label htmlFor="" className='fw-semi'>Select Theme</label>
                            <select name="" id="" className='inputstyle py-2 bg-white'>
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
                        <div className="col-lg-6 col-md-12 col-sm-6 mb-2">
                            <label htmlFor="" className='fw-semi'>Search Box Background Color</label>
                            <div className='d-flex align-items-center'>
                                <input type="color" className='col-in shadow rounded-3'
                                    value={searchBoxColor}
                                    onChange={(e) => setSearchBoxColor(e.target.value)} />
                                <p className='bg-white border rounded-3 w-100 mb-0 p-1'>{searchBoxColor}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-6 mb-2">
                            <label htmlFor="" className='fw-semi'>Primary Color</label>
                            <div className='d-flex align-items-center'>
                                <input type="color" className='col-in shadow rounded-3'
                                    value={primaryColor}
                                    onChange={(e) => setPrimaryColor(e.target.value)} />
                                <p className='bg-white border rounded-3 w-100 mb-0 p-1'>{primaryColor}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-6 mb-2">
                            <label htmlFor="" className='fw-semi'>Button Color</label>
                            <div className='d-flex align-items-center'>
                                <input type="color" className='col-in shadow rounded-3'
                                    value={buttonColor}
                                    onChange={(e) => setButtonColor(e.target.value)} />
                                <p className='bg-white border rounded-3 w-100 mb-0 p-1'>{buttonColor}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-6 mb-2">
                            <label htmlFor="" className='fw-semi'>Header Color</label>
                            <div className='d-flex align-items-center'>
                                <input type="color" className='col-in shadow rounded-3'
                                    value={headerColor}
                                    onChange={(e) => setHeaderColor(e.target.value)} />
                                <p className='bg-white border rounded-3 w-100 mb-0 p-1'>{headerColor}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-6 mb-2">
                            <label htmlFor="" className='fw-semi'>Footer Color</label>
                            <div className='d-flex align-items-center'>
                                <input type="color" className='col-in shadow rounded-3'
                                    value={footerColor}
                                    onChange={(e) => setFooterColor(e.target.value)} />
                                <p className='bg-white border rounded-3 w-100 mb-0 p-1'>{footerColor}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-6 mb-2">
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
                <div className="col-xl-5 col-sm-9 mt-xl-0 mt-3">
                    <div>
                        <h6 className='fw-semi'>Booking Widget Preview</h6>
                        <div className='bg-lgrey border rounded-3 p-3'>
                            <div className='bg-white shadow p-3 rounded-3 d-flex align-items-center'>
                                <div className='border-end w-100'>
                                    <label htmlFor="" className='fw-semi'>Location</label>
                                    <input type="text" className='w-100 border-0 small mt-2' placeholder='Which city do you prefer?' />
                                </div>
                                <div className='bg-blue rounded-circle d-inline-flex p-2 text-white m-2'>
                                    <FaSearch className='fs-5' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <button className='bg-blue text-white py-2 w-100 px-2 border-0 rounded-3'>Live Button Color</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorTheme;
