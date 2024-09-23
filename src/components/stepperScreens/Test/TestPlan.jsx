import React from 'react';
import { Group, Text, Select, Button, Container, Paper ,Space} from '@mantine/core';
import { IconRun } from '@tabler/icons-react';
import ProductCard from '../Product/ProductCard';
import { useNavigate } from 'react-router-dom';
import { useStepper } from '../../stepper/StepperContext'
function TestPlan() {



  const { setActiveStep } = useStepper(); // Use the context to set the active step

  const goToExport = () => {
    setActiveStep(4); // Set active step to 2 (third step)
  };



  return (
    <Container size="lg" mt="xl">
      <ProductCard/>
      <Space h="xl" />
      {/* Header */}
      <Group position="apart" mb="md">
        <Group>
          <Text size="xl" weight={700}>
            Test Plan
          </Text>
          <IconRun size={24} color='green'/>
        </Group>
      </Group>

      {/* Dropdown */}
      <Paper shadow="xs" withBorder>
        <Select
          data={['Description']}
          placeholder="Description"
          rightSectionWidth={30}
          styles={{ rightSection: { pointerEvents: 'none' } }}
        />
      </Paper>

      {/* Buttons */}
      <Group position="center" mt="xl" style={{ justifyContent: 'space-between' }}>
    <Button variant="filled" color="#23295A" size="sm">
      Save
    </Button>
    
    <Button variant="filled" color="#23295A" size="sm" onClick={goToExport}>
     Export
    </Button>
    
    </Group>
    </Container>
  );
}

export default TestPlan;
