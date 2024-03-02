import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();

  // Basic error handling if data or data.events is not available
  if (!data || !data.events) {
    return <div>No events found.</div>;
  }

  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;
