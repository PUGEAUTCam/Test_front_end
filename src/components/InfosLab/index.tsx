import { useEffect, useState } from 'react';
import { getOnePharmacie, pharmacieId } from '../../API';
import { ContainerInfosPharma } from './style';

interface PharmacieInfo {
    id: number
    name: string
    address_city: string
    address_country: string
    address_line_1: string
    address_zip_code: string
    cip: string
}

const InfosLab = () => {
    const [data, setData] = useState<PharmacieInfo>()

    useEffect(() => {
        getOnePharmacie(pharmacieId).then((res) => setData(res.data));
    }, [])

    return (
        <ContainerInfosPharma>
            <h2>{data?.name || "-"}</h2>
            <h3>Adresse</h3>
            <p>{data?.address_line_1 || "-"}</p>
            <p>{data?.address_zip_code || "-"}</p>
            <p>{data?.address_city || "-"}</p>
            <p>{data?.address_country || "-"}</p>
            <h3>CIP</h3>
            <p>{data?.cip || "-"}</p>
        </ContainerInfosPharma>
    );
};

export default InfosLab;