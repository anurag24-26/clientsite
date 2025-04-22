import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section className="mt-12 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
        What Parents Say
      </h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
        <div className="bg-white p-4 rounded-xl shadow-md w-full md:w-1/2">
          <p className="text-gray-700 italic mb-2">
            <FaQuoteLeft className="inline-block mr-1 text-blue-400" />
            Excellent coaching and personal attention to every student.
            <FaQuoteRight className="inline-block ml-1 text-blue-400" />
          </p>
          <p className="text-right font-semibold text-gray-600">— Mr. Rajesh</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md w-full md:w-1/2">
          <p className="text-gray-700 italic mb-2">
            <FaQuoteLeft className="inline-block mr-1 text-green-400" />
            Very satisfied with the faculty and environment.
            <FaQuoteRight className="inline-block ml-1 text-green-400" />
          </p>
          <p className="text-right font-semibold text-gray-600">— Mrs. Neha</p>
        </div>
      </div>
    </section>
  );
}
