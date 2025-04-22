export default function About() {
  return (
    <section className="py-16 px-6 bg-gray-100 text-gray-800 max-w-7xl mx-auto">
      {/* Title */}
      <h2 className="text-5xl font-extrabold text-center text-red-600 mb-16">
        About Us
      </h2>

      {/* Coaching Story + Director */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16 bg-white shadow-xl rounded-lg p-8">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="https://scontent-del2-2.xx.fbcdn.net/v/t39.30808-6/483915944_2770627716449172_1527869402318871420_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rv7SVHNG3N4Q7kNvwGqarbg&_nc_oc=AdkihP0APp8JQZ55bpZMOYn3BzZIOmqz1TTooFr9YUk7VVAtypwbqZEnGF6jmkHS13A&_nc_zt=23&_nc_ht=scontent-del2-2.xx&_nc_gid=NQMZoXoQYHxyhLRHL8PsSg&oh=00_AfGy9wKELnyhO7zayN6FTwInKB9mNOyJ937QoQYJOx-rag&oe=680D485D"
            alt="Director"
            className="w-56 h-56 rounded-full object-cover border-8 border-red-500 shadow-2xl"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-3xl font-semibold text-red-500 mb-6">
            Director's Message
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            At New Krishna Coaching Centre, we believe that every child has
            potential. Since our inception, we’ve helped hundreds of students
            improve academically with consistent guidance, personal attention,
            and a values-driven approach.
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-white shadow-xl rounded-lg p-8 mb-16">
        <h3 className="text-3xl font-semibold text-red-500 mb-6">
          Our Mission & Values
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to provide quality education to school students of CBSE
          (3–12) and UP Board (9–12), focusing on individual care, regular
          assessments, and moral values. We strive to create a nurturing
          environment where every student feels supported.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white shadow-xl rounded-lg p-8">
        <h3 className="text-3xl font-semibold text-red-500 mb-6">
          Why Choose Us?
        </h3>
        <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
          <li>Experienced and dedicated faculty</li>
          <li>Small batch size for personal attention</li>
          <li>Weekly and monthly tests with performance tracking</li>
          <li>Parent-teacher meetings</li>
          <li>Focus on conceptual learning & doubt clearing</li>
        </ul>
      </div>
    </section>
  );
}
