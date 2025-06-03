import React from 'react';

const AboutTab = () => (
  <div className="bg-white p-6 shadow rounded-xl">
    <h2 className="text-2xl font-bold text-blue-700 mb-4">Welcome to Cloudmart 🛍️</h2>
    <p className="text-gray-700 text-lg leading-relaxed">
      Cloudmart is a Kubernetes-ready e-commerce demo app designed for DevOps and cloud-native learners. This frontend communicates with a Node.js backend (product-service) that connects to a real MongoDB database.
    </p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Built with React, Tailwind CSS, and Express</li>
      <li>Supports full CI/CD pipeline integration</li>
      <li>Perfect for Kubernetes hands-on sessions</li>
    </ul>
    <p className="mt-4 text-sm text-gray-400">Developed for DevOps & Cloud-native education.</p>
  </div>
);

export default AboutTab;