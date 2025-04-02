import React from 'react';

interface SectionContent {
  children: React.ReactNode;
}

const InfoSection: React.FC<SectionContent> = ({ children }) => {
  return (
    <section className="mt-4 mb-8 flex flex-col gap-5 px-3 xs:px-8 xl:mb-16 xl:px-14 2xl:px-50">
      {children}
    </section>
  );
};

export default InfoSection;
