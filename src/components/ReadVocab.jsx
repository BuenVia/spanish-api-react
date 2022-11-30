import listOfTopics from "../listOfTopics";

export default function ReadVocab(props) {
    return (
        <div className="col-md-6 mb-3">
            <div className="card">
                <div className="card-header">
                    <h4>Read Vocab</h4>
                </div>
                <div className="card-body">
                    <select>
                        <option>--SELECT--</option>
                        {listOfTopics.map(topic => {
                            return <option key={listOfTopics.indexOf(topic)}>{topic.name}</option>
                        })}
                    </select>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    )
}