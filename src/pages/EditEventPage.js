import React from 'react';
import EventForm from '../components/EventForm';
import { useRouteLoaderData } from 'react-router-dom';

function EditEventPage() {
  const { event } = useRouteLoaderData('eventIdLoader');

  return <EventForm event={event} method="PATCH" />;
}

export default EditEventPage;
