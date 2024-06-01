// src/pages/servicesPage.jsx
import React from 'react';
import './serviceStyles.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-list">
        <div className="service-item">
          <h2>Custom Software Development</h2>
          <p>
            We specialize in building custom software solutions tailored to the unique needs of microenterprises. Our dedicated software can be installed and run locally on your system, providing cost-effective tools to streamline your business operations.
          </p>
        </div>
        <div className="service-item">
          <h2>Administrative Tools</h2>
          <p>
            Our administrative tools empower you to manage your business efficiently. From inventory management to customer relationship management (CRM), our solutions are designed to simplify tasks and improve productivity.
          </p>
        </div>
        <div className="service-item">
          <h2>Local Hosting Solutions</h2>
          <p>
            We offer local hosting solutions that allow you to host your software applications on-premises. This not only ensures data security but also reduces dependency on external servers, resulting in cost savings for your business.
          </p>
        </div>
        <div className="service-item">
          <h2>Support and Maintenance</h2>
          <p>
            Our dedicated support team is available to provide ongoing maintenance and support for your software solutions. We ensure that your systems run smoothly, allowing you to focus on growing your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
