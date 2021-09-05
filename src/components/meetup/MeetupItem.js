import React from 'react'
import { useContext } from 'react'
import './MeetupItem.css'
import Card from '../ui/Card'
import FavoritesContext from '../../store/Favorite-context'

export default function MeetupItem({image,title,description,address,id}) {
    const favoritectx = useContext(FavoritesContext);

    const itemIsFavorite = favoritectx.itemIsFavorite(id)
    function toggleFavoriteHandler(){
if(itemIsFavorite){
    favoritectx.removeFavorite(id)
} else {
    favoritectx.addFavorite({
        id:id,
        title:title,
        image:image,
        description:description,
        address:address
    })
}
    }
    return (
        <li className="item">
        <Card>
        <div className="image">
                <img  src={image} alt={title} />
            </div>
            <div className="content">
                <h3>{title}</h3>
                <address>{address}</address>
                <p>{description}</p>
            </div>
            <div className="actions">
                <button onClick={toggleFavoriteHandler}>{itemIsFavorite ? 'Remove from favorites' :'To favorites'}</button>
            </div>
        </Card>
           


        </li>

    )
}
// export default function MeetupItem({image,title,description,address}) {
//     return (
//         <div>
//         <section className="main-card--cointainer">

//                 <div className="card-container" >
//         <div className="card">
//             <div className="card-body">
//                 <span className="card-description subtle">
//                    {description}
//                 </span>
//             </div>
//             <img src={image} alt="images" className="card-media" />
//             <span className="card-tag subtle">Order now</span>

//         </div>
//         </div>
//         </section>
      
//         </div>
//     )
// }