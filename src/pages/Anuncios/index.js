import React from 'react';
import { Space } from 'antd';
import { Link } from 'react-router-dom';

import TableCustom from '../../components/TableCustom'

export default function Anuncio() {

    const columns = [
        {
            title: 'Anuncio',
            dataIndex: 'anuncio',
            key: 'anuncio',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Cliente',
            dataIndex: 'cliente',
            key: 'cliente',
        },
        {
            title: 'Data de Inicio',
            dataIndex: 'dataInicio',
            key: 'dataInicio',
        },
        {
            title: 'Data de Termino',
            dataIndex: 'dataTermino',
            key: 'dataTermino',
        },
        {
            title: 'Investimento por dia',
            dataIndex: 'investimentoDia',
            key: 'investimentoDia',
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
            anuncio: 'John Brown',
            cliente: 32,
            dataInicio: 'New York No. 1 Lake Park',
            dataTermino: 'New York No. 1 Lake Park',
            investimentoDia: 'New York No. 1 Lake Park',
        },

    ];

   
    return (
        <>
            <div className="filters">
                <Link to="/novo-anuncio" className="btn btn-primary">Novo Anuncio</Link>
            </div>
            <TableCustom data={data} columns={columns} />
        </>
    )
}