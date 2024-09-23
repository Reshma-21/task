

import React, { useState } from 'react';
import { Group, FileInput, Button, Container, Paper, Stack, Title, ActionIcon ,Space} from '@mantine/core';
import { IconUpload, IconCloudUpload } from '@tabler/icons-react';
import Task from '../common/Task';
import Notify from '../Notify/Notify';
import { useStepper } from '../stepper/StepperContext';
import { processFile, uploadFiles } from '../apis/Api'; // Import the API functions

function InputDocs() {
  const [process, setProcess] = useState(false);
  const [notification, setNotification] = useState(null);
  const [specFile, setSpecFile] = useState(null);  // Separate states for files
  const [methodFile, setMethodFile] = useState(null);
  const [taskData, setTaskData] = useState(null);

  const { setActiveStep } = useStepper();

  const handleProcessClick = async () => {
    if (!specFile || !methodFile) {
      setNotification({ message: 'Please upload the necessary files', color: 'red' });
      setTimeout(() => setNotification(null), 5000);
      return;
    }

    try {
      const data = await processFile('Caliber_spec.docx');  // Call the processFile API
      setTaskData(data);
      setProcess(true);
    } catch (error) {
      setNotification({ message: 'Error processing the file', color: 'red' });
      setTimeout(() => setNotification(null), 5000);
    }
  };

  const handleFileChange = (newFiles, type) => {
    if (type === 'spec') {
      setSpecFile(newFiles);
    } else if (type === 'method') {
      setMethodFile(newFiles);
    }
  };

  const handleUploadClick = async () => {
    if (!specFile || !methodFile) {
      setNotification({ message: 'Please select both Specification and Method files.', color: 'red' });
      setTimeout(() => setNotification(null), 5000);
      return;
    }

    try {
      setNotification({ message: 'Uploading files...', color: 'blue', isInProgress: true });
      
      const uploadResponse = await uploadFiles(specFile, methodFile);  // Call the uploadFiles API

      if (uploadResponse.success) {
        setNotification({ message: uploadResponse.message, color: 'green' });
        setTimeout(() => setNotification(null), 5000);
      } else {
        throw new Error(uploadResponse.message);
      }
    } catch (error) {
      setNotification({ message: `Upload failed: ${error.message}`, color: 'red' });
      setTimeout(() => setNotification(null), 5000);
    }
  };

  const handleNotificationClose = () => {
    setNotification(null);
  };

  const goToWorksheets = () => {
    setActiveStep(1);
  };

  const handleSaveClick = async () => {
    if (!taskData) {
      setNotification({ message: 'No task data to save', color: 'red' });
      return;
    }
  
    // Construct the data to be sent to the API
    const payload = {
      Code: taskData.code || "",
      MARKET: taskData.market || "",
      Product: taskData.product || "",
      SPEC_ID: taskData.spec || "",
      STP_NO: taskData.stpNo || "",
      company: taskData.company || "",
      facility: taskData.facility || "",
      filename1: specFile?.name || "",
      filename2: methodFile?.name || "",
      grade: taskData.grade || "",
      methodId: taskData.methodId || "",
      samplingPoint: taskData.samplingPoint || ""
    };
  
    try {
      const response = await fetch('http://13.235.98.215:8001/save/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),  // Send the constructed payload
      });
  
      if (response.ok) {
        setNotification({ message: 'Task saved successfully', color: 'green' });
      } else {
        throw new Error('Failed to save task');
      }
    } catch (error) {
      setNotification({ message: `Error: ${error.message}`, color: 'red' });
    }
  
    setTimeout(() => setNotification(null), 5000);
  };
  

  return (
    <Container size="lg" mt="lg">
      <Group position="apart" align="flex-start" mb="md">
        <Group align="flex-start">
          {/* Specification */}
          <Paper shadow="xs" withBorder style={{ width: 300, padding: '20px' }}>
            <Stack spacing="xs">
              <Title size="md" weight={600}>
                Specification
              </Title>
              <FileInput
                placeholder="Select Specification file"
                rightSection={<ActionIcon color="#23295A" radius="lg">
                  <IconCloudUpload size={18} color="white" />
                </ActionIcon>}
                onChange={(files) => handleFileChange(files, 'spec')}
                multiple={false}  // Only allow a single file
              />
            </Stack>
          </Paper>

          {/* Method */}
          <Paper shadow="xs" withBorder style={{ width: 300, padding: '20px' }}>
            <Stack spacing="xs">
              <Title size="md" weight={600}>
                Method
              </Title>
              <FileInput
                placeholder="Select Method file"
                rightSection={<ActionIcon color="#23295A" radius="lg">
                  <IconCloudUpload size={18} color="white" />
                </ActionIcon>}
                onChange={(files) => handleFileChange(files, 'method')}
                multiple={false}  
              />
            </Stack>
          </Paper>
        </Group>
      </Group>

      {/* Buttons */}
      <Group mt="md">
        <Button
          variant="outline"
          rightSection={<IconUpload size={20} />}
          color="#23295A"
          size="sm"
          onClick={handleUploadClick}
        >
          Upload Files
        </Button>
        <Button
          variant="filled"
          color="#23295A"
          size="sm"
          onClick={handleProcessClick}
        >
          Process
        </Button>
      </Group>


      <Notify notification={notification} onClose={handleNotificationClose} />
      <Space h="md" />
      {process && <Task data={taskData} />}

      <Group position="center" mt="xl" style={{ justifyContent: 'space-between' }}>
        <Button variant="filled" color="#23295A" size="sm" onClick={handleSaveClick}>
          Save
        </Button>

        <Button variant="filled" color="#23295A" size="sm" onClick={goToWorksheets}>
          Generate Worksheets
        </Button>
      </Group>
    </Container>
  );
}

export default InputDocs;
