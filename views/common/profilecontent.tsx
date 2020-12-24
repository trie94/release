import * as React from 'react'
import { Episode, HomeConfig } from '../../appData/HomeConfig'
import EpisodeItem from './episodeitem'
import RightSideBar from './rightsidebar'
const testHomeConfig = require('./../../appData/testHomeConfig.json')

type ContentProps = {
    text: string
}

export default class ProfileContent extends React.Component<ContentProps, {}> {

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
