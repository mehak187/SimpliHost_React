import React, { useState } from 'react';
import FolderImg from '../../assets/img/folder.png';

function UploadImages() {
    const [previewImage, setPreviewImage] = useState(null);

    // Function to handle file input change
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container pt-5 pb-4">
            <div className="row justify-content-between">
                <div className="col-5">
                    <div>
                        <p className="bg-lgrey rounded-pill py-2 px-4 max fw-semi border">Step 04</p>
                    </div>
                    <h2 className="step-font mt-4">Add Some Photos of Your Place!</h2>
                    <p className="fw-normal lh-2 mt-3">
                        You’ll need 5 photos to kick things off, but feel free to add more or make changes later!
                    </p>
                </div>
                <div className="col-6">
                    <div className="bg-lgrey d-flex flex-column align-items-center justify-content-center b-img">
                        <div>
                            {previewImage ? (
                                <img src={previewImage} alt="Preview" className="folder-img mb-3" />
                            ) : (
                                <img src={FolderImg} alt="Upload Folder" className="folder-img mb-3" />
                            )}
                        </div>
                        <div className="mt-3">
                            <label className="rounded-pill bg-lblue text-blue fw-semi px-3 py-2 upload-label">
                                Upload Photo
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    className="d-none" 
                                    onChange={handleImageUpload} 
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadImages;
