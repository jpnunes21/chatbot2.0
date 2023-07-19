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

    state = {
        conversation: false,
    }

    getUserNameAndPassword() {
        const message = this.createChatBotMessage("Please, tell me your username and password:",
            {
                widget: "loginWidget",
            }
        );
        this.updateChatbotState(message);
    }

    continueConversation(name) {
        const message = this.createChatBotMessage(`Hello, ${name}! How can i help you?`)
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message],
            continueConversation: true
        }))
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