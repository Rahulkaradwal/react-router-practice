import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import HomePage from './pages/HomePage';
import RootLayout from './pages/RootLayout';
import EventsRoot from './pages/EventsRoot';
import Error from './components/Error';
import { getData, getDatabyId } from './http/dataRequests';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
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
            loader: getData,
          },

          {
            path: ':eventId',
            element: <EventDetailPage />,
            loader: getDatabyId,
          },
          {
            path: 'new',
            element: <NewEventPage />,
          },
          {
            path: ':eventId/edit',
            element: <EditEventPage />,
            loader: getDatabyId,
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
