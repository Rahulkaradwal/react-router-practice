import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailPage() {
  // const data = useLoaderData();
  const { event } = useRouteLoaderData('eventIdLoader');

  // const event = data.event;

  return <EventItem event={event} />;
}

export default EventDetailPage;
