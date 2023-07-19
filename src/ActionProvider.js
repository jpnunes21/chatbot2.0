class ActionProvider {
    constructor(
        createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
        ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Please, tell me your username.")
        this.updateChatbotState(greetingMessage)
        this.getUserNameAndPassword()
    }

    getUserNameAndPassword() {
        const message = this.createChatBotMessage("User:",
            {
                widget: "loginWidget",
            }
        );
        this.updateChatbotState(message);
    }

    continueConversation(name) {
        this.stateRef.userName = name
        this.stateRef.continueConversation = true
        const message = this.createChatBotMessage(`Hello, ${name}! How can i help you?`)
        this.updateChatbotState(message);
    }

    goodBye(state) {
        const goodByeMessage = this.createChatBotMessage("Goodbye!")

        let actualDate = Date.now();
        let csv = actualDate + ', type, message\n';

        state.messages.forEach((row) => {
            csv += row.type;
            csv += ','+ row.message;
            csv += '\n';
        });

        localStorage.setItem('chat_messages', JSON.stringify(csv));

        this.updateChatbotState(goodByeMessage)
    }

    loanOptions() {
        if (this.stateRef.continueConversation) {
            const message = this.createChatBotMessage("Do you need help with loans? Here is some links that may help:",
                {
                    widget: "loanLinks",
                }
            );
            this.updateChatbotState(message);
        }
    };

    updateChatbotState(message) {
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider;