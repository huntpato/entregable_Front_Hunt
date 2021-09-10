import {Component} from 'react';

export default class Recordatorio extends Component{
    
    render(){
        return(
            
            <div className = "recordatorio">
                <p>Selección anterior:  {this.props.opcionAnterior}</p>
                <p>Historial de tus elecciones:</p>
                <ul>
                    {
                    this.props.bitacora.map((elemento, index) => {
                        return <li key = {index}> {elemento} </li>
                    })
                    }
                </ul>
            </div>
        );
    }
}