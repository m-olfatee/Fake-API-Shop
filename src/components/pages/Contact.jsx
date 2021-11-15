import React from 'react'

const Contact = () => {
    
    return (
        <section className="contact" id="contact">
            <h2>If you have any question feel free to ask!</h2>
            <form action="https://formspree.io/f/moqyebag" method="POST" noValidate>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Your full name:" required />
                    <label htmlFor="floatingInput">Your Name: </label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingEmail" placeholder="Your E-Mail:" required />
                    <label htmlFor="floatingInput">Your E-Mail: </label>
                </div>
                <textarea className="mb-3" name="message" id="message" cols="30" rows="10"
                    placeholder="   Your message:"></textarea>
                <button className="custom-btn btn-2"><span>SEND!</span><span>Send Message</span></button>
            </form>
        </section>
    )
}

export default Contact
