import axios from "axios";
import { useEffect, useState } from "react";
import CreateVocab from "../components/CreateVocab";
import LastCreated from "../components/LastCreated";
import listOfTopics from "../listOfTopics";

export default function Admin() {

    const [currentListTopics, setCurrentListTopics] = useState(listOfTopics)
    const [latestEntry, setLatestEntry] = useState({})

    const getAll = async () => {
        const url = 'https://buenvia-api.onrender.com/api/vocab'
        axios
        .get(url)
        .then(res => {
            console.log(res.data)
            setLatestEntry(res.data[0])
        })
    }

    useEffect(() => {
        getAll()
    }, [])

    return (
        <div className="container">
            <h1>Admin</h1>
            
            <div className="row">

                <CreateVocab listOfTopics={listOfTopics} />
                <LastCreated latest={latestEntry} />

                <div className="col-md-6 mb-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>Read Vocab</h4>
                        </div>
                        <div className="card-body"></div>
                        <div className="card-footer"></div>
                    </div>
                </div>

                <div className="col-md-6 mb-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>Edit + Delete Vocab</h4>
                        </div>
                        <div className="card-body"></div>
                        <div className="card-footer"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}