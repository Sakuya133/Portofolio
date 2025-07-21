"use client"; // <-- Add this line to mark the file as a client component

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleScroll = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="flex justify-between p-6 bg-transparent fixed w-full top-0 left-0 z-10">
        <h1 className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-600">
          Gde Dimas
        </h1>
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li
              onClick={() => handleScroll("home")}
              className={`cursor-pointer ${activeSection === "home" ? "text-teal-400" : "hover:text-teal-500"}`}
            >
              Home
            </li>
            <li
              onClick={() => handleScroll("about")}
              className={`cursor-pointer ${activeSection === "about" ? "text-teal-400" : "hover:text-teal-500"}`}
            >
              About
            </li>
            <li
              onClick={() => handleScroll("projects")}
              className={`cursor-pointer ${activeSection === "projects" ? "text-teal-400" : "hover:text-teal-500"}`}
            >
              Projects
            </li>
            <li
              onClick={() => handleScroll("contact")}
              className={`cursor-pointer ${activeSection === "contact" ? "text-teal-400" : "hover:text-teal-500"}`}
            >
              Contact
            </li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-cover bg-center text-center relative"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,developer')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h2 className="text-5xl md:text-7xl font-bold text-white z-10 leading-tight">
          Hello, I'm Gde Dimas
        </h2>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex items-center justify-center"
      >
        <div className="max-w-4xl text-center px-4">
          <h3 className="text-4xl font-semibold mb-6">About Me</h3>
          <p className="text-lg md:text-xl leading-relaxed">
            I specialize in building modern web applications using React, TypeScript, and Next.js. Passionate about clean code and UI/UX design. I love solving complex problems and making user-friendly products.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white flex items-center justify-center"
      >
        <div className="max-w-4xl text-center px-4">
          <h3 className="text-4xl font-semibold mb-6">My Projects</h3>
          <ul className="space-y-4">
            <li className="text-xl">Project 1: E-commerce Website</li>
            <li className="text-xl">Project 2: Blogging Platform</li>
            <li className="text-xl">Project 3: Portfolio Website</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex items-center justify-center"
      >
        <div className="text-center">
          <h3 className="text-4xl font-semibold mb-6">Contact</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Sakuya133" target="_blank" rel="noopener noreferrer">
              <FaGithub size={50} className="hover:text-teal-500 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/ida-bagus-gde-dimas-sutha-maha-555882323/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={50} className="hover:text-teal-500 transition duration-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
