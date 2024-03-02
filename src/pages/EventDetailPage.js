import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailPage() {
  const { event } = useLoaderData();
  return <EventItem event={event} />;
}

export default EventDetailPage;
