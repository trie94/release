import * as React from 'react'
import { Episode, HomeConfig } from '../../appData/HomeConfig'
import EpisodeItem from './episodeitem'
import RightSideBar from './rightsidebar'
const testHomeConfig = require('./../../appData/testHomeConfig.json')

type ContentProps = {
    text: string
}

export default class Content extends React.Component<ContentProps, {}> {

    constructor(props: ContentProps) {
        super(props)
        this.populateEpisodeItems = this.populateEpisodeItems.bind(this)
    }

    render() {
        return (
            <div className="row">
                <div className="main">
                    {this.populateEpisodeItems(testHomeConfig)}
                </div>
                <RightSideBar />
            </div>
        )
    }


    populateEpisodeItems(config: HomeConfig) {
        let counter = 0
        return config.episode_items.map((item: Episode) => {
            counter++
            return < EpisodeItem
                key={item.title + counter}
                title={item.title}
                creatorName={item.creator}
                description={item.description}
                tags={["tag1, tag2"]}
                previewImgUrl={item.previewUrl} />
        })
    }
}
