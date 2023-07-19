import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LinkList from "./components/LinkList/LinkList";
import Login from "./components/Login/Login";

const config = {
initialMessages: [
    createChatBotMessage("Hi, I'm here to help.")
  ],
  state: {
    continueConversation: false
  },
  widgets: [
      {
        widgetName: "loanLinks",
        props: {
          options: [
            {
              text: "Do you want to apply for a loan?",
              url:
                "https://www.investopedia.com/articles/personal-finance/010516/how-apply-personal-loan.asp",
              id: 1,
            },
            {
              text: "Loan conditions",
              url:
                "https://www.investopedia.com/loan-terms-5075341",
              id: 2,
            },
            {
              text: "Help",
              url: "https://www.investopedia.com/terms/l/loan.asp",
              id: 3,
            },
          ],
        },
        widgetFunc: (props) => <LinkList {...props} />,
      },
      {
        widgetName: "loginWidget",
        widgetFunc: (props) => <Login {...props} />,
        mapStateToProps: ["continueConversation"]
      }
 ],
}

export default config;