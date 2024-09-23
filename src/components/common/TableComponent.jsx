import React from 'react';
import { Table, Button, Checkbox, ActionIcon } from '@mantine/core';
import { IconFileText, IconRun, IconLink } from '@tabler/icons-react';

const data = [
  { id: '3.1', solution: 'Mobile Phase', type: 'Worksheet', name: 'PARA_DISS_MP_01', content: 'Worksheet Content' },
  { id: '3.2', solution: 'Standard Preparation', type: 'Section Worksheet', name: 'PARA_DISS_MP_01', content: 'Worksheet Content' },
  { id: '3.3', solution: 'Mobile Phase', type: 'Section Worksheet', name: 'PARA_DISS_MP_01', content: 'Worksheet Content' },
];

export default function TableComponent() {
  const rows = data.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>{item.id}</Table.Td>
      <Table.Td>{item.solution}</Table.Td>
      <Table.Td>
      
          <IconFileText color='navy'/>
    
      </Table.Td>
      <Table.Td>
        {item.type}
    
          <IconLink size={12} />
    
      </Table.Td>
      <Table.Td>{item.name}</Table.Td>
      <Table.Td>{item.content}</Table.Td>
      <Table.Td>
        <Checkbox />
      
          <IconRun color='green' />
        
       
          <IconLink  color='navy'/>
      
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>#</Table.Th>
          <Table.Th>Solution</Table.Th>
          <Table.Th>Input</Table.Th>
          <Table.Th>Type</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>Content</Table.Th>
          <Table.Th>Merge</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <tfoot>
        <Table.Tr>
          <Table.Td colSpan={7}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="outline" color="dark" style={{ marginRight: '8px' }}>
                Merge
              </Button>
              <Button variant="outline" color="dark">
                Cancel
              </Button>
            </div>
          </Table.Td>
        </Table.Tr>
      </tfoot>
    </Table>
  );
}
