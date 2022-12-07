import axios from "axios";
import { useEffect, useState } from "react";
import CreateVocab from "../components/CreateVocab";
import LastCreated from "../components/LastCreated";
import ReadVocab from "../components/ReadVocab";
import listOfTopics from "../listOfTopics";
import LoadingSpinner from '../components/LoadingSpinner'
import Topics from "../components/Topics";

export default function Admin() {

    const [allEntries, setAllEntries] = useState([])
    const [latestEntry, setLatestEntry] = useState({})
    const [loading, setLoading] = useState(false)

    const getAll = async () => {
        try {
        setTimeout(() => {
            const url = 'https://buenvia-api.onrender.com'
            axios
            .get(`${url}/api/vocab`)
            .then(res => {
                const last = res.data.length - 1
                setLatestEntry(res.data[last])
                setAllEntries(res.data)
            })
            setLoading(true)
        }, 1000) 
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAll()
    }, [])



    return (
        <div className="container">
            <h1>Admin</h1>
            
            {loading ?             <div className="row">
                <CreateVocab listOfTopics={listOfTopics} update={getAll} />
                <LastCreated latest={latestEntry} />
                <Topics />
                <ReadVocab allEntries={allEntries} update={getAll} />
            </div> : <LoadingSpinner /> }
        </div>
    )
}