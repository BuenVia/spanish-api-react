import axios from "axios";
import { useEffect, useState } from "react";
import DocsElement from "../components/DocsElement";
import LoadingSpinner from "../components/LoadingSpinner";

const Documentation = () => {

  const [loading, setLoading] = useState(false)
  const [documentationArr, setDocumentationArr] = useState([])

  const url = 'https://buenvia-api.onrender.com/api/documentation'
  // const url = 'http://localhost:9000/api/documentation'
    
  const loadDocumentation = () => {
    try {
      axios
      .get(url)
      .then(res => {
        setDocumentationArr(res.data)
      })
      setLoading(true)      
    } catch (error) {
      console.log(error)
    }
  }

    useEffect(() => {
     loadDocumentation() 
    }, [])

    return (
      
      <div>
        <h1 id="top">Documentation</h1>

        <div className="card mb-3" id="contents">
          <div className="card-header">
              <h4>Contents</h4>
          </div>
          <div className="card-body">
            {loading ? documentationArr.map(document => {
              return (
                <p key={documentationArr.indexOf(document)}>
                  <a href={`#${document.slug}`}>{document.title}</a>
                </p>)
              }) : <LoadingSpinner />}
          </div>
        </div>

    

      {loading ? <DocsElement documents={documentationArr} /> : <LoadingSpinner />}

      </div>
      
      
      );
  };
  
  export default Documentation;