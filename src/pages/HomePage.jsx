import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-yellow-50 min-h-screen p-6 text-gray-800">
      <Hero />
      <Highlights />

      <section className="text-center mt-10 space-x-4">
        <Link to="/courses">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            View Courses
          </button>
        </Link>
        <Link to="/results">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
            Check Results
          </button>
        </Link>
        <Link to="/contact">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition">
            Contact Us
          </button>
        </Link>
      </section>

      <Testimonials />

      <div className="mt-10 text-center py-4 bg-pink-100 border border-pink-300 rounded">
        🎉 <strong>New batches starting soon!</strong> Enroll now to reserve
        your seat.
      </div>
    </div>
  );
}
