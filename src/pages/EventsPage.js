import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  { id: 1, price: 49.99, title: 'Lamp', description: 'Bright' },
  { id: 2, price: 75.0, title: 'Chair', description: 'Comfy' },
  { id: 3, price: 120.5, title: 'Table', description: 'Sturdy' },
  { id: 4, price: 22.99, title: 'Vase', description: 'Elegant' },
  { id: 5, price: 8.99, title: 'Cup', description: 'Useful' },
  { id: 6, price: 15.45, title: 'Book', description: 'Novel' },
];

function EventsPage() {
  return (
    <div>
      {items.map((item) => (
        <Link to={`${item.id}`} relative="path" key={item.id}>
          {item.title}, {item.description}
        </Link>
      ))}
    </div>
  );
}

export default EventsPage;
