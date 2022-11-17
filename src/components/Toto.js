import React from "react";


const Toto = props => {

    console.log(props);

        // let cache = "";

        // if (props.letState.messageMaman == null) {
            
        //     cache = <button  disable>Réponse</button>;

        // }else {

        //     cache = <button >Réponse</button>;
        // }

        // const cache2 = props.letState.messageMaman !== null ? <button onClick={props.reponsTo} >Réponse</button> : <button hidden>Réponse</button>


    return(

        <div>
            {/* <h4>{props.nom}</h4>
            {cache2}
            <p>{props.letState.messageToto}</p> */}


            <h2>{props.name}</h2>

            <button
             disabled={props.leState.disabled}
             onClick={() => props.reponseTotoProps("Non je veux regarder la télé")}
                
            >Réponse
            
            </button>

            <p>{props.leState.messageToto}</p>

        </div>
    )
}

export default Toto;