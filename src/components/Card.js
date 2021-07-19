import React from 'react'
import './Card.css'

function Card({match}) {
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
						                {match.winner_team===''||match.winner_team===undefined? "Ongoing":match.winner_team+" won!"}
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

export default Card
