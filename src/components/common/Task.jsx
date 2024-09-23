// import React from 'react';
// import { Card, Group, Text, ActionIcon, TextInput, Stack ,Flex} from '@mantine/core';
// import { IconEye, IconDownload ,IconEdit } from '@tabler/icons-react';

// const Task = () => {
//   return (
//     <Card shadow="sm" padding="lg" radius="md" withBorder>
//       <Stack spacing="md">
//         <Text weight={700} color="green">
//           Task Id: D-Cas24010001
//         </Text>

//         <Group grow spacing="sm"  size="sm" style={{width:"40%"}}>
//           <TextInput
//             label="Company"
//             value="DRL"
//             size="sm"
//             rightSection={
//               <ActionIcon size="sm"  radius='lg' color="#23295A">
//                 <IconEdit  size="1rem" />
//               </ActionIcon>
//             }
//           />
//           <TextInput
//             label="Facility"
//             value="FTO 2"
//           size="sm"
//           weight={400}
//             rightSection={
//               <ActionIcon size="sm"  radius='lg' color="#23295A">
//                 <IconEdit  size="1rem" />
//               </ActionIcon>
//             }
//             readOnly
//           />
//         </Group>

//         <Group grow spacing="lg">
//           <Card shadow="sm" padding="md" radius="md" withBorder>
//             <Stack spacing="xs" >
//               <Flex wrap="nowrap">
//               <Group position="apart">
//                 <Text weight={500}>Code</Text>
//                 <TextInput  mr='sm'></TextInput>
//               </Group>
//               <Group position="apart">
//                 <Text weight={500}>Product</Text>
//                 <TextInput placeholder='Paracetamol' mr='sm'></TextInput>
//               </Group>
//               <Group position="apart">
//                 <Text weight={500}>Market</Text>
//                 <TextInput placeholder='USA'  mr='sm'></TextInput>
//               </Group>
//               <Group position="apart">
//                 <Text weight={500}>spec</Text>
//                 <TextInput placeholder='M0-100001234-00'></TextInput>
//               </Group>
              
//                 <Flex justify="start">
//                 <ActionIcon size="sm"  radius='lg' color="#23295A">
//                   <IconEye size="1rem" />
//                 </ActionIcon>
//                 <ActionIcon size="sm"  radius='lg' color="#23295A">
//                   <IconDownload size="1rem" />
//                 </ActionIcon>
//                 </Flex>
                
            
//               </Flex>
            
//             </Stack>
//           </Card>

//           <Card shadow="sm" padding="md" radius="md" withBorder>
//             <Stack spacing="xs">
//               <Flex>
//               <Group position="apart">
//                 <Text weight={500}>Code</Text>
//                 <TextInput placeholder='Code' mr='sm'></TextInput>
//               </Group>
//               <Group position="apart">
//                 <Text weight={500}>Product</Text>
//                 <TextInput placeholder='Paracetamol' mr='sm'></TextInput>
//               </Group>
//               <Group position="apart">
//                 <Text weight={500}>Market</Text>
//                 <TextInput placeholder='USA' mr='sm'></TextInput>
//               </Group>
//               <Group position="apart">
//                 <Text weight={500}>Method</Text>
          
//                 <TextInput placeholder='M0-100001234-00' mr='sm'></TextInput>
//               </Group>
            
//               <Flex justify="start">
//                 <ActionIcon size="sm"  radius='lg' color="#23295A">
//                   <IconEye size="1rem" />
//                 </ActionIcon>
//                 <ActionIcon size="sm"  radius='lg' color="#23295A">
//                   <IconDownload size="1rem" />
//                 </ActionIcon>
//                 </Flex>
//               </Flex>
//             </Stack>
//           </Card>
//         </Group>
//       </Stack>
//     </Card>
//   );
// };

// export default Task;


// import React from 'react';
// import { Card, Group, Text, ActionIcon, TextInput, Stack, Flex } from '@mantine/core';
// import { IconEye, IconDownload, IconEdit } from '@tabler/icons-react';

// const Task = ({ data }) => {
//   if (!data) {
//     return null; // Do not render if there's no data
//   }

//   return (
//     <Card shadow="sm" padding="lg" radius="md" withBorder>
//       <Stack spacing="md">
//         <Text weight={700} color="green">
//           Task Id: {data.taskId || 'D-Cas24010001'}
//         </Text>

//         <Group grow spacing="sm" size="sm" style={{ width: "40%" }}>
//           <TextInput
//             label="Company"
//             value={data.company || 'DRL'}
//             size="sm"
//             rightSection={
//               <ActionIcon size="sm" radius="lg" color="#23295A">
//                 <IconEdit size="1rem" />
//               </ActionIcon>
//             }
//           />
//           <TextInput
//             label="Facility"
//             value={data.facility || 'FTO 2'}
//             size="sm"
//             weight={400}
//             rightSection={
//               <ActionIcon size="sm" radius="lg" color="#23295A">
//                 <IconEdit size="1rem" />
//               </ActionIcon>
//             }
//             readOnly
//           />
//         </Group>

