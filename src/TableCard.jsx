import react from "react";
import './Table.css';


function TableCard(props) {
    let clickHandler = props.clicker.props;
    return (
        
			<tr key={props.id} className="row">
                <td className="column" data-column="column1">{props.name}</td>
                <td className="column" data-column="column2">{props.occup.map(elem => {return <div>{elem}</div>})}</td>
                <td className="column" data-column="column6">{props.dob}</td>
                <td className="column" data-column="column6"><button onClick={function () {return clickHandler(props.id)}}><span class="material-icons">read_more</span></button></td>
            </tr>
		
    );
}

export default TableCard; 