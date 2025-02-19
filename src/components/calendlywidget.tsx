import { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/gogetteracademy01/90min",
          text: "Book/See Time Available",
          color: "#0069ff",
          textColor: "#ffffff",
        });
      }
    };
  }, []);

  return null;
};

export default CalendlyWidget;
