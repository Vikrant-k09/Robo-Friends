import React, { useState } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots'; 
import './Apps.css';

const Apps = () => {
    const [state, setState] = useState({
        robots: robots,
        searchfield: ''
    });

    const onSearchChange = (event) => {
        setState({ ...state, searchfield: event.target.value });
    }

    const filteredRobots = state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(state.searchfield.toLowerCase());
    });

    return (
        <div className="tc">
            <h1 className='heading'>RoboFriends</h1>
            <SearchBox searchchange={onSearchChange} />
            <CardList robots={filteredRobots} />
        </div>
    );
}

export default Apps;
