import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CharaCard.css"


function CharaCard(props) {
    let id = props.props;

    //      1. Name & Image of the character
    // 2. Date of Birth
    // 3. Occupation
    // 4. Status (dead or alive)
    // 5. Nickname (if present)
    // 6. Actor who portrays the character
    // 7. Seasons in which the character appears
    // 8. All quotes by the character





    const charaUrl = "https://www.breakingbadapi.com/api/characters/" + id;
    let quoteUrl = "https://www.breakingbadapi.com/api/quote?author="
    const [table, setTable] = useState(null);
    const [quote, setQuote] = useState(null);


    useEffect(() => {
        axios.get(charaUrl)
            .then(res => {
                setTable(res.data);
                quoteUrl = quoteUrl + (res.data[0].name.split(' ').join('+'));
                console.log(quoteUrl);
                axios.get(quoteUrl)
                    .then(res2 => {
                        setQuote(res2.data)
                    })
            })
    }, [charaUrl, quoteUrl]);

    // if (table) {
    //  quoteUrl = quoteUrl + (table[0].name.split(' ').join('+'));
    //     useEffect(() => {
    //         axios.get(quoteUrl)
    //             .then(res => {
    //                 setQuote(res.data)
    //             })
    //     }, [quoteUrl]);
    // }


    if (table) {
        console.log(quote);
        let character = table[0];
        return (
            <div className="character">
                <div className="character-details">
                    <img src={character.img} alt="" />
                    <div>
                     <h1>{character.name}</h1>
                     <p><span>Date of Birth: </span>{character.birthday}</p>
                     <p><span>Occuptations: </span>{character.occupation}</p>
                     <p><span>Current Status: </span>{character.status}</p>
                     <p><span>Nickname: </span>{character.nickname}</p>
                     <p><span>Portrayed by: </span>{character.portrayed}</p>
                     <p><span>Appearances: </span>{character.appearance}</p>
                
                    </div>
                
                </div>
                <div className="quotes">
                  <h3>Quotes:</h3>
                  {quote ? quote.map(elem => {return <p> {elem.quote}</p>}) : null}
                </div>
                <button onClick={() => window.location.href="/"}>Back</button>
            </div>
        );
    } else {
        return (
            <div>
            <p>Loading...</p>
        </div>
        );
    }
}


export default CharaCard;