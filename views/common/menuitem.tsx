import * as React from 'react'
import { Link } from "react-router-dom"
import { MenuEnum } from './navigation'

type MenuProps = {
    text: string,
    linkTo: string,
    menuEnum: MenuEnum,
    currentMenu: MenuEnum,
    onClickCallback: (menu: MenuEnum) => void
}

export default class MenuItem extends React.Component<MenuProps, {}> {

    constructor(props: MenuProps) {
        super(props)
    }

    render() {
        return (
            <div className="item" onClick={() => this.props.onClickCallback(this.props.menuEnum)}>
                <Link to={this.props.linkTo} className={this.props.menuEnum == this.props.currentMenu ? "item item-active" : "item item-notactive"}>
                    {this.props.text}
                </Link>
            </div >
        )
    }
}
