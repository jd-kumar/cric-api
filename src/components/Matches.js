import React from 'react'
import Card from './Card'
import UpcomingCard from './UpcomingCard'
function Matches({match}) {
    var day=new Date().getDate()
    day=day.toString()
    var mat=match.date
    mat=mat.substr(8,2)

    return (
        <div>
            {(match.matchStarted===true && match.type!=='' && day===mat)? <Card match={match}/>:""}
            {(match.matchStarted===false  &&  match.type!=='' &&  match.type!=='First-class' && mat===day)? <UpcomingCard match={match}/>:""}
        </div>
    )
}

export default Matches