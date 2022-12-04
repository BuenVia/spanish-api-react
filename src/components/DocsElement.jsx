import Markdown from 'react-markdown'

export default function DocsElement(props) {    
    
    console.log(props);
    
    return (
            <div className="card mb-3">
                <div className="card-header">
                    <h6>{props.doc.title}</h6>
                </div>
                <div className="card-body">
                    <p>Endpoint: <code>{props.doc.url}</code></p>
                    <Markdown>{props.doc.content}</Markdown>
                </div>
                <div className="card-footer">
                    <a href="#top">Top</a>
                </div>
            </div>
  )
}