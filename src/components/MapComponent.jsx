import React from 'react';

const MapComponent = () => {
    return (
        <div className="ud-info-meta map-wrapper" data-aos="zoom-in">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.902976854159!2d79.85896421472043!3d6.90220549501267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sUniversity%20of%20Colombo%20School%20of%20Computing!5e0!3m2!1sen!2slk!4v1636031795046!5m2!1sen!2slk"
                className="map" title="UCSC on Google Maps"/>
        </div>
    );
};

export default MapComponent;
