import { useState } from "react";
import Modal from "react-modal";
import css from "./Contact.module.css";
import { IoCallSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";

Modal.setAppElement("#root");

const Contact = ({ name, number, id }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openEditModal = () => {
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
  };

  const confirmDelete = () => {
    dispatch(deleteContact(id));
    closeModal();
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleUpdate = () => {
    dispatch(updateContact({ id, name: newName, number: newNumber }));
    closeEditModal();
  };

  return (
    <li className={css.contactList}>
      <div className={css.contactContainer}>
        <p className={css.contactText}>
          <FaUser size={20} />
          {name}
        </p>
        <p className={css.contactText}>
          <IoCallSharp size={20} />
          {number}
        </p>
      </div>
      <button onClick={openModal}>Delete</button>
      <button onClick={openEditModal}>Edit</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm Delete"
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <h2 className={css.question}>
          Are you sure you want to delete this contact?
        </h2>
        <div className={css.buttonContainer}>
          <button onClick={closeModal} className={css.cancelButton}>
            No
          </button>
          <button onClick={confirmDelete} className={css.confirmButton}>
            Yes
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeEditModal}
        contentLabel="Edit Contact"
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <h2 className={css.question}>Edit Contact</h2>
        <div className={css.editForm}>
          <label className={css.label}>
            Name:
            <input
              type="text"
              value={newName}
              onChange={handleNameChange}
              className={css.input}
            />
          </label>
          <label className={css.label}>
            Number:
            <input
              type="text"
              value={newNumber}
              onChange={handleNumberChange}
              className={css.input}
            />
          </label>
        </div>
        <div className={css.buttonContainer}>
          <button onClick={closeEditModal} className={css.cancelButton}>
            Cancel
          </button>
          <button onClick={handleUpdate} className={css.confirmButton}>
            Save
          </button>
        </div>
      </Modal>
    </li>
  );
};

export default Contact;
