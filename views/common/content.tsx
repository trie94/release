import * as React from 'react'
import RightSideBar from './rightsidebar'

type ContentProps = {
    text: string
}

export default class Content extends React.Component<ContentProps, {}> {

    constructor(props: ContentProps) {
        super(props)
    }

    render() {
        return (
            <div className="row">
                <div className="main">
                    {this.props.text}
                </div>
                <RightSideBar />
            </div>
        )
    }
}
