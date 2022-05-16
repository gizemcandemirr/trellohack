import React from 'react';
import AppBar from './bar/AppBar';
type Children={
    children:any
}
function Layout({children}:Children) {
    return (
        <div className="min-w-full min-h-screen  h-screen overflow-hidden bg-blue-100">
            <AppBar/>
            
            <main className="">
                {children}
            </main>
        </div>
    );
}

export default Layout;