import { useState } from "react";
import DonationForm from "./components/DonationForm";
import DonationList from "./components/DonationList";
import DonationStatistics from "./components/DonationStatistics";
import "./App.css";

const App = () => {
  const [donations, setDonations] = useState([]);
  const [filteredDonations, setFilteredDonations] = useState([]);

  const addDonation = (newDonation) => {
    setDonations([...donations, newDonation]);
    setFilteredDonations([...donations, newDonation]);
  };

  const deleteDonation = (id) => {
    // Filter out the donation with the given id
    const updatedDonations = donations.filter((donation) => donation.id !== id);

    // Update the state of setDonations and setFilteredDonations
    setDonations(updatedDonations);
    setFilteredDonations(updatedDonations);
  };

  const filterDonations = (type) => {
    // Filter  the donations that match the given type
    return filteredDonations.filter((donation) => donation.type === type);
  };

  const calculateTotalAmount = () => {
    // Calculate the total amount of donations in the list
    return donations.reduce(
      (total, donation) => total + Number(donation.amount),
      0
    );
  };

  return (
    <div>
      <h1>Animal Shelter Donation Inventory</h1>
      {/* To add donations */}
      <DonationForm addDonation={addDonation} />

      {/* To display the list of donations and filter them by type */}
      <DonationList
        donations={donations}
        filteredDonations={filteredDonations}
        setFilteredDonations={setFilteredDonations}
        setDonations={setDonations}
        deleteDonation={deleteDonation}
        filterDonations={filterDonations}
      />

      {/* To display the statistics */}
      <DonationStatistics
        totalAmountDonated={calculateTotalAmount}
        totalDonations={donations.length}
      />
    </div>
  );
};

export default App;
