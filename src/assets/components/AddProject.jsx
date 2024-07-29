import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

export default function AddProject() {
    const newProjectDiv = useRef(null);
    const [formData, setFormData] = useState({
        project: "",
        description: "",
        date: "",
    });
    const addIcon = (
        <FontAwesomeIcon
            className="add-project-container--icon"
            icon={faSquarePlus}
        />
    );

    const xIcon = <FontAwesomeIcon icon={faXmark} className="close-icon" />;

    const handleNewProjectClick = () => {
        if (newProjectDiv.current) {
            newProjectDiv.current.classList.add("hidden");
        }
    };

    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
        console.log(formData.project);
    };

    return (
        <div className="add-project-container">
            <div
                ref={newProjectDiv}
                className="add-project-container--button visible"
            >
                <button
                    type="button"
                    className="new-button"
                    onClick={handleNewProjectClick}
                >
                    {addIcon}Add Project
                </button>
            </div>
            <div className="add-new-project--container">
                <div className="add-new-project--item project-container">
                    <label htmlFor="project">
                        <input
                            type="text"
                            placeholder="Project"
                            name="project"
                            className="new-project-input"
                            onChange={handleFormData}
                            value={formData.project}
                        />
                    </label>
                    <button type="button" className="close-button">
                        {xIcon}
                    </button>
                </div>
                <div className="add-new-project--item description-container">
                    <label htmlFor="description">
                        <input
                            type="text"
                            placeholder="Description"
                            name="description"
                            className="new-project-input"
                            onChange={handleFormData}
                            value={formData.description}
                        />
                    </label>
                    <button type="button" className="close-button">
                        {xIcon}
                    </button>
                </div>
                <button type="submit" className="add-button">
                    Add
                </button>
                <button type="button" className="cancel-button">
                    Cancel
                </button>
            </div>
        </div>
    );
}
