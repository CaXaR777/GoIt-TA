// // Filter.js
// import { useState } from "react";

// export const Filter = ({ handleFilterChange }) => {
//   const [location, setLocation] = useState("");
//   const [equipment, setEquipment] = useState([]);
//   const [vehicleType, setVehicleType] = useState("");

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const handleEquipmentChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setEquipment((prevEquipment) => [...prevEquipment, value]);
//     } else {
//       setEquipment((prevEquipment) =>
//         prevEquipment.filter((item) => item !== value)
//       );
//     }
//   };

//   const handleVehicleTypeChange = (e) => {
//     setVehicleType(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const filters = {
//       location,
//       equipment,
//       vehicleType,
//     };
//     handleFilterChange(filters);
//   };

//   return (
//     <div className="  ">
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="location">Location:</label>
//           <input
//             type="text"
//             id="location"
//             value={location}
//             onChange={handleLocationChange}
//           />
//         </div>
//         <div>
//           <p>Vehicle Equipment List:</p>
//           <label>
//             <input
//               type="checkbox"
//               value="ac"
//               onChange={handleEquipmentChange}
//             />
//             AC
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               value="transmission"
//               onChange={handleEquipmentChange}
//             />
//             Transmission
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               value="kitchen"
//               onChange={handleEquipmentChange}
//             />
//             Kitchen
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               value="tv"
//               onChange={handleEquipmentChange}
//             />
//             TV
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               value="shower"
//               onChange={handleEquipmentChange}
//             />
//             Shower
//           </label>
//         </div>
//         <div>
//           <p>Vehicle Type List:</p>
//           <label>
//             <input
//               type="radio"
//               name="vehicleType"
//               value="van"
//               onChange={handleVehicleTypeChange}
//             />
//             Van
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="vehicleType"
//               value="fullyIntegrated"
//               onChange={handleVehicleTypeChange}
//             />
//             Fully Integrated
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="vehicleType"
//               value="alcove"
//               onChange={handleVehicleTypeChange}
//             />
//             Alcove
//           </label>
//         </div>
//         <button type="submit">Apply Filters</button>
//       </form>
//     </div>
//   );
// };
