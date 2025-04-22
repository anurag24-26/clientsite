import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-yellow-50 min-h-screen p-6 text-gray-800">
      <Hero />
      <Highlights />

      <section className="text-center mt-16 space-y-6">
        {/* Button Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* View Courses Button */}
          <Link to="/courses">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300 transform">
              View Courses
            </button>
          </Link>

          {/* Check Results Button */}
          <Link to="/results">
            <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 hover:scale-105 transition-all duration-300 transform">
              Check Results
            </button>
          </Link>

          {/* Contact Us Button */}
          <Link to="/contact">
            <button className="bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-600 hover:scale-105 transition-all duration-300 transform">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Testimonials Section */}
        <div className="mt-12">
          <Testimonials />
        </div>

        {/* Enrollment Section */}
        <div className="mt-12 text-center py-6 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 border border-pink-500 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            🎉 <strong>New batches starting soon!</strong> Enroll now to reserve
            your seat.
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Limited seats available, don’t miss your chance to be part of the
            next batch!
          </p>
          <Link to="/contact">
            <button className="mt-4 bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-all duration-300 transform">
              Enroll Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
