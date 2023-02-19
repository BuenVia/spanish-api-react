export default function Home() {
    return (
        <div className="mt-3">
            <h1>Welcome to the BuenVia API</h1>

            <div className="card mt-3 mb-3">
                <div className="card-header c-header">
                    <h4>What is the BuenVia API?</h4>
                </div>
                <div className="card-body">
                    <p>The BuenVia API returns a translated Spanish / English vocabulary of numerous words.</p>
                    <p>The words are broken down in to categeories such as 'Colors' or 'Days' or 'Numbers'. Their primary use is as a vocabulary repository for a future Spanish language app.</p>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header">
                    <h4>How to use the BuenVia API?</h4>
                </div>
                <div className="card-body">
                    <p>Please visit the <a href="/documentation">Documentation</a> page for further information on endpoints.</p>
                    <h6>Please note that the API is hosted on on the free package at <a href="https://render.com" target='__blank'>Render.com</a> and can take up to 30 seconds to load on first use.</h6>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header">
                    <h4>What vocabulary is available via the BuenVia API?</h4>
                </div>
                <div className="card-body">
                    <p>The current list of available topics can be found by visiting the Topics page. Each topic contains varying numbers of vocabulary.</p>
                    <p>Please visit the <a href="/topics">Topics</a> page for further information on available topics.</p>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header">
                    <h4>Who created the BuenVia API?</h4>
                </div>
                <div className="card-body">
                    <p>The BuenVia API was created by, and is maintained by Matthew Clifford.</p>
                    <p>Please find contact details and a list of other projects at <a href="https://mjclifford.com" target="_blank" rel="noopener noreferrer">mjclifford.com</a>.</p>
                </div>
            </div>

        </div>
    )
}