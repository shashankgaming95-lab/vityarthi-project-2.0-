export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ReportSection {
  title: string;
  content: string[];
}

export enum AppView {
  REPORT = 'REPORT',
  CHATBOT = 'CHATBOT'
}