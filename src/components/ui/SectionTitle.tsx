import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  children?: ReactNode;
}

const SectionTitle = ({ title, subtitle, center = false, light = false, children }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`text-lg max-w-3xl ${center ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      
      <div className={`h-1 w-20 bg-primary mt-6 rounded-full ${center ? 'mx-auto' : ''}`}></div>
      
      {children}
    </div>
  );
};

export default SectionTitle;