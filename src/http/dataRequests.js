import { json } from 'react-router-dom';

export async function getData() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    throw new json({ message: 'Could not laod the Data' }, { status: 500 });
  }
  return response;
}
