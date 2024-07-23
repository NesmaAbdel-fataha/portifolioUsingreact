import { Col, Container, TabPane,Row,Nav,Tab} from "react-bootstrap"
import { ProjectCard } from "./ProjectCards"
import colorSharop2 from "../assets/img/color-sharp.jpg"
import projImg1 from "../assets/img/1.png"
import projImg2 from "../assets/img/2.png"
import projImg3 from "../assets/img/3.png"
import projImg4 from "../assets/img/4.png"
import projImg5 from "../assets/img/5.png"
import projImg6 from "../assets/img/6.png"


export const  Projects = ()=> {
    const projects = [
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
},
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
},
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
},
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg4,
},
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg5,
},
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg6,
},

    ]
return(
<section className="project" id="project">
    <Container>
    <Row>
    <Col>
    <h2>Projects</h2>
    <p>This Web Development Projects article provides you with an overview of different web development projects with Source Code and ideas, categorized by different types of web technologies.</p>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab One</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab Tow</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Tab Three</Nav.Link>
            </Nav.Item>
          </Nav>
       <Tab.Content>
        <TabPane eventKey="first">
      <Row>
  {
    projects.map((project,index)=>{
      return(
       <ProjectCard key={index} {...project}></ProjectCard>
      )
    })
  }
</Row>
        </TabPane>
        <TabPane eventKey="second">Loren Ipsum</TabPane>
        <TabPane eventKey="third">Loren Ipsum</TabPane>
       </Tab.Content>
     
    </Tab.Container>
    </Col>
</Row>

    </Container>
    <img className="background-image-right" src={colorSharop2}/>
</section>

)
}