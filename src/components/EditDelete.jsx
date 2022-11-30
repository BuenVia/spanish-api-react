export default function EdiDelete(props) {
    return (
        <div className="col-md-6 mb-3">
            <div className="card">
                <div className="card-header">
                    <h4>Edit + Delete Vocab</h4>
                </div>
                <div className="card-body">
                    <select>
                        <option>--SELECT--</option>
                        {props.allEntries.map(entry => {
                            return <option>{entry.topic}: {entry.eng} / {entry.esp}</option>
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