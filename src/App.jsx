import React from 'react';
import Particles from 'react-tsparticles';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

// Skills data
const skills = [
  {
    category: 'Programming Languages',
    color: 'neon-pink',
    items: [
      { name: 'Python', level: 95, color: 'bg-neon-green' },
      { name: 'JavaScript', level: 85, color: 'bg-neon-blue' },
      { name: 'Java', level: 75, color: 'bg-neon-yellow' },
      { name: 'C++', level: 70, color: 'bg-neon-pink' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    color: 'neon-blue',
    items: [
      { name: 'Django', level: 90, color: 'bg-neon-green' },
      { name: 'Flask', level: 88, color: 'bg-neon-blue' },
      { name: 'NumPy', level: 92, color: 'bg-neon-yellow' },
      { name: 'Pandas', level: 90, color: 'bg-neon-pink' },
      { name: 'Matplotlib', level: 85, color: 'bg-neon-blue' },
      { name: 'TensorFlow', level: 80, color: 'bg-neon-green' },
      { name: 'PyTorch', level: 75, color: 'bg-neon-yellow' },
      { name: 'scikit-learn', level: 82, color: 'bg-neon-pink' },
    ],
  },
  {
    category: 'Databases',
    color: 'neon-green',
    items: [
      { name: 'MySQL', level: 80, color: 'bg-neon-blue' },
      { name: 'PostgreSQL', level: 85, color: 'bg-neon-green' },
      { name: 'MongoDB', level: 75, color: 'bg-neon-yellow' },
    ],
  },
  {
    category: 'Cloud & Tools',
    color: 'neon-yellow',
    items: [
      { name: 'AWS', level: 80, color: 'bg-neon-green' },
      { name: 'Google Cloud', level: 75, color: 'bg-neon-blue' },
      { name: 'Azure', level: 70, color: 'bg-neon-yellow' },
      { name: 'Docker', level: 85, color: 'bg-neon-pink' },
      { name: 'Kubernetes', level: 75, color: 'bg-neon-blue' },
      { name: 'CI/CD', level: 80, color: 'bg-neon-green' },
      { name: 'Git/GitHub', level: 90, color: 'bg-neon-yellow' },
    ],
  },
];

// Projects data
const projects = [
  {
    title: 'E-commerce Web Application',
    role: 'Lead Developer',
    color: 'neon-pink',
    tags: [
      { label: 'Python', color: 'bg-neon-blue' },
      { label: 'Django', color: 'bg-neon-green' },
      { label: 'PostgreSQL', color: 'bg-neon-yellow' },
      { label: 'JavaScript', color: 'bg-neon-pink' },
      { label: 'HTML', color: 'bg-card', border: 'border-neon-blue' },
      { label: 'CSS', color: 'bg-card', border: 'border-neon-pink' },
    ],
    bullets: [
      'Designed and implemented a fully functional e-commerce platform integrating a secure payment gateway and comprehensive user management.',
      'Achieved a 25% increase in online sales by optimizing the user experience and application performance.',
    ],
  },
  {
    title: 'Data Analysis Automation Tool',
    role: 'Data Engineer/Developer',
    color: 'neon-blue',
    tags: [
      { label: 'Python', color: 'bg-neon-blue' },
      { label: 'Pandas', color: 'bg-neon-pink' },
      { label: 'NumPy', color: 'bg-neon-yellow' },
      { label: 'Matplotlib', color: 'bg-neon-green' },
      { label: 'Flask', color: 'bg-card', border: 'border-neon-blue' },
    ],
    bullets: [
      'Developed an automation pipeline for data ingestion, processing, and visualization, reducing manual effort and processing time by 40%.',
      'Created a dynamic web dashboard for real-time data monitoring and reporting, greatly enhancing data-driven decision-making.',
    ],
  },
  {
    title: 'Machine Learning Model for Sales Forecasting',
    role: 'Machine Learning Engineer',
    color: 'neon-green',
    tags: [
      { label: 'Python', color: 'bg-neon-blue' },
      { label: 'TensorFlow', color: 'bg-neon-yellow' },
      { label: 'scikit-learn', color: 'bg-neon-pink' },
      { label: 'Pandas', color: 'bg-neon-green' },
      { label: 'Jupyter Notebook', color: 'bg-card', border: 'border-neon-blue' },
    ],
    bullets: [
      'Built and trained predictive models that achieved up to 92% accuracy in forecasting quarterly sales.',
      'Presented findings in cross-functional team meetings, informing strategic decisions and business planning.',
    ],
  },
];

// Blog posts data
const blogPosts = [
  {
    title: 'How I Built My Portfolio',
    color: 'neon-pink',
    date: 'May 2024',
    desc: 'A behind-the-scenes look at the technologies, design choices, and challenges I faced while creating this portfolio site.',
    btn: 'bg-neon-blue',
  },
  {
    title: 'Top Python Tips for Developers',
    color: 'neon-green',
    date: 'April 2024',
    desc: 'My favorite Python tricks and best practices for writing clean, efficient, and maintainable code.',
    btn: 'bg-neon-green',
  },
  {
    title: 'Coming Soon',
    color: 'neon-blue',
    date: 'TBD',
    desc: 'Stay tuned for more articles on web development, machine learning, and tech career tips!',
    btn: 'bg-neon-pink',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white font-body relative overflow-x-hidden">
      <Navbar />
      {/* Animated Background Particles */}
      <Particles
        id="tsparticles"
        options={{
          background: { color: '#0a0a0a' },
          fpsLimit: 60,
          particles: {
            color: { value: ['#00eaff', '#ff00cc', '#39ff14', '#fff700'] },
            links: { enable: true, color: '#00eaff', distance: 150 },
            move: { enable: true, speed: 1 },
            number: { value: 60 },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="absolute inset-0 -z-10"
      />
      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center h-screen text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-display font-bold neon-text mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Amine El Omari
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl neon-pink mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Creative Developer & Designer
        </motion.p>
        <div className="flex gap-4 justify-center">
          <button
            className="px-6 py-2 rounded-full bg-neon-blue text-dark font-bold shadow-neon hover:scale-110 hover:shadow-neon-lg focus:ring-2 focus:ring-neon-blue focus:outline-none transition-all duration-200"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Contact Me
          </button>
          <button
            className="px-6 py-2 rounded-full bg-neon-pink text-dark font-bold shadow-neon-pink hover:scale-105 transition-transform"
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            View Projects
          </button>
        </div>
        {/* Social Icons Placeholder */}
        <div className="flex gap-6 mt-8 justify-center">
          {/* Add social icons here */}
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="flex justify-center items-center py-16 px-4 bg-transparent">
        <motion.div
          className="bg-card rounded-2xl shadow-neon p-8 max-w-2xl w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold neon-text mb-4 text-center">About Me</h2>
          <p className="text-lg text-gray-200 leading-relaxed text-center whitespace-pre-line">
            A highly motivated Software Developer with robust Python expertise and a strong background in building scalable web applications and data-driven solutions. Passionate about designing innovative solutions, improving system performance, and leveraging advanced technologies. Proven track record in delivering projects on time with a focus on quality, efficiency, and user experience.
          </p>
        </motion.div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-transparent flex justify-center">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl md:text-4xl font-display font-bold neon-text mb-8 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((category, i) => (
              <div key={i} className="bg-card rounded-xl shadow-neon p-6">
                <h3 className={`text-xl font-bold neon-${category.color} mb-4`}>{category.category}</h3>
                {category.items.map((item, j) => (
                  <SkillBar key={j} name={item.name} level={item.level} color={item.color} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-transparent flex justify-center">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl md:text-4xl font-display font-bold neon-text mb-8 text-center">Projects</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="bg-card rounded-xl shadow-neon p-6 flex flex-col justify-between hover:scale-105 hover:shadow-neon-lg focus-within:ring-2 focus-within:ring-neon-blue transition-all duration-200"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                <h3 className={`text-xl font-bold neon-${project.color} mb-2`}>{project.title}</h3>
                <p className="text-gray-200 mb-2">Role: {project.role}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className={`px-2 py-1 text-xs rounded ${tag.color} text-dark font-bold`}>{tag.label}</span>
                  ))}
                </div>
                <ul className="list-disc pl-5 text-gray-400 mb-2 text-sm">
                  {project.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 bg-transparent flex justify-center">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl md:text-4xl font-display font-bold neon-text mb-8 text-center">Blog</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                className="bg-card rounded-xl shadow-neon p-6 flex flex-col justify-between hover:scale-105 hover:shadow-neon-lg focus-within:ring-2 focus-within:ring-neon-blue transition-all duration-200"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                <h3 className={`text-xl font-bold neon-${post.color} mb-2`}>{post.title}</h3>
                <p className="text-gray-400 text-sm mb-1">May 2024</p>
                <p className="text-gray-200 mb-4">{post.desc}</p>
                <button className={`px-4 py-2 rounded-full ${post.btn} text-dark font-bold shadow-neon hover:scale-105 transition-transform w-max`}>Read More</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-transparent flex justify-center">
        <div className="max-w-2xl w-full">
          <h2 className="text-3xl md:text-4xl font-display font-bold neon-text mb-8 text-center">Contact</h2>
          <motion.div
            className="bg-card rounded-2xl shadow-neon p-8 mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-4">
              <p className="text-lg text-gray-200 mb-2">Feel free to reach out for collaborations or just a friendly hello!</p>
              <div className="flex flex-col items-center gap-2">
                <span className="text-neon-blue font-bold">Email:</span>
                <a href="mailto:amineelom203@gmail.com" className="text-neon-blue hover:underline">amineelom203@gmail.com</a>
              </div>
            </div>
            <form className="flex flex-col gap-4 mt-6">
              <input type="text" placeholder="Name" className="rounded-lg px-4 py-2 bg-dark text-white border-2 border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue shadow-neon" />
              <input type="email" placeholder="Email" className="rounded-lg px-4 py-2 bg-dark text-white border-2 border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green shadow-neon" />
              <textarea placeholder="Message" rows="4" className="rounded-lg px-4 py-2 bg-dark text-white border-2 border-neon-pink focus:outline-none focus:ring-2 focus:ring-neon-pink shadow-neon resize-none" />
              <button type="submit" className="mt-2 px-6 py-2 rounded-full bg-neon-blue text-dark font-bold shadow-neon hover:scale-105 transition-transform self-center">Send</button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// SkillBar component
function SkillBar({ name, level, color }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-white">{name}</span>
        <span className="text-sm font-bold text-neon-blue">{level}%</span>
      </div>
      <div className="w-full h-3 bg-dark rounded-full overflow-hidden">
        <div
          className={`h-3 ${color} shadow-neon`}
          style={{ width: `${level}%`, transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }}
        />
      </div>
    </div>
  );
}
