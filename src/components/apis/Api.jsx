// api.js

export const uploadFiles = async (specFile, methodFile) => {
  const formData = new FormData();
  formData.append('file1', specFile);
  formData.append('file2', methodFile);

  try {
    const response = await fetch('http://13.235.98.215:8000/upload_files', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Upload failed. Please try again.');
    }

    return { success: true, message: 'Files uploaded successfully!' };
  } catch (error) {
    console.error('Upload Error:', error);
    return { success: false, message: error.message };
  }
};



// apis/Api.js

// Function to fetch process data
export const fetchProcessData = async (fileName) => {
    try {
      const response = await fetch(`http://13.235.98.215:8000/process/?file_name=${fileName}`, {
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch process data.');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Process Data Fetch Error:', error);
      throw error;
    }
  };
  
// src/api.js

export const processFile = async (fileName) => {
  try {
    const response = await fetch(`http://13.235.98.215:8000/process/?file_name=${fileName}`);
    
    if (!response.ok) {
      throw new Error('Failed to process the file');
    }
    
    const data = await response.json();
    
    return {
      taskId: data.SPEC_ID,
      company: data.Title,
      facility: 'FTO 2',  // Default value if not available
      code: data.Code,
      product: data.Title,  // Assuming product refers to the Title
      market: data.MARKET || 'USA',  // Default to USA if MARKET is empty
      spec: data.SPEC_ID || 'M0-100001234-00',  // Default if SPEC_ID is empty
    };
  } catch (error) {
    throw new Error('Error processing the file');
  }
};


