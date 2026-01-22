
export interface Project {
  id: string;
  title: string;
  role: string;
  client?: string;
  description: string;
  responsibilities: string[];
  tech: string[];
  image: string;
  fullContent: {
    problem: string;
    solution: string;
    impact: string[];
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
