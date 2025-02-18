"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // For active link highlighting (optional)
import { useState } from 'react';

export default function Navigation() {
  const router = useRouter(); // Hook to access the router
  const activeLink = router.pathname;

  const [key, setKey] = useState(localStorage.getItem('keyid'));

  // setInterval(() => {
  //   if(localStorage.getItem('keyid') != null){
  //     setKey(localStorage.getItem('keyid'))
  //   }
  // }, 2000);

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('keyid');
    setKey('');
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <span className="navbar-brand">My Website</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={`nav-item ${activeLink === '/' ? 'active' : ''}`}>
              <Link href="/">
                <span className="nav-link">Home</span>
              </Link>
            </li>
            <li className={`nav-item ${activeLink === '/about' ? 'active' : ''}`}>
              <Link href="/about">
                <span className="nav-link">About</span>
              </Link>
            </li>
            <li className={`nav-item ${activeLink === '/services' ? 'active' : ''}`}>
              <Link href="/services">
                <span className="nav-link">Services</span>
              </Link>
            </li>
            <li className={`nav-item ${activeLink === '/contact' ? 'active' : ''}`}>
              <Link href="/contact">
                <span className="nav-link">Contact</span>
              </Link>
            </li>
            <li className={`nav-item ${activeLink === '/login' ? 'active' : ''}`}>
              {key ? <a href="javascript:void()" onClick={logout} className="nav-link">Logout</a>: <Link href="/login">
                <span className="nav-link">Login</span>
              </Link>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
