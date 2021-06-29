import { Provider } from 'react-redux';

import { store } from 'src/redux/store';

import AppForm from "components/AppForm";

function App() {
  return (
   <Provider store={store}>
       <div className="App">
           <AppForm/>
       </div>
   </Provider>
  );
}

export default App;
