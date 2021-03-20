import React, { useContext } from 'react';
import { UserContext } from '../../App';

const GoogleMap = () => {
  const { search } = useContext(UserContext);

  return (
    <>
      <iframe
        className="my-5 w-100"
        title="Google Map"
        src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDMdlO3qKX7wG6u0KUkTJuVH9IUA57oAm4&origin=Bangladesh+${search.pickFrom || "Dhaka"}&destination=Bangladesh+${search.pickTo || "Dhaka"}&avoid=tolls|highways`}
        width="800"
        height="650"
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy">
      </iframe>
    </>
  );
};

export default GoogleMap;