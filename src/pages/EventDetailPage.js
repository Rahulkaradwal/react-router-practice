import React from 'react';
import { useLoaderData } from 'react-router-dom';

function EventDetailPage() {
  const event = useLoaderData();
  console.log(event);
  return <div>Event Detail Page</div>;
}

export default EventDetailPage;
