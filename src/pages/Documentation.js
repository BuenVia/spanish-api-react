import documentation from '../documentation'
import DocsElement from "../components/DocsElement";

const Documentation = () => {

   return (
      
      <div>
        <h1 id="top">Documentation</h1>

        <div className="card mb-3" id="contents">
          <div className="card-header">
              <h4>Contents</h4>
          </div>
          <div className="card-body">
            {documentation.map(document => {
              return (
                <p key={document.id}>
                  <a href={`#${document.title}`}>{document.title}</a>
                </p>) })} 
          </div>
        </div>

    

      {documentation.map(doc => { return <DocsElement key={doc.id} doc={doc} /> })}


      </div>
      
      
      );
  };
  
  export default Documentation;