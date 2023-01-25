import axios from "axios";
let API = `http://127.0.0.1:3000/api/v1`

export const pharmacieId = 1;
export const userId = 1;

export const API_ROUTES = {
    claims: `${API}/claims/`,
    messages: `${API}/messages/`,
    labs: `${API}/labs/`,
    pharmacies: `${API}/pharmacies/`,
}

//CLAIMS 
export const getAllClaims = async (id: number, page: number, search?: string | null) =>
    await axios.get(API_ROUTES.claims, {
        params: {
            "page": page,
            "q": {
                "pharmacy_id_eq": id
            },
            "search": search
        }
    })
        .then((res) => res)
        .catch((error) => error.response)
//
export const getOneClaim = async (id: string) =>
    await axios.get(API_ROUTES.claims + id)
        .then((res) => res)
        .catch((error) => error.response)
//
export const createClaim = async (id: number, claim: string) =>
    await axios.post(API_ROUTES.claims, {
        "claim": {
            "pharmacy_id": pharmacieId,
            "lab_id": id,
            "messages_attributes": [
                {
                    "user_id": userId,
                    "content": claim,
                    "file": null,
                }
            ]
        }
    })
        .then((res) => res)
        .catch((error) => error.response)

//LABS
export const getAllLabs = async () =>
    await axios.get(API_ROUTES.labs)
        .then((res) => res)
        .catch((error) => error.response)

//MESSAGES -> CLAIM
export const getMessagesFilteredByClaim = async (id: string) =>
    await axios.get(API_ROUTES.messages, {
        params: {
            "q": {
                "claim_id_eq": id
            }
        }
    })
        .then((res) => res)
        .catch((error) => error.response)
//
export const createMessageForClaim = async (id: string, message: string) =>
    await axios.post(API_ROUTES.messages, {
        "message": {
            "content": message,
            "user_id": userId,
            "claim_id": id,
            "file": null,
        }
    })
        .then((res) => res)
        .catch((error) => error.response)

//PHARMACIES
export const getOnePharmacie = async (id: number) =>
    await axios.get(API_ROUTES.pharmacies + id)
        .then((res) => res)
        .catch((error) => error.response)
