import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "./Button";

export default function Header({ title, onAdd, closeBtn }) {
    const { pathname } = useLocation();
    return (
        <header className='header'>
            <h1>{title}</h1>
            {pathname === "/" && (
                <Button
                    color={closeBtn ? "red" : "green"}
                    text={closeBtn ? "Close" : "Add"}
                    onClick={onAdd}
                />
            )}
        </header>
    );
}

Header.defaultProps = {
    title: "Task Tracker",
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};
