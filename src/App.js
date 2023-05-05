import React, { useState } from 'react';
import './assets/styles/App.css';

export default function App() {
  const [inputs, setInputs] = useState({
    text1: '',
    text2: '',
  });
  const [convertedInputs, setConvertedInputs] = useState({
    text1: '',
    text2: '',
  });
  const [checkingMode, setCheckingMode] = useState(false);

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  function check() {
    setCheckingMode(!checkingMode);
    setConvertedInputs({ ...convertedInputs, text1: inputs.text1 });
    let editedText = '';
    convertedInputs.text1 = inputs.text1;
    if (inputs.text1.length >= inputs.text2.length) {
      for (let index = 0; index < inputs.text1.length; index++) {
        if (inputs.text1[index] && inputs.text2[index]) {
          if (
            inputs.text1[index].toLowerCase() !==
            inputs.text2[index].toLowerCase()
          )
            editedText += `<span class="red">${inputs.text2[index]}</span>`;
          else
            editedText += `<span class="green">${inputs.text2[index]}</span>`;
        } else {
          editedText += `<span class="yellow"> </span>`;
        }
      }
    } else {
      for (let index = 0; index < inputs.text2.length; index++) {
        if (inputs.text1[index] && inputs.text2[index]) {
          if (
            inputs.text1[index].toLowerCase() !==
            inputs.text2[index].toLowerCase()
          )
            editedText += `<span class="red">${inputs.text2[index]}</span>`;
          else
            editedText += `<span class="green">${inputs.text2[index]}</span>`;
        } else {
          editedText += `<span class="yellow">${inputs.text2[index]}</span>`;
        }
      }
    }
    if (
      inputs.text1.toLowerCase() == 'haneen' &&
      inputs.text2.toLowerCase() == 'slay queen'
    )
      editedText = '<span class="green">slay queen</span>';
    setConvertedInputs({ ...convertedInputs, text2: editedText });
  }

  return (
    <div className="main">
      <h1>THE HANEENIFIER</h1>
      <div className="inputs">
        <textarea
          name="text1"
          value={inputs.text1}
          onChange={handleChange}
          spellCheck="false"
          className={`${checkingMode && 'hidden'} textarea`}
        />
        <div className={`${!checkingMode && 'hidden'} checked-text`}>
          <pre>{convertedInputs.text1}</pre>
        </div>
        <button className="btn" onClick={check}>
          {checkingMode ? 'EDIT' : 'CHECK'}
        </button>
        <textarea
          name="text2"
          value={inputs.text2}
          onChange={handleChange}
          spellCheck="false"
          className={`${checkingMode && 'hidden'} textarea`}
        />
        <div
          className={`${!checkingMode && 'hidden'} checked-text`}
          dangerouslySetInnerHTML={{
            __html: `<pre>${convertedInputs.text2}</pre>`,
          }}
        ></div>
      </div>
    </div>
  );
}
