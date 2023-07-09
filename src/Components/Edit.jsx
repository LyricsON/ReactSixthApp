import React, { useState } from "react";

import Modal from "react-modal";
import StarRating from "./StarRating";
const EditMovie = ({ handleEditMovie, film }) => {
  const [name, setName] = useState(film.name);
  const [image, setImage] = useState(film.image);
  const [date, setDate] = useState(film.date);
  const [rating, setRating] = useState(film.rating);
  const handleRating = (x) => setRating(x);
  const handleSubmit = () => {
    const newElement = {
      id: film.id,
      image,
      date,
      rating,
      name,
    };
    handleEditMovie(newElement);
    closeModal();
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement("#root");

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal} className="btn">
        Edit
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <h2>Edit Movie</h2>
          <label>Movie Title</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Movie Poster</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <StarRating rateFilter={rating} handleRateFilter={handleRating} />
          <label>Movie Date</label>
          <input
            type="text"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            required
          />
          <div>
            <button className="btn" type="submit">
              {" "}
              Edit
            </button>
            <button className="btn" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditMovie;
