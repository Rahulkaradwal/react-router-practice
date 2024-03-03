import React from 'react';
import EventForm from '../components/EventForm';
import { useLoaderData } from 'react-router-dom';

function EditEventPage() {
  const { event } = useLoaderData();

  return <EventForm event={event} />;
}

export default EditEventPage;
