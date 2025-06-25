import React, { useState, useEffect } from 'react';

// InitialWords has to be given in reverse orden
const TypingEffect = ({ texts, initialWords, speed = 150, pause = 1000 }) => {
    const [displayedText, setDisplayedText] = useState(initialWords[1]);
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentText = texts[textIndex];
        if (charIndex < currentText.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + currentText.charAt(charIndex));
                setCharIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeoutId);
        } else {
            const resetTimeoutId = setTimeout(() => {
                setTextIndex(t => (t + 1) % texts.length);
                setDisplayedText(initialWords[textIndex]);
                setCharIndex(0);
            }, pause);
            return () => clearTimeout(resetTimeoutId);
        }
    }, [charIndex, textIndex, texts, speed, pause]);

    return (
        <span>{displayedText}</span>
    );
};

export default TypingEffect;
