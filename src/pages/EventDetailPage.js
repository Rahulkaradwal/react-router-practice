import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailPage() {
  const data = useLoaderData();
  const event = data.event;

  return <EventItem event={event} />;
}

export default EventDetailPage;
