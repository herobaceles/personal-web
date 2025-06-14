import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaBootstrap,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaUser,
  FaLaptopCode,
  FaLink,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiExpress,
} from "react-icons/si";

export default function HeroPanel() {
  return (
    <div className="flex justify-center px-2 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full max-w-[800px]">

        {/* About Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-5 border border-[#eaeaea] rounded-md shadow-sm p-5 bg-white">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <FaUser className="text-blue-900" />
            About
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            I'm a frontend software developer specializing in building responsive and user-friendly interfaces using React.js, JavaScript, and modern CSS frameworks. I focus on creating intuitive UI components, integrating RESTful APIs, and delivering seamless web and mobile experiences across modern platforms.
          </p>
        </div>

        {/* Techstack Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 border border-[#eaeaea] rounded-md shadow-sm p-5 bg-white">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <FaLaptopCode className="text-blue-900" />
            Techstack
          </h3>

          <div className="mb-2">
            <h4 className="text-sm font-medium text-gray-700">Frontend</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="flex items-center gap-1 px-3 py-1 text-xs bg-gray-100 rounded-md shadow-sm text-cyan-500">
                <FaReact /> React
              </span>
              <span className="flex items-center gap-1 px-3 py-1 text-xs bg-gray-100 rounded-md shadow-sm text-yellow-400">
                <SiJavascript /> JavaScript
              </span>
              <span className="flex items-center gap-1 px-3 py-1 text-xs bg-gray-100 rounded-md shadow-sm text-purple-600">
                <FaBootstrap /> Bootstrap
              </span>
              <span className="flex items-center gap-1 px-3 py-1 text-xs bg-gray-100 rounded-md shadow-sm text-sky-400">
                <SiTailwindcss /> Tailwind
              </span>
            </div>
          </div>

          <div className="mb-2 mt-3">
            <h4 className="text-sm font-medium text-gray-700">Backend</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="flex items-center gap-1 px-3 py-1 text-xs bg-gray-100 rounded-md shadow-sm text-green-600">
                <FaNodeJs /> Node.js
              </span>
              <span className="flex items-center gap-1 px-3 py-1 text-xs bg-gray-100 rounded-md shadow-sm text-gray-700">
                <SiExpress /> Express.js
              </span>
              <span className="flex items-center gap-1 px-3 py-1 text-xs bg-gray-100 rounded-md shadow-sm text-indigo-500">
                <FaPhp /> PHP
              </span>
              <span className="flex items-center gap-1 px-3 py-1 text-xs bg-gray-100 rounded-md shadow-sm text-orange-500">
                <FaJava /> Java
              </span>
            </div>
          </div>

          <div className="mt-3">
            <h4 className="text-sm font-medium text-gray-700">Database</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="flex items-center gap-1 px-3 py-1 text-xs bg-gray-100 rounded-md shadow-sm text-green-700">
                <SiMongodb /> MongoDB
              </span>
              <span className="flex items-center gap-1 px-3 py-1 text-xs bg-gray-100 rounded-md shadow-sm text-blue-500">
                <SiMysql /> MySQL
              </span>
            </div>
          </div>
        </div>

        {/* Connect Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 border border-[#eaeaea] rounded-md shadow-sm p-5 bg-white">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <FaLink className="text-blue-900" />
            Connect
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Let’s connect! Reach out via LinkedIn, GitHub, or email for collaborations and opportunities.
          </p>
          <div className="flex gap-4 text-blue-900 text-xl">
            <a href="https://github.com/herobaceles" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/HeroBaceles" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:hero.baceles.cln@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
