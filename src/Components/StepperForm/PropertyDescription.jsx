import React, { useState } from 'react';

function PropertyDescription() {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);

    // Function to handle the textarea input
    const handleTextChange = (event) => {
        const inputText = event.target.value;

        // Calculate the number of words
        const words = inputText.trim().split(/\s+/).filter(Boolean);
        const wordLength = words.length;

        // Check if the word count exceeds 40
        if (wordLength <= 40) {
            setText(inputText);
            setWordCount(wordLength);
        }
    };

    return (
        <div className="container pt-5 pb-4">
            <div className="row align-items-center">
                <div className="col-6">
                    <div>
                        <p className="bg-lgrey rounded-pill py-2 px-4 max fw-semi border">Step 08</p>
                    </div>
                    <h2 className="step-font">Write a Description That
                        Stands Out!</h2>
                    <p className="fw-normal lh-2 mt-3">
                        Tell guests what makes your place unique—share the magic!
                    </p>
                </div>
                <div className="col-6">
                    <div>
                        <textarea
                            name=""
                            id=""
                            className="form-control shadow-none bg-lgrey ex-small"
                            rows="9"
                            placeholder="Type here"
                            value={text}
                            onChange={handleTextChange}
                        ></textarea>
                        <span>{wordCount}/40 words</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyDescription;
