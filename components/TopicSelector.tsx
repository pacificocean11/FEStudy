import React, { useState, useEffect } from 'react';
import { Discipline, Subject, Subtopic } from '../types';

interface SubjectSelectorProps {
  subjects: Subject[];
  selectedSubject: string | null;
  selectedTopic: string | null;
  selectedSubtopicName: string | null;
  onSubtopicSelect: (subject: string, topic: string, subtopic: Subtopic) => void;
  onChangeDiscipline: () => void;
  selectedDiscipline: Discipline;
}

const SubjectSelector: React.FC<SubjectSelectorProps> = ({ 
  subjects, 
  selectedSubject, 
  selectedTopic,
  selectedSubtopicName, 
  onSubtopicSelect, 
  onChangeDiscipline, 
  selectedDiscipline 
}) => {
  const [expandedSubject, setExpandedSubject] = useState<string | null>(selectedSubject);
  const [expandedTopic, setExpandedTopic] = useState<string | null>(selectedTopic);

  useEffect(() => {
    setExpandedSubject(selectedSubject);
    setExpandedTopic(selectedTopic);
  }, [selectedSubject, selectedTopic]);

  const handleSubjectClick = (subjectName: string) => {
    setExpandedSubject(prev => (prev === subjectName ? null : subjectName));
    setExpandedTopic(null); // Collapse topics when a new subject is chosen
  };

  const handleTopicClick = (topicName: string) => {
    setExpandedTopic(prev => (prev === topicName ? null : topicName));
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2 sm:mb-0">
          {selectedDiscipline} Subjects
        </h2>
        <button 
          onClick={onChangeDiscipline}
          className="text-sm text-blue-500 hover:underline dark:text-blue-400 font-medium self-start sm:self-center"
        >
          Change Discipline
        </button>
      </div>
      <div className="space-y-2">
        {subjects.map((subject) => (
          <div key={subject.name}>
            <button
              onClick={() => handleSubjectClick(subject.name)}
              className={`w-full text-left p-3 font-semibold rounded-md transition-colors duration-200 ${
                selectedSubject === subject.name
                  ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {subject.name}
            </button>
            {expandedSubject === subject.name && (
              <div className="pl-4 pt-2 pb-2 border-l-2 border-slate-200 dark:border-slate-600 ml-4 space-y-1">
                {subject.topics.map((topic) => (
                  <div key={topic.name}>
                    <button
                      onClick={() => handleTopicClick(topic.name)}
                      className={`w-full text-left p-2 font-medium text-sm rounded-md transition-colors duration-200 ${
                        selectedTopic === topic.name && selectedSubject === subject.name
                          ? 'bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300'
                          : 'hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      {topic.name}
                    </button>
                    {expandedTopic === topic.name && (
                      <div className="pl-4 pt-2 pb-2 border-l-2 border-slate-200 dark:border-slate-500 ml-4">
                        <div className="flex flex-col items-start gap-2">
                          {topic.subtopics.map((subtopic) => (
                            <button
                              key={subtopic.name}
                              onClick={() => onSubtopicSelect(subject.name, topic.name, subtopic)}
                              className={`text-left px-3 py-1.5 text-sm rounded-md transition-all duration-200 w-full ${
                                selectedSubtopicName === subtopic.name && selectedTopic === topic.name && selectedSubject === subject.name
                                  ? 'bg-blue-500 text-white font-semibold shadow'
                                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                              }`}
                            >
                              {subtopic.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelector;
