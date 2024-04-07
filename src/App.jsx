import "./App.css";

function App() {
    return (
        <>
            <div className="container">
                <MyCard membership="FREE" rate="$0/month" />
            </div>
        </>
    );
}

function MyCard() {
    return (
        <div className="container">
            <div className="card">
                <h6>FREE</h6>
                <h3>$0/month</h3>

                <span className="sub-det">&#10003; Single User</span>
                <span className="sub-det">&#10003; 50GB Storage</span>
                <span className="sub-det">&#10003; Unlimited Public Projects</span>
                <span className="sub-det"> &#10003; Community Access</span>
                <span className="sub-det dis-det">
                    &#10007; Unlimited Private Projects
                </span>
                <span className="sub-det dis-det">
                    &#10007; Dedicated Phone Support
                </span>
                <span className="sub-det dis-det">&#10007; Free Subdomain</span>
                <span className="sub-det dis-det">&#10007; Monthly Status Reports</span>

                <button id="btn-nme">BUTTON</button>
            </div>
            <div className="card">
                <h6>PLUS</h6>
                <h3>$9/month</h3>

                <span className="sub-det">&#10003; 5 Users</span>
                <span className="sub-det">&#10003; 50GB Storage</span>
                <span className="sub-det">&#10003; Unlimited Public Projects</span>
                <span className="sub-det">&#10003; Community Access</span>
                <span className="sub-det">&#10003; Unlimited Private Projects</span>
                <span className="sub-det">&#10003; Dedicated Phone Support</span>
                <span className="sub-det">&#10003; Free Subdomain</span>
                <span className="sub-det dis-det">&#10007; Monthly Status Reports</span>

                <button id="btn-nme">BUTTON</button>
            </div>
            <div className="card">
                <h6>PRO</h6>
                <h3>$49/month</h3>

                <span className="sub-det">&#10003; Unlimited Users</span>
                <span className="sub-det">&#10003; 50GB Storage</span>
                <span className="sub-det">&#10003; Unlimited Public Projects</span>
                <span className="sub-det">&#10003; Community Access</span>
                <span className="sub-det">&#10003; Unlimited Private Projects</span>
                <span className="sub-det">&#10003; Dedicated Phone Support</span>
                <span className="sub-det">&#10003; Free Subdomain</span>
                <span className="sub-det">&#10003; Monthly Status Reports</span>

                <button id="btn-nme">BUTTON</button>
            </div>
        </div>
    

)};

export default App;