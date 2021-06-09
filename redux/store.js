import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { fetchData, fetchDataFulfilled, fetchDataRejected } from "./reducer";
import axios from 'axios';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

export default store;

export const getPeople = () => {
    return dispatch => {
        //Dispatch the fetchData action creator before retrieving to set our loading state to true.
        dispatch(fetchData(true));
        //Then get the data.
        axios.get('https://swapi.dev/api/people').then(res => {
            //Set the results to the people array.
            dispatch(fetchDataFulfilled(res.data.results));
            //Error handle the promise and set your errorMessage
        }).catch(err => dispatch(fetchDataRejected(err)));
    }
}
