import React, { useState } from "react";
import {motion} from "framer-motion";

// import "../parent.css";
import "./styles/Navigation.css";

interface Position {
    left: number;
    width: number;
    opacity: number;
  }

export const SlideTabContainer = () => {
    return (
        <div className="main-container">
            <SlideTabs />
        </div>
    )
}

const SlideTabs = () => {
    const [position, setPosition] = useState<Position>({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            className="navbar"
        >
            <Tab>About</Tab>
            <Tab>Education</Tab>
            <Tab>Experience</Tab>
            <Tab>Contact</Tab>

            <Cursor position={position}/>
        </ul>
    );
};

interface TabProps {
    children: React.ReactNode;
  }

const Tab = ({ children }: TabProps) => {
    return (
        <li className="tab">
            {children}
        </li>
    );
};

interface CursorProps {
    position: Position;
  }
  

const Cursor = ({position}:CursorProps) => {
    return (
        <motion.li className="cursor"
        animate={{ x: position.left, width: position.width, opacity: position.opacity }}
        />

    )
}

export default SlideTabContainer;
