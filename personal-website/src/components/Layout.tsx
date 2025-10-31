import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="layout">
            <header>
                {/* Header component can be included here */}
            </header>
            <main>{children}</main>
            <footer>
                {/* Footer component can be included here */}
            </footer>
        </div>
    );
};

export default Layout;