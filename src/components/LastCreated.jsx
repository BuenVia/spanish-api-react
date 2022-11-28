export default function LastCreated(props) {
    return (
        <div className="col-md-6 mb-3">
            <div className="card">
                <div className="card-header">
                    <h4>Last Created</h4>
                </div>
                <div className="card-body">
                    <p>Topic: {props.latest.topic}</p>
                    <p>Slug: {props.latest.slug}</p>
                    <p>Esp: {props.latest.esp}</p>
                    <p>Eng: {props.latest.eng}</p>
                    <p>ID: {props.latest._id}</p>
                    <p>Date: {props.latest.createdAt}</p>
                </div>
                <div className="card-footer"></div>
            </div>
        </div>
    )
}