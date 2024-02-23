import React from "react"

export default function Timeline () {
    return (
        <div className="timeline">
     <div className="header">
        <h1 className="page-title">Home</h1>
        <img className="top-tweets" src="src/assets/Timeline-Prop.png" alt="Top Tweets" />
    </div>
    <div className="tweet-editor">
        <div className="avatar">
            <img src='src/assets/AlfredforX.jpg' alt="Avatar" />
        </div>
        <div className="tweet-editor-form">
            <input className="tweet-editor-input" type="text" placeholder="What's happening?
            " />
            <div className="tweet-editor-buttons">
                <div className="tweet-editor-actions">
                    <img src='src/assets/Top-Tweets.svg' alt='tweet-editor-actions'/>
                    <img src='src/assets/Top-Tweets1.svg' alt='tweet-editor-actions'/>
                    <img src='src/assets/Poll.svg' alt='tweet-editor-actions'/>
                    <img src='src/assets/Top-Tweets2.svg' alt='tweet-editor-actions'/>
                    <img src='src/assets/Top-Tweets3.svg' alt='tweet-editor-actions'/>
                    <button className="button" style={{background: '#1d9bf0'}}>Tweet</button>
                    {/* Ajoutez d'autres boutons d'action ici */}
                </div>
            </div>
        </div>
    </div>
    {/* Ajoutez d'autres éléments de la timeline ici */}
    <div className='Tweets'>
        <div className='tweet'>
               <img src='src/assets/Profile-Photo1.svg' alt=''/>
               <img src='src/assets/Accaount.png' alt=''/>
            <p>
                <img src='/assets/.svg' alt=''/>
                President Joe Biden twited a new agreement reached with the 
                European Union to ease Trump-era tariffs on alliminum and steel as a
                "major breakthrough" that would serve to both strengthen the Us steel 
                industry and combat the global climate crisis.
            </p>
        </div>
    </div>
    <div className='tweet-avatar'>
        <img src='src/assets/Profile-Photo.svg' alt=''/>
            <div className="tweet-body">
                <div className="tweet-title">
                    <img src="src/assets/Frame 5.png" alt=""/>
                </div>
            </div>
            </div>
    </div>


    );
};