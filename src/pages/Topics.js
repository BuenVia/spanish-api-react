import { useEffect, useState } from "react";
import axios from "axios";

const Topics = () => {

  const [topics, setTopics] = useState([])

  const url = 'https://buenvia-api.onrender.com/api/topics'
  
  const getTopics = () => {
    try {
      axios
      .get(url)
      .then(res => setTopics(res.data)) 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTopics()
  }, [])

    return (
      <div>


        <h1>Topics</h1>

        <div className="card">
          <div className="card-header">
            <h4>Available Topics</h4>
          </div>
          <div className="card-body">


              <table className="table table-striped">
                <tbody>

                  <tr>
                    <td>Total number of vocabs</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>Topic</th>
                    <th>No. of Vocabs</th>
                  </tr>
                  {topics.map(topic => {return <tr key={topics.indexOf(topic)}><td>{topic.name}</td><td>{topic.count}</td></tr>})}
                </tbody>
              </table>
          </div>
        </div>
      </div>   
)};
  
  export default Topics;