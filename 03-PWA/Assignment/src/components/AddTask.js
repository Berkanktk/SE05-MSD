import React, {useState} from 'react'
import { DatePicker } from '@mantine/dates';
import '../App.css';
import {TextInput, Button, Checkbox} from "@mantine/core";


const AddTask = ({ onAdd }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [day, setDay] = useState();
    const [prioritize, setPrioritize] = useState(false)

    const onSubmit = (e) => {
        
        if (!title || !description || !day) {
            alert('Please fill in the required fields.')
            return
        }

        // Formatting date
        const date = day.toDateString();

        // Passing the data to the onAdd method
        onAdd({ title, description, date, prioritize })

        // Clearing the inputs
        setTitle('')
        setDescription('')
        setDay(null)
        setPrioritize(false)
    }

    return (
        <header className='header'>
            <div className="formFrame">
                <form className='addForm'>

                    <h3>Add new Task</h3>

                    <div className="formItem">

                        <TextInput
                            placeholder="E.x Walk the dog"
                            label="Title"
                            radius="md"
                            withAsterisk
                            value={title}
                            styles={{label: {color: "white"}}}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="formItem">
                        <TextInput
                            placeholder="E.x Take a walk at the park for 15 minutes."
                            label="Description"
                            radius="md"
                            withAsterisk
                            value={description}
                            styles={{label: {color: "white"}}}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="formItem">
                        <DatePicker placeholder="Pick date"
                                    label="Date"
                                    withAsterisk
                                    styles={{label: {color: "white"}}}
                                    value={day}
                                    onChange={setDay}
                        />
                    </div>

                    <div className="formItem">
                        <Checkbox
                            label="Priority"
                            color="yellow"
                            styles={{label: {color: "white"}}}
                            checked={prioritize}
                            value={prioritize}
                            onChange={(e) => setPrioritize(e.currentTarget.checked)}
                        />
                    </div>

                    <div className="formItem submitBtn">
                        <Button color="green" onClick={() => onSubmit()}>
                            Submit
                        </Button>
                    </div>

                </form>

            </div>
        </header>
    )
}

export default AddTask