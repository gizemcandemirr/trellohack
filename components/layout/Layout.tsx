import React from 'react';
import AppBar from '../bar/AppBar';
import BoardBar from '../bar/BoardBar';
type Children={
    children:any
}
function Layout({children}:Children) {
    return (
        <div className="min-w-full h-screen overflow-x  bg-blue-100 bg-hero bg-cover ">
            <AppBar/>
            <BoardBar/>
            <main className="">
                {children}
            </main>
        </div>
    );
}

export default Layout;