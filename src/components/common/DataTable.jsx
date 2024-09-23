

import React from 'react';
import { Group, Input, Select, Button, Container, Table, ActionIcon } from '@mantine/core';
import { IconSearch, IconClipboard, IconAlertCircle, IconCalendar } from '@tabler/icons-react';

function DataTable() {
  // Sample data for the table
  const data = [
    { product: '10001234', solution: 'Mobile Phase', name: 'PARA_DISS_MAP_01', type: 'Worksheet', content: '', exceptionReport: '' },
    { product: '10001234', solution: 'Mobile Phase', name: 'PARA_DISS_MAP_01', type: 'Worksheet', content: '', exceptionReport: '' },
    { product: '10001234', solution: 'Mobile Phase', name: 'PARA_DISS_MAP_01', type: 'Worksheet', content: '', exceptionReport: '' },
    { product: '10001234', solution: 'Mobile Phase', name: 'PARA_DISS_MAP_01', type: 'Worksheet', content: '', exceptionReport: '' },
  ];

  const rows = data.map((item, index) => (
    <Table.Tr key={index}>
      <Table.Td>{item.product}</Table.Td>
      <Table.Td>{item.solution}</Table.Td>
      <Table.Td>{item.name}</Table.Td>
      <Table.Td>{item.type}</Table.Td>
      <Table.Td>
        <ActionIcon color="indigo" variant="outline" size="lg">
          <IconClipboard size={18} />
        </ActionIcon>
      </Table.Td>
      <Table.Td>
        <ActionIcon color="yellow" variant="outline" size="lg">
          <IconAlertCircle size={18} />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container size="xl" mt="xl" p="xl" sx={{ maxWidth: '1200px' }}>
      {/* Search and Filters */}
      <Group position="apart" mb="lg">
        <Group>
          <Input
            icon={<IconSearch />}
            placeholder="Search"
            size="sm"
            style={{ width: 220 }} // Increased width
          />
          <Select
            placeholder="Category"
            data={['Category 1', 'Category 2']}
           size="sm"
            style={{ width: 170 }} // Increased width
          />
          <Select
            placeholder="Filter By"
            data={['Filter 1', 'Filter 2']}
           size="sm"
            style={{ width: 170 }} // Increased width
          />
          <Input
            icon={<IconCalendar />}
            placeholder="Date Range"
            size="sm"
            style={{ width: 170 }} // Increased width
          />
        </Group>
      </Group>

      {/* Table */}
      <Table striped highlightOnHover fontSize="lg" horizontalSpacing="md" verticalSpacing="md">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Product</Table.Th>
            <Table.Th>Solution</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Type</Table.Th>
            <Table.Th>Content</Table.Th>
            <Table.Th>Exception Report</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      {/* Save Button */}
      <Group position="center" mt="xl">
        <Button variant="filled"  size="sm" color="#23295A">
          Save
        </Button>
      </Group>
    </Container>
  );
}

export default DataTable;
