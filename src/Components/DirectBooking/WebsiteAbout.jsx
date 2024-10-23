import React, { useState } from 'react';
import SmallImg from '../../assets/img/small-img.png';
import { BsThreeDots } from 'react-icons/bs'; // Assuming you're using react-icons for the dots menu

function WebsiteAbout() {
  const [images, setUploadImages] = useState(Array(3).fill(null));
  const maxImages = 3;

  const handleFileChange1 = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage = { id: index + 1, src: reader.result, preview: true };
        setUploadImages((prevImages) => {
          const updatedImages = [...prevImages];
          updatedImages[index] = newImage;
          return updatedImages;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (index) => {
    setUploadImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = null; // Remove image at index
      return updatedImages;
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-xl-8">
          <div className="row mt-4">
            <div className="col-12 mt-3">
              <label className="fw-semi">Main Title</label>
              <textarea className="inputstyle bg-white py-2" rows="3"></textarea>
            </div>
            <div className="col-12 mt-3">
              <label className="fw-semi">Sub Title</label>
              <textarea className="inputstyle bg-white py-2" rows="3"></textarea>
            </div>
          </div>

          <div className="row mt-3">
            {images.map((image, index) => (
              <div className="col-md-4 col-sm-6 mb-3" key={index}>
                <div className="position-relative">
                  {image?.preview ? (
                    <img src={image.src} alt={`Preview ${index + 1}`} className="img-pr w-100" />
                  ) : (
                    <div className="position-relative text-center border rounded-2 h-100 d-flex flex-column justify-content-center align-items-center p-3">
                      <img src={SmallImg} alt="Placeholder" />
                      <h6 className="text-center">Drag and Drop</h6>
                      <label
                        htmlFor={`file-u-${index}`}
                        className="text-white bg-blue py-1 px-4 rounded-pill shadow"
                      >
                        Upload
                      </label>
                      <input
                        type="file"
                        id={`file-u-${index}`}
                        className="d-none"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={(event) => handleFileChange1(event, index)}
                      />
                    </div>
                  )}

                  {image?.preview && (
                    <>
                      <div className="position-absolute top-0 start-0 m-2">
                        <div className="dropdown">
                          <button
                            className="btn btn-light text-dark rounded-circle shadow p-1 d-inline-flex"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <BsThreeDots />
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Edit</a></li>
                            <li><a className="dropdown-item" href="#">Move Forward</a></li>
                            <li><a className="dropdown-item" href="#">Move Backward</a></li>
                            <li>
                              <button
                                className="dropdown-item"
                                onClick={() => handleDeleteImage(index)}
                              >
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="position-absolute top-0 start-100 translate-middle badge">
                        <p className="bg-lblue p-2 mb-0 rounded-circle">{index + 1}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteAbout;
