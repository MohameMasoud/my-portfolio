export type ThemeMode = 'dark' | 'light';
export type LanguageMode = 'en' | 'ar';

export interface SkillCategory {
  titleKey: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    icon?: string;
    descriptionKey?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  roleKey: string;
  companyKey: string;
  locationKey: string;
  periodKey: string;
  typeKey: string; // Remote, Full-time, etc.
  descriptionKey: string;
  achievementsKey: string[];
  skills: string[];
  isCurrent?: boolean;
  impactMetricsKey?: string[];
}

export interface ProjectItem {
  id: string;
  titleKey: string;
  category: 'fullstack' | 'frontend' | 'backend' | 'ai';
  descriptionKey: string;
  longDescriptionKey: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  metricsKey?: string;
}

export interface ServiceItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  iconName: string;
  featuresKey: string[];
}

export interface CertificateItem {
  id: string;
  titleKey: string;
  issuerKey: string;
  dateKey: string;
  credentialUrl?: string;
  badgeUrl?: string;
  iconName: string;
  descriptionKey?: string;
  skills?: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  roleKey: string;
  companyKey: string;
  avatar: string;
  contentKey: string;
  rating: number;
  type: 'client' | 'student';
}

export interface BlogPostItem {
  id: string;
  titleKey: string;
  summaryKey: string;
  contentKey?: string;
  date: string;
  readTimeKey: string;
  tags: string[];
  url?: string;
  image?: string;
  featured?: boolean;
}

export interface GitHubStats {
  publicRepos: number;
  totalCommits: number;
  contributionsThisYear: number;
  topLanguages: { name: string; percentage: number; color: string }[];
  streakDays: number;
  starsCount: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  serviceInterest?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai' | 'system';
  text: string;
  timestamp: string;
  quickReplies?: string[];
}
