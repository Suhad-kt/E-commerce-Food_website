import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center justify-between">
          <p className="text-white">&copy; {new Date().getFullYear()} Fast Food Company</p>
          <ul className="text-white flex">
            <li className="mr-4"><a href="/">Home</a></li>
            <li className="mr-4"><a href="/menu">Menu</a></li>
            <li className="mr-4"><a href="/locations">Locations</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
