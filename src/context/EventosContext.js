import React, { Component } from 'react';
import axios from 'axios';
const EventoContext = React.createContext();

export const EventosConsumer = EventoContext.Consumer;

class EventosProvider extends Component {
    state = { 
        eventos: []
     }

    token = '563TUNQBT6WDCMC4FJZC';

    ordenar = 'date';

    obtenerEventos = async (busqueda) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;

        //consultar la api con la url

        const eventos = await axios(url);

        this.setState({
            eventos: eventos.data.events
        });
    }

    render() { 
        return ( 
            <EventoContext.Provider
                value={{
                    eventos: this.state.eventos,
                    obtenerEventos: this.obtenerEventos
                }}
            >
                {this.props.children}
            </EventoContext.Provider>
         );
    }
}
 
export default EventosProvider;