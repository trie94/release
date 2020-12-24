import * as React from 'react'
// import followService from '../../services/followService/FollowServiceTestImpl'
import followService from '../../services/followService/FollowServiceImpl'
import Content from '../../views/common/content'

export default class Home extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props)
    }

    render() {
        // let followers: string[] = []

        // followService.getFollowers("user_id_3", (res) => {
        //     followers = res
        // }).then(() => {
        //     let result = followService.follow("user_id_4", "user_id_1")
        //     console.log(result)
        // })

        return (
            <Content text="this is main feed">
            </Content>
        )
    }

}
