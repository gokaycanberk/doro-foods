import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    loading: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({
      submitted: false,
      error: false,
      loading: true,
    });

    // EmailJS: You need to sign up at emailjs.com and get your own service ID, template ID, and public key
    // Replace these placeholders with your actual IDs and keys
    const serviceId = "YOUR_SERVICE_ID"; // Replace with your service ID
    const templateId = "YOUR_TEMPLATE_ID"; // Replace with your template ID
    const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your public key

    if (formRef.current) {
      emailjs
        .sendForm(serviceId, templateId, formRef.current, publicKey)
        .then((result) => {
          console.log("Email sent successfully:", result.text);
          setFormStatus({
            submitted: true,
            error: false,
            loading: false,
          });

          // Reset form after successful submission
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error("Error sending email:", error.text);
          setFormStatus({
            submitted: false,
            error: true,
            loading: false,
          });
        });
    }
  };

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="relative h-[300px] sm:h-[400px] w-full">
        <img
          src="/images/contact-hero.png"
          alt="Contact Doro Foods"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent flex items-center justify-center z-10">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg tracking-wide animate-fade-in">
            Let's Partner
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Side - Contact Info */}
            <div className="space-y-10">
              <div className="animate-fade-in">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-6 text-gray-800">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you're a supermarket manager, retail buyer, or
                  distributor, we're here to help. Reach out for exclusive
                  pricing, product catalogs, and tailored wholesale solutions.
                </p>

                <div className="space-y-6 text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>2 Main St Unit B, Ridgefield Park, NJ 07660</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+13475924494"
                        className="text-green-600 hover:text-green-700 transition"
                      >
                        +1 (347) 592-4494
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:info@dorofoods.com"
                        className="text-green-600 hover:text-green-700 transition"
                      >
                        info@dorofoods.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="space-y-10">
              {/* Interactive Contact Form */}
              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-md animate-fade-in">
                <h3 className="text-xl font-bold mb-6 text-gray-800">
                  Send Us a Message
                </h3>

                {formStatus.submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
                    <p className="font-medium">Thank you for your message!</p>
                    <p className="text-sm mt-1">
                      We'll get back to you as soon as possible.
                    </p>
                    <button
                      className="mt-4 text-sm font-medium text-green-700 underline"
                      onClick={() =>
                        setFormStatus({
                          submitted: false,
                          error: false,
                          loading: false,
                        })
                      }
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      ></textarea>
                    </div>

                    {formStatus.error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md">
                        <p className="text-sm">
                          There was an error sending your message. Please try
                          again or contact us directly.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formStatus.loading}
                      className={`w-full py-3 px-4 rounded-md font-medium text-white transition ${
                        formStatus.loading
                          ? "bg-green-400 cursor-not-allowed"
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      {formStatus.loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Full Width */}
      <section className="w-full h-[400px]">
        <iframe
          title="Doro Foods Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.1508080373156!2d-74.02252042397577!3d40.8043894336646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f9e4a30cc3cf%3A0x17c028d76c2adf4!2s2%20Main%20St%2C%20Ridgefield%20Park%2C%20NJ%2007660%2C%20USA!5e0!3m2!1sen!2sus!4v1710978568800!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
