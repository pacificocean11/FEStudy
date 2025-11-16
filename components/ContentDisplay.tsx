import React, { useState, useEffect, useRef } from 'react';
import { SubtopicContent } from '../types';
import { BookOpenIcon, PlayCircleIcon, ListChecksIcon } from './icons';
import SolvedExampleCard from './SolvedExampleCard';

interface ContentDisplayProps {
  content: SubtopicContent;
}

type Tab = 'Notes' | 'Video' | 'AI Video' | 'Solved Examples';

const ContentDisplay: React.FC<ContentDisplayProps> = ({ content }) => {
  const [activeTab, setActiveTab] = useState<Tab>('Notes');
  const notesRef = useRef<HTMLDivElement>(null);

  const availableTabs: Tab[] = ['Notes'];
  if (content.video) availableTabs.push('Video');
  if (content.aiVideo) availableTabs.push('AI Video');
  if (content.solvedExamples && content.solvedExamples.length > 0) {
    availableTabs.push('Solved Examples');
  }
  
  useEffect(() => {
    // Set initial tab to the first available one if the current active tab isn't available
    if (availableTabs.length > 0 && !availableTabs.includes(activeTab)) {
        setActiveTab(availableTabs[0]);
    }
  }, [content, activeTab, availableTabs]);

  useEffect(() => {
    if (activeTab === 'Notes' && notesRef.current) {
      let attempts = 0;
      const typesetMath = () => {
        try {
          if (typeof (window as any).MathJax?.typesetPromise === 'function') {
            (window as any).MathJax.typesetPromise([notesRef.current]);
          } else if (attempts < 10) {
            attempts++;
            setTimeout(typesetMath, 100);
          }
        } catch (error) {
          console.error("MathJax rendering error:", error);
        }
      };
      typesetMath();
    }
  }, [content.notes, activeTab]);


  const ICONS: Record<Tab, React.FC<{className?: string}>> = {
    'Notes': BookOpenIcon,
    'Video': PlayCircleIcon,
    'AI Video': PlayCircleIcon,
    'Solved Examples': ListChecksIcon,
  }
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Notes':
        return <div ref={notesRef} className="p-4 bg-white dark:bg-slate-800 rounded-b-lg prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content.notes }} />;
      case 'Video':
        return (
          <div className="p-4 bg-white dark:bg-slate-800 rounded-b-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={content.video}
                title="Instructional Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        );
      case 'AI Video':
         return (
          <div className="p-4 bg-white dark:bg-slate-800 rounded-b-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={content.aiVideo}
                title="AI Instructional Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        );
      case 'Solved Examples':
        return (
          <div className="p-4 bg-slate-100 dark:bg-slate-900/50 rounded-b-lg space-y-4">
            {content.solvedExamples.map((example, index) => (
              <SolvedExampleCard key={index} example={example} index={index + 1} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="border-b border-slate-200 dark:border-slate-700">
        <nav className="-mb-px flex space-x-4" aria-label="Tabs">
          {availableTabs.map((tab) => {
            const Icon = ICONS[tab];
            return (
                <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                    activeTab === tab
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:border-slate-600'
                } group inline-flex items-center py-3 px-1 border-b-2 font-medium text-sm transition-colors`}
                >
                <Icon className="h-5 w-5 mr-2" />
                <span>{tab}</span>
                </button>
            )
            })}
        </nav>
      </div>
      <div className="mt-2">{renderTabContent()}</div>
    </div>
  );
};

export default ContentDisplay;