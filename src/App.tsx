import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { BlogPostItem, ProjectItem } from './types';
import { ArticleModal } from './components/modals/ArticleModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPostItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [aiOpen, setAIOpen] = useState(false);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainLayout
          selectedProject={selectedProject}
          onCloseProjectModal={() => setSelectedProject(null)}
        >
          <HomePage
            onOpenResume={() => setResumeOpen(true)}
            onOpenAI={() => setAIOpen(true)}
            onOpenProjectDetails={(project) => setSelectedProject(project)}
            onOpenArticle={(article) => setSelectedArticle(article)}
          />
        </MainLayout>

        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      </LanguageProvider>
    </ThemeProvider>
  );
}
