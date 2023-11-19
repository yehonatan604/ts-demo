import { address } from "./Address.model"
import { Image } from "./Image.model"
import { UserName } from "./UserName.model"

export interface User {
    _id: string,
    name: UserName,
    phone: number,
    email: string,
    password: string,
    image: Image,
    address: address,
    isBusiness: boolean,
    isAdmin: boolean
}
