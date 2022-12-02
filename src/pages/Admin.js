import axios from "axios";
import { useEffect, useState } from "react";
import CreateVocab from "../components/CreateVocab";
import LastCreated from "../components/LastCreated";
import ReadVocab from "../components/ReadVocab";
import listOfTopics from "../listOfTopics";

export default function Admin() {

    const [allEntries, setAllEntries] = useState([])
    const [latestEntry, setLatestEntry] = useState({})



    const getAll = async () => {
        const url = 'https://buenvia-api.onrender.com/api/vocab'
        axios
        .get(url)
        .then(res => {
            setLatestEntry(res.data[0])
            setAllEntries(res.data)
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
                <ReadVocab allEntries={allEntries} />

            </div>
        </div>
    )
}