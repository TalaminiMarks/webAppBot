import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3333/"
})

export function getModAttr(value: number){
    return Math.floor((value - 10) / 2);
}

export function capitalize(s: string){
    return s.charAt(0).toUpperCase() + s.slice(1);
}