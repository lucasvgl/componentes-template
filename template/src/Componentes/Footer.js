import React from "react";
import { RedesSociais } from "./RedesSociais";
import { CopyWrite } from "./Copywrite";

export function Footer(){
    return(
        <div className="Footer">
        <RedesSociais/>
        <CopyWrite/>
        </div>
    )
}