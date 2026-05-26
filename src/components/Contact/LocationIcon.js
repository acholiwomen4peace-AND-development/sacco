import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

function LocationIcon(props) {
  return (
    <div>
      {/* Default icon */}
      <MdLocationOn />

      {/* Customized icon with props */}
      <FaMapMarkerAlt color="pink" size={props.size} />
    </div>
  );
}export default LocationIcon;