//         {/* Additional Fields */}
//         <Group grow spacing="lg">
//           <Card shadow="sm" padding="md" radius="md" withBorder>
//             <Stack spacing="xs">
//               <Flex wrap="nowrap">
//                 <Group position="apart">
//                   <Text weight={500}>Code</Text>
//                   <TextInput value={data.code || ''} mr="sm" />
//                 </Group>
//                 <Group position="apart">
//                   <Text weight={500}>Product</Text>
//                   <TextInput value={data.product || 'Paracetamol'} mr="sm" />
//                 </Group>
//                 <Group position="apart">
//                   <Text weight={500}>Market</Text>
//                   <TextInput value={data.market || 'USA'} mr="sm" />
//                 </Group>
//                 <Group position="apart">
//                   <Text weight={500}>Spec</Text>
//                   <TextInput value={data.spec || 'M0-100001234-00'} />
//                 </Group>

//                 <Flex justify="start">
//                   <ActionIcon size="sm" radius="lg" color="#23295A">
//                     <IconEye size="1rem" />
//                   </ActionIcon>
//                   <ActionIcon size="sm" radius="lg" color="#23295A">
//                     <IconDownload size="1rem" />
//                   </ActionIcon>
//                 </Flex>
//               </Flex>
//             </Stack>
//           </Card>
//         </Group>
//       </Stack>
//     </Card>
//   );
// };

// export default Task;


import React from 'react';
import { Card, Group, Text, ActionIcon, TextInput, Stack, Flex } from '@mantine/core';
import { IconEye, IconDownload, IconEdit } from '@tabler/icons-react';

const Task = ({ data }) => {
  if (!data) {
    return null; // Do not render if there's no data
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack spacing="md">
        <Text weight={700} color="green">
          Task Id: {data.taskId || 'D-Cas24010001'}
        </Text>

        <Group grow spacing="sm" size="sm" style={{ width: "40%" }}>
          <TextInput
            label="Company"
            value={data.company || 'DRL'}
            size="sm"
            rightSection={
              <ActionIcon size="sm" radius="lg" color="#23295A">
                <IconEdit size="1rem" />
              </ActionIcon>
            }
          />
          <TextInput
            label="Facility"
            value={data.facility || 'FTO 2'}
            size="sm"
            rightSection={
              <ActionIcon size="sm" radius="lg" color="#23295A">
                <IconEdit size="1rem" />
              </ActionIcon>
            }
            readOnly
          />
        </Group>

        {/* Additional Fields */}
        <Group grow spacing="lg">
          <Card shadow="sm" padding="md" radius="md" withBorder>
            <Stack spacing="xs">
              <Flex wrap="nowrap">
                <Group position="apart">
                  <Text weight={500}>Code</Text>
                  <TextInput value={data.code || ''} mr="sm" />
                </Group>
                <Group position="apart">
                  <Text weight={500}>Product</Text>
                  <TextInput value={data.product || 'Paracetamol'} mr="sm" />
                </Group>
                <Group position="apart">
                  <Text weight={500}>Market</Text>
                  <TextInput value={data.market || 'USA'} mr="sm" />
                </Group>
                <Group position="apart">
                  <Text weight={500}>Spec</Text>
                  <TextInput value={data.spec || 'M0-100001234-00'} />
                </Group>

                <Flex justify="start">
                  <ActionIcon size="sm" radius="lg" color="#23295A">
                    <IconEye size="1rem" />
                  </ActionIcon>
                  <ActionIcon size="sm" radius="lg" color="#23295A">
                    <IconDownload size="1rem" />
                  </ActionIcon>
                </Flex>
              </Flex>
            </Stack>
          </Card>
        </Group>

        <Group grow spacing="lg">
          <Card shadow="sm" padding="md" radius="md" withBorder>
            <Stack spacing="xs">
              <Flex wrap="nowrap">
                <Group position="apart">
                  <Text weight={500}>Code</Text>
                  <TextInput value={data.code || ''} mr="sm" />
                </Group>
                <Group position="apart">
                  <Text weight={500}>Product</Text>
                  <TextInput value={data.product || 'Paracetamol'} mr="sm" />
                </Group>
                <Group position="apart">
                  <Text weight={500}>Market</Text>
                  <TextInput value={data.market || 'USA'} mr="sm" />
                </Group>
                <Group position="apart">
                  <Text weight={500}>Spec</Text>
                  <TextInput value={data.spec || 'M0-100001234-00'} />
                </Group>

                <Flex justify="start">
                  <ActionIcon size="sm" radius="lg" color="#23295A">
                    <IconEye size="1rem" />
                  </ActionIcon>
                  <ActionIcon size="sm" radius="lg" color="#23295A">
                    <IconDownload size="1rem" />
                  </ActionIcon>
                </Flex>
              </Flex>
            </Stack>
          </Card>
        </Group>
      </Stack>
    </Card>
  );
};

export default Task;
