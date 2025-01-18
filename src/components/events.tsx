import webinar1 from "../assets/webinar1.jpg";
import webinar2 from "../assets/webinar2.png";

export function ListEvent() {
  const eventscedule = [
    {
      name: "Kick-Start Your LPDP Scholarship",
      series: "Webinar Series 1", // Series name for grouping
      image: webinar1, // Replace with actual image URL
      date: "Friday, 10 January 2025",
      description: "Learn the essential steps to prepare for your LPDP Scholarship journey. Gain insights into requirements, tips for success, and strategies to stand out.",
      status: "completed", // Indicates if the event has been completed
    },
    {
      name: "How to Write an Outstanding Essay for LPDP Scholarship",
      series: "Webinar Series 2", // Series name for grouping
      image: webinar2, // Replace with actual image URL
      date: "Friday, 24 January 2025",
      description: "Explore effective brainstorming techniques to craft a compelling contribution essay and self-assessment essay for your LPDP Scholarship application.",
      status: "upcoming", // Indicates if the event is upcoming
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">Events</h1>
        <p className="text-gray-600 text-lg">Join our upcoming LPDP webinars!</p>
      </div>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {eventscedule.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Event Image */}
            <img src={event.image} alt={event.name} className="w-full " />

            {/* Event Content */}
            <div className="p-4">
              {/* Event Name */}
              <h3 className="text-lg font-bold text-logblue mb-2">{event.name}</h3>

              {/* Event Description */}
              <p className="text-gray-600 mb-4">{event.description}</p>

              {/* Event Date */}
              <div className="flex items-center text-gray-600 mb-2">
                <span className="mr-2">📅</span>
                <span>{event.date}</span>
              </div>

              {/* Status Indicator */}
              {event.status === "completed" ? (
                <p className="text-gray-500 text-sm italic">Webinar telah dilaksanakan.</p>
              ) : (
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdcYWeycIUiuytDaVpIC8W4eDv26V1dU-Wtx58l8KE0b-zqRQ/viewform"
                  className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 hover:text-white transition duration-300"
                >
                  Register Now
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
