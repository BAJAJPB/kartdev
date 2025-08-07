import React from 'react';
import { StatisticItem } from '../types';

interface StatisticsProps {
  statistics: StatisticItem[];
}

export const Statistics: React.FC<StatisticsProps> = ({ statistics }) => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-purple-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-montserrat text-white opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};