import React from 'react';
import { Container, Row, Col, Button, Card, Form, ProgressBar } from 'react-bootstrap'; 
import { useState } from 'react';
import Image from 'react-bootstrap/Image';

import './Task.css';

const Task1 = () => {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [improvedPrompt, setImprovedPrompt] = useState('');
  const [score, setScore] = useState(null);
  const [analysis, setAnalysis] = useState('');
  const [nextTask, setNextTask] = useState(null);

  const handleGenerate = async () => {
    const requestData = {
      level: 3,
      task: 1,
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
        <Col>
          <h2 className="text-primary">Task 1</h2>
          <h4 className="text-secondary">Simple Email Writing and reply.</h4>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={8}>
          <Card className='card'>
            <Card.Body className='card-body'>
              <Card.Title style={{color:"white"}}>Task Description</Card.Title>
              <Card.Text style={{color:"white"}}>
                In the heart of the Acropolis of Code, an ancient Oracle has awakened, foretelling a coming storm that threatens the harmony between man and machine. Queen Sophia, wise and just, has summoned the most skilled promptsmiths to her court.
                As a Promptian, your first task is to craft a simple yet powerful prompt that can guide the Oracle to reveal more about this impending danger. The prompt must be clear and precise, as the Oracle's response will shape the kingdom's next steps.
              </Card.Text>
              <Card.Title style={{color:"white"}}>Objective</Card.Title>
              <Card.Text style={{color:"white"}}>
                Create a prompt that will ask the Oracle to describe the nature of the threat posed by the Silencers and suggest ways to safeguard the kingdom. Keep it concise, ensuring the Oracle understands and responds with valuable insights.
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
            <Button variant="light" style={{ margin: "20px", alignContent: "flex-end", justifyContent: "left" }} onClick={() => window.location.href='/Task32'}>
              {nextTask ? `Next Task (${nextTask})` : "Next Task"}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Task1;
