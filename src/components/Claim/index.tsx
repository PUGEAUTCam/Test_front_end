import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMessagesFilteredByClaim, getOneClaim, userId } from '../../API';
import { LogoLabo } from '../Claims/style';
import ModalCreateMessage from '../ModalCreateMessage';
import { ArticleMessage, DivLabo } from './style';

interface ClaimData {
    id: number
    pharmacy: {
        id: number
        name: string
        address_city: string
        address_country: string
        address_line_1: string
        address_zip_code: string
        cip: string
        user_id: number
    },
    lab: {
        id: number
        name: string
        logo_url: string
    }
}

interface MessageData {
    id: number
    content: string
    file_url: string | null
    claim_id: number
    user: {
        id: number
        first_name: string
        last_name: string
        email: string | null
        kind: string
        pharmacy_id: string | number | null
        lab_id: number
        created_at: string
        updated_at: string
    }
}

const Claim = () => {
    const navigate = useNavigate()
    let params = new URLSearchParams(window.location.search);
    const idParams = params.get('id');

    const [data, setData] = useState<ClaimData>()
    const [messages, setMessages] = useState<MessageData[]>()

    const getMessages = () => {
        if (idParams) {
            getMessagesFilteredByClaim(idParams).then((res) => setMessages(res.data.messages));
        }
    }

    useEffect(() => {
        if (idParams) {
            getOneClaim(idParams).then((res) => setData(res.data));
        }
    }, [])

    useEffect(() => {
        getMessages()
    }, [])

    if (!idParams) {
        navigate("/")
        return null
    }

    return (
        <section>
            <h2>Réclamation #{data?.id}</h2>
            <DivLabo>
                <LogoLabo src={data?.lab.logo_url} alt={data?.lab.name} />
                <h3>{data?.lab.name}</h3>
            </DivLabo>

            <div>
                <h3>Messages</h3>
                {messages?.map((message: any, index: number) =>
                    <ArticleMessage key={index}>
                        {
                            message.user.id === userId
                                ? <p>Vous : </p>
                                : <p>{message.user.first_name + " " + message.user.last_name}</p>
                        }
                        <p style={{ color: "black", fontWeight: "normal" }}>{message.content}</p>
                    </ArticleMessage>
                )}
            </div>

            <ModalCreateMessage onUpdate={getMessages} claimId={idParams} />
        </section >
    );
};

export default Claim;