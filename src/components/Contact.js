import { useState } from "react"
import { Col, Container,Row } from "react-bootstrap"
import contactImg from "../assets/img/contact-us.avif"

export const Contact = () =>{
    const formInitialDetails ={
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [fromDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText,setButtonText] = useState('Send')
    const [status, setStatus] = useState({});
    const  onFormUpdate = (category, value) => {
        setFormDetails({
            ...fromDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) =>{
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch("http://localhost:5000/contact",{
        method: "POST",
        headers: {
            "Content-Type": "Application/json;charset=utf-8" ,
        },
        body: JSON.stringify(fromDetails),
    })
    setButtonText("Send");
    let result = response.json();
    setFormDetails(formInitialDetails)
    if(result.code === 200){
        setStatus({success:true,message: 'Message sent successfully'})
    }else{
        setStatus({success: false,message: 'Something went worng, please try again later.'})
    }
    }

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                    <img src={contactImg} alt="contact us"/>
                    </Col>

                    <Col md={4}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                            <input type="text" value={fromDetails.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate('firstName',e.target.value)}/>

                            </Col>

                            <Col sm={6} className="px-1">
                            <input type="text" value={fromDetails.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate('lasttName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="email" value={fromDetails.email} placeholder="Email Address" onChange={(e)=> onFormUpdate('email',e.target.value)}/>
                            </Col>

                            <Col sm={6} className="px-1">
                            <input type="tel" value={fromDetails.phone} placeholder="Phone No." onChange={(e)=> onFormUpdate('phone',e.target.value)}/>
                            </Col>
                            <Col>
                     <textarea row="6" value={fromDetails.message} placeholder="Message" onChange={(e)=> onFormUpdate('message',e.target.value)}/>
                           <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                    </Col>

                </Row>
            </Container>
        </section>



    )
}