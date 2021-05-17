import React, { useEffect, useState } from 'react';
import { Space } from 'antd';

import api from '../../services/api';

import TableCustom from '../../components/TableCustom';

export default function Relatorio() {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function obterClientes() {
      const response = await api.get('clientes');
      setClientes(response.data);
    }

    obterClientes();
  }, [])

  const columns = [
    {
      title: 'Valor Investido',
      dataIndex: 'valorInvestido',
      key: 'valorInvestido',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Qtd Máxima de Visualização',
      dataIndex: 'qtdVisualizacao',
      key: 'qtdVisualizacao',
    },
    {
      title: 'Qtd Máxima de Cliques',
      dataIndex: 'qtdCliques',
      key: 'qtdCliques',
    },
    {
      title: 'Qtd Máxima de Compartilhamentos',
      dataIndex: 'qtdCompartilhamento',
      key: 'qtdCompartilhamentos',
    },
    {
      title: 'Acões',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <span>Delete</span>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      valorInvestido: 'John Brown',
      qtdVisualizacao: 32,
      qtdCliques: 'New York No. 1 Lake Park',
      qtdCompartilhamento: 'New York No. 1 Lake Park',
      qtdCompartilhamentos: 'New York No. 1 Lake Park',
    }
  ];

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <div className="filters">
       <select>
         <option>-- Selecione um cliente --</option>
         {
           clientes.map((item) => <option key={item.id} value={item.id}>{item.nome}</option>)
         }
       </select>

        <input placeholder="Data de Inicio" type="date" />
        <input placeholder="Data de Termino" type="date" />
        <button className="btn btn-primary">Filtrar</button>
      </div>
      <TableCustom data={data} columns={columns} />
    </>
  )
}