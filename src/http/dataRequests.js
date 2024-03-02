// Define a loader function to fetch some data
export async function getData() {
  const response = await fetch('https://localhost:8080/');
  const userData = await response.json();
  return userData;
}
