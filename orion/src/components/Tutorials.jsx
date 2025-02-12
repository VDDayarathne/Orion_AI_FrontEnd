import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Tutorials = () => {
  // Array of tutorial data (image and title)
  const tutorials = [
    { id: 1, image: './Images/tutorial1.png', title: 'Tutorial 1' },
    { id: 2, image: './Images/tutorial2.png', title: 'Tutorial 2' },
    { id: 3, image: './Images/tutorial3.png', title: 'Tutorial 3' },
    { id: 4, image: './Images/tutorial4.png', title: 'Tutorial 4' },
  ];

  // Inline styles for the background image
  const backgroundStyle = {
    backgroundImage: `url('./Images/hero.png')`, // Replace with your background image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px',
  };

  return (
    <div style={backgroundStyle}>
      <div className="container">
        <h1 className="text-center text-white mb-4">Tutorials</h1>
        <div className="row">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="col-md-3 mb-4">
              <div className="card">
                <img
                  src={tutorial.image}
                  className="card-img-top"
                  alt={tutorial.title}
                />
                <div className="card-body">
                  <h5 className="card-title text-center" style={{color:"white"}}>{tutorial.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorials;