import React from "react";

export function Events({ events }) {
  return (
    <ul className="bg-red-600 text-black z-50">
      {events.map((event, index) => (
        <li className="bg-yellow-300 text-black" key={index}>
          <p>predicted: {event.predicted}</p>
          <p>status: {event.status}</p>
        </li>
      ))}
    </ul>
  );
}
