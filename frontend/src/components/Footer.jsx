import React from 'react';

const Footer = () => (
  <footer className="bg-white py-4 border-t border-gray-200 mt-6">
    <div className="container mx-auto text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Cloudmart. Built for Kubernetes Demo Sessions.
    </div>
  </footer>
);

export default Footer;