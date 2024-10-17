import React from 'react';
import ListingCardFiltered from '../../Components/Website/ListingCardFiltered';
import SearchFilter from '../../Components/Website/SearchFilter';

function ListingFiltered() {
  return (
    <div>
      <section className="listing-color py-5">
        <div className="container">
          <div className="">
           <SearchFilter />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <p className="mb-0 blue-color fw-semi mt-3">35 places in Lake City</p>
            <div className="col-xl-7">
              <div className="row">
                <ListingCardFiltered />
              </div>
            </div>
            <div className="col-xl-5">
              <div className="myy-shadow p-2 mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.1837066589596!2d74.51258247624337!3d32.46777779972452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eebf05050a257%3A0x65c6ed11df82a794!2sFabulous%20Technology%20Solutions!5e0!3m2!1sen!2s!4v1728309897887!5m2!1sen!2s"
                  width="600"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="w-100"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListingFiltered;
