import React from "react"
import { Carro } from "./Carro"

export function Garagem(){
    return (
        <div className="Garagem">
            <h1>Garagem do Lucas</h1>
            <Carro/>
            <Carro/>
            <Carro/>
            <Carro/>
        </div>
    )
}