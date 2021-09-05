import React from 'react'
import './Layout.css'
import Navigation from './Navigation'

export default function Layout(props) {
    return (
        <div>
            <Navigation />
            <main className="main">
                {props.children}
            </main>
           
        </div>
    )
}
