import * as React from 'react'
import Content from '../../views/common/content'

export default class Mypage extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props)
    }

    render() {
        return (
            <Content text="this is my page" />
        )
    }
}
