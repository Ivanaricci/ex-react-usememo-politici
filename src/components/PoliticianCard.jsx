import React from 'react';

const PoliticianCard = ({ politician }) => {
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

export default PoliticianCard;