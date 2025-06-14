import { FaProjectDiagram } from "react-icons/fa";

export default function Project() {
  return (
    <div className="flex justify-center px-2">
      <div className="w-[800px] mt-4 border border-[#eaeaea] rounded-md shadow-md p-4 bg-white !dark:bg-white transition-colors duration-300">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-black mb-4 flex items-center gap-2">
          <FaProjectDiagram className="text-blue-900" />
          Projects
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-800 mb-4">
          Here are some of the projects I've worked on recently.
        </p>

        {/* Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Project 1 */}
          <div className="border border-gray-200 rounded p-2 bg-gray-50 shadow-sm">
            <h4 className="text-sm font-semibold text-gray-800 mb-1 leading-tight">
              Say What? Dictionary App
            </h4>
            <p className="text-xs text-gray-600 mb-1 leading-snug">
              A dictionary app using the Dictionary API. Built with React and Tailwind.
            </p>
            <div className="flex flex-wrap gap-1 text-[10px] mb-1">
              <span className="bg-blue-100 text-blue-700 px-2 py-[2px] rounded">React</span>
              <span className="bg-yellow-100 text-yellow-700 px-2 py-[2px] rounded">Dictionary API</span>
              <span className="bg-purple-100 text-purple-700 px-2 py-[2px] rounded">Tailwind</span>
            </div>
            <a
              href="http://say-what-dictionary.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-xs text-white bg-blue-900 hover:bg-blue-800 px-2 py-1 rounded"
            >
              Visit Project
            </a>
          </div>

          {/* Project 2 */}
          <div className="border border-gray-200 rounded p-2 bg-gray-50 shadow-sm">
            <h4 className="text-sm font-semibold text-gray-800 mb-1 leading-tight">
              Track.IT Expense Tracker
            </h4>
            <p className="text-xs text-gray-600 mb-1 leading-snug">
              Track income and expenses with pie chart reports.
            </p>
            <div className="flex flex-wrap gap-1 text-[10px] mb-1">
              <span className="bg-green-100 text-green-700 px-2 py-[2px] rounded">React</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-[2px] rounded">Node.js</span>
              <span className="bg-yellow-100 text-yellow-700 px-2 py-[2px] rounded">MongoDB</span>
            </div>
            <span className="inline-block text-xs text-white bg-gray-400 px-2 py-1 rounded cursor-not-allowed">
              In Progress
            </span>
          </div>

          {/* Project 3 */}
          <div className="border border-gray-200 rounded p-2 bg-gray-50 shadow-sm">
            <h4 className="text-sm font-semibold text-gray-800 mb-1 leading-tight">
              AI-Powered Hotel Assistant
            </h4>
            <p className="text-xs text-gray-600 mb-1 leading-snug">
              Chatbot for booking & managing hotel reservations using OpenAI.
            </p>
            <div className="flex flex-wrap gap-1 text-[10px] mb-1">
              <span className="bg-indigo-100 text-indigo-700 px-2 py-[2px] rounded">React</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-[2px] rounded">OpenAI</span>
              <span className="bg-green-100 text-green-700 px-2 py-[2px] rounded">Express</span>
            </div>
            <span className="inline-block text-xs text-white bg-gray-400 px-2 py-1 rounded cursor-not-allowed">
              Done
            </span>
          </div>

          {/* Project 4 */}
          <div className="border border-gray-200 rounded p-2 bg-gray-50 shadow-sm">
            <h4 className="text-sm font-semibold text-gray-800 mb-1 leading-tight">
              Game Info Explorer
            </h4>
            <p className="text-xs text-gray-600 mb-1 leading-snug">
              Explore games with RAWG API including platforms, ratings, and screenshots.
            </p>
            <div className="flex flex-wrap gap-1 text-[10px] mb-1">
              <span className="bg-blue-100 text-blue-700 px-2 py-[2px] rounded">React</span>
              <span className="bg-gray-100 text-gray-700 px-2 py-[2px] rounded">RAWG API</span>
              <span className="bg-sky-100 text-sky-700 px-2 py-[2px] rounded">REST API</span>
            </div>
            <span className="inline-block text-xs text-white bg-gray-400 px-2 py-1 rounded cursor-not-allowed">
              Coming Soon
            </span>
          </div>

          {/* Project 5 */}
          <div className="border border-gray-200 rounded p-2 bg-gray-50 shadow-sm">
            <h4 className="text-sm font-semibold text-gray-800 mb-1 leading-tight">
              HR Management System
            </h4>
            <p className="text-xs text-gray-600 mb-1 leading-snug">
              Java-based system for employee, leave, and payroll management with role-based access.
            </p>
            <div className="flex flex-wrap gap-1 text-[10px] mb-1">
              <span className="bg-orange-100 text-orange-700 px-2 py-[2px] rounded">Java</span>
              <span className="bg-green-100 text-green-800 px-2 py-[2px] rounded">Spring Boot</span>
              <span className="bg-cyan-100 text-cyan-700 px-2 py-[2px] rounded">MySQL</span>
            </div>
            <span className="inline-block text-xs text-white bg-gray-400 px-2 py-1 rounded cursor-not-allowed">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
