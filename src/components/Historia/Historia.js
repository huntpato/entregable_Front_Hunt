import {Component} from 'react';
import data from '../../assets/data.json';
import Opciones from '../Opciones/Opciones';
import Recordatorio from '../Recordatorio/Recordatorio';
import Swal from 'sweetalert2';



export default class Historia extends Component{

    constructor(props){
        super(props);
        this.state = {
            contador: 1,
            id: "1",
            bitacora : [],
        }}
    
    componentDidMount(){
        Swal.fire({
            text: 'Empecemos la aventura',
            confirmButtonText: 'Vamos!',
            confirmButtonColor: "#a0e650",
          })
    }

    componentDidUpdate = (prevProps, prevState) =>{

        const {id, contador, bitacora} = this.state;

        if(prevState.contador !== contador && contador <= 5){
            bitacora.push(id.substring(1).toUpperCase());

        }
    }

    handleOpcionA = () => {

        const {contador} = this.state;

        if(contador < 5){
            this.setState(
                {
                    contador: contador + 1,
                    id: contador + 1 + "a",
                }
            )
        }
    }

    handleOpcionB = () => {

        const {contador} = this.state;

        if(contador < 5){
            this.setState(
                {
                    contador: contador + 1,
                    id: contador + 1 + "b",
                }
            )
        }
    }


    render(){

        const {id, bitacora} = this.state;
        const filtrarDatos = data.find((elemento) => elemento.id.includes(id));

        return(
            <div className = "layout">
                <h1 className = "historia">
                    {filtrarDatos.historia}
                </h1>
                <Opciones
                    opciones = {filtrarDatos.opciones}
                    handleOpcionA = {this.handleOpcionA}
                    handleOpcionB = {this.handleOpcionB}
                />
                <Recordatorio
                    opcionAnterior = {id.substring(1).toUpperCase()}
                    bitacora = {bitacora}
                />
            </div>
        );
    }
}


