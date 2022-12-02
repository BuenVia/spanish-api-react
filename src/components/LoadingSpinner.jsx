export default function LoadingSpinner() {
    return (
        <div className="spinner">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div>
                <p>Loading...</p>
                <p>This can take up to 30 seconds</p>
            </div>
        </div>
    )
}