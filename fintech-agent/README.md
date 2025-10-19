# FinTech Personal Finance Assistant

A comprehensive personal finance management application that helps users track their income, expenses, savings goals, investments, and debt while providing AI-powered financial advice.

## Features

- **User Management**: Email-based user identification and data storage
- **Financial Data Tracking**: Track income sources, expenses, savings goals, investments, and debt
- **AI-Powered Financial Advice**: Get personalized financial recommendations based on your data
- **Transaction Import**: Import transaction data from tab-separated files
- **Interactive Chat**: Chat with an AI financial assistant for personalized advice
- **Data Visualization**: Visualize your financial data with charts
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

### Frontend
- React.js with Vite
- Tailwind CSS for styling
- Axios for API requests
- Recharts for data visualization

### Backend
- Node.js with Express.js
- MongoDB with Mongoose for data storage
- dotenv for environment configuration

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database (local or cloud)

### Installation

1. Clone the repository
2. Install backend dependencies:
   ```bash
   cd server
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd fintech-agent
   npm install
   ```

### Configuration

1. Create a `.env` file in the `server` directory with the following variables:
   ```
   PORT=5001
   MONGO_URI=your_mongodb_connection_string
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd server
   npm start
   ```
2. Start the frontend development server:
   ```bash
   cd fintech-agent
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:5174`

## API Endpoints

### User Management
- `POST /api/users` - Create a new user
- `GET /api/users/:email` - Get user data by email
- `PUT /api/users/update/:email` - Update user financial data

### Financial Advice
- `GET /api/users/advice/:email` - Get AI financial advice
- `POST /api/ai/contextual` - Get contextual AI advice based on user message

### Transactions
- `POST /api/users/import-transactions` - Import transaction data
- `GET /api/users/analysis/:email` - Get transaction analysis

### Chat
- `POST /api/users/chat/:email` - Save chat messages
- `POST /api/chat` - Simple chat endpoint

## Usage

1. Enter your email to create an account or log in
2. Fill in your financial information using the "Update Your Financial Information" form
3. Import transaction data using the "Import Transaction Data" section
4. Chat with the AI financial assistant for personalized advice
5. View your financial overview in the charts section

## Key Components

- **FinancialDataForm**: Form for entering income, expenses, savings goals, investments, and debt
- **TransactionImport**: Component for importing transaction data
- **ChatWindow**: Interactive chat interface with AI financial assistant
- **ChartDisplay**: Visual representation of financial data
- **UserContext**: Centralized user state management

## Data Model

The application stores user data in MongoDB with the following structure:
- Email (unique identifier)
- Name
- Income sources
- Expenses
- Savings goals
- Investments
- Debt
- User preferences
- Behavior patterns
- Chat history

## AI Advice System

The AI advice system provides personalized financial recommendations based on:
- Income vs. expenses analysis
- Savings goal feasibility
- Investment opportunities
- Debt management strategies
- Emergency fund recommendations
- Spending patterns

## Contributing

This project was built for HackMumbai hackathon. Feel free to fork and extend the functionality.

## License

This project is licensed under the MIT License.
