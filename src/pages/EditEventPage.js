import React from 'react';
import EventForm from '../components/EventForm';
import { useRouteLoaderData } from 'react-router-dom';

function EditEventPage() {
  const { event } = useRouteLoaderData('eventIdLoader');
  // const { event } = useLoaderData();

  return <EventForm event={event} method="patch" />;
}

export default EditEventPage;
