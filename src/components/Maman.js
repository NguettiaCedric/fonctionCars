import React, { Component } from "react";
import Toto from "./Toto";

class Maman extends Component {
    
    state = {
        messageMaman : null,
        messageToto  : null,
        disabled: true
    }

   /*  ordreMaman = () => {
        this.setState({
            messageMaman : "Va ranger ta chambre"
        })
    } */

    /* reponseToto = () => {
        this.setState({
            messageToto : "D'accord maman"
        })
    } */

    ordreMaman = (msg) => this.setState({messageMaman: msg, disabled : false}) ;

    reponseToto = msg => this.setState({ messageToto: msg });

    render() {

        // console.log(this.ordreMaman);
        return (
            <div>
                <h1>Maman</h1>

                <button 
                    onClick={() => this.ordreMaman("Va ranger ta chambre")}
                >
                    Order de la mère
                </button>

                <p>{this.state.messageMaman}</p>
                
                {/* <button onClick={this.ordreMaman}>Ordre de Maman</button> */}
             
                <hr/>


                {/* <Toto nom="Toto" reponsTo={this.reponseToto} letState={this.state}/> */}

                <Toto 
                    name="Toto"
                    reponseTotoProps={this.reponseToto}
                    leState={this.state}
                />

            </div>
        )
    }

}

export default Maman;