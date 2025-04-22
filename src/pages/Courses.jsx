import React, { useState } from "react";
import {
  FaBookOpen,
  FaGraduationCap,
  FaClock,
  FaLightbulb,
} from "react-icons/fa";

export default function Courses() {
  const [board, setBoard] = useState("CBSE");

  return (
    <div className="px-4 py-12 mt-10 bg-gradient-to-br from-red-50 to-red-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-red-600 text-center mb-8 drop-shadow-md">
        🎓 Courses Offered
      </h1>

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setBoard("CBSE")}
          className={`px-6 py-2 rounded-l-full border transition font-semibold ${
            board === "CBSE"
              ? "bg-red-600 text-white"
              : "bg-white text-red-600 border-red-500"
          }`}
        >
          CBSE
        </button>
        <button
          onClick={() => setBoard("UP")}
          className={`px-6 py-2 rounded-r-full border transition font-semibold ${
            board === "UP"
              ? "bg-red-600 text-white"
              : "bg-white text-red-600 border-red-500"
          }`}
        >
          UP Board
        </button>
      </div>

      {/* Course Cards */}
      {board === "CBSE" ? (
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Class 3–8 */}
          <div className="bg-white shadow rounded-lg p-5">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-2">
              <FaGraduationCap className="text-red-500" /> Class 3–8
            </h3>
            <p className="text-sm text-gray-500 mb-1">Subjects:</p>
            <div className="flex flex-wrap gap-2 text-sm text-white">
              {["English", "Math", "Science", "SST", "Hindi", "Computer"].map(
                (subj) => (
                  <span
                    key={subj}
                    className="bg-red-400 px-3 py-1 rounded-full shadow"
                  >
                    {subj}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Class 9–12 */}
          <div className="bg-white shadow rounded-lg p-5">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-2">
              <FaGraduationCap className="text-red-500" /> Class 9–12
            </h3>
            <p className="text-sm text-gray-500 mb-1">Focused Subjects:</p>
            <div className="flex flex-wrap gap-2 text-sm text-white">
              {[
                "Physics",
                "Chemistry",
                "Biology",
                "Math",
                "English",
                "Economics",
              ].map((subj) => (
                <span
                  key={subj}
                  className="bg-red-400 px-3 py-1 rounded-full shadow"
                >
                  {subj}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg p-6 mb-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            UP Board (Class 9–12)
          </h3>
          <p className="text-gray-700 mb-2 font-semibold">Hindi Medium:</p>
          <div className="flex flex-wrap gap-2 mb-4 text-sm text-white">
            {["Hindi", "History", "Civics", "Math", "Science"].map((s) => (
              <span
                key={s}
                className="bg-red-400 px-3 py-1 rounded-full shadow"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="text-gray-700 mb-2 font-semibold">English Medium:</p>
          <div className="flex flex-wrap gap-2 text-sm text-white">
            {["English", "Physics", "Chemistry", "Biology", "Math"].map((s) => (
              <span
                key={s}
                className="bg-red-400 px-3 py-1 rounded-full shadow"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Batch Timings */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
          <FaClock className="text-red-500" /> Batch Timings & Days
        </h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Morning Batch: 7:00 AM – 10:00 AM (Mon–Sat)</li>
          <li>Evening Batch: 3:00 PM – 7:00 PM (Mon–Sat)</li>
          <li>Special Test Series on Sundays</li>
        </ul>
      </div>

      {/* Teaching Approach */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
          <FaLightbulb className="text-red-500" /> Teaching Approach
        </h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Weekly Doubt Sessions</li>
          <li>Regular Test Series</li>
          <li>One-on-One Mentorship</li>
          <li>Result-Oriented Strategy</li>
        </ul>
      </div>
    </div>
  );
}
