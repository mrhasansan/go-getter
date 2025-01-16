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
    </section>
  );
}
