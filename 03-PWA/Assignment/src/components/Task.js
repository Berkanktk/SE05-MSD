import React from 'react'
import '../App.css';
import { Button } from '@mantine/core';
import { IonIcon} from '@ionic/react'
import { star } from "ionicons/icons";

const Task = ({ task, onDelete}) => {

    return (
        <div className="tasks">
            <div className="task">
                <div className="wrapper">

                    <div className="content">
                        {task.prioritize ?
                            <h3 style={{color: "gold"}}>{task.title} <IonIcon icon={star}/></h3>
                            :
                            <h3>{task.title}</h3>}
                        <p>{task.description}</p>
                        <p>{task.date}</p>
                    </div>

                    <div>
                        <Button color="red" onClick={() => onDelete(task.id)}>Remove</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Task