

// import React from 'react';
// import { Accordion, Title, Group, Container ,Button,Space} from '@mantine/core';
// import { IconRun } from '@tabler/icons-react';
// import ProductCard from '../Product/ProductCard';
// import { useNavigate } from 'react-router-dom';
// import { useStepper } from '../../stepper/StepperContext'

// function TestDetails() {


//   const { setActiveStep } = useStepper(); // Use the context to set the active step

//   const goToTestPlan = () => {
//     setActiveStep(3); // Set active step to 2 (third step)
//   };

//   return (
//   <Container size="lg">
//     <ProductCard/>
//     <Space h="xl" />
//       <Group position="apart" mb="md">
//         <Title order={4} weight={700}>
//           Test Details
//         </Title>
//         <IconRun size={20}  color='green'/>
//       </Group>
//       <Accordion>
//         <Accordion.Item value="description">
//           <Accordion.Control>Description</Accordion.Control>
//           <Accordion.Panel>
//             Content for Description
//           </Accordion.Panel>
//         </Accordion.Item>

//         <Accordion.Item value="water">
//           <Accordion.Control>Water</Accordion.Control>
//           <Accordion.Panel>
//             Content for Water
//           </Accordion.Panel>
//         </Accordion.Item>

//         <Accordion.Item value="assay">
//           <Accordion.Control>Assay</Accordion.Control>
//           <Accordion.Panel>
//             Content for Assay
//           </Accordion.Panel>
//         </Accordion.Item>

//         <Accordion.Item value="impurities">
//           <Accordion.Control>Impurities</Accordion.Control>
//           <Accordion.Panel>
//             Content for Impurities
//           </Accordion.Panel>
//         </Accordion.Item>
//       </Accordion>
//       <Group position="center" mt="xl" style={{ justifyContent: 'space-between' }}>
//     <Button variant="filled" color="#23295A" size="sm">
//       Save
//     </Button>
//     <Group>
//     <Button variant="filled" color="#23295A" size="sm">
//      Export
//     </Button>
//     <Button variant="filled" color="#23295A" size="sm" onClick={goToTestPlan}>
//       Generate Test Plan
//     </Button>

//     </Group>
//     </Group>
//       </Container>
//   );
// }

// export default TestDetails;


import React, { useState } from 'react';
import { Accordion, Title, Group, Container, Button, Space, Modal, Text } from '@mantine/core';
import { IconRun } from '@tabler/icons-react';
import ProductCard from '../Product/ProductCard';
import { useNavigate } from 'react-router-dom';
import { useStepper } from '../../stepper/StepperContext';
import AccordianComponent from '../../common/AccordionComponent'

function TestDetails() {
  const { setActiveStep } = useStepper(); // Use the context to set the active step
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToTestPlan = () => {
    setActiveStep(3); // Set active step to 3 (fourth step)
  };

  const handleExportClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Container size="lg">
      <ProductCard />
      <Space h="xl" />
      <Group position="apart" mb="md">
        <Title order={4} weight={700}>
          Test Details
        </Title>
        <IconRun size={20} color="green" />
      </Group>
      <AccordianComponent/>
      {/* <Accordion>
        <Accordion.Item value="description">
          <Accordion.Control>Description</Accordion.Control>
          <Accordion.Panel>Content for Description</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="water">
          <Accordion.Control>Water</Accordion.Control>
          <Accordion.Panel>Content for Water</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="assay">
          <Accordion.Control>Assay</Accordion.Control>
          <Accordion.Panel>Content for Assay</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="impurities">
          <Accordion.Control>Impurities</Accordion.Control>
          <Accordion.Panel>Content for Impurities</Accordion.Panel>
        </Accordion.Item>
      </Accordion> */}
      <Group position="center" mt="xl" style={{ justifyContent: 'space-between' }}>
        <Button variant="filled" color="#23295A" size="sm">
          Save
        </Button>
        <Group>
          <Button variant="filled" color="#23295A" size="sm" onClick={handleExportClick}>
            Export
          </Button>
          <Button variant="filled" color="#23295A" size="sm" onClick={goToTestPlan}>
            Generate Test Plan
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

export default TestDetails;
