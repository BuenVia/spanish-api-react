import axios from "axios"
import { useState } from "react"
import listOfTopics from "../listOfTopics"

export default function CreateVocab(props) {

    const [message, setMessage] = useState('')
    const [newVocab, setNewVocab] = useState({
        topic: '',
        eng: '',
        esp: ''
    })

    function handleChange(e) {
        const { name, value } = e.target
        setNewVocab(prevVals => {
            if(name === 'esp') {
                return {
                    ...prevVals,
                    esp: value
                }
            } else if(name === 'eng') {
                return {
                    ...prevVals,
                    eng: value
                }
            } else if(name === 'topic') {
                return {
                    ...prevVals,
                    topic: value
                }
            }
        })
    }

    // Add object to be sent
    const sendVocab = async() => {
        const { topic, eng, esp } = newVocab
        if(topic === '' || eng === '' || esp === '') {
            setMessage(<p style={{color: 'red'}}>Plese fill in all fields</p>)
        } else {
            // const url = 'https://buenvia-api.onrender.com/api/vocab'
            const url = 'http://localhost:9000/api/vocab'
            try {
                axios
                .post(url, newVocab)
                .then(res => console.log(res.data))
            } catch (err) {
                console.log(err)
            }
            setNewVocab(prevVals => {
                return {
                    topic: prevVals.topic,
                    eng: '',
                    esp: ''
                }
            })
            setMessage(<p style={{color: 'green'}}>Success</p>)
            props.update()
        }
    }

    return (
        <div className="col-md-6 mb-3">
            <div className="card">
                <div className="card-header">
                    <h4>Create Vocab</h4>
                </div>
                <div className="card-body">
                    {message}
                    <select className="form-control mb-3" name="topic" onChange={handleChange}>
                        <option>--SELECT--</option>
                        {props.listOfTopics.map(topic => {
                            return <option key={listOfTopics.indexOf(topic)} value={topic.name}>{topic.name}</option>
                        })}
                    </select>
                    <input type="text" name='esp' className='form-control mb-3' onChange={handleChange} placeholder='Spanish' value={newVocab.esp}></input>
                    <input type="text" name='eng' className='form-control mb-3' onChange={handleChange} placeholder='English' value={newVocab.eng}></input>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary" onClick={sendVocab}>Submit</button>
                </div>
            </div>
        </div>
    )
}