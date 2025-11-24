import React from 'react';
import { ReportSection } from '../types';

const reportData: ReportSection[] = [
  {
    title: "1. Introduction",
    content: ["This project builds an ML-assisted chatbot that generates a personalized healthy daily routine."]
  },
  {
    title: "2. Problem Statement",
    content: ["People struggle to follow healthy routines due to lack of planning, confusion, and poor habits."]
  },
  {
    title: "3. Objectives",
    content: [
      "- Predict routine intensity and type via ML.",
      "- Generate full daily routine.",
      "- Provide screen-time-based recommendations."
    ]
  },
  {
    title: "4. Functional Requirements",
    content: ["(Chatbot interaction, ML predictions, routine generation.)"]
  },
  {
    title: "5. Non-Functional Requirements",
    content: ["(Usability, accuracy, modularity.)"]
  },
  {
    title: "6. Architecture",
    content: ["Hybrid ML + rule-based system with modular Python components."]
  },
  {
    title: "7. Design Decisions",
    content: ["Two ML models; Naive Bayes; text-label dataset; .pkl storage."]
  },
  {
    title: "8. Implementation Details",
    content: ["(Modules: chatbot, input handler, preprocessor, ML models, routine generator, recommendation engine, main.)"]
  },
  {
    title: "9. Testing Approach",
    content: ["(Unit, integration, and functional testing.)"]
  },
  {
    title: "10. Challenges",
    content: ["(Dataset creation, accuracy issues, encoding issues, module integration.)"]
  },
  {
    title: "11. Learnings",
    content: ["(Built dataset; ML training; error handling; integrating modules; project structuring.)"]
  },
  {
    title: "12. Future Enhancements",
    content: ["(Add more models, deep learning, tracking, history, live data.)"]
  }
];

export const ProjectReport: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-sm border border-gray-200 rounded-lg">
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">Healthy Routine ML Chatbot</h2>
        <p className="text-gray-600 mt-1">Project Report Documentation</p>
      </div>
      
      <div className="space-y-6">
        {reportData.map((section, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-md border border-gray-100">
            <h3 className="font-semibold text-lg text-blue-700 mb-2">{section.title}</h3>
            <ul className="list-none space-y-1">
              {section.content.map((line, idx) => (
                <li key={idx} className="text-gray-700 text-sm leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};