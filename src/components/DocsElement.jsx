import Markdown from 'react-markdown'

export default function DocsElement(props) {    
    return (
    props.documents.map(document => {
        return (
            <div className="card mb-3" key={props.documents.indexOf(document)} id={document.slug}>
                <div className="card-header">
                    <h6>{document.title}</h6>
                </div>
                <div className="card-body">
                    <Markdown>{document.markdown}</Markdown>
                </div>
                <div className="card-footer">
                    <a href="#top">Top</a>
                </div>
            </div>
        )
    }
    )

  )
}