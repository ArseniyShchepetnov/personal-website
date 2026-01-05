import React from 'react';
import { WordCloud, defaultFontSize } from '@isoterik/react-word-cloud'; // Corrected import
import { TechStackWordCloud as TechStackWordCloudData, techStackItems, otherTechStackItems } from '../data/techstack';

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

  const handleWordClick = (word: { text: string; value: number; url?: string }) => {
    if (word.url) {
      window.open(word.url, '_blank');
    }
  };

  const resolveRotate = (word: { text: string; value: number; url?: string }) => {
    const rotationAngles = [-90, 0];
    return rotationAngles[Math.floor(Math.random() * rotationAngles.length)];
  };

  const resolveFontSize = (word: { text: string; value: number; url?: string }) => {
    const minFontSize = 4;
    const maxFontSize = 20;
    // Scale word.value (0-200, as we multiply by 100) to fit font size range
    // Assuming max possible value is around 200, but let's make it flexible
    const maxPossibleValue = Math.max(...words.map(w => w.value));
    const normalizedValue = word.value / maxPossibleValue;
    return minFontSize + normalizedValue * (maxFontSize - minFontSize);
  };


  return (
    <div >
      <WordCloud
        words={words}
        rotate={resolveRotate} // Use resolveRotate for rotation
        fontSize={resolveFontSize} // Use resolveFontSize for font size
        padding={0} // from options.padding
        onWordClick={handleWordClick}
        width={300}
        height={200}
      />
    </div>
  );
};

export default TechStackWordCloud;