import React, { useState } from 'react';

function TokenChooser() {
  const [numberOfTokens, setNumberOfTokens] = useState(0);

  const handleChange = (event) => {
    setNumberOfTokens(event.target.value);
  };

  const options = Array.from({ length: 11 }, (_, i) => i * 100).map((num) => {
    return <option key={num} value={num}>{num}</option>;
  });

  return (
      <select id="token-select" value={numberOfTokens} onChange={handleChange}>
        {options}
      </select>
  );
}

export default TokenChooser;