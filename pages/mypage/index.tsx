import * as React from 'react'
import ProfileContent from '../../views/common/profilecontent'

export default class Mypage extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props)
    }

    render() {
        return (
            <ProfileContent text="this is my page" />
        )
    }
}
