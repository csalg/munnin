import React from 'react';
import './styles.scss';
import LinkWithIconAndName from '../../../../common/components/LinkWithIconAndName'

import {PlayVideo} from 'styled-icons/foundation/PlayVideo'
import {Settings} from 'styled-icons/material/Settings'
import {FileText} from 'styled-icons/icomoon/FileText'
import {Brain} from 'styled-icons/fa-solid/Brain'
import {Edit} from 'styled-icons/boxicons-regular/Edit'


class Navigation extends React.Component {

    render () {
        return (
            <div className="reader-nav">
                <ReaderTab additionalClass="reader-tab-active" href="read" icon={FileText} name="Read Text [r]" />
                <ReaderTab icon={Edit} name="Edit Text [e]" />
                <ReaderTab icon={Brain} name="Study [s]" />
                <ReaderTab icon={PlayVideo} name="Play video [v]" />
                <ReaderTab icon={Settings} name="Text options [o]" />
            </div>
        )
    }
}

const ReaderTab = ({icon,name, href, additionalClass}) => {
    return <LinkWithIconAndName containerClass={"reader-tab " + additionalClass} href={href} icon={icon} iconSize="0.8rem" name={name}></LinkWithIconAndName>
  }

export default Navigation;

