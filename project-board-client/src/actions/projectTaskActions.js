import axios from "axios";
import {GET_ERRORS, GET_PROJECT_TASKS, DELETE_PROJECT_TASKS, GET_PROJECT_TASK} from "./types"

export const addProjectTask = (project_task, history) => async dispatch =>{
    try {
        await axios.post("http://localhost:8080/api/board", project_task);
        history.push("/");  
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })  
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        }) 
    }    
}

export const getBackLog = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/board/all");
    dispatch ({
        type: GET_PROJECT_TASKS,
        payload: res.data
    })
}

export const deleteProjectTask = pt_id => async dispatch =>{
    if(window.confirm(
        `Are you sure want to delete this task with id ${pt_id}? \nThis action cannot be undone. `)){
        await axios.delete(`http://localhost:8080/api/board/${pt_id}`)
        dispatch({
            type: DELETE_PROJECT_TASKS,
            payload: pt_id
        })  
    }
    
}

export const getProjectTask = (pt_id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/board/${pt_id}`)
        dispatch({
            type: GET_PROJECT_TASK,
            payload: res.data
        })
    } catch (error) {
        history.push("/");
    }
}

