import React, { useState } from "react";

const models = ["davinci", "curie", "babbage", "jules", "ada"];
const modelKey = {"davinci": "text-davinci-002", "curie":"text-curie-002", "babbage":"text-babbage-002"}

function ModelSelector({ onModelChange }) {
  const [selectedModel, setSelectedModel] = useState("davinci");

  function handleModelChange(e) {
    setSelectedModel(e.target.value);
    onModelChange(e.target.value);
  }

  return (
    <select value={selectedModel} onChange={handleModelChange}>
      {models.map(model => (
        <option key={model} value={model}>
          {model}
        </option>
      ))}
    </select>
  );
}

export default ModelSelector;