import React, { useState } from 'react'
import '../index.css'
import Popup from './Popup';

function Form() {


    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='form' id="form">
            <h2>Form example</h2>
            <form className="form__form-module">

                <input placeholder='Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <input placeholder='Email' type="text" />

                <select>
                    <option value="">Industry</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="gaming">Gaming</option>
                    <option value="travel">Travel</option>
                    <option value="other">Other</option>
                </select>

                <textarea placeholder='Tell us about you'></textarea>

                <input className='btn' type="button" value="Send" onClick={togglePopup} />

                {isOpen && <Popup
                    content={<p>Thanks for your contact {name}!</p>}
                    handleClose={togglePopup}
                />}
            </form>
        </div>
    )
}

export default Form