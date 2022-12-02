import axios from "axios";
import { useState } from "react";
import listOfTopics from "../listOfTopics";

export default function ReadVocab(props) {

    const [chosenVocab, setChosenVocab] = useState(false)

    function handleClick(e) {
        const vocab = JSON.parse(e.target.value);
        setChosenVocab(vocab)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setChosenVocab(prevVals => {
            return {
                ...prevVals,
                [name]: value
            }
        })
    }

    function editVocab() {

        // const url = 'http://localhost:9000'
        // try {
        //     axios
        //     .post(`${url}/api/vocab/update`)
        //     .then(res => console.log(res))
        // } catch (error) {
        //     console.log(error)
        // }
    }

    return (
        <div className="mb-3">
            {chosenVocab && 
            <div className="card mb-3">
                <div className="card-header">
                    <h4>Edit</h4>
                </div>
                <div className="card-body">
                    <div className="mb-3 g-1">
                        <form className="row mb-3">
                            <div className="col-md-4">
                                <select className="form-control" name="topic" onChange={handleChange}>
                                    <option value="">{chosenVocab.topic}</option>
                                    {listOfTopics.map(topic => {
                                        return <option key={listOfTopics.indexOf(topic)} value="">{topic.name}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-md-4">
                                <input type='text' name="eng" className='form-control' onChange={handleChange} value={chosenVocab.eng} />
                            </div>
                            <div className="col-md-4">
                                <input type='text' name="esp" className='form-control' onChange={handleChange} value={chosenVocab.esp} />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-warning" onClick={editVocab}>Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>}
            <div className="card">
                <div className="card-header">
                    <h4>Read Vocab</h4>
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th>Topic</th>
                                <th>English</th>
                                <th>Español</th>
                            </tr>
                            {props.allEntries.map(entry => {
                                return (
                                <tr key={props.allEntries.indexOf(entry)}>
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