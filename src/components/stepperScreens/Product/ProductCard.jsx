import React from 'react';
import { Container, TextInput, Grid, Button, Paper, Group, ActionIcon } from '@mantine/core';
import { IconDeviceFloppy } from '@tabler/icons-react';
import EditIcon from '@mui/icons-material/Edit';
function ProductCard() {
  return (
    <Container size="lg">
      <Paper shadow="sm" p="md" radius="md" style={{ position: 'relative' }}>
        <Grid>
          <Grid.Col span={4}>
            <TextInput
              label="Product / Material Code"
              placeholder="Enter" 
              size="md"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput
              label="Spec No."
              placeholder="Enter"
              size="md"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput
              label="Method No."
              placeholder="Enter"
              size="md"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput
              label="Market / Pharmacopeia"
              placeholder="Enter"
              size="md"
            />
          </Grid.Col>
        </Grid>
<br/>
        <Group position="right" style={{ position: 'absolute', bottom: 10, right: 10 }}>
          <ActionIcon variant="outline" color="#23295A" size="md">
            <IconDeviceFloppy size={20} color="#23295A" />
          </ActionIcon>
          <ActionIcon variant="outline" color="#23295A" size="md">
            <EditIcon size={18} color="#23295A" />
          </ActionIcon>
        </Group>
      </Paper>
    </Container>
  );
}

export default ProductCard;


