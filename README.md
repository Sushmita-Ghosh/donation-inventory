# Animal Shelter Donation Inventory

A simple web application for a local animal shelter to manage their donation inventory.

## Features

- **Donation Input Form:**

  - Users can input details of a donation.
  - Fields include donor's name, type of donation (money, food, clothing, etc.), amount donated, and the date of the donation.

- **Donation List:**

  - Displays a list of recorded donations with their details.
  - Users can edit or delete a donation from the list.
  - Allows users to filter donations based on their type (e.g., money, food, clothing) and see a summary of donations for a specific type.

- **Donation Statistics:**
  - Shows basic statistics of the donations i.e total amount donated and the number of donations.

## Core Functionalities

- Basic validation to prevent empty submissions and errors and if amount < 0.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/Sushmita-Ghosh/donation-inventory.git
   cd donation-inventory
   ```

2. Install dependencies:

```bash
   npm install
```

3. Run the application:

```bash
   npm run dev
```

4. Open your browser and visit http://localhost:5174/ to use the application.

## Screenshots:

## Technologies Used

- React
- CSS
- PropTypes
