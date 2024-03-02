import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import HomePage from './pages/HomePage';
import RootLayout from './pages/RootLayout';
import EventsRoot from './pages/EventsRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
          },
          {
            path: ':eventId',
            element: <EventDetailPage />,
          },
          {
            path: 'new',
            element: <NewEventPage />,
          },
          {
            path: ':eventId/edit',
            element: <EditEventPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
