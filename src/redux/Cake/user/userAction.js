import {
    FETCH_USERS_FALIURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS
} from './userTypes';

import axios from 'axios';

export const fetchUsersRequest=()=>{
    return {
        type:FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess =users=>{
    return {
      type:FETCH_USERS_SUCCESS,
      payload:users
    }

}

export const fetchUsersFailure=error=>{
    return {
        type:FETCH_USERS_FALIURE,
        payload:error
    }
}

export const fetchUsers=()=>{
    return (disptch)=>{
        disptch(fetchUsersRequest);
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response=>{
               const users=response.data
               disptch(fetchUsersSuccess(users))
      }).catch(error=>{
        const errorMsg= error.message
        disptch(fetchUsersFailure(errorMsg))
      })
    }
}