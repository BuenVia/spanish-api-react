import axios from "axios";
import { useEffect, useState } from "react";
import CreateVocab from "../components/CreateVocab";
import LastCreated from "../components/LastCreated";
import ReadVocab from "../components/ReadVocab";
import listOfTopics from "../listOfTopics";
import LoadingSpinner from '../components/LoadingSpinner'
import Topics from "../components/Topics";

export default function Admin() {

    const [authorized, setAuthorized] = useState(false)
    const [loginDetails, setLoginDetails] = useState({
        user: '',
        password: ''
    })
    const [message, setMessage] = useState('')
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

    function handleLoginchange(e) {
        const { name, value } = e.target
        setLoginDetails(prevVals => {
            if(name === 'userName') {
                return {
                    ...prevVals,
                    user: value
                }
            } else if(name === 'password') {
                return {
                    ...prevVals,
                    password: value
                }
            }
        })
    }

    function handleLoginClick() {
        if(loginDetails.user === process.env.REACT_APP_USERNAME && loginDetails.password === process.env.REACT_APP_PASSWORD) {
            setAuthorized(true)
        } else {
            setMessage('Incorrect login details')
        }
    }

    return (
        <div className="container">
            
            {authorized ? 
            <div>
                <h1>Admin</h1>
                {loading ? 
                    <div className="row">
                        <CreateVocab listOfTopics={listOfTopics} update={getAll} />
                        <LastCreated latest={latestEntry} />
                        <Topics />
                        <ReadVocab allEntries={allEntries} update={getAll} />
                    </div> 
                : <LoadingSpinner /> } 
            </div>
            : 
            <div className="login-container">
            <div className="login-box">
                <input type='text' className="form-control mb-3" name='userName' onChange={handleLoginchange} value={loginDetails.user} placeholder='User' />
                <input type='password' className="form-control mb-3" name='password' onChange={handleLoginchange} value={loginDetails.password} placeholder='Password' />
                <p style={{color: 'red'}}>{message}</p>
                <button className="btn btn-info" onClick={handleLoginClick}>Submit</button>
            </div>
        </div>
            }

        </div>
    )
}