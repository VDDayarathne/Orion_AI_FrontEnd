import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Task.css';

const Task2 = () => {
    const [prompt, setPrompt] = useState('');
    const [output, setOutput] = useState('');
    const [improvedPrompt, setImprovedPrompt] = useState('');
    const [score, setScore] = useState(null);
    const [analysis, setAnalysis] = useState('');
    const [nextTask, setNextTask] = useState(null);
  
    const handleGenerate = async () => {
      const requestData = {
        level: 3,
        task: 2,
        prompt: prompt,
        service: 'gemini',
      };
  
      try {
        const response = await fetch('http://127.0.0.1:8000/make_text/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
  
        if (!response.ok) throw new Error('Failed to fetch');
  
        const data = await response.json();
  
        setOutput(data.enhanced_prompt);
        setImprovedPrompt(data.feedback.improvements);
        setScore(data.score_details.score);
        setAnalysis(data.score_details.analysis);
        setNextTask(data.task_progress.next_task);
      } catch (error) {
        console.error('Error fetching response:', error);
      }
    };


  return (
    <div style={{backgroundColor:"#121212"}}>
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h2 className="text-primary">Task 2</h2>
          <h4 className="text-secondary">Speech Writing</h4>
        </Col>
        <Col md={4}>
        <div className="scoreboard">
          <img src="path_to_your_image.png" alt="Scoreboard" />
          <h4>Score</h4>
        </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={8}>
          <Card className='card'>
            <Card.Body className='card-body'>
              <Card.Title style={{color:"white"}}>Task Description</Card.Title>
              <Card.Text style={{color:"white"}}>
              In the Kingdom of Writers, words are the most powerful tool. The kingdom is facing a challenge, and it needs a voice to bring everyone together. Your task is to write a simple and compelling speech that encourages the people of the kingdom to unite. Your speech should highlight the strength that comes from working together and the importance of using words wisely. The goal is to inspire hope, unity, and a shared commitment to the kingdom's values.
              </Card.Text>
              <Card.Title style={{color:"white"}}>Objective</Card.Title>
              <Card.Text style={{color:"white"}}>
              Write a speech that motivates the citizens of the Kingdom of Writers to unite and embrace the power of their words in facing the challenges ahead.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
                  <h5>Model</h5>
                  <Button variant="dark" className="mb-3">Gemini</Button>
                </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h5>Your Prompt</h5>
          <Form.Control 
            as="textarea" 
            rows={3} 
            value={prompt} 
            onChange={(e) => setPrompt(e.target.value)} 
            className="Formarea"
          />
          <Button variant="primary" className="mt-3" onClick={handleGenerate}>Generate</Button>
        </Col>
        <Col md={6}>
          <h5>Output</h5>
          <Card>
            <Card.Body>{output || "No response yet"}</Card.Body>
          </Card>
        </Col>
      </Row>
        {improvedPrompt && (
          <Row className="mt-4">
            <Col>
              <h5>Improved Prompt</h5>
              <Card>
                <Card.Body>{improvedPrompt}</Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      
       {score !== null && (
          <Row className="mt-4">
            <Col>
              <h5>Score Details</h5>
              <Card>
                <Card.Body>
                  <p><strong>Score:</strong> {score}/100</p>
                  <p><strong>Analysis:</strong> {analysis}</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}

<Row style={{ margin: "50px" }}>
          <Col md={2}>
            <Button variant="outline-light" style={{ margin: "20px", justifyContent: "flex-start" }}>Back</Button>
          </Col>
          <Col md={8}>
            <h5>Level 1</h5>
            <ProgressBar animated now={(1 / 5) * 100} />
          </Col>
          <Col md={2}>
            <Button variant="light" style={{ margin: "20px", alignContent: "flex-end", justifyContent: "left" }} onClick={() => window.location.href='/Task33'}>
              {nextTask ? `Next Task (${nextTask})` : "Next Task"}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Task2;
