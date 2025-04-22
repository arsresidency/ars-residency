import React from 'react';

const features = [
  "4 Pure Veg Meals / Day",
  "Transportation to/from College",
  "2x Weekly Laundry",
  "Unlimited Wi-Fi",
  "24/7 Security & CCTV",
  "Gym Access"
];

const Features = () => (
  <section className="py-16 bg-gray-50 text-center">
    <h2 className="text-3xl font-bold mb-8">Our Features</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {features.map((feature, index) => (
        <div key={index} className="p-6 border rounded-xl shadow bg-white">
          {feature}
        </div>
      ))}
    </div>
  </section>
);

export default Features;
