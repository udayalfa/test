import { useEffect, useState } from "react";
import { contact } from "../api/contactApi";
import { useLoader } from "../context/LoaderContext";
import { useLocation } from "react-router-dom";
import { error, success } from "../components/UIElement/toastsObj";

const ContactUs = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { show, hide } = useLoader();
  useEffect(() => {
    if (location.hash === "#find-us") {
      const el = document.querySelector(location.hash);
      const offset = 80; // if you have fixed navbar
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [location]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    show();
    try {
      const response = await contact(formData);
      success("Form Submitted Successfully");
    } catch (e) {
      error("Something went wrong");
    } finally {
      hide();
    }
  };

  return (
    <div className="flex flex-col items-center px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-12 animate-fade-up">
        <h1 className="text-4xl sm:text-5xl mb-4">Get in Touch</h1>
        <p className="text-lg max-w-xl mx-auto text-gray-700">
          We’d love to hear from you! Whether you have a question about our
          jewelry, availability, pricing, or anything else — our team is ready
          to assist.
        </p>
      </div>

      {/* Contact Info + Form Section */}
      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-2xl rounded-xl overflow-hidden w-full max-w-6xl animate-fade-in">
        {/* Left Side - Contact Info with Background Image */}
        <div
          style={{
            backgroundImage: "url('/img/contact.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="p-10 hidden md:block"
        ></div>

        {/* Right Side - Form */}
        <div className="space-y-6 p-8 bg-white">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent ] outline-none transition duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent  outline-none transition duration-300"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your mobile number"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent outline-none transition duration-300"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject of your inquiry"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent ] outline-none transition duration-300"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent ] outline-none resize-none transition duration-300"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-3 text-lg cursor-pointer rounded-lg border border-gray-300 text-black hover:bg-custom-yellow transition-transform transform hover:scale-105 active:scale-95 duration-300"
          >
            Send Message
          </button>
        </div>
      </div>
      <div>
        <h1
          id="find-us"
          className="text-4xl sm:text-5xl mt-12 text-center animate-fade-up"
        >
          Find Us
        </h1>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mt-4 animate-fade-in-up">
          Located in the heart of Sri Muktsar Sahib, Jagdish Kirpan Store
          proudly welcomes you to a legacy of craftsmanship and recognition.
          Visit our store to explore an exclusive collection of trophies,
          medals, mementos, shields, and awards—thoughtfully designed to honor
          achievement and excellence. Whether you’re celebrating a victory,
          milestone, or special occasion, our doors are always open to help you
          commemorate success with pride.
        </p>
      </div>

      {/* Google Map Section */}
      <div className="w-full max-w-6xl mt-12 rounded-2xl overflow-hidden shadow-2xl border border-[var(--custom-yellow)] animate-fade-in-up">
        <iframe
          title="Abnash Jewellers Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.617790032265!2d74.51177267536248!3d30.475262174709478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917690ec6d6224f%3A0x5792950304641183!2sJAGDISH%20KIRPAN%20STORE!5e0!3m2!1sen!2sin!4v1767990518050!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-[100%] h-[400px] md:h-[600px]"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
