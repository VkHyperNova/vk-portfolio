import React, { useState } from 'react';

const AnimatedButton = () => {

    const [send, setSend] = useState(false);
    const [shake, setShake] = useState(false);

    const animate = () => {

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;


        if (name !== "" || email !== "" || message !== "") {
            /* Send */
            setSend(true);
            setTimeout(() => setSend(false), 1000);
        } else {
            /* Shake */
            setShake(true);
            setTimeout(() => setShake(false), 1000);
        }
    }

    return (
        <button onClick={animate} className={"btn " + (send ? `send` : null) + " " +  (shake ? `shake` : null)}>Send Message</button>
    );

}

export default AnimatedButton;