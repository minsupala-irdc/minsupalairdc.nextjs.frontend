// types.ts or at the top of your component file

export interface Event {
  event: string;
  content: string;
  event_date: string;
  time: string;
  location: string;
  author: string;
}

export interface UpcomingEventsRowSectionProps {
  show?: number; // 'show' is an optional number
}

import React from 'react'; // React is automatically in scope in Next.js, but good practice for clarity

// --- Type Definitions (can be in a separate types.ts file) ---
export interface Event {
  event: string;
  content: string;
  event_date: string;
  time: string;
  location: string;
  author: string;
}

export interface UpcomingEventsRowSectionProps {
  show?: number; // 'show' is an optional number
}
// -----------------------------------------------------------

const UPCOMING_EVENT: Event[] = [
  {
    event: "Nutritional Analysis",
    content:
      "The Mindanao-Sulu-Palawan Innovative Research and Development Consortium (MinSuPala-IRDC) successfully conducted a Policy Brief Writeshop on May 28–29, 2025, at the Oroderm City Functions and Events Place in Davao City",
    event_date: "July 2-4, 2025",
    time: "",
    location: "General Santos City",
    author: "",
  },
  
];
// ... (previous code remains the same)

export default function UpcomingEventsRowSection({ show }: UpcomingEventsRowSectionProps) {
  const eventsToDisplay = show && typeof show === 'number' ? UPCOMING_EVENT.slice(0, show) : UPCOMING_EVENT;

  return (
    <div id="news" className="py-10 bg-gray-100">
      <div className="mx-auto max-w-6xl sm:px-6 lg:px-8 py-16 flex flex-col items-center justify-center text-center ">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight leading-tight px-5 md:px-0 drop-shadow-sm">
            <span className="text-red-800">Upcoming</span> Events &amp; Activities
          </h2>
          {/* <p className="md:text-lg text-xl text-gray-600 max-w-5xl mx-auto text-center px-5 md:px-0">
            Stay informed about our latest conferences, workshops, and community engagement initiatives.
          </p> */}

          
          {/* Event Cards - Centered in Flex Container */}
<div className="mt-10 flex flex-wrap justify-center gap-8 px-5 md:px-0">
  {eventsToDisplay.map((event: Event, index: number) => (
    <div
      key={index}
      className="bg-white shadow-sm rounded-sm overflow-hidden text-left p-6 w-full max-w-sm"
    >
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
        {event.event}
      </h3>
      <p className="text-sm text-gray-500 mb-2">
        <span className="font-medium">Date:</span> {event.event_date}
      </p>
      <p className="text-sm text-gray-500 mb-4">
        <span className="font-medium">Location:</span> {event.location}
      </p>
    </div>
  ))}
</div>

          

        </div>
      </div>
    </div>
  );
}