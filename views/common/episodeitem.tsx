import * as React from 'react'

export type EpisodeProps = {
    title: string,
    creatorName: string,
    description: string
    tags: string[],
    previewImgUrl: string
}

export type EpisodeState = {
    subscribe: boolean
    // READ STATE (NONE -> Preview from {episode_number}, READING -> Last read {episode_number})
}

export default class EpisodeItem extends React.Component<EpisodeProps, EpisodeState> {
    constructor(props: EpisodeProps) {
        super(props)
    }

    render() {
        return (
            <div className="episode-container">
                <div className="preview"><img src={this.props.previewImgUrl}></img></div>
                <div className="content">
                    <div className="title">{this.props.title}</div>
                    <div className="description">{this.props.description}</div>
                </div>
            </div>
        )
    }
}
