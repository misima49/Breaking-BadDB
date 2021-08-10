import './Table.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import TableCard from "./TableCard";

function FetchData(props) {

    const url = "https://www.breakingbadapi.com/api/characters?category=";
    const [table, setTable] = useState(null);


    useEffect(() => {
        axios.get(url)
            .then(res => {
                setTable(res.data)
            })
    }, [url]);


    if (table) {
        return (
            <div>
            <table data-vertable="ver1">
                        <thead>
                            <tr className="row head">
                                <th className="column">Name</th>
                                <th className="column">Occupation</th>
                                <th className="column">Date of Birth</th>
                                <th className="column">More Info</th>
                            </tr>
                        </thead>

                        <tbody>

                            {table.map(createRow)}
                                                        
                        </tbody>

            </table>
            <button>View Result</button>
       </div>
        );
    } else {
        return (
            <div>
            <p>Loading...</p>
        </div>
        );
    }


    function createRow(rowDetails) {
        return (
            <TableCard 
            clicker = {props}
            id = {rowDetails.char_id}
            name = {rowDetails.name}
            occup = {rowDetails.occupation}
            dob = {rowDetails.birthday}
        />
        );
    }

}




export default FetchData;