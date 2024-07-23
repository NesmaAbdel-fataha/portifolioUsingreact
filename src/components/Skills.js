import { Container , Row , Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/11.png"
import meter2 from "../assets/img/22.png"
import meter3 from "../assets/img/33.png"
import meter4 from "../assets/img/44.png"
import colorSharp from "../assets/img/brown-sharp.avif"
export const Skills =()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
<section className="skill" id="skill">
<Container>
    <Row>
        <Col>
        <div className="skill-bx">
            <h2>
                Skills
            </h2>
            <p>I  can develop your skills as a web developer over time. Some web developer skills include understanding HTML, general design skills and being analytical.</p>
       <Carousel responsive={responsive} infinite={true} className="skill-slider">
<div className="item">
    <img src={meter1} alt="img"/>
    <h5>Web Devolpment</h5>
</div>
<div className="item">
<img src={meter2} alt="img"/>
    <h5>Brand Identity</h5>
</div>
<div className="item">
<img src={meter3} alt="img"/>
    <h5>Logo Design</h5>
</div>
<div className="item">
<img src={meter4} alt="img"/>
    <h5>Web Devolpment</h5>
</div>

       </Carousel>
        </div>
        </Col>
    </Row>
</Container>
<img className="background-img-left" src={colorSharp}/>
</section>

      )








}