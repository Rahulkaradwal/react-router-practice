import { json } from 'react-router-dom';

export async function getData() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    throw json({ message: 'Could not laod the Data' }, { status: 500 });
  } else {
    return response;
  }
}

export async function getDatabyId({ request, params }) {
  const id = params.eventId;
  const res = await fetch('http://localhost:8080/events' + id);
  if (!res.ok) {
    throw json(
      { message: 'Could not fetch details for seleced event' },
      { status: 500 }
    );
  } else {
    return res;
  }
}
