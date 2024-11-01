// import React from "react";
// import { useState } from "react";

// function ItemList() {

   
// return(


//     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 4fr))', gap: '30px', margin: 10 }}>
//   {food.map((item, index) => (
//     <div
//       key={item.id}
//       style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', width: 350, height: 225 }}
//       onMouseEnter={() => setHoveredIndex(index)}
//       onMouseLeave={() => setHoveredIndex(null)}
//     >
//       <div
//         style={{
        //   position: 'absolute',
//           width: '100%',
//           height: '100%',
//           backgroundColor: hoveredIndex === index ? '' : 'rgba(0,0,0,0.2)',
//           borderRadius: 20,
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//           padding: 10,
//           boxSizing: 'border-box',
//           zIndex: 2,
//           transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
//           transition: 'transform 0.3s ease',
//         }}
//       >
//         <p style={{ fontWeight: 'bold', fontSize: 30, color: "white" }}>{item.name}</p>
//         <p style={{ color: "yellowgreen", fontSize: 14 }}>{item.category}</p>
//         <button
//           style={{
//             cursor: 'pointer',
//             backgroundColor: hoveredIndex === index ? "yellowgreen" : "white",
//             color: hoveredIndex === index ? "white" : "yellowgreen",
//             borderRadius: 20,
//             padding: '10px 20px',
//             width: 109,
//             fontWeight: "bold",
//             border: 'none', 
//           }}
//         >
//           Order Now
//         </button>
//       </div>

//       <img
//         style={{
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           borderRadius: 20,
//           transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
//           transition: 'transform 0.3s ease',
//           zIndex: 1,
//         }}
//         src={item.image}
//         alt={item.name}
//       />
//     </div>
//   ))}
// </div>



// )



    
// }

// export default ItemList;





