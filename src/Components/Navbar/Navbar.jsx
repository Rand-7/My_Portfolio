    // import React, { useState, useEffect } from 'react';
    // import './Navbar.css';

    // const Navbar = () => {
    // const [activeLink, setActiveLink] = useState('Home');

    // // منطق تتبع التمرير لتغيير القسم النشط
    // useEffect(() => {
    //     const handleScroll = () => {
    //     const sections = ['home', 'about-me', 'education', 'projects', 'contact'];
    //     sections.forEach(id => {
    //         const section = document.getElementById(id);
    //         if (section) {
    //         const rect = section.getBoundingClientRect();
    //         if (rect.top <= 150 && rect.bottom >= 150) {
    //             setActiveLink(id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' '));
    //         }
    //         }
    //     });
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    // const links = ['Home', 'About me', 'Education', 'Projects', 'Contact'];

    // return (
    //     <nav className="navbar">
    //     <a href="#home" className="logo">Rand</a>
    //     <ul className="nav-links">
    //         {links.map((link) => (
    //         <li key={link}>
    //             <a 
    //             href={`#${link.toLowerCase().replace(' ', '-')}`} 
    //             className={`nav-item ${activeLink === link ? 'active' : ''}`}
    //             >
    //             {link}
    //             </a>
    //         </li>
    //         ))}
    //     </ul>
    //     <button className="dark-mode-toggle">
    //         <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    //     </button>
    //     </nav>
    // );
    // };

    // export default Navbar;
    import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // للموبايل

  // تبديل الوضع الليلي
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  // التأكد من الوضع المختار عند تحميل الصفحة
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-theme');
    }

    const handleScroll = () => {
      const sections = ['home', 'about-me', 'education', 'projects', 'contact'];
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' '));
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About me', 'Education', 'Projects', 'Contact'];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">Rand</a>

      {/* زر الهامبرغر للموبايل */}
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link}>
            <a 
              href={`#${link.toLowerCase().replace(' ', '-')}`} 
              className={`nav-item ${activeLink === link ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)} // يغلق القائمة عند الضغط
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? (
          // أيقونة الشمس للوضع الليلي (ليعود للنهاري)
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        ) : (
          // أيقونة القمر للوضع النهاري (لينتقل لليلي)
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        )}
      </button>
    </nav>
  );
};

export default Navbar;