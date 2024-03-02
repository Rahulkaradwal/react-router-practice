import React from 'react';
import PageContent from './PageContent';

function Error({ error }) {
  let title = 'An error occured!';
  let message = 'Something went wrong';

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 400) {
    message = 'Not Found!';
    title = 'Cound not find resouce or page';
  }

  return (
    <PageContent message={message}>
      <p>{message}</p>
    </PageContent>
  );
}

export default Error;
