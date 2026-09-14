import React, { useState } from 'react';
import { ToastProvider } from '../components/ui/Toast';
import { CustomCursor } from '../components/common/CustomCursor';
import { ScrollProgress } from '../components/common/ScrollProgress';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { ResumeModal } from '../components/modals/ResumeModal';
import { CommandPaletteModal } from '../components/modals/CommandPaletteModal';
import { ProjectModal } from '../components/modals/ProjectModal';
import { AIAssistantWidget } from '../components/widgets/AIAssistantWidget';
import { ProjectItem } from '../types';

interface MainLayoutProps {
  children: React.ReactNode;
  selectedProject: ProjectItem | null;
  onCloseProjectModal: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  selectedProject,
  onCloseProjectModal,
}) => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [floatingAIOpen, setFloatingAIOpen] = useState(false);

  return (
    <ToastProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 relative font-sans selection:bg-blue-500 selection:text-white">
        <ScrollProgress />
        <CustomCursor />

        <Navbar
          onOpenCmd={() => setCmdOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
          onOpenAI={() => setFloatingAIOpen(!floatingAIOpen)}
        />

        <main>{children}</main>

        <Footer />

        {/* Floating AI Widget */}
        {floatingAIOpen && (
          <AIAssistantWidget
            isOpen={floatingAIOpen}
            onClose={() => setFloatingAIOpen(false)}
            isFloating={true}
          />
        )}

        {/* Modals */}
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />

        <CommandPaletteModal
          isOpen={cmdOpen}
          onClose={() => setCmdOpen(false)}
          onOpenResume={() => setResumeOpen(true)}
          onOpenAI={() => setFloatingAIOpen(true)}
        />

        <ProjectModal
          project={selectedProject}
          onClose={onCloseProjectModal}
        />
      </div>
    </ToastProvider>
  );
};
