import React, { useState } from 'react';

export default function Form(props) {
    const [anuncio, setAnuncio] = useState({
		titulo: '',
		dataInicio: '',
		dataTermino: '',
		investimentoDia: '',
		cliente: ''
	});

    function handleChange(e) {
		setAnuncio({
			...anuncio,
			[e.target.name]: e.target.value
		});
	};

    async function handleSubmit (e) {
		e.preventDefault();
        console.log(anuncio)
		//await api.post('posts', data);

		props.history.push('/');
	};

    return (
        <div className="container">
            <h3>Novo Anuncio</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Titulo do Anuncio</label>
                    <input type="text" 
                        onChange={handleChange}
				        value={anuncio.titulo}
                        name="titulo"/>
                </div>
                <div className="form-control">
                    <label>Data de Inicio</label>
                    <input type="date"
                        onChange={handleChange}
				        value={anuncio.dataInicio}
                        name="dataInicio"/>
                </div>
                <div className="form-control">
                    <label>Data de Termino</label>
                    <input type="date"
                        onChange={handleChange}
				        value={anuncio.dataTermino}
                        name="dataTermino"/>
                </div>
                <div className="form-control">
                    <label>Investimento por dia</label>
                    <input type="text" 
                        onChange={handleChange}
				        value={anuncio.investimentoDia}
                        name="investimentoDia"/>
                </div>
                <div className="form-control">
                    <label>Cliente</label>
                    <select onChange={handleChange} value={anuncio.cliente} name="cliente">
                        <option value="1">João da Silva</option>
                        <option value="2">Maria Pereira</option>
                        <option value="3">José Alves</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Salvar</button>   
            </form>
        </div>
    )
}