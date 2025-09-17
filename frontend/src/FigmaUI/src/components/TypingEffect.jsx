import { useState, useEffect } from 'react';

/**
 * TypingEffect component that cycles through an array of words with typing animation
 * @param {Object} props - Component props
 * @param {string[]} props.words - Array of words to cycle through
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {number} [props.typingSpeed=150] - Speed of typing animation in milliseconds
 * @param {number} [props.deletingSpeed=100] - Speed of deleting animation in milliseconds
 * @param {number} [props.delayBetweenWords=2000] - Delay between words in milliseconds
 * @returns {React.ReactElement} TypingEffect component
 */
export function TypingEffect({ 
  words, 
  className = '', 
  typingSpeed = 150, 
  deletingSpeed = 100, 
  delayBetweenWords = 2000 
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {currentText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        |
      </span>
    </span>
  );
}