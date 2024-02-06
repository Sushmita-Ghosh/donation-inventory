import PropTypes from "prop-types";
import { useState } from "react";
import "./DonationForm.css";

const DonationForm = ({ addDonation }) => {
  const [donation, setDonation] = useState({
    donorName: "",
    type: "",
    amount: 0,
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonation({ ...donation, [name]: value });
  };

  const handleSubmit = (e) => {
    // prevent default behavior of form submit
    e.preventDefault();

    // validate form - check if all fields are filled
    if (
      !donation.donorName &&
      !donation.type &&
      !donation.amount &&
      !donation.date
    ) {
      // alert user to fill out all fields
      alert("Please fill out all fields");
    } else if (donation.amount <= 0) {
      // alert user to enter a valid amount
      alert("Please enter a valid amount");
    } else {
      // add donation to list with a unique id
      addDonation({ ...donation, id: Math.random() });

      // set to blank once added
      setDonation({
        donorName: "",
        type: "",
        amount: 0,
        date: "",
      });
    }
  };

  return (
    <div>
      <h2>Add Donation</h2>
      <form className="donation-form" onSubmit={handleSubmit}>
        <label>
          Donor&apos;s Name:
          <input
            type="text"
            name="donorName"
            value={donation.donorName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Type of Donation:
          <input
            type="text"
            name="type"
            value={donation.type}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Amount Donated:
          <input
            type="number"
            name="amount"
            value={donation.amount}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Date of Donation:
          <input
            type="date"
            name="date"
            value={donation.date}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Donation</button>
      </form>
    </div>
  );
};

DonationForm.propTypes = {
  addDonation: PropTypes.func.isRequired,
};

export default DonationForm;
