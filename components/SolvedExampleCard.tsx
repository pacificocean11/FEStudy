import React, { useState, useRef, useEffect } from 'react';
import { SolvedExample } from '../types';
import { CheckCircleIcon, XCircleIcon } from './icons';

interface SolvedExampleCardProps {
  example: SolvedExample;
  index: number;
}

const SolvedExampleCard: React.FC<SolvedExampleCardProps> = ({ example, index }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      let attempts = 0;
      const typesetMath = () => {
        try {
          if (typeof (window as any).MathJax?.typesetPromise === 'function') {
            (window as any).MathJax.typesetPromise([cardRef.current]);
          } else if (attempts < 10) {
            attempts++;
            setTimeout(typesetMath, 100);
          }
        } catch(error) {
          console.error("MathJax rendering error:", error);
        }
      };
      typesetMath();
    }
  }, [example, isSubmitted]);

  const handleOptionSelect = (optionText: string) => {
    if (isSubmitted) return;
    setSelectedOption(optionText);
setIsSubmitted(true);
  };

  const getOptionClasses = (option: { text: string; isCorrect: boolean }) => {
    if (!isSubmitted) {
      return 'hover:bg-slate-100 dark:hover:bg-slate-700';
    }
    if (option.isCorrect) {
      return 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-800 dark:text-green-200';
    }
    if (selectedOption === option.text && !option.isCorrect) {
      return 'bg-red-100 dark:bg-red-900/30 border-red-500 text-red-800 dark:text-red-200';
    }
    return 'opacity-60';
  };

  return (
    <div ref={cardRef} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
      <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
        Example {index}:
      </h4>
      <p className="text-slate-700 dark:text-slate-300 mb-4 whitespace-pre-wrap">{example.question}</p>
      
      <div className="space-y-3">
        {example.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleOptionSelect(option.text)}
            disabled={isSubmitted}
            className={`w-full text-left p-3 border rounded-md transition-all duration-200 flex items-center ${getOptionClasses(option)}`}
          >
            <span className="font-mono mr-3">{String.fromCharCode(65 + i)}.</span>
            <span className="flex-1" dangerouslySetInnerHTML={{ __html: option.text }}></span>
            {isSubmitted && option.isCorrect && <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />}
            {isSubmitted && selectedOption === option.text && !option.isCorrect && <XCircleIcon className="h-5 w-5 text-red-600 dark:text-red-400" />}
          </button>
        ))}
      </div>

      {isSubmitted && (
        <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-md border-l-4 border-blue-500">
          <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">Explanation</h5>
          <p className="text-sm text-slate-600 dark:text-slate-400 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: example.explanation }}></p>
        </div>
      )}
    </div>
  );
};

export default SolvedExampleCard;