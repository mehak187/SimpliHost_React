import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const PropertyAddress = () => {
    const [center, setCenter] = useState({ lat: -33.8688, lng: 151.2093 }); // Default center (Sydney)
    const [currentLocation, setCurrentLocation] = useState(null);
    const [address, setAddress] = useState('');

    const mapStyles = {
        height: "300px",
        width: "100%",
        borderRadius: "12px",
    };

    // Get user current location
    const handleUseCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setCenter({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
                setCurrentLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    return (
        <div className='container py-5'>
            <div className="row justify-content-between">
                <div className="col-5">
                    <div>
                        <p className='bg-lgrey rounded-pill py-2 px-4 max fw-semi border'>Step 02</p>
                    </div>
                    <div>
                        <h2 className='font-step fw-semi mt-4'>Enter Property Address</h2>
                        <p className='lh-2'>Don’t worry, we’ll dive into the details like amenities and photos later!</p>
                    </div>
                </div>
                <div className="col-6">
                    <div style={{ width: "100%", padding: "1rem", borderRadius: "12px", border: "1px solid #ccc" }}>
                        <input
                            type="text"
                            value={address}
                            placeholder="Enter your address"
                            onChange={(e) => setAddress(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                marginBottom: "1rem",
                            }}
                        />

                        <button
                            onClick={handleUseCurrentLocation}
                            style={{
                                display: "block",
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "8px",
                                backgroundColor: "#f0f0f0",
                                border: "1px solid #ccc",
                                cursor: "pointer",
                            }}
                        >
                            Use my current location
                        </button>

                        <LoadScript googleMapsApiKey="AIzaSyAu1gwHCSzLG9ACacQqLk-LG8oJMkarNF0">
                            <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={center}>
                                {currentLocation && <Marker position={currentLocation} />}
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyAddress