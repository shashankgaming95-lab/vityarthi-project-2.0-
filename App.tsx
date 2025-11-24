import React, { useState } from 'react';
import { ProjectReport } from './components/ProjectReport';
import { ChatBot } from './components/ChatBot';
import { AppView } from './types';
import { Activity, BookOpen, MessageSquare } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.REPORT);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      {/* Navigation Header */}
      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Activity size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 leading-tight">Healthy Routine Bot</h1>
                <p className="text-xs text-gray-500">Machine Learning Project</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentView(AppView.REPORT)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === AppView.REPORT
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <BookOpen size={18} />
                Project Report
              </button>
              <button
                onClick={() => setCurrentView(AppView.CHATBOT)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === AppView.CHATBOT
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <MessageSquare size={18} />
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === AppView.REPORT ? (
          <div className="animate-fade-in">
             <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start gap-3">
               <div className="text-blue-500 mt-1">ℹ️</div>
               <div>
                 <h4 className="font-semibold text-blue-800 text-sm">About this Project</h4>
                 <p className="text-blue-700 text-sm mt-1">
                   This web application is a demonstration of the "Healthy Routine ML Chatbot" project. 
                   Review the report documentation below to understand the problem statement and objectives, 
                   or click "Live Demo" to try the chatbot.
                 </p>
               </div>
             </div>
             <ProjectReport />
          </div>
        ) : (
          <div className="animate-fade-in flex flex-col items-center">
            <div className="mb-6 text-center max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-900">Get Your Personalized Routine</h2>
              <p className="text-gray-600 mt-2">
                Interact with the bot to analyze your habits and generate a schedule optimized for your lifestyle.
              </p>
            </div>
            <ChatBot />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2024 VIT Student Project. All rights reserved.
            </p>
            <div className="text-xs text-gray-400">
              Report & Implementation
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;