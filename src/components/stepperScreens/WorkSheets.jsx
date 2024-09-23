
// import React, { useState } from 'react';
// import { Button, Group, Title, Container, Space, Modal, Text } from '@mantine/core';
// import { IconRun } from '@tabler/icons-react';
// import ProductCard from '../stepperScreens/Product/ProductCard';
// import { useNavigate } from 'react-router-dom';
// import { useStepper } from '../stepper/StepperContext';
// import { Accordion } from '@mui/material';
// import AccordionComponent from '../common/AccordionComponent';

// function WorkSheets() {
//   const { setActiveStep } = useStepper(); // Use the context to set the active step
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const goToTestDetails = () => {
//     setActiveStep(2); // Set active step to 2 (third step)
//   };

//   const handleExportClick = () => {
//     setIsModalOpen(true);
//   };

//   return (
//     <Container size="lg">
//       <ProductCard />
//       <Space h="xl" />
//       <Group position="apart">
//         <Group>
//           <Title order={4} style={{ fontWeight: 700 }}>
//             Work Sheet Details
//           </Title>
//           <IconRun size={24} color="green" />
//         </Group>
//       </Group>
// <AccordionComponent/>
//       <Group position="center" mt="xl" style={{ justifyContent: 'space-between' }}>
//         <Button variant="filled" color="#23295A" size="sm">
//           Save
//         </Button>
//         <Group>
//           <Button variant="filled" color="#23295A" size="sm" onClick={handleExportClick}>
//             Export
//           </Button>
//           <Button variant="filled" color="#23295A" size="sm" onClick={goToTestDetails}>
//             Generate Tests
//           </Button>
//         </Group>
//       </Group>

//       <Modal
//         opened={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         title="Description"
//         centered
//         overlayProps={{ blur: 2 }}
//         withCloseButton
//       >
//         <Text>export</Text>
//       </Modal>
//     </Container>
//   );
// }

// export default WorkSheets;





// import React, { useEffect, useState } from 'react';
// import { Button, Group, Title, Container, Space, Modal, Text } from '@mantine/core';
// import { IconRun } from '@tabler/icons-react';
// import ProductCard from '../stepperScreens/Product/ProductCard';
// import { useStepper } from '../stepper/StepperContext';
// import AccordionComponent from '../common/AccordionComponent';
// import Notify from '../Notify/Notify'; // Import your custom Notify component

// function WorkSheets() {
//   const { setActiveStep } = useStepper(); // Use the context to set the active step
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [notification, setNotification] = useState(null);

//   useEffect(() => {
//     setNotification({
//       message: 'worksheets are loading',
//       color: 'blue',
//       isInProgress: true ,
//     });

//     const timer = setTimeout(() => {
//       setNotification(null);
//     }, 10000);

//     return () => clearTimeout(timer);
//   }, []);

//   const goToTestDetails = () => {
//     setActiveStep(2); // Set active step to 2 (third step)
//   };

//   const handleExportClick = () => {
//     setIsModalOpen(true);
//   };

//   return (
//     <Container size="lg">
//       <Notify notification={notification} onClose={() => setNotification(null)} />
//       <ProductCard />
//       <Space h="xl" />
//       <Group position="apart">
//         <Group>
//           <Title order={4} style={{ fontWeight: 700 }}>
//             Work Sheet Details
//           </Title>
//           <IconRun size={24} color="green" />
//         </Group>
//       </Group>
//       <AccordionComponent />
//       <Group position="center" mt="xl" style={{ justifyContent: 'space-between' }}>
//         <Button variant="filled" color="#23295A" size="sm">
//           Save
//         </Button>
//         <Group>
//           <Button variant="filled" color="#23295A" size="sm" onClick={handleExportClick}>
//             Export
//           </Button>
//           <Button variant="filled" color="#23295A" size="sm" onClick={goToTestDetails}>
//             Generate Tests
//           </Button>
//         </Group>
//       </Group>

//       <Modal
//         opened={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         title="Description"
//         centered
//         overlayProps={{ blur: 2 }}
//         withCloseButton
//       >
//         <Text>export</Text>
//       </Modal>
//     </Container>
//   );
// }

// export default WorkSheets;

import React, { useEffect, useState } from 'react';
import { Button, Group, Title, Container, Space, Modal, Text } from '@mantine/core';
import { IconRun } from '@tabler/icons-react';
import ProductCard from '../stepperScreens/Product/ProductCard';
import { useStepper } from '../stepper/StepperContext';
import AccordionComponent from '../common/AccordionComponent';
import Notify from '../Notify/Notify'; // Import your custom Notify component

function WorkSheets() {
  const { setActiveStep } = useStepper(); // Use the context to set the active step
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    setNotification({
      message: 'worksheets are loading',
      color: 'blue',
      isInProgress: true,
    });

    const timer = setTimeout(() => {
      setNotification(null);
      setIsLoading(false); // Set loading to false after completion
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const goToTestDetails = () => {
    setActiveStep(2); // Set active step to 2 (third step)
  };

  const handleExportClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Container size="lg">
      <Notify notification={notification} onClose={() => setNotification(null)} />
      <ProductCard />
      <Space h="xl" />
      <Group position="apart">
        <Group>
          <Title order={4} style={{ fontWeight: 700 }}>
            Work Sheet Details
          </Title>
          <IconRun size={24} color="green" />
        </Group>
      </Group>

      {/* Conditionally render the AccordionComponent based on loading status */}
      {!isLoading && <AccordionComponent />}

      <Group position="center" mt="xl" style={{ justifyContent: 'space-between' }}>
        <Button variant="filled" color="#23295A" size="sm">
          Save
        </Button>
        <Group>
          <Button variant="filled" color="#23295A" size="sm" onClick={handleExportClick}>
            Export
          </Button>
          <Button variant="filled" color="#23295A" size="sm" onClick={goToTestDetails}>
            Generate Tests
          </Button>
        </Group>
      </Group>

      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Description"
        centered
        overlayProps={{ blur: 2 }}
        withCloseButton
      >
        <Text>export</Text>
      </Modal>
    </Container>
  );
}

export default WorkSheets;
