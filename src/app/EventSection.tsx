
const eventList = [
  {
    event: "Financial Management Workshop",
    date: "May 27, 2025",
    time: "8:30 AM-4:00 PM",
    venue:
      "Function Room Alma, Oroderm City Functions and Events Place, Davao City",
  },
  {
    event: "High-Level Meeting",
    date: "May 27, 2025",
    time: "1:00 PM",
    venue: "Acacia Hotel, Davao City",
  },
  {
    event: "Policy Brief Writeshop",
    date: "May 28-29, 2025",
    time: "8:30 AM-5:00 PM",
    venue:
      "Function Room Alma, Oroderm City Functions and Events Place, Davao City",
  },
  {
    event:
      "Workshop on Designing Survey Tools and Protocols for Market Potential and Value Chain Analysis of Indigenous Species",
    date: "May 28-29, 2025",
    time: "8:30 AM-5:00 PM",
    venue:
      "Second Floor Function Hall, Oroderm City Functions and Events Place, C.M. Recto, Davao City",
  },
  {
    event: "Orientation of Women, Peace, and Security Agenda",
    date: "May 29, 2025",
    time: "10:30 AM - 12:00 PM",
    venue:
      "Second Floor Function Hall, Oroderm City Functions and Events Place, C.M. Recto, Davao City",
  },
  {
    event: "Training-Workshop on Nutritional Analysis",
    date: "June 3-5, 2025",
    time: "TBA",
    venue: "General Santos City",
  },
];



export default function EventSection() {
  return (
    <section
      id="home-updates"
      className="w-full py-25 bg-gradient-to-br from-gray-0 to-gray-100 "
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-16">
          {" "}
          {/* Increased bottom margin for better spacing */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight leading-tight px-5 md:px-0">
            <span className="text-blue-800">Recent</span> Events & Activities
          </h2>
          {/* Subtitle */}
          <p className="md:text-lg text-xl text-gray-600 max-w-5xl mx-auto text-center px-5 md:px-0">
            Stay informed about our latest conferences, workshops, and community engagement initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventList.map((e, index) => (
            <div
              key={index}
              className="bg-white shadow flex flex-col justify-between" // Added shadow-lg and flex-col for consistent height
            >
              <div className="p-6 flex-grow">
                {" "}
                {/* flex-grow to push footer down */}
                {/* Event Title */}
                <h3 className="text-xl font-bold text-gray-700 mb-4 leading-snug">
                  {e.event}
                </h3>{" "}
                {/* Larger title, better line height */}
                {/* Date */}
                <div className="flex items-center text-sm text-gray-700 mb-1">
                  {" "}
                  {/* Increased font size */}
                  <svg
                    className="w-5 h-5 mr-3 text-blue-800 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium">{e.date}</span>
                </div>
                {/* Time */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  {" "}
                  {/* Increased font size */}
                  <svg
                    className="w-5 h-5 mr-3 text-blue-800 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium">{e.time}</span>
                </div>
                {/* Venue */}
                <div className="flex items-start text-sm text-gray-500">
                  <svg
                    className="w-5 h-5 mt-0.5 mr-3 text-blue-800 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>{e.venue}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
