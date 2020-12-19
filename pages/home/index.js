import React from 'react'
import FollowServiceTestImpl from '../../services/followService/FollowServiceTestImpl.ts'
import testuserdb from '../../servicesTest/followService/testUsers.json'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let followService = new FollowServiceTestImpl(testuserdb)
        console.log(followService.follow("user_id_4", "user_id_1"))
        // console.log(followService.follow("user_id_4", "user_id_2"))
        return (
            <div>
                This is home.
            </div>
        )
    }
}
