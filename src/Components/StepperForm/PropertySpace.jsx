import React, { useState } from 'react';
import Lease from '../../assets/img/lease.png';
import Apartment from '../../assets/img/apartment.png';

function PropertySpace() {
    // State to manage selected property type and counts for bedrooms and beds
    const [selectedProperty, setSelectedProperty] = useState('');
    const [bedroomCount, setBedroomCount] = useState(2);
    const [bedCount, setBedCount] = useState(2);

    // Property options data for rendering
    const propertyOptions = [
        {
            label: 'House',
            description: 'A standalone property with private living space and yard',
            imgSrc: Lease,
            value: 'house',
        },
        {
            label: 'Apartment',
            description: 'A unit within a larger building, often sharing walls and amenities with other tenants',
            imgSrc: Apartment,
            value: 'apartment',
        },
        {
            label: 'Condo',
            description: 'Similar to an apartment but individually owned, often with shared building amenities',
            imgSrc: Lease,
            value: 'condo',
        },
    ];

   
    const handleSelectProperty = (propertyType) => setSelectedProperty(propertyType);

   
    const modifyCount = (count, setCount, increment) => {
        if (increment) {
            setCount(count + 1);
        } else if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="container py-5">
            <div className="row px-lg-4 justify-content-between">
                <div className="col-xl-5 col-lg-6">
                    <p className="bg-lgrey rounded-pill py-2 px-4 max fw-semi border">Step 03</p>
                    <h2 className="font-step fw-semi lh-base">Let’s Get the Basics on Your Space!</h2>
                    <p>Don’t worry, we’ll dive into the details like amenities and photos later!</p>
                </div>

                <div className="col-lg-6">
                    {propertyOptions.map((property) => (
                        <div
                            key={property.value}
                            className={`bg-lgrey p-2 rounded-3 border d-flex justify-content-between align-items-center mb-3 ${
                                selectedProperty === property.value ? 'selected-border' : ''
                            }`}
                            onClick={() => handleSelectProperty(property.value)}
                        >
                            <div className="d-flex align-items-center">
                                <img src={property.imgSrc} alt={property.label} className="lease-img shadow" />
                                <div className="ms-2">
                                    <h6 className="fw-semi mb-0">{property.label}</h6>
                                    <p className="mb-0 font-des">{property.description}</p>
                                </div>
                            </div>
                            <div className='ms-2'>
                            <input
                                type="radio"
                                className="rad"
                                checked={selectedProperty === property.value}
                                onChange={() => handleSelectProperty(property.value)}
                            />
                            </div>
                        </div>
                    ))}

                    {/* Counter for Bedrooms */}
                    <RoomCounter label="Bedroom" count={bedroomCount} setCount={setBedroomCount} />
                    
                    {/* Counter for Beds */}
                    <RoomCounter label="Number of Beds" count={bedCount} setCount={setBedCount} />

                    {/* Property size and unit inputs */}
                    <div className="row">
                        <div className="col-sm-6 mb-3">
                            <label className="fw-semi">Property Size</label>
                            <input type="text" className="form-control shadow-none" placeholder="Type here" />
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label className="fw-semi">Property Unit</label>
                            <select className="form-select shadow-none">
                                <option value="square-feet">Square Feet</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Reusable RoomCounter component for Bedrooms and Beds
const RoomCounter = ({ label, count, setCount }) => {
    return (
        <div style={containerStyle}>
            <span style={labelStyle}>{label}</span>
            <div style={counterWrapperStyle}>
                <button style={buttonStyle} onClick={() => modifyCount(count, setCount, false)}>
                    <span>−</span>
                </button>
                <span style={countStyle}>{count}</span>
                <button style={buttonStyle} onClick={() => modifyCount(count, setCount, true)}>
                    <span>+</span>
                </button>
            </div>
        </div>
    );
};

// Inline styles (optional, replace with CSS for better maintainability)
const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    width: '100%',
    marginBottom: '10px',
};

const labelStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
};

const counterWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
};

const buttonStyle = {
    border: '1px solid #ccc',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    cursor: 'pointer',
};

const countStyle = {
    fontSize: '18px',
    margin: '0 15px',
};

export default PropertySpace;
