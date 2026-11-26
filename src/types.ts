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
  isProduction?: boolean;
}

export type DeploymentStatus = {
  type: 'production' | 'demo' | 'internal';
  label: string;
  shortLabel: string;
  badgeClass: string;
  dotClass?: string;
};

export function getProjectDeployment(project: Project): DeploymentStatus {
  if (!project.projectUrl) {
    return {
      type: 'internal',
      label: 'Internal System (Corp / Private)',
      shortLabel: 'Internal Corp',
      badgeClass: 'bg-slate-100 text-slate-700 border-slate-900'
    };
  }

  const isProd = project.isProduction ?? (!project.projectUrl.includes('vercel.app'));

  if (isProd) {
    return {
      type: 'production',
      label: 'Live Production (.com)',
      shortLabel: 'Live .com',
      badgeClass: 'bg-emerald-400 text-slate-950 border-slate-900',
      dotClass: 'bg-emerald-900'
    };
  }

  return {
    type: 'demo',
    label: 'Demo Showcase (.vercel.app)',
    shortLabel: 'Demo vercel.app',
    badgeClass: 'bg-amber-200 text-slate-900 border-slate-900',
    dotClass: 'bg-amber-700'
  };
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
