import React from 'react';
import { Accordion } from '@mantine/core';
import TableComponent from './TableComponent';

const AccordionComponent = () => {
  const accordionItems = [
    {
      value: 'description',
      control: 'Description',
      panelContent: 'Content for Description',
    },
    {
      value: 'water',
      control: 'Water',
      panelContent: 'Content for Water',
    },
    {
      value: 'assay',
      control: 'Assay',
      panelContent: <TableComponent/>,
    },
    {
      value: 'impurities',
      control: 'Impurities',
      panelContent: 'Content for Impurities',
    },
  ];

  return (
    <Accordion>
      {accordionItems.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control>{item.control}</Accordion.Control>
          <Accordion.Panel>{item.panelContent}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
