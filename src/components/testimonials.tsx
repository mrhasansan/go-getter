export function Testimonials() {
  const testimonials = [
    {
      name: "Ch Hamza",
      country: "Pakistan",
      image: "https://via.placeholder.com/100", // Replace with real image URL
      text: "It's a very useful platform for students. Furthermore, it is great for students from all over the world to prepare anywhere.",
    },
    {
      name: "Wasiu Tope Adebayo",
      country: "Nigeria",
      image: "https://via.placeholder.com/100", // Replace with real image URL
      text: "Dear team, you made the actual test easier and for this, I like to say a very big thank you for all the efforts put in place for me to emerge successfully. I took the test once and passed. Thanks for the good job and for putting smiles on our faces.",
    },
    {
      name: "Prasanth Kolanchi",
      country: "India",
      image: "https://via.placeholder.com/100", // Replace with real image URL
      text: "It's a wonderful website and makes me more comfortable when practicing the exercises. Thanks a lot, team.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">What Do Students Say About Us?</h2>
        <p className="text-gray-600 mt-2">Our global students share their learning experiences with IOT.</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            {/* Profile Image */}
            <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4" />
            {/* Name and Country */}
            <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.country}</p>
            {/* Testimonial Text */}
            <p className="text-gray-600 mt-4">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
