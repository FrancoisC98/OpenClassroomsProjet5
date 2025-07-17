import { useState } from "react";
import "../styles/Collapse.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

function Collapse({ title, content}) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

return (
    <div className="collapse">
        <div className="collapse-header" onClick={toggleCollapse}>
            <h3>{title}</h3>
            <FontAwesomeIcon icon={faChevronUp} className={`arrow ${isOpen ? "open" : ""}`} 
                />
        </div>
    

    {isOpen && (
        <div className="collapse-content">
            {Array.isArray(content) ? (
                content.map ((item, index) => <p key={index}>{item}</p>)
            ) : (
                <p>{content}</p>
            )}
        </div>
    )}
    </div>
);
}

export default Collapse