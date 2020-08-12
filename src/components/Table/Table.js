import React, {Component} from 'react';
import './Table.css';
import NavIcon from "./NavIcon/NavIcon";

const Table = (props) => {
    return (
        <table className="table table-bordered table-dark">
            <thead>
            <tr className="header">
                <th scope="col" onClick={props.onSort.bind(null, 'id')}>id {props.sortField === 'id' ?
                    <NavIcon sort={props.sort}/> : null}</th>
                <th scope="col"
                    onClick={props.onSort.bind(null, 'firstName')}>firstName {props.sortField === 'firstName' ?
                    <NavIcon sort={props.sort}/> : null}</th>
                <th scope="col"
                    onClick={props.onSort.bind(null, 'lastName')}>lastName {props.sortField === 'lastName' ?
                    <NavIcon sort={props.sort}/> : null}</th>
                <th scope="col" onClick={props.onSort.bind(null, 'email')}>email {props.sortField === 'email' ?
                    <NavIcon sort={props.sort}/> : null}</th>
                <th scope="col" onClick={props.onSort.bind(null, 'phone')}>phone {props.sortField === 'phone' ?
                    <NavIcon sort={props.sort}/> : null}</th>
            </tr>
            </thead>
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
        </table>
    );
}


export default Table;
