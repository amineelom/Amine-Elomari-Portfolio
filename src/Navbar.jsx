import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      // Section highlight logic
      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        return el ? el.offsetTop - 80 : 0;
      });
      const scrollPos = window.scrollY;
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollPos >= offsets[i]) {
          setActive(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur shadow-neon' : 'bg-transparent'} border-b border-neon-blue/30`}> 
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-3">
        <span className="font-display text-2xl neon-text font-bold tracking-wider cursor-pointer" onClick={() => handleClick('hero')}>Amine</span>
        <ul className="flex gap-6 md:gap-10">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`relative px-2 py-1 font-body text-lg transition-colors duration-200 focus:outline-none ${active === id ? 'text-neon-blue neon-underline' : 'text-gray-300 hover:text-neon-blue'}`}
                onClick={() => handleClick(id)}
                aria-label={`Go to ${label} section`}
              >
                {label}
                {active === id && (
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-neon-blue rounded-full animate-pulse" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Add the following to your Tailwind config if not present:
// neon-underline: after:content-[''] after:block after:h-1 after:bg-neon-blue after:rounded-full after:mt-1 