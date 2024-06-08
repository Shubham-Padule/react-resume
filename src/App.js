import React from 'react';
import { Container, Navbar, Nav, Card, ListGroup, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import resumePDF from './Shubham_padule_.pdf'; // Add your PDF file in the src folder

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#">Shubham Padule</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="https://github.com/Shubham-Padule" target="_blank">
                <FaGithub size={30} />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/shubham-padule-sp" target="_blank">
                <FaLinkedin size={30} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-5">
        <header className="text-center mb-5">
          <h1>Shubham Padule</h1>
          <p>PROGRAMMER || DEVELOPER || LEARNER</p>
        </header>
        
        <div className="text-center mb-5">
          <Button variant="primary" href={resumePDF} download>
            Download Resume
          </Button>
        </div>

        <section>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Contact Information</Card.Title>
              <Card.Text>Email: <a href="mailto:Shubhampadule22@gmail.com">Shubhampadule22@gmail.com</a></Card.Text>
              <Card.Text>Phone: +91 8483883856</Card.Text>
              <Card.Text>Location: Pune, India</Card.Text>
              <Card.Text>Portfolio: <a href="https://shubhamporfolio.netlify.app/" target="_blank" rel="noopener noreferrer">shubhamporfolio.netlify.app</a></Card.Text>
              <Card.Text>LinkedIn: <a href="https://www.linkedin.com/in/shubham-padule-sp" target="_blank" rel="noopener noreferrer">Shubham Padule</a></Card.Text>
              <Card.Text>GitHub: <a href="https://github.com/Shubham-Padule" target="_blank" rel="noopener noreferrer">Shubham-Padule</a></Card.Text>
            </Card.Body>
          </Card>
        </section>
        
        <section>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>M.C.A, Savitribai Phule Pune University</strong>, Sinhagad Institute Of Management & Computer Applications Pune (12/2021 - 09/2023), Pune, 72.64%
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>BBA(C.A), Savitribai Phule Pune University</strong>, Sarhad College of Arts Commers and Science (06/2018 - 03/2021), Pune, 67.54%
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Higher Secondary Education (HSC)</strong>, Sarhad College of Arts Commers and Science (06/2016 - 04/2018), Pune, 60.92%
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Secondary School Certificate (SSC)</strong>, Priyadarshini Highers Secondary school (05/2016), Pune, 64.00%
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </section>
        
        <section>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Projects</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Online-Food Delivery Web</strong> (03/2022 - 09/2022)
                  <p>Technology Used: HTML, CSS, Javascript, Node.js, Express.js, React.js</p>
                  <p>Database: MongoDB</p>
                  <p>Description: Online Pizza Delivery System project is for customers to order pizzas online for delivery. This system not only improves customer experience but also eases the workload on the staff of the pizza shop.</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Portfolio Website</strong> (05/2023 - 06/2023)
                  <p>Technology: HTML, CSS, Javascript</p>
                  <p>Description: Developed a personalized portfolio website to showcase technical skills, projects, and accomplishments as an entry-level software developer. The website serves as a central hub for potential employers and collaborators to learn more about my background, skills, and coding projects.</p>
                  <p>Link: <a href="https://shubhamporfolio.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio Website</a></p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Gym-Management-System</strong>
                  <p>Technology Used: Java, Applet/Swing, and JavaFX</p>
                  <p>Description: Adding/editing/deleting GUI to each class, the system checks the availability of trainers and equipment listed in the exercise plan at the chosen time before adding a new subscription. Enquire about customers' subscriptions, halls schedule, and trainers' schedule.</p>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </section>
        
        <section>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Skills</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>HTML5, CSS, Javascript, Bootstrap</ListGroup.Item>
                <ListGroup.Item>REST API, React, Express.js, Node.js</ListGroup.Item>
                <ListGroup.Item>MongoDB, MySQL, Git, GitHub</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </section>
        
        <section>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Certifications</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Web Designing (Shape Institute) (03/2022)</ListGroup.Item>
                <ListGroup.Item>Java Course (Udemy) (06/2023 - 08/2023)</ListGroup.Item>
                <ListGroup.Item>MERN Stack Developer (01/2024 - Present)</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </section>
        
        <section>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Languages</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>English (Full Professional Proficiency)</ListGroup.Item>
                <ListGroup.Item>Hindi (Full Professional Proficiency)</ListGroup.Item>
                <ListGroup.Item>Marathi (Full Professional Proficiency)</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </section>
        
        <section>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Interests</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Interest in Learning Technologies</ListGroup.Item>
                <ListGroup.Item>Online Competitive Gaming</ListGroup.Item>
                <ListGroup.Item>Watching Online Web Series</ListGroup.Item>
                <ListGroup.Item>Weightlifting</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </section>
      </Container>
    </div>
  );
}

export default App;
