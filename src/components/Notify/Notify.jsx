// import React from 'react';
// import { Notification, Loader } from '@mantine/core';

// function Notify() {
//   return (
//     <Notification
//        loading
//     //  title="Files upload is in progress.."
//     color="navy"
//       w={"20rem"}
//       position= 'top-center'
//       //style={{ zIndex: 1000 }}
//     >
//       {/* <Loader color="blue" size="sm" /> */}
//       Files upload is in progress..
//     </Notification>
//   );
// }

// export default Notify;


import React from 'react';
import { Notification } from '@mantine/core';

function Notify({ notification, onClose }) {
  if (!notification) return null;

  return (
    <Notification
      color={notification.color}
      onClose={onClose}
      style={{ position: 'fixed', top: '10%', left: '60%', transform: 'translateX(-50%)' }}
      loading={notification.isInProgress}
      autoClose={4000}
      withCloseButton={false}
      
    >
      {notification.message}
    </Notification>
  );
}

export default Notify;

