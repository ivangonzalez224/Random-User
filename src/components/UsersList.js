/* eslint-disable react/jsx-props-no-spreading */
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/users/usersSlice';

const UsersList = () => {
    const dispatch = useDispatch();
    const { userItems, isLoading, error } = useSelector((store) => store.users);
     
    useEffect(() => {
        dispatch(fetchUsers());
    },[dispatch]);

    return (
      <ul className="userList_container">
        {userItems.map((user) => (
            <li key={user.login.uuid} className="userList_item">
                <span>{user.name.first}</span>
                <span>{user.name.last}</span>
            </li>
        ))}
      </ul>
    );
  };
  
  export default UsersList;