import React, { useState } from 'react';
import Modal from 'react-modal';
import { createMessageForClaim } from '../../API';
import { Button } from '../StyleDefinition/button';
import { ContainerBtn, TextArea } from './style';

interface Props {
    claimId: string
    onUpdate: Function
}

const ModalCreateMessage: React.FC<Props> = (props) => {
    //MODAL Style
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState<string | null>(null);
    const [image, setImage] = useState<string | null>(null);
    const [newMessage, setNewMessage] = useState<string>("");

    const handleImage = (e: any) => {
        setImage(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
    }

    const handleSubmit = async () => {
        await createMessageForClaim(props.claimId, newMessage);
        await props.onUpdate()
        setNewMessage("")
        setOpen(false);
    };

    return (
        <div>
            <Modal style={customStyles} isOpen={open} onRequestClose={() => setOpen(false)}>
                <h3>Rédiger un nouveau message</h3>
                <div>
                    <TextArea
                        name="message"
                        id="newMessage"
                        placeholder='Rédiger un nouveau message'
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}>
                    </TextArea>

                    <input type="file"
                        id="newImage"
                        name='file'
                        accept='.jpg, .jpeg, .png'
                        style={{ color: "transparent" }}
                        onChange={(e) => handleImage(e)}
                    />
                </div>
                {image && <img style={{ width: 200 }} src={image} />}
                {image
                    ? (<Button onClick={() => { setImage(null); setFile(null) }}>X</Button>)
                    : null}

                <ContainerBtn>
                    <Button onClick={handleSubmit} >Envoyer</Button>
                </ContainerBtn>

            </Modal>


            <Button onClick={() => setOpen(true)}>Envoyer un message</Button>
        </div>
    );
};

const customStyles = {
    content: {
        borderRadius: 10,
        backgroundColor: "#ddd9d9",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 709,
    },
};

export default ModalCreateMessage;