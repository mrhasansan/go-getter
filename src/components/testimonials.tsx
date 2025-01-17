import komang from "../assets/komangsuare.png";
import bintang from "../assets/bintangsquare.png";
import dheo from "../assets/dheosquare.png";

export function Testimonials() {
  const testimonials = [
    {
      name: "Bintang",
      type: "one-on-one",
      image: bintang, // Replace with real image URL
      text: "So far, udah ngelewatin semua aspek IELTS course, dari reading sampe speaking. Semua materi disampaikan dengan cara yang super terstruktur, tapi tetep chill dan gampang dicerna. Cara ngajarnya tuh enak banget, gak ngerasa ditekan harus bisa semuanya, malah kayak ada yang nemenin belajar gitu. Yang paling worth it sih setiap kali kelar ngerjain task, langsung dapet apresiasi, semangat, plus feedback yang bikin lebih semangat buat lanjut. Makanya, walaupun kadang pengen nyerah, tetep bisa stay motivated. Highly recommended buat kalian para beasiswa hunters yang pengen siap-siap IELTS dengan cara fun dan efektif!",
    },
    {
      name: "Komang",
      type: "IELTS introduction",
      image: komang, // Replace with real image URL
      text: "As a final-year agricultural student at Tadulako University, I had the pleasure of attending Go Getter Academy for my IELTS preparation, and I couldn't be more satisfied. The teaching approach is exceptional; the instructor’s friendly demeanor creates a welcoming environment that makes learning enjoyable. Each method of IELTS preparation was thoroughly explained, and even though it was just an overview, the insights I gained were truly marvelous. The supportive atmosphere and effective strategies provided by Go Getter Academy have significantly boosted my confidence. I highly recommend this academy to anyone looking to excel in their IELTS exam!",
    },
    {
      name: "Dheo",
      type: "IELTS introduction",
      image: dheo, // Replace with real image URL
      text: "I love the interactive atmosphere of the class and the abundance of practice questions. The tutor also always provides constructive feedback",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">What Do Students Say About Us?</h2>
        <p className="text-gray-600 mt-2">Our students share their learning experiences with Go-Getter Academy.</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-start">
            {/* Profile Image */}
            <img src={testimonial.image} alt={testimonial.name} className=" rounded-full mb-4 w-36 h-36" />
            {/* Name and Country */}
            <h3 className="text-lg font-bold text-logblue">{testimonial.name}</h3>
            <p className="text-sm text-primary">{testimonial.type}</p>
            {/* Testimonial Text */}
            <p className="text-gray-600 mt-4">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
