import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import ThirdWeb
//import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// Render the App component to the DOM

const supported_chains = [1, 4, 137];

const connectors = {
  injected: {},
  magic: {
    apiKey: "pk_live_402D667EF9A4ADFF", // Your magic api key
    chainId: 1, // The chain ID you want to allow on magic
  },
};

ReactDOM.render(
  <ThirdwebProvider
      connectors={connectors}
      supportedChainIds={supported_chains}>
      <App />
  </ThirdwebProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
