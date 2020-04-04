import React, { Component } from 'react'
import AdminScheduleDisplay from '../Schedule/admin_schedule_display';

export class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                {/* Body Div */}
                <AdminScheduleDisplay />
                {/* Body End */}
            </div>
        )
    }
}

export default AdminDashboard;
