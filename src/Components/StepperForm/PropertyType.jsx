import React, { useState } from 'react';
import Lease from '../../assets/img/lease.png';
import Apartment from '../../assets/img/apartment.png';


function PropertyType() {
  const [selectedProperty, setSelectedProperty] = useState('');

  // Handler for selecting a property type
  const handleSelectProperty = (propertyType) => {
    setSelectedProperty(propertyType);
  };

  // Property options data (for easier management and rendering)
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
    {
      label: 'Cabin',
      description: 'A cozy, typically rustic home, often located in nature or remote areas',
      imgSrc: Lease,
      value: 'cabin',
    },
    {
      label: 'Other',
      description: 'Any property type that doesn\'t fit the usual categories — be creative!',
      imgSrc: Lease,
      value: 'other',
    },
  ];

  return (
    <div className='container py-5'>
      <div className="row  px-4">
        <div className="col-6">
          <div>
            <p className='bg-lgrey rounded-pill py-2 px-4 max fw-semi border'>Step 01</p>
          </div>
          <div>
            <h2 className='font-step fw-semi'>Which Best Describes Your Property?</h2>
            <p className='lh-2'>Don’t worry, we’ll dive into the details like amenities and photos later!</p>
          </div>
        </div>

        <div className="col-6">
          {propertyOptions.map((property) => (
            <div
              key={property.value}
              className={`bg-lgrey p-2 rounded-3 border d-flex justify-content-between align-items-center mb-3 ${selectedProperty === property.value ? 'selected-border' : ''}`}
              onClick={() => handleSelectProperty(property.value)}
            >
              <div className='d-flex align-items-center'>
                <div>
                  <img src={property.imgSrc} alt={property.label} className='lease-img shadow' />
                </div>
                <div className='ms-2'>
                  <h6 className='fw-semi mb-0'>{property.label}</h6>
                  <p className='mb-0'>{property.description}</p>
                </div>
              </div>
              <div>
                <input
                  type="radio"
                  className='rad'
                  checked={selectedProperty === property.value}
                  onChange={() => handleSelectProperty(property.value)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyType;
