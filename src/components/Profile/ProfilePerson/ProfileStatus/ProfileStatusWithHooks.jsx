import React, {useEffect, useRef} from 'react';

import "./ProfileStatus.scss"

import Skeleton from "@material-ui/lab/Skeleton";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";


function useOutsideClick(ref, func) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                func()
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, func]);
}

const EditStatusBlock = (props) => {
    const [isOnce, setOnce] = React.useState(false)
    const wrapperRef = useRef(null)
    useOutsideClick(wrapperRef, props.disableEditMode)


    const handleSaveClick = () => {
        props.onSave(props.curStatus, props.newStatus)
        props.disableEditMode()
    }

    const handleFocus = (e) => {
        if (isOnce) return

        e.target.select();
        setOnce(true)
    }

    return (
        <Paper ref={wrapperRef} id="editStatusBlock" className="editStatusBlock" elevation={5}>
            <Input fullWidth="true"
                   autoFocus="true"
                   multiline="true"
                   value={props.newStatus}
                   onChange={props.onStatusChange}
                   onFocus={handleFocus}
                   inputProps={{'aria-label': 'description'}}
            />

            <button onClick={handleSaveClick}>
                Save
            </button>
        </Paper>
    )
}

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = React.useState(false)
    const [status, setStatus] = React.useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [editMode, props.status])

    const enableEditMode = () => {
        setEditMode(true)
    }

    const disableEditMode = () => {
        setEditMode(false)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    const saveStatus = (curS, newS) => {
        if (newS !== curS) {
            props.updateStatus(newS)
        }
    }

    const statusElement = props.isLoading
        ? <Skeleton variant="text" width={200} height={15}/>
        : <span onClick={enableEditMode}> {props.status || "Edit status..."} </span>


    return (
        <div className="status">
            {editMode ? <EditStatusBlock disableEditMode={disableEditMode}
                                         onStatusChange={onStatusChange}
                                         onSave={saveStatus}
                                         curStatus={props.status}
                                         newStatus={status}
            /> : statusElement}
        </div>

    )
}

export default ProfileStatusWithHooks;