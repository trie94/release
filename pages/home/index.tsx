import * as React from 'react'
import followService from '../../services/followService/FollowServiceTestImpl'

export default class Home extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props)
    }

    render() {
        console.log(followService.follow("user_id_4", "user_id_1"))
        // console.log(followService.follow("user_id_4", "user_id_2"))
        return (
            <div>
                This is home.
            </div>
        )
    }
}
