import { useHistory } from 'react-router';
import React from 'react'
import NewMeetupForm from '../meetup/NewMeetupForm';

export default function NewMeetup() {

    const history = useHistory()
    function AddMeetupHandler(meetupData){
        fetch('https://react-gettingmeetup-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
        {
            method:'POST',
            body:JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(()=>{
            history.replace('/')
        })
    }
    return (
        <section>
            <h1>New meetup</h1>
            <NewMeetupForm AddMeetup={AddMeetupHandler}/>
            
        </section>
    )
}
