import { CardRoute } from "./components/card";
import { FooterRoute } from "./components/footer";
import { Herocomponent } from "./components/hero";
import Logo from "./assets/gogetterlogo.svg";
import { useState } from "react";
import { Testimonials } from "./components/testimonials";
import { PricingCards } from "./components/price";
import { ListEvent } from "./components/events";

export function HomeRoute() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the menu after clicking
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="bg-white text-black flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <div>
          {/* Logo */}
          <img src={Logo} alt="Go Getter Logo" className="w-16 h-16 object-contain" />
        </div>
        <div>
          {/* Hamburger Icon (Visible on small devices) */}
          <button className="sm:hidden text-black text-3xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✕" : "☰"}
          </button>

          {/* Navigation Menu */}
          <nav className={`${isOpen ? "block" : "hidden"} absolute top-16 left-0 w-full sm:static sm:flex sm:space-x-6 px-6`}>
            <button onClick={() => scrollToSection("home")} className="block px-6 py-2 hover:underline">
              Home
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="block px-6 py-2 hover:underline">
              Success Stories
            </button>
            <button onClick={() => scrollToSection("events")} className="block px-6 py-2 hover:underline">
              Events
            </button>
            <div className="bg-primary text-white rounded hover:bg-yellow-500 transition">
              <a href="https://wa.me/message/ZX7P5C5NH2GPA1?src=qr" className="block px-6 py-2">
                Contact Us
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="my-6">
        {/* Add IDs to match the navbar links */}
        <section id="home" className="min-h-screen">
          <Herocomponent />
        </section>
        <section id="stories" className="min-h-screen">
          <CardRoute />
        </section>
        <section id="pricing" className="min-h-screen">
          <PricingCards />
        </section>
        <section id="testimonials" className="min-h-screen">
          <Testimonials />
        </section>
        <section id="events" className="min-h-screen">
          <ListEvent />
        </section>
      </main>

      {/* Footer */}
      <FooterRoute />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          href=" https://wa.me/message/ZX7P5C5NH2GPA1?src=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
            <path d="M20.52 3.482A11.855 11.855 0 0012 0a11.855 11.855 0 00-8.518 3.482A11.852 11.852 0 000 12c0 2.134.559 4.222 1.619 6.066L0 24l6.004-1.599A11.85 11.85 0 0012 24c3.17 0 6.147-1.235 8.518-3.482A11.855 11.855 0 0024 12a11.852 11.852 0 00-3.48-8.518zM12 22.146a10.502 10.502 0 01-5.692-1.669l-.41-.259-3.56.947.957-3.485-.281-.426A10.493 10.493 0 011.854 12 10.507 10.507 0 013.73 6.309a10.51 10.51 0 013.758-3.758A10.507 10.507 0 0112 1.854c2.824 0 5.475 1.1 7.452 3.077A10.5 10.5 0 0122.146 12c0 2.823-1.1 5.475-3.077 7.452A10.502 10.502 0 0112 22.146zm5.919-7.994c-.325-.16-1.922-.948-2.219-1.059-.297-.112-.513-.161-.73.16-.216.32-.837 1.06-1.025 1.277-.188.216-.375.24-.7.08-.325-.16-1.371-.505-2.609-1.607-.963-.86-1.61-1.922-1.799-2.246-.188-.325-.02-.501.14-.66.142-.14.325-.36.487-.537.162-.18.216-.257.325-.428.108-.161.054-.301-.027-.461-.081-.16-.73-1.761-.999-2.402-.263-.632-.528-.544-.73-.553l-.6-.01c-.216 0-.57.081-.867.4-.297.32-1.141 1.116-1.141 2.719 0 1.601 1.167 3.146 1.33 3.364.162.216 2.294 3.505 5.57 4.81.779.336 1.385.48 1.856.614.78.247 1.491.213 2.055.129.627-.093 1.922-.788 2.194-1.553.273-.765.273-1.42.19-1.553-.081-.133-.297-.216-.62-.376z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
