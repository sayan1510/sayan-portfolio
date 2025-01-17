import "./App.css";

function App() {
  return (
    <div className="portfolio bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-gray-900 font-sans">
      <header className="header bg-blue-600 text-white py-8">
        <div className="profile text-center">
          <img
            src="IMG_20220803_211022.png"
            alt="Sayan Saha"
            className="profile-pic mx-auto rounded-full w-32 h-32 border-4 border-white transition-transform duration-500 hover:scale-105"
          />
          <h1 className="text-3xl font-bold mt-4">Sayan Saha</h1>
          <p className="text-lg">Software Developer</p>
        </div>
      </header>

      <section className="about py-12 px-6 bg-white shadow-md rounded-md mx-auto max-w-4xl transition-transform duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold border-b-2 border-blue-600 pb-2 mb-4">
          About Me
        </h2>
        <p className="text-lg leading-relaxed">
          Dedicated Front-End Developer with 2+ years of experience creating
          dynamic, responsive, and user-friendly web applications. Proficient in
          JavaScript frameworks like React.js and Vue.js, with a strong focus on
          problem-solving and delivering high-quality solutions.
        </p>
      </section>

      <section className="skills py-12 px-6 mt-8 bg-white shadow-md rounded-md mx-auto max-w-4xl transition-transform duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold border-b-2 border-blue-600 pb-2 mb-4">
          Technical Skills
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>JavaScript, TypeScript, HTML, CSS, Python</li>
          <li>
            Frameworks: React.js, Redux, Vue.js, Vuetify, Vuex, Node.js, Express
          </li>
          <li>Tools: Git, Jira</li>
          <li>
            Soft Skills: Problem-Solving, Adaptability, Team Collaboration
          </li>
        </ul>
      </section>

      <section className="experience py-12 px-6 mt-8 bg-white shadow-md rounded-md mx-auto max-w-4xl transition-transform duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold border-b-2 border-blue-600 pb-2 mb-4">
          Experience
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            Global IDs | Software Developer
          </h3>
          <p className="text-sm text-gray-600">Jun 2023 – Nov 2024</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              Designed and implemented interactive UI features for the
              Enterprise AI module, increasing user engagement by 20%.
            </li>
            <li>Developed reusable components, reducing project timelines.</li>
            <li>
              Redesigned the Data Quality feature, improving usability and user
              satisfaction by 15%.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">
            SterLite Technologies Ltd. | Graduate Engineer Trainee
          </h3>
          <p className="text-sm text-gray-600">Jul 2022 – Mar 2023</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              Maintained and enhanced front-end applications for Captive
              Portals, achieving 99% uptime reliability.
            </li>
            <li>
              Improved authentication processes for WIFI AAA products, enhancing
              security and user experience.
            </li>
          </ul>
        </div>
      </section>

      <section className="education py-12 px-6 mt-8 bg-white shadow-md rounded-md mx-auto max-w-4xl transition-transform duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold border-b-2 border-blue-600 pb-2 mb-4">
          Education
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            B.Tech in Information Technology, RCC Institute of Information
            Technology | CGPA: 9.01 (2022)
          </li>
          <li>
            Diploma in Computer Science, APC Ray Polytechnic | CGPA: 7.8 (2019)
          </li>
        </ul>
      </section>

      <section className="projects py-12 px-6 mt-8 bg-white shadow-md rounded-md mx-auto max-w-4xl transition-transform duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold border-b-2 border-blue-600 pb-2 mb-4">
          Projects
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            Credential Management System
          </h3>
          <p className="text-lg">
            Built a secure platform for user credentials management. Front-end
            with Vue.js and back-end with Node.js.
            <a
              href="https://github.com/sayan1510/training-project-ui-vue"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              Frontend Code
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/sayan1510/training-project-backend"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              Backend Code
            </a>
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Low-Light Video Enhancement</h3>
          <p className="text-lg">
            Python-based solution to enhance video quality under low-light
            conditions.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">User Management System</h3>
          <p className="text-lg">
            React-based project for managing users with CRUD functionalities.{" "}
            <a
              href="https://github.com/sayan1510/um-react"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              Project Code
            </a>
          </p>
        </div>
      </section>

      <section className="contact py-12 px-6 mt-8 bg-white shadow-md rounded-md mx-auto max-w-4xl transition-transform duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold border-b-2 border-blue-600 pb-2 mb-4">
          Contact
        </h2>
        <ul className="space-y-2 list-none">
          <li>Location: Kolkata, India</li>
          <li>
            Email:{" "}
            <a
              href="mailto:sayansaha1510@gmail.com"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              sayansaha1510@gmail.com
            </a>
          </li>
          <li>Phone: +91 8420398578</li>
          <li>
            <a
              href="https://www.linkedin.com/in/sayan-saha-b620361ab/"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sayan1510"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
