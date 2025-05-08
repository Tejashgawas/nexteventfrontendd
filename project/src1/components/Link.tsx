import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '', onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real app, you would use a router here
    console.log(`Navigating to: ${href}`);
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <a 
      href={href} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};