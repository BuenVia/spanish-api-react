import { useState } from "react";
import listOfTopics from "../listOfTopics";

export default function ReadVocab(props) {

    const [chosenVocab, setChosenVocab] = useState({})

    function handleClick(e) {
        console.log(JSON.parse(e.target.value))
    }

    return (
        <div className="mb-3">
            <div className="card">
                <div className="card-header">
                    <h4>Read Vocab</h4>
                </div>
                <div className="card-body">
                    {chosenVocab && <form></form>}
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th>Topic</th>
                                <th>English</th>
                                <th>Español</th>
                            </tr>
                            {props.allEntries.map(entry => {
                                return (
                                <tr>
                                    <td>{entry.topic}</td>
                                    <td><button className="btn btn-info" onClick={handleClick} value={JSON.stringify(entry)}>{entry.eng}</button></td>
                                    <td>{entry.esp}</td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer">

                </div>
            </div>
        </div>
    )
}