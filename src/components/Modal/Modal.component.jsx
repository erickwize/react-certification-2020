import React from 'react';
import ReactDOM from 'react-dom';

export const Modal = ({ children, el = 'div' }) => {
    const [container] = React.useState(document.createElement(el));
  
    React.useEffect(() => {
        const root = document.getElementById("root");
        root.appendChild(container)
        return () => {
            root.removeChild(container)
        }
    }, [container])
  
    return ReactDOM.createPortal(children, container)
}
  