import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
import { useContext } from 'react'
import FavoritesContext from '../../store/Favorite-context'


export default function Navigation() {
    const favoritesCtx = useContext(FavoritesContext)
    return (
        <header className="header">
        <Link to="/">
        <div className="logo">React meetups</div>
        </Link>
       
        <nav>
            <ul>
            <li>
            <Link to="/">
                    AllMeetups
                </Link>
            </li>
                
            <li>
            <Link to="/newMeetup">
                    NewMeetup
                </Link>
            </li>
                
            <li>
            <Link to="/favorites">
                    Favorites
                    <span className="badge">{favoritesCtx.totalFavorites}</span>
                </Link>
            </li>
                
            </ul>
        </nav>
            
        </header>
    )
}
