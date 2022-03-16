import { createContext } from "react";
import {TCart} from "../interfaces/IProduct"

type TC = {
    carts: TCart[],
    addCart: (cart: TCart) => void,
    removeCart: (id: number) => void, 
    updateCart: (id: number, count: number) => void
}

const c: TC = {
    carts: [],
    addCart: () => {},
    removeCart: () => {}, 
    updateCart: () => {}
}

export default createContext(c);