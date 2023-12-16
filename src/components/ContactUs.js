import React from 'react';

const ContactUs = () => (
    <section id='contact' className="contacter">

        <div className="input3">
            <h1>You have a question? Contact-Us</h1>

            <div className="input4">
                <input className="nom" type="text" placeholder="First name" />
                <input className="prénom" type="text" placeholder="Last name" /><br />
                <input className="email" type="email" placeholder="Email" />
                <input className="teleph" type="text" placeholder="Phone number" /><br />
                <input className="msg" type="text" placeholder="your message" />
            </div>
            <button className="button button__envoyer">Send</button>
        </div>
    </section>
);

export default ContactUs