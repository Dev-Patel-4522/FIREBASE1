import React, {createContext}from"react";
import ComponentA from "./COMPONENTA";

const FirstName = createContext();
const LastName = createContext();

function COMPONENT(){
    return(
        <div>
            <FirstName.Provider value={"Dev"}>
            <LastName.Provider value={"Patel"}>
            <ComponentA/>
            </LastName.Provider>
            </FirstName.Provider>
        </div>
    );
}

export default COMPONENT;
export { FirstName,LastName};


