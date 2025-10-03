import React, { useEffect, useState } from 'react';
import PoliticianCard from '../components/PoliticianCard';

const PoliticiansList = () => {
    const [politicians, setPoliticians] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPoliticians = async () => {
            try {
                const res = await fetch("http://localhost:3333/politicians");
                if (!res.ok) {
                    throw new Error("Errore nella chiamata API");
                }
                const data = await res.json();
                setPoliticians(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPoliticians();
    }, []);

    if (loading) return <p>Caricamento...</p>;
    if (error) return <p>Errore: {error}</p>;

    return (
        <div className='politicians-container'>
            {politicians.map((politician) => (
                <PoliticianCard key={politician.id} politician={politician} />
            ))}
        </div>
    );
}

export default PoliticiansList;