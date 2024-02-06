// DonationStatistics.js
import PropTypes from "prop-types";

const DonationStatistics = ({ totalAmountDonated, totalDonations }) => {
  return (
    <div>
      <h2>Donation Statistics</h2>
      <p>Total Amount Donated: ${totalAmountDonated()}</p>
      <p>Total Donations: {totalDonations}</p>
    </div>
  );
};

DonationStatistics.propTypes = {
  totalAmountDonated: PropTypes.number.isRequired,
  totalDonations: PropTypes.number.isRequired,
};

export default DonationStatistics;
