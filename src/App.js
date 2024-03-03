import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import HomePage from './pages/HomePage';
import RootLayout from './pages/RootLayout';
import EventsRoot from './pages/EventsRoot';
import Error from './components/Error';
import { getData, getDatabyId, sendData } from './http/dataRequests';
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
            id: 'eventIdLoader',
            loader: getDatabyId,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
              },
            ],
          },

          {
            path: 'new',
            element: <NewEventPage />,
            action: sendData,
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
