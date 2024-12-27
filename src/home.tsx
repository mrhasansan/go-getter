export function HomeRoute() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Go Getter Academy</h1>
        <nav className="flex space-x-6">
          <a href="#success-stories" className="hover:underline">
            Success Stories
          </a>
          <a href="#resources" className="hover:underline">
            Resources
          </a>
          <a href="#contact" className="hover:underline">
            Contact Us
          </a>
          <a href="#vip-course" className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600">
            VIP Course
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <section id="success-stories">
          <h2 className="text-2xl font-semibold mb-6">Success Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Story Card */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="https://via.placeholder.com/300x200" alt="Success Story Thumbnail" className="rounded-md mb-4" />
              <h3 className="font-semibold text-lg">IELTS Success Story: Band 5 to Band 8</h3>
              <p className="text-gray-600 mt-2">Chijioke jumped from Band 5 to Band 8 in Reading...</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Watch Video</button>
            </div>

            {/* Repeat for other stories */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="https://via.placeholder.com/300x200" alt="Success Story Thumbnail" className="rounded-md mb-4" />
              <h3 className="font-semibold text-lg">IELTS Advantage Success Story</h3>
              <p className="text-gray-600 mt-2">Gokul, a doctor, achieved an impressive Band 8...</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Watch Video</button>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="https://via.placeholder.com/300x200" alt="Success Story Thumbnail" className="rounded-md mb-4" />
              <h3 className="font-semibold text-lg">Hard Work and Determination</h3>
              <p className="text-gray-600 mt-2">Elisa shares how she overcame struggles...</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Watch Video</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>© 2024 Go Getter Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
