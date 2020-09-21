import React from 'react';
import Skeleton from "@material-ui/lab/Skeleton";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })


        if (this.state.editMode && this.state.status) {
            this.props.updateStatus(this.state.status)
        }

    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.state.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {

        const statusElement = this.props.isLoading
            ? <Skeleton variant="text" width={200} height={15}/>
            : <span onDoubleClick={this.toggleEditMode}> {this.props.status || "Edit status..."} </span>

        const editStatusElement = <input onChange={this.onStatusChange}
                                         autoFocus={true}
                                         onBlur={this.toggleEditMode}
                                         value={this.state.status}
                                         type="text"/>
        return (
            <div className="status">
                {this.state.editMode ? editStatusElement : statusElement}
            </div>
        )
    }
}

export default ProfileStatus;