import React, { useEffect } from 'react';

const routeMetaMap = {
  home: {
    title: 'Abhijith P K — Full Stack & Node.js Software Developer Portfolio',
    description: 'Portfolio of Abhijith P K, Full Stack Software Developer in Kerala, India. Building scalable web applications, REST APIs, PostgreSQL databases, Python services, and Odoo ERP integrations.'
  },
  cases: {
    title: 'Full Stack Engineering Case Studies & Projects — Abhijith P K',
    description: 'Explore full-stack healthcare management portals, hospital billing systems, clinical history systems, and Odoo ERP integration bridges built by Abhijith P K.'
  },
  'case-detail': {
    title: 'Project Case Study — Abhijith P K Portfolio',
    description: 'Detailed technical overview, system architecture, database design, and key engineering metrics for software solutions built by Abhijith P K.'
  },
  proposal: {
    title: 'Project Proposal & Technical Scope — Abhijith P K',
    description: 'Tailored full-stack web application development proposal, deliverable breakdown, tech stack scoping, and project timeline by Abhijith P K.'
  },
  calculator: {
    title: 'Interactive Project Estimator & Tech Stack Calculator — Abhijith P K',
    description: 'Calculate custom web application development scope, features, timeline, and cost estimates with Abhijith P K.'
  }
};

export default function SEO({ route, selectedCase }) {
  useEffect(() => {
    const meta = routeMetaMap[route] || routeMetaMap.home;
    let title = meta.title;
    let description = meta.description;

    if (route === 'case-detail' && selectedCase) {
      const caseTitles = {
        'healthcare-clinical-system': 'Healthcare & Clinical Operations System — Abhijith P K',
        'ecommerce-website-redesign': 'Full-Stack Hospital Billing & Health Portal — Abhijith P K',
        'streamlining-ecommerce-navigation': 'Full-Stack Healthcare & AI Assistant Portal — Abhijith P K',
        'enhancing-mobile-banking-app-usability': 'Full-Stack Clinical History Portal — Abhijith P K'
      };
      if (caseTitles[selectedCase]) {
        title = caseTitles[selectedCase];
      }
    }

    // Update document title
    document.title = title;

    // Helper function to update meta tags
    const updateMetaTag = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const [attrName, attrVal] = selector.replace('meta[', '').replace(']', '').split('=');
        element.setAttribute(attrName, attrVal.replace(/"/g, ''));
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    updateMetaTag('meta[name="description"]', 'content', description);
    updateMetaTag('meta[property="og:title"]', 'content', title);
    updateMetaTag('meta[property="og:description"]', 'content', description);
    updateMetaTag('meta[property="twitter:title"]', 'content', title);
    updateMetaTag('meta[property="twitter:description"]', 'content', description);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const baseUrl = 'https://abhijithpkkrishnan.github.io/';
      const routePath = route === 'home' ? '' : `#${route}`;
      canonical.setAttribute('href', `${baseUrl}${routePath}`);
    }
  }, [route, selectedCase]);

  return null;
}
