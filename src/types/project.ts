export interface Project {
  id: string;
  title: string;
  short: string;
  description: string;
  tech: string[];
  year: number;
  thumbnail: string;
  images: string[];
  videoUrl: string;
  githubUrl: string;
  liveUrl: string;
  isAI: boolean;
}
