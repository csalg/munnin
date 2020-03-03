import React from 'react';
import './styles.scss';
import LinkWithIconAndName from '../../../../common/components/LinkWithIconAndName';
import {LibraryBooks} from 'styled-icons/material'
import {SettingsInputComponent} from 'styled-icons/material/SettingsInputComponent'
import {DocumentAdd} from 'styled-icons/heroicons-outline/DocumentAdd'
import {PuzzlePiece} from 'styled-icons/fa-solid/PuzzlePiece'
import { BrowserRouter } from "react-router-dom";

const Navigation = () => {
    return (
      <div className="navigation">
        <SectionLink href="/library" icon={LibraryBooks} name="Library [l]" ></SectionLink>
        <SectionLink href="add" icon={DocumentAdd} name="Add [a]"></SectionLink>
        {/* <SectionLink icon={SettingsInputComponent} name="Settings [s]"></SectionLink> */}
        {/* <SectionLink icon={PuzzlePiece} name="Extensions [e]"></SectionLink> */}
      </div>
    )
  }
  
const SectionLink = ({name, icon, href}) => {
    return <LinkWithIconAndName href={href} containerClass="section-link" icon={icon} iconSize="1rem" name={name}></LinkWithIconAndName>
}

export default Navigation;