import React from 'react';
import { useParams } from 'react-router-dom';

function EventDetailPage() {
  const params = useParams();
  return <div>Event Detail Page {params.eventId}</div>;
}

export default EventDetailPage;
