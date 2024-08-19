# 🚗 **Car Dealer App** 🚗

Welcome to **Car Dealer App**! This project is an application that allows you to view vehicle models from a specific manufacturer and year using the NHTSA (National Highway Traffic Safety Administration) API.

## 🛠️ **What Was Done**

- **API Integration**: Implemented a call to the NHTSA API to fetch vehicle models based on the provided manufacturer and year.
- **Model Listing**: Displayed vehicle models in an organized and styled list.
- **Error Handling and Loading State**: Added messages to show loading states and errors, ensuring a better user experience.
- **Responsive Design**: Used Tailwind CSS to create a clean and responsive interface.

## 🚀 **What Was Implemented**

### 📜 **Features**

- **Model Search**: Allows searching for vehicle models by manufacturer and year.
- **Data Display**: Lists the found models in an easy-to-read format.
- **Error Handling**: Clear messages when no models are found or when there is an error with the request.

### 🧩 **Technologies and Tools Used**

- **React**: Main library for building the user interface.
- **Tailwind CSS**: CSS framework for responsive styling.
- **TypeScript**: Added for safer typing and more robust development.

## 🚀 **How to Run the Project**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yoshi00/car-dealer-app.git
   cd car-dealer-app

   ```

2. **Install Dependencies**

   Ensure you have Node.js installed. Then, run:

   ```bash
   npm install
   ```

3. **Run the Application**

   After installing dependencies, start the development server:

   ```bash
   npm run dev
   ```

4. **Open the Browser**

   Open your browser and go to http://localhost:3000 to see the application in action.

## 📄 How to Use

1. **Choose a Car** - Select a car from the dropdown menu.
2. **Choose a Date** - Select a date from the dropdown menu.
3. **Navigate to Result Page** - Click the "Next" button to navigate to the result page in the URL format, replace makeId and years with the desired values:

   ```bash
    http://localhost:3000/resultpage/{makeId}/{years}
   ```

   Example:

   ```bash
    http://localhost:3000/resultpage/460/2021
   ```

4. **View the Models**

   The page will display a list of vehicle models available for the specified manufacturer and year.
