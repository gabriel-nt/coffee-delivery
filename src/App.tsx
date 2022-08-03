import { Router } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { CartContextProvider } from './contexts/CartContext';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { OrderContextProvider } from './contexts/OrderContext';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <CartContextProvider>
          <OrderContextProvider>
            <Router />
          </OrderContextProvider>
        </CartContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
