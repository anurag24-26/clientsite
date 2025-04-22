import React from "react";
import { FaChalkboardTeacher, FaAward } from "react-icons/fa";

const facultyList = [
  {
    name: "Mr. Rajnish Dubey",
    subjects: ["Physics", "Math"],
    experience: "8+ years",
    photo: null,
  },
  {
    name: "Mr. Durgesh Pandey",
    subjects: ["Biology", "Chemistry", "Physics"],
    experience: "6+ years",
    photo: null,
  },
  {
    name: "Mr. Abhishek ",
    subjects: ["Commerce"],
    experience: "5+ years",
    photo: null,
  },
];

export default function Faculty() {
  return (
    <div className="px-4 mt-10 py-12 bg-gradient-to-br from-yellow-50 to-orange-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-orange-600 text-center mb-10">
        👩‍🏫 Our Faculty
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {facultyList.map((faculty, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden p-5 flex flex-col items-center text-center"
          >
            {/* Optional Photo */}
            {faculty.photo ? (
              <img
                src={faculty.photo}
                alt={faculty.name}
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
            ) : (
              <div className="w-24 h-24 flex items-center justify-center bg-orange-200 rounded-full mb-4 text-orange-700 text-3xl font-bold">
                {faculty.name.charAt(0)}
              </div>
            )}

            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {faculty.name}
            </h3>

            <p className="text-sm text-gray-600 flex items-center gap-1 mb-2">
              <FaChalkboardTeacher className="text-orange-500" />
              <span className="font-medium text-gray-700">
                {faculty.subjects.join(", ")}
              </span>
            </p>

            <p className="text-sm text-gray-600 flex items-center gap-1">
              <FaAward className="text-orange-500" />
              Experience:{" "}
              <span className="font-medium text-gray-700">
                {faculty.experience}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
