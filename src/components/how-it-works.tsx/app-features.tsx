import React from 'react';
import AppFeatureCard from './app-feature-card';

const AppFeatures = () => {
  return (
    <article>
      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold text-gray-700">App Features</h3>
        <p className="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <AppFeatureCard />
        <AppFeatureCard />
        <AppFeatureCard />
        <AppFeatureCard />
      </div>
    </article>
  );
};

export default AppFeatures;
