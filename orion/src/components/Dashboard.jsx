import React from "react";

function Dashboard() {
  return (
    <div className="container-fluid bg-dark text-white vh-100 d-flex justify-content-center align-items-center" 
         style={{ backgroundImage: 'url(./Images/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="py-20 w-100 px-4"> {/* Added w-100 and px-4 to control width and padding */}
        <h2 className="text-center">Orion AI</h2>
        <div className="row mt-5 justify-content-center"> {/* Added justify-content-center to center the row */}
          {/* User Profile Section */}
          <div className="col-md-3"> {/* Adjusted column width */}
            <div className="card bg-black text-white">
              <div className="card-body text-center">
                <div
                  className="rounded-circle bg-secondary mx-auto mb-3"
                  style={{ width: "100px", height: "100px" }}
                ></div>
                <h6>Total Score</h6>
                <h3 className="text-primary">130</h3>
                <div className="text-left mt-4">
                  <p>Username</p>
                  <p className="text-secondary">TestUser10</p>
                  <p>Email</p>
                  <p className="text-secondary">testuser10@gmail.com</p>
                  <p>Country</p>
                  <p>Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Section */}
          <div className="col-md-6">
            <div className="card bg-transparent text-white">
              <div className="col-md-12 mt-6">
                {/* Writers Section */}
                <div className="card bg-black text-white mt-2">
                  <div className="card-body">
                    <h5 className="text-primary">Writers</h5>
                    <div className="d-flex align-items-center">
                      {/* Score Section */}
                      <div className="text-center me-4 px-6">
                        <h5>Score</h5>
                        <h1 className="display-3 text-primary">40</h1>
                        <h6 className="text-secondary">Completed: 6.6%</h6>
                      </div>

                      {/* Progress Bars Section */}
                      <div className="flex-grow-1">
                        <div>
                          <p>Level 1</p>
                          <div className="progress mb-2" style={{ height: "8px" }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "20%" }}
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div>
                          <p>Level 2</p>
                          <div className="progress mb-2" style={{ height: "8px" }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div>
                          <p>Level 3</p>
                          <div className="progress mb-2" style={{ height: "8px" }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow="40"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Artists Section */}
                <div className="card bg-black text-white mt-2">
                  <div className="card-body">
                    <h5 className="text-warning">Artist</h5>
                    <div className="d-flex align-items-center">
                      {/* Score Section */}
                      <div className="text-center me-4">
                        <h5>Score</h5>
                        <h1 className="display-3 text-primary">90</h1>
                        <h6 className="text-secondary">Completed: 6.6%</h6>
                      </div>

                      {/* Progress Bars Section */}
                      <div className="flex-grow-1">
                        <div>
                          <p>Level 1</p>
                          <div className="progress mb-2" style={{ height: "8px" }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "20%" }}
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div>
                          <p>Level 2</p>
                          <div className="progress mb-2" style={{ height: "8px" }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div>
                          <p>Level 3</p>
                          <div className="progress mb-2" style={{ height: "8px" }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow="40"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Programmers Section */}
                <div className="card bg-black text-white mt-2">
                  <div className="card-body">
                    <h5 className="text-success">Programmers</h5>
                    <div className="d-flex align-items-center">
                      {/* Score Section */}
                      <div className="text-center me-4">
                        <h5>Score</h5>
                        <h1 className="display-3 text-primary">0</h1>
                        <h6 className="text-secondary">Completed: 0%</h6>
                      </div>

                      {/* Progress Bars Section */}
                      <div className="flex-grow-1">
                        <div>
                          <p>Level 1</p>
                          <div className="progress mb-2" style={{ height: "8px" }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div>
                          <p>Level 2</p>
                          <div className="progress mb-2" style={{ height: "8px" }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div>
                          <p>Level 3</p>
                          <div className="progress mb-2" style={{ height: "8px" }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow="40"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;