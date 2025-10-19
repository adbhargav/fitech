import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  frequency: { type: String, default: 'monthly' } // weekly/monthly/irregular
});

const incomeSchema = new mongoose.Schema({
  source: { type: String, required: true },  // Salary, Freelance, Business
  amount: { type: Number, required: true },
  frequency: { type: String, default: 'monthly' } // weekly/monthly/irregular
});

const investmentSchema = new mongoose.Schema({
  type: { type: String },     // Stock, Mutual Fund, Crypto
  amount: { type: Number },
  riskLevel: { type: String } // Low, Medium, High
});

const debtSchema = new mongoose.Schema({
  type: { type: String },         // Loan, Credit Card
  amount: { type: Number },
  monthlyPayment: { type: Number }
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },

  incomeSources: [incomeSchema],
  expenses: [expenseSchema],

  savingsGoal: {
    amount: { type: Number, default: 0 },
    deadline: { type: Date }
  },

  investments: [investmentSchema],
  debt: [debtSchema],

  preferences: {
    riskTolerance: { type: String, default: 'Moderate' }, // Conservative/Moderate/Aggressive
    reminderFrequency: { type: String, default: 'Weekly' }
  },

  behaviorPatterns: {
    impulsiveSpending: { type: Boolean, default: false },
    irregularIncome: { type: Boolean, default: false }
  },

  chatHistory: [
    {
      sender: { type: String, enum: ['AI', 'User'] },
      message: String,
      timestamp: { type: Date, default: Date.now }
    }
  ]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
