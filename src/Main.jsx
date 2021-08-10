import Reach, { useState } from "react";
import Table from "./Table";
import CharaCard from "./CharaCard"
import './Main.css';

function Main() {

    let [displayCard, setDisplayCard] = useState(<Table props = {OnCardClick}/>);

    const [name, setName] = useState("");

    // const handleSubmit = (evt) => {
    //     evt.preventDefault();
    //     alert(`Submitting Name ${name}`)
    //     setDisplayCard(<Table props = {name}/>)
    // }

    function OnCardClick(test) {
        alert("card clicked");
        setDisplayCard(<CharaCard props={test}/>);
    }




    return (
        <div className="main">
            <div className="container">
                <div className="sectionTitle">
                    <h2>Search using categories</h2>
                </div>
                <form className="filter-bar">
                  <input type="text" placeholder="Enter your filters here" name="search" />
                  <button type="submit">APPLY FILTER</button>
                </form>
            </div>

            <div className="container">
                <div className="sectionTitle">
                    <h1>Breaking Bad Characters</h1>
                </div>
                {displayCard}
            </div>
        </div>
    );
}



export default Main;