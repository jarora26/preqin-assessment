# Investor Commitments Application

## Overview

A web application that lists investors and their total commitments. Built with Angular and .NET Core, it presents financial data in a user-friendly format, showing commitments in millions or billions. Utilizes GraphQL and SQLite for efficient data handling.

## Technologies Used

- **Frontend**:
  - **Angular**: A platform for building mobile and desktop web applications.
  - **TypeScript**: A superset of JavaScript that adds static types.
  
- **Backend**:
  - **C#**: The programming language used for developing the backend services.
  - **.NET Core**: A cross-platform framework for building modern, cloud-based applications.
  - **GraphQL**: A query language for your API that allows clients to request exactly the data they need.
  - **Apollo Client**: A powerful GraphQL client for managing data and state in your Angular application.

- **Database**:
  - **SQLite**: A lightweight database engine used for storing data.
  - **Dapper**: A simple object mapper for .NET that helps with database operations.

## Features

- Lists all investors along with their total commitments.
- Commitments are formatted for readability (e.g., in millions or billions).
- Responsive design that works on various devices.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jarora26/preqin-assessment.git
   cd PreqinAsessment

2. Frontend Setup:

Navigate to the frontend directory and install dependencies:
bash
Copy code
cd preqin-investor-client-app
npm install

3. Backend Setup:

Navigate to the backend directory and restore dependencies:
bash
Copy code
cd Preqin.Assessment
dotnet restore

4. Run the Application:

Start the backend server:
bash
Copy code
dotnet run
In another terminal, navigate to the frontend directory and start the Angular application:
bash
Copy code
ng serve
Open your browser and navigate to http://localhost:4200 to view the application.



Usage
The application displays a list of investors and their commitments.
You can view the total commitments formatted in a user-friendly way.


Contributing
Contributions are welcome! If you have suggestions for improvements or find bugs, please open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Acknowledgments
Thank you to the communities behind Angular, .NET, GraphQL, and all the other technologies used in this project.
