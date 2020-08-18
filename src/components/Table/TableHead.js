import React, {Component} from 'react';
import './Table.css';
import NavIcon from "./NavIcon/NavIcon";

const TableHead = (props) => {
    return (
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
    );
}


export default TableHead;
