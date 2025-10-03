import { ReactNode } from 'react';

interface PageTemplateProps {
  title: string;
  description?: string;
  showHeader?: boolean;
  children: ReactNode;
}

export default function PageTemplate({ 
  title, 
  description,
  showHeader = true,
  children 
}: PageTemplateProps) {
  return (
    <main className="min-h-screen">
      {showHeader && (
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            {description && (
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            )}
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </main>
  );
}
