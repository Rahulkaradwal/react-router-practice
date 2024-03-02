import { useEffect, useState } from 'react';
import EventsPage from './EventsPage';

function Events() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [fetchedEvents, setFetchedEvents] = useState();

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const res = await fetch('http://localhost:8080/events');
      if (!res.ok) {
        throw new Error('Failed to get the Data');
      } else {
        const resData = await res.json();
        setFetchedEvents(resData.events);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading ...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsPage events={fetchedEvents} />}
    </>
  );
}

export default Events;
