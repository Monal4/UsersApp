import React from 'react'
import { useHistory } from 'react-router-dom'
import './table.css'

const Table = ({headers, body}) => {

    const history = useHistory();

    return(
        <table className = "table">
            <thead className="thead">
                <tr>
                    {headers.map(header => 
                        <th key={header}> {header} </th>    
                    )}
                </tr>
            </thead>
            <tbody>
                {body}
            </tbody>
        </table>
    )
}

export default Table;