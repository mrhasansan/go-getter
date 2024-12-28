export function Herocomponent() {
  return (
    <section className="bg-gray-100 py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Go Get Your Dreams With <span className="text-primary">Go-Getter... </span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">Boost your IELTS skills and confidence with personalized classes and proven strategies! Whether you prefer one-on-one sessions or group learning, we’ve got you covered. </p>
        <button className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-yellow-500 transition">
          <a href="https://www.instagram.com/gogetter_academy/" target="_blank" rel="noopener noreferrer">
            {" "}
            Find Out More
          </a>
        </button>
      </div>
    </section>
  );
}
