export default function About() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-gray-800 max-w-7xl mx-auto">
      {/* Title */}
      <h2 className="text-6xl font-extrabold text-center text-red-600 mb-12 tracking-wide">
        About Us
      </h2>

      {/* Coaching Story + Director */}
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-lg p-8 shadow-xl mb-16 transition-transform transform hover:scale-105 duration-500 ease-in-out">
        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <img
            src="https://scontent-del2-1.xx.fbcdn.net/v/t1.6435-9/46142723_1011848905660404_8588703431034667008_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NKOQ0z1_gJYQ7kNvwHGkzkp&_nc_oc=AdmNLkdK_DNnKsBNrIL7uiBnDJ-okX5DEgNC3Ql2Mj4LGjh1z0X0lLiWNT-_DNSefso&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=sfFM7qz7U4aSkQ0ah2y5Fg&oh=00_AfFyaRE3xwI1RjiEK45XLw5Bhbd5DTEgMmO53G3naWQP-Q&oe=682F54CB"
            alt="Director"
            className="w-56 h-56 rounded-full object-cover border-4 border-red-500 shadow-2xl"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-3xl font-semibold text-red-500 mb-4">
            Director's Message - Krishna Tripathi
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At New Krishna Coaching Centre, we believe that every child has
            potential. Since our inception, we’ve helped thousands of students
            improve academically with consistent guidance, personal attention,
            and a values-driven approach. Our mission is not only academic
            excellence but also building confidence and moral integrity.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            As the Managing Director, I, Krishna Tripathi, promise to continue
            nurturing the future leaders of tomorrow by providing the best
            learning experience tailored to each student's unique needs.
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-white rounded-lg p-8 mb-16 shadow-xl hover:shadow-2xl transition-all duration-300">
        <h3 className="text-3xl font-semibold text-red-500 mb-6">
          Our Mission & Values
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to provide quality education to school students of CBSE
          (3–12) and UP Board (9–12), focusing on individual care, regular
          assessments, and moral values. We strive to create a nurturing
          environment where every student feels supported and inspired to excel.
        </p>
      </div>

      {/* Why Choose Us? */}
      <div className="bg-white rounded-lg p-8 mb-16 shadow-xl hover:shadow-2xl transition-all duration-300">
        <h3 className="text-3xl font-semibold text-red-500 mb-6">
          Why Choose Us?
        </h3>
        <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
          <li>
            Experienced and dedicated faculty with years of teaching expertise.
          </li>
          <li>
            Small batch size for personalized attention and better interaction.
          </li>
          <li>
            Weekly and monthly tests with performance tracking to gauge
            progress.
          </li>
          <li>
            Regular parent-teacher meetings for consistent feedback and growth.
          </li>
          <li>
            Focus on conceptual learning & doubt clearing for a stronger
            foundation.
          </li>
          <li>
            State-of-the-art infrastructure and learning resources for a better
            experience.
          </li>
        </ul>
      </div>

      {/* Our Achievements */}
      <div className="bg-white rounded-lg p-8 mb-16 shadow-xl hover:shadow-2xl transition-all duration-300">
        <h3 className="text-3xl font-semibold text-red-500 mb-6">
          Our Achievements
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Over the years, New Krishna Coaching Centre has been a beacon of
          academic success, with hundreds of students achieving top ranks in
          competitive exams. Some of our notable achievements include:
        </p>
        <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
          <li>100+ students admitted to top colleges across the country.</li>
          <li>Consistent 90%+ success rate in CBSE & UP Board exams.</li>
        </ul>
      </div>

      {/* Student Success Stories */}
      <div className="bg-white rounded-lg p-8 mb-16 shadow-xl hover:shadow-2xl transition-all duration-300">
        <h3 className="text-3xl font-semibold text-red-500 mb-6">
          Success Stories
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Don’t just take our word for it! Hear directly from our students and
          their families about how our coaching center has helped them achieve
          their academic dreams:
        </p>
        {/* Here you can dynamically add student success stories with quotes or images */}
      </div>
    </section>
  );
}
