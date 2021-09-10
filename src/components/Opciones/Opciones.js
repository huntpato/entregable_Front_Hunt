import {Component} from 'react';

export default class Opciones extends Component{
    render(){
        return(
            <div className="opciones">
                <div className="opcion">
                    <button id="A" className= "botones" onClick = {this.props.handleOpcionA}>A</button>
                    <p>{this.props.opciones.a}</p>
                </div>
                <div className="opcion">
                    <button id="B" className= "botones" onClick = {this.props.handleOpcionB}>B</button>
                    <p>{this.props.opciones.b}</p>
                </div>
            </div>
        );
    }
}