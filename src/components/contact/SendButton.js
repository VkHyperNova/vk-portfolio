import React, { useState } from 'react';

const AnimatedButton = () => {

    const [send, set_send] = useState(false);

    const animate = () => {

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        

        if (name.trim() != "", email != "", message != "") {
            set_send(true);
            setTimeout(() => set_send(false), 1000);
        } 
    }

    return (
        <button onClick={animate} className={"btn btn-primary " + (send ? `send` : null)}>Send Message</button>
    );

}

export default AnimatedButton;