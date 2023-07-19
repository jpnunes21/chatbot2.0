class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("good,") || lowerCaseMessage.includes("i want"))
        {
            this.actionProvider.getUserNameAndPassword()
        }

        if (lowerCaseMessage.includes("loan"))
        {
            this.actionProvider.loanOptions()
        }

        if (lowerCaseMessage.includes("goodbye"))
        {
            this.actionProvider.goodBye(this.state)
        }
    }
}

export default MessageParser;