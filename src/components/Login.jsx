


import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Image,
  Text,
  Flex,
  Box,
  Center,
  Stack,
  Anchor,
} from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import logo from "./Logos/loginLogo.jpeg";
import headerLogo from "./Logos/headerLogo.png";
import { useNavigate } from "react-router-dom";
import SelectModule from "./SelectModule";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`/caliberCreate`);
  };

  const isLoginDisabled = username.length < 3 || password.length < 3;

  return (
    <Flex>
      <Flex w={"60%"} h={"100vh"} direction={"column"}>
        <Image alt="Header Logo" src={headerLogo} w={"7rem"} />
        <Center flex={1}>
          <Image src={logo} alt="Company Logo" w={"50%"} />
        </Center>
        <Text ta={"center"} p={16}>
          Copyright © 2024 Proven Tech. All rights reserved. Privacy Policy
        </Text>
      </Flex>
      <Stack
        w={"40%"}
        h={"100vh"}
        justify={"center"}
        align={"stretch"}
        gap={24}
        p={48}
        style={{ backgroundColor: "#13293d" }}
      >
        <TextInput
          placeholder="Enter Username"
          size="lg"
          rightSection={<IconUser />}
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
        />
        <PasswordInput
          placeholder="Enter Password"
          size="lg"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <Flex justify={"space-between"} gap={24}>
          
            <SelectModule />
        
          <Button
            variant="filled"
            color="green"
            onClick={handleLogin}
            size="lg"
            w={"50%"}
            disabled={isLoginDisabled}
            styles={(theme) => ({
              root: {
                backgroundColor: isLoginDisabled
                  ? theme.colors.gray[7]// Light green color when disabled
                  : theme.colors.green[6],
                "&:hover": {
                  backgroundColor: isLoginDisabled
                    ? theme.colors.gray[7]
                    : theme.colors.green[7],
                },
              },
            })}
          >
            Login
          </Button>
        </Flex>
        <Flex justify={"space-around"} style={{ zIndex: 1 }}>
          <Anchor c={"white"}>Forgot Username?</Anchor>
          <Anchor c={"white"}>Forgot Password?</Anchor>
        </Flex>
      </Stack>
    </Flex>
  );
}

export default Login;
