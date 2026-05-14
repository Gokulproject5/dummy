import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InputGroup from "./formCompontents/inputGroup";

const Form = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = Boolean(id);

    const [formData, setFormData] = useState({
        original_title: "",
        poster_path: "",
        original_language: "",
        release_date: "",
    });

    useEffect(() => {
        if (id) {
            fetch(`https://mimic-server-api.vercel.app/movies/${id}`)
                .then((res) => res.json())
                .then((data) => setFormData(data))
                .catch((err) => console.error("Fetch error:", err));
        }
    }, [id]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = isEditing
            ? `https://mimic-server-api.vercel.app/movies/${id}`
            : "https://mimic-server-api.vercel.app/movies";

        fetch(url, {
            method: isEditing ? "PUT" : "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then(() => {
                alert(isEditing ? "Updated!" : "Added!");
                navigate("/");
            })
            .catch((err) => alert("Submit error: " + err));
    };

    return (
        <div className="bg-gray-300 max-w-xl px-4 py-6 mx-auto my-10 rounded-lg">
            <h1 className="text-2xl font-bold text-purple-500 italic text-center underline mb-4">
                {isEditing ? "Edit Movie" : "Add Movie"}
            </h1>
            <div className="space-y-4">
                <InputGroup
                    label="Movie"
                    name="original_title"
                    value={formData.original_title}
                    onChange={handleInput}
                    placeholder={"Enter a Movie name..."}
                />
                <InputGroup
                    label="Image URL"
                    name="poster_path"
                    value={formData.poster_path}
                    onChange={handleInput}
                    placeholder={"Enter a Valid Image Url..."}
                />
                <InputGroup
                    label="Language"
                    name="original_language"
                    value={formData.original_language}
                    onChange={handleInput}
                    placeholder={"Enter a Language..."}
                />
                <InputGroup
                    label="Release Date"
                    name="release_date"
                    type="date"
                    value={formData.release_date}
                    onChange={handleInput}
                    placeholder={"Enter a Release Data..."}
                />
            </div>
            <button
                onClick={handleSubmit}
                className="w-full mt-6 bg-purple-500 text-white font-bold py-2 rounded-lg hover:bg-purple-600 transition-transform active:scale-95"
            >
                {isEditing ? "SAVE CHANGES" : "ADD MOVIE"}
            </button>
        </div>
    );
};

export default Form;
