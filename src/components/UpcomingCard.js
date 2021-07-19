import React from 'react'
import './Card.css'

function UpcomingCard({match}) {
    return (
        <div>
            <div className="container">
			    <div className="match">
		            <div className="match-content">
			            <div className="column">
				            <h2 className="team-name">{match["team-1"]}</h2>
			            </div>
			            <div className="column">
					            <div className="match-result">
                                    {match.dateTimeGMT.substr(11,8)+' GMT'}
                                    <br/>
                                    {match.type}
                                </div>
                        </div>
			            <div className="column">
					        <h2 className="team-name">{match["team-2"]}</h2>
			            </div>
		            </div>
	            </div>						
            </div>
        </div>
    )
}

export default UpcomingCard
