import {useState, useEffect} from 'react';

export const useScroll = () => {
  const [currentSection, setCurrentSection] = useState(location.hash.substring(1));

  useEffect(() => {
    setTimeout(onScroll, 0);
    function onScroll() {
      const element = getMostVisibleSection();
      if (element && currentSection !== element.id) {
        setCurrentSection(element.id);
        history.replaceState('', '', '#' + element.id);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [currentSection]);

  return [currentSection, setCurrentSection];
};

function getMostVisibleSection() {
  const screenHeight = window.innerHeight || document.documentElement.clientHeight;
  const sections = document.querySelectorAll('.section');

  let maxOnScreen = 0;
  let maxElement = undefined;
  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    let onScreen = rect.height;

    if (rect.top < 0) onScreen += rect.top;
    if (rect.bottom > screenHeight) onScreen -= rect.bottom - screenHeight;

    if (onScreen > maxOnScreen) {
      maxOnScreen = onScreen;
      maxElement = section;
    }
  }
  return maxElement;
}
