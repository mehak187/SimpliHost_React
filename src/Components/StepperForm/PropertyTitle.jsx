import React, { useState } from "react";

function PropertyTitle() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (event) => {
    const inputText = event.target.value;

    const words = inputText.trim().split(/\s+/).filter(Boolean);
    const wordLength = words.length;

    if (wordLength <= 40) {
      setText(inputText);
      setWordCount(wordLength);
    }
  };

  return (
    <div className="container pt-5 pb-4">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div>
            <p className="bg-lgrey rounded-pill py-2 px-4 max fw-semi border">
              Step 07
            </p>
          </div>
          <h2 className="step-font">Let’s Give Your Place a Catchy Title!</h2>
          <p className="fw-normal lh-2 mt-3">
            Keep it short and sweet—you can always spice it up later!
          </p>
        </div>
        <div className="col-lg-6">
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

export default PropertyTitle;
