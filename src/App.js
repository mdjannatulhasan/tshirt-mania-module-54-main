import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import React, { createContext } from 'react';
import OrderReview from './components/OrderReview/OrderReview';
import Grandpa from './components/Grandpa/Grandpa';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import app from './firebase.init';


const auth = getAuth(app);
export const AuthGContext = createContext('authG');

function App() {

    const provider = new GoogleAuthProvider();
    return (
        <AuthGContext.Provider value={[auth, provider]}>
            <div className="App">
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='orderreview' element={<OrderReview></OrderReview>}></Route>
                <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
            </Routes>
        </div>
        </AuthGContext.Provider>
    );
}

export default App;
