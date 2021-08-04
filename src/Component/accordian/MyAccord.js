import React, { useState } from 'react';
import "./index.css";

const MyAccord = ({ question, answer }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="head">
                <div className="question_dv">
                    <p className="plus" onClick={() => setShow(!show)}>{show ? '➖' : '➕'}</p>
                    <h1 className="question_h1">{question}</h1>
                </div>
                <div className="answer_dv">
                    {show && <p className="answer_p" >
                        {answer}
                    </p>}
                </div>
            </div>
        </>
    );
}
export default MyAccord;