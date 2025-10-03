import React from 'react';


const PoliticianCard = ({ politician }) => {

    console.log("Renderizzo card:", politician.name)
    return (
        <div className='politician-card'>
            <img
                src={politician.image}
                alt={politician.name}
                className='politician-image'
            />
            <h3>{politician.name}</h3>
            <p><strong>Posizione:</strong> {politician.position}</p>
            <p>{politician.biography}</p>
        </div>
    );
}

export default React.memo(PoliticianCard);