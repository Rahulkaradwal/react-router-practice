// Define a loader function to fetch some data
export async function getData() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    throw new Error('Could not load the Data');
  }
  const userData = await response.json();
  return userData.events;
}
