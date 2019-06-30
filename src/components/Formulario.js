import React, { Component } from 'react';
import { CategoriasConsumer } from '../context/CategoriasContext';
import { EventosConsumer } from '../context/EventosContext';
class Formulario extends Component {
	state = {
		nombre: '',
		categoria: ''
	};

	//si el usuario agrega un evento o categoria

	obtenerDatosEvento = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	render() {
		return (
			<EventosConsumer>
				{(value) => {
					return (
						<form onSubmit={e => {
							e.preventDefault();
							value.obtenerEventos(this.state)
						}}>
							<fieldset className="uk-fieldset uk-margin">
								<legend className="uk-legend uk-text-center">
									Busca tu evento por Nombre o por Categoría
								</legend>
							</fieldset>

							<div className="uk-column-1-3@m uk-margin">
								<div className="uk-margin" uk-margin="true">
									<input
										name="nombre"
										className="uk-input"
										type="text"
										placeholder="Nombre del Evento o Ciudad"
										onChange={this.obtenerDatosEvento}
									/>
								</div>
								<div className="uk-margin" uk-margin="true">
									<select onChange={this.obtenerDatosEvento} name="categoria" className="uk-select">
										<option value="">--- Seleccione Categoría ---</option>
										<CategoriasConsumer>
											{(value) => {
												return value.categorias.map((categoria) => (
													<option key={categoria.id} value={categoria.id} data-uk-form-select>
														{categoria.name_localized}
													</option>
												));
											}}
										</CategoriasConsumer>
									</select>
								</div>
								<div className="uk-margin" uk-margin="true">
									<input className="uk-button uk-button-danger" type="submit" value="Busca Eventos" />
								</div>
							</div>
						</form>
					);
				}}
			</EventosConsumer>
		);
	}
}

export default Formulario;
