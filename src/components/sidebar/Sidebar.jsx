
import React, { useState } from 'react';
import { AppShell, Burger, Flex, Group, Image, Paper, Text, Box } from '@mantine/core';
import SelectModule from '../SelectModule';
import { IconHome, IconSettings, IconLogout } from '@tabler/icons-react';
import headerLogo from "../Logos/headerLogo.png";
import { Outlet, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [closed, setOpened] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
 navigate('/');
  };

  return (
    <AppShell
      className="user"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: closed },
      }}
      padding="md"
      h={'100%'}
    >
      <AppShell.Header 
        className="header"
        style={{ backgroundColor: '#001f3f' }} 
      >
        <Flex>
          <Flex px="md" w={300} h={60} gap={16} align={"center"}>
            <Burger
              opened={closed}
              onClick={() => setOpened(!closed)}
              aria-label="Toggle navigation"
              color="white"
            />
            <Image src={headerLogo} w={"10rem"} h={"2rem"} alt="Header Logo" />
          </Flex>
          
          <Flex justify="space-between" flex={1} align={"center"} h={60}>
            <Text pr={32} c={"white"}>90001 | Super Admin</Text>
          </Flex>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md" w={closed ? 80 : 350} style={{ transition: 'width 0.3s', backgroundColor: '#001f3f' }}> 
        <Paper
          shadow="xs"
          p="md"
          style={{
            backgroundColor: '#001f3f', 
            color: 'white',
            height: '100%', 
          }}
        >
          <Box>
            <SelectModule />
          </Box>
          <Group direction="column" spacing="md" mt="md">
            <Group onClick={handleLogout} style={{ cursor: 'pointer' }}>
              <IconLogout size={20} color="white" />
              {!closed && <span onClick={handleLogout}>Logout</span>}
            </Group>
          </Group>
        </Paper>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Sidebar;
