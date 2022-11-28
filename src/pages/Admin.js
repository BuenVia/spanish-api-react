export default function Admin() {
    return (
        <div className="container">
            <h1>Admin</h1>
            
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>Create Vocab</h4>
                        </div>
                        <div className="card-body">
                            <select className="form-control mb-3">
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                            </select>
                            <input type="text" className='form-control mb-3' placeholder='Spanish'></input>
                            <input type="text" className='form-control mb-3' placeholder='English'></input>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>Last Created</h4>
                        </div>
                        <div className="card-body"></div>
                        <div className="card-footer"></div>
                    </div>
                </div>

                <div className="col-md-6 mb-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>Read Vocab</h4>
                        </div>
                        <div className="card-body"></div>
                        <div className="card-footer"></div>
                    </div>
                </div>

                <div className="col-md-6 mb-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>Edit + Delete Vocab</h4>
                        </div>
                        <div className="card-body"></div>
                        <div className="card-footer"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}