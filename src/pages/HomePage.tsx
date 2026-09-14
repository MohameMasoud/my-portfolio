import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { ServicesSection } from '../sections/ServicesSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { CertificatesSection } from '../sections/CertificatesSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { GitHubSection } from '../sections/GitHubSection';
import { AISection } from '../sections/AISection';
import { ContactSection } from '../sections/ContactSection';
import { ArticlesSection } from '../sections/ArticlesSection';
import { BlogPostItem, ProjectItem } from '../types';

interface HomePageProps {
  onOpenResume: () => void;
  onOpenAI: () => void;
  onOpenProjectDetails: (project: ProjectItem) => void;
  onOpenArticle: (article: BlogPostItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenResume,
  onOpenAI,
  onOpenProjectDetails,
  onOpenArticle,
}) => {
  return (
    <div className="space-y-0">
      <HeroSection onOpenResume={onOpenResume} onOpenAI={onOpenAI} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection onOpenDetails={onOpenProjectDetails} />
      <ServicesSection />
      <ExperienceSection />
      <CertificatesSection />
      <ArticlesSection onOpenArticle={onOpenArticle} />
      <TestimonialsSection />
      <GitHubSection />
      <AISection />
      <ContactSection />
    </div>
  );
};
