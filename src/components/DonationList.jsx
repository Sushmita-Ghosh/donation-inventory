import PropTypes from "prop-types";
import { useState } from "react";
import EditDonationModal from "./EditDonationModal";
import "./DonationList.css";

const DonationList = ({
  donations,
  deleteDonation,
  filterDonations,
  filteredDonations,
  setFilteredDonations,
  setDonations,
}) => {
  const [filterType, setFilterType] = useState("");
  const [editingDonation, setEditingDonation] = useState(null);

  const handleFilterChange = (e) => {
    // Update the filterType state with the new value i.e money, clothes , food
    setFilterType(e.target.value);
  };

  const handleFilterByType = () => {
    // Call the filterDonations function passed as prop - we will get the filtered donations
    const filteredDonationsByType = filterDonations(filterType);

    // Update the state of setFilteredDonations
    setFilteredDonations(filteredDonationsByType);
  };

  const handleResetFilter = () => {
    // set the filterType state to empty string
    setFilterType("");
    // Update the state of setFilteredDonations to be the same as donations
    setFilteredDonations(donations);
  };

  const handleEditDonation = (donation) => {
    // once the edit button is clicked, set the editingDonation state to the donation
    setEditingDonation(donation);
  };

  const handleEditFormClose = () => {
    // set the editingDonation state to null when the edit form is closed
    setEditingDonation(null);
  };

  const handleUpdateDonation = (updatedDonation) => {
    filteredDonations.map((donation) => {
      if (donation.id === updatedDonation.id) {
        // Update the donation object
        donation.donorName = updatedDonation.donorName;
        donation.amount = updatedDonation.amount;
        donation.type = updatedDonation.type;
        donation.date = updatedDonation.date;
      }
    });
    // Update the state of setDonations as now
    setDonations(filteredDonations);
    setFilteredDonations(filteredDonations);
  };

  return (
    <div>
      <h2>Donation List</h2>
      <div className="filter-container">
        <label>
          Filter by Type:
          <input type="text" value={filterType} onChange={handleFilterChange} />
        </label>
        <span className="filter-buttons">
          <button onClick={handleFilterByType}>Filter</button>
          <button onClick={handleResetFilter}>Reset Filter</button>
        </span>
      </div>
      <ul>
        {/* Loop through the filteredDonations array and render each donation as a list item */}
        {filteredDonations.map((donation) => (
          <div className="donation-item" key={donation.id}>
            <div className="donation-details">
              <p>
                <strong>Donor: </strong>
                {donation.donorName}
              </p>
              <p>
                <strong>Type: </strong>
                {donation.type}
              </p>
              <p>
                <strong>Amount: </strong>${donation.amount}
              </p>
              <p>
                <strong>Date: </strong>
                {donation.date}
              </p>
            </div>
            <div>
              <button onClick={() => deleteDonation(donation.id)}>
                Delete
              </button>
              <button onClick={() => handleEditDonation(donation)}>Edit</button>
            </div>
          </div>
        ))}
      </ul>

      {/* If editingDonation is not null, render the EditDonationModal */}
      {editingDonation && (
        <EditDonationModal
          donation={editingDonation}
          onClose={handleEditFormClose}
          onUpdateDonation={handleUpdateDonation}
        />
      )}
    </div>
  );
};

DonationList.propTypes = {
  donations: PropTypes.array.isRequired,
  filteredDonations: PropTypes.array.isRequired,
  deleteDonation: PropTypes.func.isRequired,
  filterDonations: PropTypes.func.isRequired,
  setFilteredDonations: PropTypes.func.isRequired,
  setDonations: PropTypes.func.isRequired,
};

export default DonationList;
