import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3333/"
})

export function getModAttr(value: number){
    const modVal: { [key: number]: number } = {};
    for(let i = 1; i <= 30; i++){
        if (i === 1){
            modVal[i] = -5;
        }
        else if(i === 2 || i === 3){
            modVal[i] = -4;
        }
        else if(i === 4 || i === 5){
            modVal[i] = -3;
        }
        else if(i === 6 || i === 7){
            modVal[i] = -2;
        }
        else if(i === 8 || i === 9){
            modVal[i] = -1;
        }
        else if(i === 10 || i === 11){
            modVal[i] = 0;
        }
        else if(i === 12 || i === 13){
            modVal[i] = 1;
        }
        else if(i === 14 || i === 15){
            modVal[i] = 2;
        }
        else if(i === 16 || i === 17){
            modVal[i] = 3;
        }
        else if(i === 18 || i === 19){
            modVal[i] = 4;
        }
        else if(i === 20 || i === 21){
            modVal[i] = 5;
        }
        else if(i === 22 || i === 23){
            modVal[i] = 6;
        }
        else if(i === 24 || i === 25){
            modVal[i] = 7;
        }
        else if(i === 26 || i === 27){
            modVal[i] = 8;
        }
        else if(i === 28 || i === 29){
            modVal[i] = 9;
        }
        else {
            modVal[i] = 10;
        }
    }
    return modVal[value];
}