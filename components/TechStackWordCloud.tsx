import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import { TechStackWordCloud as TechStackWordCloudData, techStackItems, otherTechStackItems } from '../data/techstack';

const options = {
  rotations: 2,
  rotationAngles: [-90, 0] as [number, number],
  fontSizes: [20, 60] as [number, number],
  deterministic: true,
  padding: 5,
};

// Create a map for quick URL lookup
const techUrlMap = new Map<string, string>();
[...techStackItems, ...otherTechStackItems].forEach(item => {
  techUrlMap.set(item.name.toLowerCase(), item.url);
});

const TechStackWordCloud: React.FC = () => {
  const words = TechStackWordCloudData.map(item => {
    const key = Object.keys(item)[0];
    const value = item[key as keyof typeof item];
    const url = techUrlMap.get(key.toLowerCase()); // Get URL from map
    return {
      text: key,
      value: (value as number) * 100,
      url: url, // Add url to the word object
    };
  });

  const callbacks = {
    onWordClick: (word: { text: string; value: number; url?: string }) => {
      if (word.url) {
        window.open(word.url, '_blank');
      }
    },
  };

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <ReactWordcloud words={words} options={options} callbacks={callbacks} />
    </div>
  );
};

export default TechStackWordCloud;