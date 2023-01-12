import React from 'react'
import {Button} from "@mantine/core";
import '../App.css';

const Header = ({ onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>TO-DO List Tracker</h1>
            <p className='subHeader'>Organize your life with the use of this simple task tracker!.</p>

            {!showAdd ?
                <Button color="blue" onClick={onAdd}>Add Task</Button>
                :
                <Button color="red" onClick={onAdd}>Close</Button>}

        </header>
    )
}

export default Header