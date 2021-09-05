import React from 'react'
import './MeetupList.css'
import MeetupItem from './MeetupItem'

export default function MeetupList({meetups}) {
    return (
        <ul className="list">
            {meetups.map((meetup)=>{
                return <MeetupItem 
                key={meetup.id} 
                id={meetup.id}
                image={meetup.image}
                address={meetup.address}
                description={meetup.description}
                />
            })}
        </ul>
    )
}
