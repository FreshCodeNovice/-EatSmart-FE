import Footer from '@/components/Footer';
import React from 'react';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main
        style={{
          maxWidth: '500px',
          margin: '0',
          border: '1px solid black',
          minHeight: '100vh',
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
