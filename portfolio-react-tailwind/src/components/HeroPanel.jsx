export default function HeroPanel() {
  return (
    <>
      <div className="flex justify-center px-2 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 grid-rows-auto gap-4 w-full max-w-[800px]">

          {/* About Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-5 border border-[#eaeaea] rounded-xl shadow-md p-5 bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">About</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              I'm a backend software developer specializing in building scalable solutions using the MERN stack, PHP, and MySQL. I work on designing secure APIs, managing databases, and integrating backend systems for modern web and mobile platforms.
            </p>
          </div>

          {/* Techstack Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 border border-[#eaeaea] rounded-xl shadow-md p-5 bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Techstack</h3>

            <div className="mb-2">
              <h4 className="text-sm font-medium text-gray-700">Frontend</h4>
              <div className="flex flex-wrap gap-2 mt-1">
                {["React", "JavaScript", "Bootstrap", "Tailwind"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs bg-gray-100 rounded-md shadow-sm text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-2 mt-3">
              <h4 className="text-sm font-medium text-gray-700">Backend</h4>
              <div className="flex flex-wrap gap-2 mt-1">
                {["JavaScript", "Express.js", "Node.js", "PHP","Java"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs bg-gray-100 rounded-md shadow-sm text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <h4 className="text-sm font-medium text-gray-700">Database</h4>
              <div className="flex flex-wrap gap-2 mt-1">
                {["MongoDB", "MySQL"].map((db) => (
                  <span key={db} className="px-3 py-1 text-xs bg-gray-100 rounded-md shadow-sm text-gray-700">
                    {db}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 border border-[#eaeaea] rounded-xl shadow-md p-5 bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Connect</h3>
            <p className="text-sm text-gray-600">
              Let’s connect! Reach out via LinkedIn, GitHub, or email for collaborations and opportunities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
