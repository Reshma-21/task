import React, { useState } from 'react';
import { Modal, Text, Group, Button } from '@mantine/core';

function Modals() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Description"
        centered
        overlayProps={{ blur: 2 }}
        withCloseButton
      >
        <Text>export</Text>
      </Modal>
    </>
  );
}

export default Modals;
