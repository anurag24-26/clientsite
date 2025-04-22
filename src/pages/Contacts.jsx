export default function Contact() {
  return (
    <section className="py-16 px-6 bg-white text-gray-800 max-w-6xl mx-auto">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-red-600 mb-10">
        Contact Us
      </h2>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Info Box */}
        <div className="bg-red-50 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-red-500 mb-4">
            New Krishna Coaching Centre
          </h3>

          <div className="mb-6 text-gray-700 space-y-3">
            <p>
              <strong>Address:</strong>
              <br />
              Sudhuapar (Garthauli), Barhalganj
              <br />
              Reg-D-035, Gorakhpur Varanasi Road
              <br />
              Gorakhpur - 273402
              <br />
              (Near Petrol Pump, Sidhuapar)
            </p>

            <p>
              <strong> Contact No.</strong>{" "}
              <a
                href="tel:+919935769888"
                className="text-red-600 underline hover:text-red-700"
              >
                +91 9935769888
              </a>
            </p>
          </div>

          <a
            href="https://www.google.com/maps/place/New+Krishna+Coaching+Centre,+Sudhuapar+Barhalganj,+Gorakhpur,+273402/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition duration-200"
          >
            📍 Get Directions
          </a>
        </div>

        {/* Google Map */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.883070645466!2d83.50012627541838!3d26.297890377019016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399178ca3c6bb895%3A0x46098b0a82ca8d6e!2sNew%20Krishna%20Coaching%20Center%20Sidhuapar%2C%20NKCC!5e0!3m2!1sen!2sin!4v1745345396442!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
