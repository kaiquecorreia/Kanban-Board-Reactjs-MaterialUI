import React from 'react';
// Componente responsável por conectar a store do redux com a aplicação
import { Provider } from 'react-redux';

// Conecta ao reactotron; Ferramenta de debug
import './config/reactotron';
import store from './store';

// Importa o header e a pagina principal (Board) da aplicação
import Header from './components/Header';
import Board from './pages/board';

const App = () => (
  <Provider store={store}>
    <Header />
    <Board />
  </Provider>
);

export default App;
