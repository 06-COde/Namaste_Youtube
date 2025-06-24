
import './App.css'
import Body from './components/Body';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Head from './components/Head';
import store from './utils/store';
import { Provider } from 'react-redux';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Memo from './components/Memo';
import Demo2 from './components/Demo2';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/memo",
        element : <>
              <Memo/>
              <Demo2/>
        </>,
      }
    ],
  },
]);


function App() {
  

  return (
    <Provider store = {store}>
      <div>
          <Head/> 
          <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  )
}

export default App;
