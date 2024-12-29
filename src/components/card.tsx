export function CardRoute() {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Achieve your dream IELTS band score!</h2>
        <p className="text-gray-600">The ultimate solution to build your skills and confidence.</p>
      </div>
      <div className=" relative px-6">
        <img
          src="https://c.files.bbci.co.uk/2c03/live/64d39070-8596-11ef-addc-5556603eb4c1.jpg" // Replace with your photo URL
          alt="Logo or related image"
          className="w-full h-full "
        />
        {/* Text in Front of Image */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-2xl font-bold  bg-transparent bg-opacity-50 px-4 py-2 rounded">Go-Getter Academy</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 p-6">
        {/* VIP Card */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-logblue">One-on-One Focus</h3>
          <p className="text-gray-600 mb-6">Get one-on-one learning for personalized guidance, focused support, and faster progress toward your goals!</p>
          <button className="bg-primary text-white py-2 px-4 rounded hover:bg-yellow-500 transition">
            <a href=" https://forms.gle/qjXdv4UvocARxrBy6" target="_blank" rel="noopener noreferrer">
              {" "}
              Join Class
            </a>
          </button>
        </div>
        {/* Practice Card */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-logblue">Group Learning</h3>
          <p className="text-gray-600 mb-6">Join our group learning sessions to connect with peers, share experiences, and learn collaboratively in a supportive environment guided by expert instructors!</p>
          <button className="bg-primary text-white py-2 px-4 rounded hover:bg-yellow-500 transition">
            <a href=" https://forms.gle/qjXdv4UvocARxrBy6" target="_blank" rel="noopener noreferrer">
              {" "}
              Join Class
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
