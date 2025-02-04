import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Leaderboard = () => {
  return (
    <div className="container-fluid bg-dark text-white vh-100 d-flex align-items-center justify-content-center mt-6"  style={{ marginTop: '120px',backgroundImage: 'url(./Images/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center',  }}>
      <div className="card bg-dark text-white w-100" style={{ maxWidth: '800px', borderRadius: '20px', border: '2px solid #fff', padding: '20px', paddingTop: '30px' }}>
        <div className="card-body text-center mt-20">
          <h1 className="card-title mb-4" style={{ fontSize: '3rem' }}>Leaderboard</h1>
          <div className="list-group">
              <div
                className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white border-0"
                style={{ padding: '30px', fontSize: '2rem' }}
              >
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle bg-secondary"
                    style={{ width: '40px', height: '40px', marginRight: '20px' }}
                  ></div>
                  <span>TestUser1</span>
                </div>
                <span>250</span>
              </div>
              <div
                className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white border-0"
                style={{ padding: '30px', fontSize: '2rem' }}
              >
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle bg-secondary"
                    style={{ width: '40px', height: '40px', marginRight: '20px' }}
                  ></div>
                  <span>TestUser2</span>
                </div>
                <span>245</span>
              </div>
              <div
                className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white border-0"
                style={{ padding: '30px', fontSize: '2rem' }}
              >
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle bg-secondary"
                    style={{ width: '40px', height: '40px', marginRight: '20px' }}
                  ></div>
                  <span>TestUser8</span>
                </div>
                <span>145</span>
              </div>
              <div
                className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white border-0"
                style={{ padding: '30px', fontSize: '2rem' }}
              >
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle bg-secondary"
                    style={{ width: '40px', height: '40px', marginRight: '20px' }}
                  ></div>
                  <span>TestUser4</span>
                </div>
                <span>120</span>
              </div>
              
             </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
