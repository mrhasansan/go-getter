import HeroPeople from "../assets/college.svg";

export function Herocomponent() {
  return (
    <section className="bg-gray-50 py-12 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">👋 HELLO, GETTERS AND WELCOME TO:</h1>
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">GO-GETTER ACADEMY</h2>
          <p className="text-logblue  mb-4">
            Go Get Your Dreams With <span className="text-primary">Go-Getter Academy </span>!
          </p>
          <p className="text-gray-700 mb-6">Boost your IELTS skills and confidence with personalized classes and proven strategies! Whether you prefer one-on-one sessions or group learning, we’ve got you covered.</p>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600">Find Out More</button>
        </div>

        {/* Image Content (Hidden on Small Devices) */}
        <div className="lg:w-1/2 mt-8 lg:mt-0  justify-center relative hidden lg:block">
          <div className="relative z-10">
            <img src={HeroPeople} />
            <div className="absolute top-4 left-4 w-full h-full rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>

    // <section className="bg-gray-100 py-12 px-6 text-center">
    //   <div className="max-w-4xl mx-auto">
    //     <h1 className="text-4xl font-bold text-logblue mb-4">
    //       Go Get Your Dreams With <span className=" text-primary">Go-Getter Academy </span>
    //     </h1>
    //     <p className="text-lg text-gray-600 mb-6">Boost your IELTS skills and confidence with personalized classes and proven strategies! Whether you prefer one-on-one sessions or group learning, we’ve got you covered. </p>
    //     <button className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-yellow-500 transition">
    //       <a href="https://www.instagram.com/gogetter_academy/" target="_blank" rel="noopener noreferrer">
    //         {" "}
    //         Find Out More
    //       </a>
    //     </button>
    //   </div>
    // </section>
  );
}
