import React from 'react'
import '../styleSheet/Landing.css'

export default function Footer() {
    return (
        <div className='section6'>
            <div className='footerContent'>
                <h4>RESUME SHAPER</h4>
                <h6 className='subHeadingSec6'>Resumes Redefined, Success Rewritten.</h6>
                <div className='row footerLinks' >
                    <div className='col-md-4'>
                        <h6>Quick Links</h6>
                        <p>About Us</p>
                        <p>How It works</p>
                        <p>Features</p>
                        <p>Testimonials</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='col-md-4'>
                        <h6>Privacy and Terms</h6>
                        <p>Privacy Policy</p>
                        <p>Terms Of Service</p>
                    </div>
                    <div className='col-md-4'>
                        <h6>Connect with us</h6>
                        <p>Email: abc@gmail.com</p>
                        <p>Phone : 456-345-2345</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
