// import React from 'react'
// import { Title,Paper, Group,Text ,Stepper,Flex} from '@mantine/core'
// import { FaDatabase } from 'react-icons/fa';
// import '@mantine/core/styles.layer.css';

// import Steppper from './stepper/Steppper';
// import { Outlet } from 'react-router-dom';
// import Sidebar from './sidebar/Sidebar';
// import { useState } from 'react';
// function Create() {
//   const [sidebarOpen, setSidebarOpen] = useState(false); 
//   return (
//     <Flex direction="column">
// <Sidebar opened={sidebarOpen} setOpened={setSidebarOpen} />
//     <div style={{ display: 'flex', alignItems: 'center'  }}>
//     <FaDatabase size={30} />
    
//     <Title order={2} weight={700} >
//       Create Master Data
//     </Title>


//   </div>
//   <br></br>
  
//   < Steppper/>
  
//   </Flex>
  
//   )
// }
// export default Create


// import React, { useState } from 'react';
// import { Title, Flex } from '@mantine/core';
// import { FaDatabase } from 'react-icons/fa';
// import Steppper from './stepper/Steppper';
//  import Sidebar from './sidebar/Sidebar';
// import '@mantine/core/styles.layer.css';
// function Create() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div style={{ display: 'flex' }}>
     
//       <Sidebar opened={sidebarOpen} setOpened={setSidebarOpen} />

     
//       <div
//         style={{
//           marginLeft: sidebarOpen ? '100' : '80', 
//           transition: 'margin-left 0.3s',
//           flexGrow: 1,
//           padding: '20px',
//         }}
//       >
//         {/* Title section */}
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <FaDatabase size={30} style={{ marginRight: '10px' }} />
//           <Title order={2} weight={700}>
//             Create Master Data
//           </Title>
//         </div>
//         <br />

//         {/* Stepper component */}
//         <Steppper />
//       </div>
//     </div>
//   );
// }

// export default Create;


import React, { useState } from 'react';
import { Title } from '@mantine/core';
import { FaDatabase } from 'react-icons/fa';
import Steppper from './stepper/Steppper';
import Sidebar from './sidebar/Sidebar';
import '@mantine/core/styles.layer.css';

function Create() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar component */}
      <Sidebar opened={sidebarOpen} setOpened={setSidebarOpen} />

      {/* Main content area */}
      <div
        style={{
          marginLeft: sidebarOpen ? '200px' : '80px', // Adjust margin for sidebar
          marginTop: '60px', // Add top margin or padding to avoid header overlap
          transition: 'margin-left 0.3s',
          flexGrow: 1,
          padding: '20px',
        }}
      >
        {/* Title section */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaDatabase size={30} style={{ marginRight: '10px' }} />
          <Title order={2} weight={700}>
            Create Master Data
          </Title>
        </div>
        <br />

        {/* Stepper component */}
        <Steppper />
      </div>
    </div>
  );
}

export default Create;
