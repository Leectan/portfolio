import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
import Lee from "../public/LeeTan_Headshot.jpg";

const projects = [
  {
    name: "SecretShields",
    description:
      "An intelligent secrets detection and prevention platform that scans codebases, CI/CD pipelines, and repositories to identify and shield exposed credentials, API keys, and sensitive data before they reach production.",
    tags: ["Security", "DevSecOps", "CI/CD", "Python"],
    github: "https://github.com/Leectan/secretshields",
  },
  {
    name: "Infra-Emo",
    description:
      "Infrastructure emotion monitoring and observability tool that provides real-time health scoring and sentiment analysis of cloud infrastructure, translating complex system metrics into intuitive, actionable insights.",
    tags: ["Infrastructure", "Observability", "Cloud", "Monitoring"],
    github: "https://github.com/Leectan/infra-emo",
  },
  {
    name: "ADRI",
    description:
      "Automated Detection, Response & Intelligence system — an AI-powered security orchestration platform that detects threats, automates incident response workflows, and provides actionable threat intelligence.",
    tags: ["AI", "Security", "Automation", "Threat Intel"],
    github: "https://github.com/Leectan/ADRI",
  },
];

const blogPosts = [
  {
    title: "From Healthcare to Tech: My Journey",
    date: "2026-04-01",
    summary:
      "Reflections on transitioning from a healthcare career into the world of technology and AI, and the lessons learned along the way.",
    slug: "#",
  },
  {
    title: "Why DevSecOps Matters More Than Ever",
    date: "2026-03-15",
    summary:
      "A deep dive into the importance of shifting security left and embedding it into every stage of the software development lifecycle.",
    slug: "#",
  },
  {
    title: "Building AI-Powered Security Tools",
    date: "2026-02-20",
    summary:
      "How I approached building intelligent security tooling and what I learned about leveraging LLMs for threat detection and response.",
    slug: "#",
  },
];

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Lee C Tan — Builder, Engineer, Explorer</title>
        <meta
          name="description"
          content="Personal website of Lee C Tan — healthcare professional turned tech enthusiast, building at the intersection of AI and security."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-[#0f172a] transition-colors duration-300">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0f172a]/80 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#" className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Lee C Tan
            </a>
            <div className="flex items-center gap-6">
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <a href="#blog" className="nav-link">
                Blog
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <BsFillSunFill className="text-lg" />
                ) : (
                  <BsFillMoonStarsFill className="text-lg" />
                )}
              </button>
            </div>
          </div>
        </nav>

        <main className="max-w-3xl mx-auto px-6">
          {/* Hero */}
          <section className="pt-16 pb-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <div className="relative w-36 h-36 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700">
                <Image
                  src={Lee}
                  alt="Lee C Tan"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Hi, I'm Lee
                </h1>
                <p className="mt-2 text-lg text-gray-500 dark:text-gray-400 italic">
                  Healthcare professional turned tech builder
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                  I'm on a journey to make this world a better place through
                  Tech & AI. Currently building at{" "}
                  <a
                    href="https://syntify.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-sky-400 hover:underline decoration-dashed underline-offset-4"
                  >
                    syntify.ai
                  </a>
                  . Passionate about security, infrastructure, and using AI to
                  solve real problems.
                </p>
                {/* Social icons */}
                <div className="flex items-center gap-4 mt-5 justify-center sm:justify-start">
                  {[
                    {
                      href: "https://github.com/Leectan",
                      icon: <AiFillGithub />,
                      label: "GitHub",
                    },
                    {
                      href: "https://www.linkedin.com/in/lee-tan/",
                      icon: <AiFillLinkedin />,
                      label: "LinkedIn",
                    },
                    {
                      href: "https://twitter.com/leectan",
                      icon: <AiOutlineTwitter />,
                      label: "Twitter",
                    },
                    {
                      href: "mailto:ltan@ltcorps.com",
                      icon: <AiOutlineMail />,
                      label: "Email",
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="text-2xl text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200 dark:border-gray-800" />

          {/* Projects */}
          <section id="projects" className="py-14">
            <h2 className="section-heading">What I've Built</h2>
            <div className="space-y-5">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card block group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors flex items-center gap-2">
                        {project.name}
                        <HiExternalLink className="text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://github.com/Leectan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <AiFillGithub className="text-lg" />
                See more on GitHub
              </a>
            </div>
          </section>

          <hr className="border-gray-200 dark:border-gray-800" />

          {/* Blog */}
          <section id="blog" className="py-14">
            <h2 className="section-heading">Blog</h2>
            <div className="space-y-8">
              {blogPosts.map((post, i) => (
                <article key={i} className="group">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <time className="text-sm text-gray-400 dark:text-gray-500 font-mono whitespace-nowrap">
                      {formatDate(post.date)}
                    </time>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                        <a href={post.slug} className="decoration-dashed underline-offset-4 hover:underline">
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {post.summary}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <hr className="border-gray-200 dark:border-gray-800" />

          {/* Footer */}
          <footer className="py-12 text-center">
            <div className="flex justify-center gap-5 mb-4">
              {[
                { href: "https://github.com/Leectan", icon: <AiFillGithub /> },
                {
                  href: "https://www.linkedin.com/in/lee-tan/",
                  icon: <AiFillLinkedin />,
                },
                {
                  href: "https://twitter.com/leectan",
                  icon: <AiOutlineTwitter />,
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              &copy; {new Date().getFullYear()} Lee C Tan. Built with Next.js.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
