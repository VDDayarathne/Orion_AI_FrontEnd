import React from 'react';
import './TaskA.css';
import { Container, Row, Col, Button, Card, Form, ProgressBar } from 'react-bootstrap'; // Added ProgressBar
import { useState } from 'react';
import Image from 'react-bootstrap/Image';



const TaskA2 = () => {

  const [prompt, setPrompt] = useState('');
    const [output, setOutput] = useState('');
    const [improvedPrompt, setImprovedPrompt] = useState('');
    const [selectedModel, setSelectedModel] = useState('clipdrop');
    const [generatedImage, setGeneratedImage] = useState(null);
    const [score, setScore] = useState(null);
    const [analysis, setAnalysis] = useState('');
    const [taskProgress, setTaskProgress] = useState({ current_task: 2, next_task: 3, total_tasks: 5 });
    const [images, setImages] = useState([]);
    const [scoreDetails, setScoreDetails] = useState(null);

    const handleGenerate = async () => {
      const requestData = {
        level: 1,
        task: 2,
        prompt: prompt,
        service: selectedModel
      };
  
      try {
        const response = await fetch("http://127.0.0.1:8000/make_image/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(requestData)
        });
  
        if (!response.ok) {
          throw new Error("Failed to generate image");
        }
  
        const data = await response.json();
        setImages(data.images);
        setScoreDetails(data.score_details);
        setTaskProgress(data.task_progress);
        setImprovedPrompt(data.enhanced_prompt);
      } catch (error) {
        console.error("Error generating image:", error);
      }
    };

    return (
        <div style={{backgroundColor:"#121212"}}>
    <Container className="mt-5">
      <Row>
        <Col>
        <h2 className="task-title">Task 2</h2>
          <h4 className="text-secondary">Design a Basic Character.</h4>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={8}>
          <Card className='card'>
            <Card.Body className='card-body'>
              <Card.Title style={{color:"white"}}>Task Description</Card.Title>
              <Card.Text style={{color:"white"}}>
              In the depths of the Character Forge, the Kingdom of Artists is seeking new and imaginative personas to bring life to its creations. Queen Sophia has called upon the finest artisans to design characters that will represent the spirit of creativity. As a novice character designer, your task is to draft a simple character concept. The character should embody a unique personality while maintaining a balance of simplicity and creativity.
                  </Card.Text>
              <Card.Title style={{color:"white"}}>Objective</Card.Title>
              <Card.Text style={{color:"white"}}>
                Design a basic character using core elements like shape, form, and expression. The character should reflect harmony between individuality and creativity, symbolizing the unique essence of the Kingdom of Artists.
                   </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <h5>Model</h5>
          {["clipdrop", "Dall-E", "Stability_Ai"].map((model) => (
              <Button key={model} variant="dark" className={`mb-3 ${selectedModel === model ? 'btn-selected' : ''}`} onClick={() => setSelectedModel(model)}>
                {model}
              </Button>
            ))}
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h5>Your Prompt</h5>
          <Form.Control as="textarea" rows={3} value={prompt} onChange={(e) => setPrompt(e.target.value)} className="Formarea" />
            <Button variant="warning" className="mt-3 btn-primary" onClick={handleGenerate}>Generate</Button>
        </Col>

      </Row>
      {images.length > 0 && (
          <Row>
            {images.map((img, index) => (
              <Col key={index} xs={6} md={3}>
                <Image src={`data:image/png;base64,${img}`} style={{ maxHeight: "900px", maxWidth: "300px", marginTop: "30px" }} rounded />
              </Col>
            ))}
          </Row>
        )}

        {scoreDetails && (
          <Row className="mt-4">
            <Col>
              <h5>Score Details</h5>
              <Card>
                <Card.Body>
                  <p style={{color:"white"}}>Score: {scoreDetails.score} / {scoreDetails.max_score}</p>
                  <p style={{color:"white"}}>Analysis: {scoreDetails.analysis}</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}

      <Row className="mt-4">
        <Col>
          <h5>Improved Prompt</h5>
          <Card>
            <Card.Body style={{color:"white"}}>{improvedPrompt}</Card.Body>
          </Card>
        </Col>
      </Row>
      {taskProgress && (
          <Row style={{ margin: "50px" }}>
            <Col md={8}>
              <h5>Level 1</h5>
              <ProgressBar animated now={(taskProgress.current_task / taskProgress.total_tasks) * 100} className="custom-progress-bar" />
            </Col>
            <Col md={2}>
              <Button variant="light" style={{ margin: "20px" }} onClick={() => window.location.href='/TaskA3'}>
                Next Task
              </Button>
            </Col>
          </Row>
        )}
    </Container>
    </div>
    );
}

export default TaskA2;
