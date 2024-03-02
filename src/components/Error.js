import React from 'react';
import PageContent from './PageContent';
import { useRouteError } from 'react-router-dom';
import MainNavigation from './MainNavigation';

function Error() {
  const error = useRouteError();
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
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default Error;
