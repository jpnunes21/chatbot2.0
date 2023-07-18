import React from "react";

import "./LoanOptions.css";

const LoanOptions = (props) => {
  const options = [
    { text: "Do you want to apply for a loan?", handler: props.actionProvider.loanOptions, id: 1 },
    { text: "Loan conditions", handler: props.actionProvider.loanOptions, id: 2 },
    { text: "Help", handler: props.actionProvider.loanOptions, id: 3 }
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="loan-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="loan-options-container">{optionsMarkup}</div>;
};

export default LoanOptions;