import { json, redirect } from 'react-router-dom';

// loader - get all the data
export async function getData() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    throw json({ message: 'Could not laod the Data' }, { status: 500 });
  } else {
    return response;
  }
}

// loader - get the data by id
export async function getDatabyId({ request, params }) {
  const id = params.eventId;
  const res = await fetch('http://localhost:8080/events/' + id);
  if (!res.ok) {
    throw json(
      { message: 'Could not fetch details for seleced event' },
      { status: 500 }
    );
  } else {
    return res;
  }
}

// action - send the data
export async function sendData({ request, params }) {
  console.log('in the action');
  const data = await request.formData();
  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };
  console.log(eventData);
  const res = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData),
  });

  if (!res.ok) {
    throw json({ message: 'Couldnot save event' }, { status: 500 });
  }
  return redirect('/events');
}
