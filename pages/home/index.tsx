import * as React from 'react'
// import followService from '../../services/followService/FollowServiceTestImpl'
import followService from '../../services/followService/FollowServiceImpl'
import Content from '../../views/common/content'

export default class Home extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props)
    }

    render() {
        // followService.unfollow("user_id_1", "user_id_2").then((res: boolean) => {
        //     console.log("unfollowed?")
        //     console.log(res)
        // })
        //     .then(() => {
        //         followService.follow("user_id_1", "user_id_2").then((res: boolean) => {
        //             console.log("followed?")
        //             console.log(res)
        //         })
        //     })
        //     .then(() => {
        //         followService.getFollowers("user_id_2").then((res: Promise<string[]>) => {
        //             console.log("followers")
        //             console.log(res)
        //         })
        //     })
        return (
            <Content text="this is main feed">
            </Content>
        )
    }

}
