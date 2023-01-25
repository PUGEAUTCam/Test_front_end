import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import { createClaim, getAllLabs } from '../../API';
import { Button } from '../StyleDefinition/button';
import { TextArea } from '../ModalCreateMessage/style';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LabsData {
    id: number
    name: string
    logo_url: string
    user: {
        id: number
        first_name: string
        last_name: string
        email: string
        kind: string
        pharmacy_id: number
        lab_id: number | string | null
        created_at: string
        updated_at: string
    }
}

const CreateClaim = () => {
    const [data, setData] = useState<LabsData[]>([])
    const [selectedLab, setSelectedLab] = useState<null | number>(null)
    const [newClaim, setNewClaim] = useState<string>("")

    useEffect(() => {
        getAllLabs().then((res) => setData(res.data.labs));
    }, [])

    const resetData = () => {
        setSelectedLab(null)
        setNewClaim("")
    }

    const handleSubmit = async () => {
        if (!selectedLab || !newClaim) return null

        let res = await createClaim(selectedLab, newClaim)

        if (res?.status === 200) {
            toast.success("Réclamation enregistrée")
        } else {
            toast.error("Une erreur est survenue")
        }

        resetData()
    };

    return (
        <div>
            <h2>Créer une nouvelle réclamation</h2>
            <p style={{ margin: "29px 0px" }}>Sélectionner un labo</p>
            <Select
                onChange={(value: any) => setSelectedLab(value?.value)}
                options={data.map(lab => ({ label: lab.name, value: lab.id }))}
            />

            <p style={{ margin: "29px 0px" }}>Rédiger votre message</p>
            <TextArea
                name="claim"
                id="newClaim"
                value={newClaim}
                onChange={(e) => setNewClaim(e.target.value)}
            >
            </TextArea>

            <Button disabled={!newClaim || !selectedLab} onClick={handleSubmit}>Envoyer votre réclamation</Button>
        </div>
    );
};

export default CreateClaim;