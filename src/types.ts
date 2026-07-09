export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  role: string;
  category: 'Client Project' | 'Internal Perusahaan' | 'Personal Project';
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
}

export interface VibeStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  tech: string;
  colorClass: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  date: string;
}
