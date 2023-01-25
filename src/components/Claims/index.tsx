import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllClaims, pharmacieId } from '../../API';
import { SearchBar } from '../SearchBar/style';
import { Button, ButtonGroups } from '../StyleDefinition/button';
import { ClaimSection, ContainerClaims, LogoLabo } from './style';

interface Meta {
    meta: {
        total_pages: number
    },
    claims: Array<object>
}

const Claims = () => {
    const navigate = useNavigate()
    const [data, setData] = useState<Meta | null>(null)
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState(null)

    useEffect(() => {
        getAllClaims(pharmacieId, page, search).then((res) => {
            if (res.status === 200) {
                setData(res.data)
            }
        });
    }, [page, search])

    useEffect(() => {
        setPage(1)
    }, [search])

    return (
        <div>
            <div style={{ marginBottom: 41 }}>
                <h2>Bienvenue, </h2>
                <h3>Toutes mes réclamations</h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <SearchBar placeholder='Labo 1' onChange={(e: any) => setSearch(e.target.value)} />
                </div>
            </div>
            <ContainerClaims>
                {data?.claims.map((claim: any, index: number) =>
                    <ClaimSection key={index}>
                        <h4>Réclamation #{claim.id}</h4>
                        <div>
                            <LogoLabo src={claim.lab.logo_url} alt={`Logo de ${claim.lab.name}`} />
                            <p>{claim.lab.name}</p>
                        </div>
                        <Button onClick={() => navigate(`/claim?id=${claim.id}`)}>En savoir plus</Button>
                    </ClaimSection>
                )}
            </ContainerClaims>
            {
                data?.claims?.length ? (
                    <ButtonGroups>
                        <Button disabled={page <= 1} onClick={() => setPage(page - 1)}>{"Previous"}</Button>
                        <Button disabled={!data?.meta || page >= data.meta.total_pages} onClick={() => setPage(page + 1)}>{"Next"}</Button>
                    </ButtonGroups>
                ) : null
            }
        </div>
    );
};

export default Claims;