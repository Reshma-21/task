import React from 'react'
import { Container,Select } from '@mantine/core'
function SelectModule() {
  return (
    <Container>
      <Select 
        size="lg"
       placeholder="Module"
       data={[
        { value: "caliber", label: "Caliber" },
        { value: "labware", label: "Labware" },
        { value: "labvantage", label: "LabVantage" },
      ]}></Select>    
    </Container>
  )
}

export default SelectModule