import React, {Component} from 'react';
import './Table.css';
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = (props) => {
    return (
        <table className="table table-bordered table-dark">
            <TableHead sort={props.sort}
                       sortField={props.sortField}
            onSort={props.onSort}/>
            <TableBody data={props.data}
                       onRowSelect={props.onRowSelect}/>
        </table>
    );
}


export default Table;
