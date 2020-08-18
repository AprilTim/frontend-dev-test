import React, {Component} from 'react';
import './Table.css';
import TableHead from "./TableHead";

const TableBody = (props) => {
    return (
        <tbody>
        {props.data.map(elm => (
            <tr className="user" onClick={props.onRowSelect.bind(null, elm)}>
                <td>{elm.id}</td>
                <td>{elm.firstName}</td>
                <td>{elm.lastName}</td>
                <td>{elm.email}</td>
                <td>{elm.phone}</td>
            </tr>))}
        </tbody>
    );
}


export default TableBody;
