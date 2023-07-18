import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ConversationData from "./pages/ConversationHistory";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route Component={ConversationData} path="/data" />
        </BrowserRouter>
    )
}

export default Routes;