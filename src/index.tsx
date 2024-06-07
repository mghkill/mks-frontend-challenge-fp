import React from "react";
import App from "./App.tsx";
import GlobalStyles from "./GlobalStyles.ts";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const root = document.getElementById("root");
if (!root) {
  throw new Error("Could not find root element!");
}

const rootInstance = createRoot(root);

const render = () => {
  rootInstance.render(
    <React.StrictMode>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  );
};

render();
