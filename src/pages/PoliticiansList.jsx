import React, { useEffect, useMemo, useState } from 'react';
import PoliticianCard from '../components/PoliticianCard';

const PoliticiansList = () => {
    const [politicians, setPoliticians] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("")

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

    // array filtrato
    const filteredPoliticians = useMemo(() => {
        return politicians.filter(
            (p) =>
                p.name.toLowerCase().includes(search.toLowerCase()) ||
                p.biography.toLowerCase().includes(search.toLowerCase())
        );
    }, [politicians, search]);

    if (loading) return <p>Caricamento...</p>;
    if (error) return <p>Errore: {error}</p>;

    return (
        <>
            <div>
                <input type="text"
                    placeholder='Cerca per nome o biografia'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='search-input' />
            </div>
            <div className='politicians-container'>
                {filteredPoliticians.map((politician) => (
                    <PoliticianCard key={politician.id} politician={politician} />
                ))}
            </div>
        </>
    );
}

export default PoliticiansList;