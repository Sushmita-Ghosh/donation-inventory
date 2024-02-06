import { useState } from "react";
import PropTypes from "prop-types";
import "./EditDonationModal.css";

const EditDonationModal = ({ donation, onClose, onUpdateDonation }) => {
  const [editedDonation, setEditedDonation] = useState({ ...donation });

  const handleChange = (e) => {
    // Get the name and value of the input field
    const { name, value } = e.target;
    // Update the editedDonation state with the new value
    setEditedDonation({ ...editedDonation, [name]: value });
  };

  const handleUpdateDonation = () => {
    // Call the onUpdateDonation function passed as prop
    onUpdateDonation(editedDonation);
    onClose(); // Close the edit form
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Donation</h2>
        <form className="edit-donation-form">
          <label>
            Donor&apos;s Name:
            <input
              type="text"
              name="donorName"
              value={editedDonation.donorName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Type of Donation:
            <input
              type="text"
              name="type"
              value={editedDonation.type}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Amount Donated:
            <input
              type="number"
              name="amount"
              value={editedDonation.amount}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Date of Donation:
            <input
              type="date"
              name="date"
              value={editedDonation.date}
              onChange={handleChange}
            />
          </label>
          <div>
            <button type="button" onClick={handleUpdateDonation}>
              Update Donation
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

EditDonationModal.propTypes = {
  donation: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onUpdateDonation: PropTypes.func.isRequired,
};

export default EditDonationModal;
