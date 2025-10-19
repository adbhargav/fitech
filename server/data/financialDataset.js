// Predefined dataset of financial questions and expert responses
export const financialDataset = [
  {
    category: "budgeting",
    questions: [
      "how to create a budget",
      "budget planning",
      "monthly budget",
      "budget management",
      "personal budget",
      "budget tracker",
      "budget app"
    ],
    response: `Creating a budget is fundamental to financial health. Here's a step-by-step approach:

1. Calculate your total monthly income from all sources
2. List all fixed expenses (rent, utilities, insurance, minimum debt payments)
3. List variable expenses (groceries, entertainment, dining out)
4. Set savings goals (emergency fund, retirement, specific targets)
5. Allocate remaining funds to discretionary spending
6. Track your spending throughout the month
7. Adjust your budget as needed based on actual spending

A good rule of thumb is the 50/30/20 rule:
- 50% for needs (rent, utilities, groceries)
- 30% for wants (entertainment, dining out)
- 20% for savings and debt repayment

Budgeting tools:
- Apps: Mint, YNAB (You Need A Budget), PocketGuard
- Spreadsheets: Custom Google Sheets or Excel templates
- Pen and paper: Simple but effective method`
  },
  {
    category: "emergency fund",
    questions: [
      "emergency fund",
      "emergency savings",
      "rainy day fund",
      "financial safety net",
      "emergency expenses"
    ],
    response: `An emergency fund is crucial for financial stability. Here's what you need to know:

1. Target amount: 3-6 months of essential expenses
2. Start small: Even $500-$1,000 can cover minor emergencies
3. Keep it liquid: Store in a high-yield savings account for easy access
4. Separate account: Keep it distinct from regular savings
5. Replenish after use: If you use it, prioritize rebuilding it

An emergency fund protects you from:
- Unexpected medical expenses
- Job loss
- Car repairs
- Home maintenance issues
- Other unforeseen costs

Avoid using it for planned expenses like vacations or holiday gifts.

Where to keep your emergency fund:
- High-yield savings account (currently 4-5% APY)
- Money market account
- Short-term CDs (Certificates of Deposit)
- I Bonds (inflation-protected savings bonds)`
  },
  {
    category: "debt management",
    questions: [
      "pay off debt",
      "debt reduction",
      "credit card debt",
      "student loans",
      "debt repayment",
      "debt consolidation",
      "get out of debt"
    ],
    response: `Effective debt management strategies include:

1. List all debts with balances and interest rates
2. Choose a repayment strategy:
   - Debt Snowball: Pay minimums on all debts, extra on smallest balance
   - Debt Avalanche: Pay minimums on all debts, extra on highest interest rate
3. Consider consolidation or refinancing for high-interest debts
4. Negotiate lower interest rates with creditors
5. Avoid taking on new debt while repaying existing debt

Prioritize high-interest debt (credit cards) over low-interest debt (student loans, mortgages). Making more than minimum payments significantly reduces the time and interest paid.

Debt repayment methods:
- Snowball method: Quick wins build momentum
- Avalanche method: Mathematically optimal, saves more money
- Debt consolidation: Single payment at lower interest rate
- Balance transfer: Move high-interest debt to lower-rate cards

If struggling with debt:
- Contact creditors to discuss payment plans
- Consider credit counseling services
- Explore debt management plans
- As a last resort, bankruptcy (consult an attorney)`
  },
  {
    category: "investing",
    questions: [
      "how to invest",
      "investment strategy",
      "stock market",
      "mutual funds",
      "beginner investing",
      "stock investing",
      "index funds"
    ],
    response: `Investing basics for beginners:

1. Start with an emergency fund before investing
2. Pay off high-interest debt first
3. Take advantage of employer 401(k) matching
4. Open a diversified portfolio with low-cost index funds
5. Consider your risk tolerance and time horizon
6. Invest regularly through dollar-cost averaging
7. Keep costs low (expense ratios, trading fees)

Investment account types:
- 401(k): Employer-sponsored retirement account
- IRA: Individual retirement account (Traditional or Roth)
- Taxable brokerage: Regular investment account

Asset allocation by age:
- Younger investors: 80-90% stocks, 10-20% bonds
- Middle-aged: 60-70% stocks, 30-40% bonds
- Near retirement: 40-50% stocks, 50-60% bonds

Investment options:
- Index funds: Low-cost, diversified (recommended for beginners)
- ETFs: Exchange-traded funds, similar to index funds
- Individual stocks: Higher risk, potential for higher returns
- Bonds: Lower risk, steady income
- REITs: Real estate investment trusts

Avoid:
- Timing the market
- Emotional investing
- High-fee funds
- Get-rich-quick schemes`
  },
  {
    category: "retirement planning",
    questions: [
      "retirement planning",
      "401k",
      "ira",
      "pension",
      "retirement savings",
      "retire early",
      "financial independence"
    ],
    response: `Retirement planning essentials:

1. Start early to benefit from compound interest
2. Contribute enough to get full employer 401(k) match
3. Maximize tax-advantaged accounts:
   - 401(k): $22,500 annual limit (2023), $30,000 if 50+
   - IRA: $6,500 annual limit (2023), $7,500 if 50+
4. Diversify investments across asset classes
5. Increase contributions annually, especially with raises
6. Consider catch-up contributions after age 50
7. Plan for healthcare costs (Medicare doesn't cover everything)

Withdrawal rules:
- Age 59½: Penalty-free withdrawals
- Required minimum distributions (RMDs) start at age 73
- Roth conversions can provide tax-free income in retirement

Retirement account types:
- Traditional 401(k)/IRA: Tax-deductible contributions, taxed at withdrawal
- Roth 401(k)/IRA: After-tax contributions, tax-free withdrawals
- SEP IRA: For self-employed individuals
- Solo 401(k): For business owners with no employees

Rule of 25: You need 25 times your annual expenses saved to retire (4% rule).
FIRE (Financial Independence, Retire Early) movement targets this aggressively.`
  },
  {
    category: "credit score",
    questions: [
      "improve credit score",
      "credit rating",
      "credit report",
      "credit history",
      "credit check"
    ],
    response: `Improving your credit score:

1. Pay bills on time (35% of your score)
2. Keep credit card balances low (under 30% of limits)
3. Maintain old accounts (length of credit history matters)
4. Limit new credit applications
5. Check credit report regularly for errors
6. Diversify credit types (cards, loans, mortgage)
7. Become an authorized user on someone else's account with good history

Credit score ranges:
- 300-579: Poor
- 580-669: Fair
- 670-739: Good
- 740-799: Very Good
- 800-850: Excellent

Free credit reports available annually at annualcreditreport.com

Credit monitoring services:
- Credit Karma, Credit Sesame (free)
- Paid services: Experian, TransUnion

Quick ways to improve your score:
- Pay down credit card balances
- Correct errors on credit reports
- Keep old accounts open
- Avoid closing credit cards after paying them off
- Make payments before statement dates`
  },
  {
    category: "savings goals",
    questions: [
      "savings goals",
      "saving money",
      "financial goals",
      "money goals",
      "high yield savings"
    ],
    response: `Setting effective savings goals:

1. Define specific, measurable targets:
   - Emergency fund: 3-6 months expenses
   - Short-term: Vacation, new car (1-2 years)
   - Medium-term: Home down payment (3-7 years)
   - Long-term: Retirement (20+ years)
2. Use the SMART criteria (Specific, Measurable, Achievable, Relevant, Time-bound)
3. Automate savings transfers
4. Track progress regularly
5. Adjust goals as life circumstances change

High-yield savings accounts typically offer better returns than regular savings accounts. Consider certificates of deposit (CDs) for money you won't need for a specific period.

Savings strategies:
- Pay yourself first (automate transfers)
- Use the envelope method (cash for discretionary spending)
- Round up purchases to nearest dollar
- Save windfalls (tax refunds, bonuses, gifts)
- Create separate accounts for different goals

Current high-yield savings rates (as of 2023):
- Online banks: 4.5-5.0% APY
- Traditional banks: 0.01-0.5% APY
- Credit unions: 0.5-1.0% APY`
  },
  {
    category: "insurance",
    questions: [
      "insurance needs",
      "health insurance",
      "life insurance",
      "home insurance",
      "insurance coverage"
    ],
    response: `Essential insurance types:

1. Health insurance: Required in most cases
2. Auto insurance: Required if you own a vehicle
3. Homeowners/renters insurance: Protects your property and belongings
4. Life insurance: Important if others depend on your income
5. Disability insurance: Protects your income if you can't work

Insurance principles:
- Coverage should match your needs, not exceed them
- Higher deductibles = lower premiums
- Shop around annually for better rates
- Bundle policies with the same provider for discounts
- Don't insure items that wouldn't cause financial hardship if lost

Term life insurance is usually more cost-effective than whole life for basic protection needs.

Health insurance considerations:
- Employer plans vs. marketplace plans
- HMO vs. PPO networks
- High-deductible plans with HSA eligibility
- Prescription drug coverage

Home insurance tips:
- Replacement cost vs. actual cash value
- Additional coverage for valuables
- Flood and earthquake insurance (if needed)
- Umbrella policy for extra liability protection`
  },
  {
    category: "tax planning",
    questions: [
      "tax planning",
      "reduce taxes",
      "tax deductions",
      "tax credits",
      "tax return"
    ],
    response: `Tax planning strategies:

1. Maximize retirement account contributions (401k, IRA)
2. Contribute to Health Savings Account (HSA) if eligible
3. Consider tax-loss harvesting in investment accounts
4. Keep receipts for deductible expenses:
   - Charitable donations
   - Medical expenses over 7.5% of AGI
   - State and local taxes (up to $10,000)
   - Mortgage interest
5. Time income and deductions strategically
6. Consider Roth conversions in low-income years
7. Explore education credits and deductions

Itemize deductions only if they exceed the standard deduction:
- Single: $13,850 (2023)
- Married filing jointly: $27,700 (2023)
- Head of household: $20,800 (2023)

Tax-advantaged accounts:
- 401(k): Pre-tax contributions, tax-deferred growth
- Roth IRA: After-tax contributions, tax-free growth/withdrawals
- HSA: Triple tax advantage (contribute, grow, withdraw tax-free for medical)
- 529 plans: Tax-free growth for education expenses

Tax-saving strategies:
- Maximize employer benefits
- Contribute to flexible spending accounts (FSAs)
- Consider municipal bonds for tax-free interest
- Donate appreciated stock instead of cash`
  },
  {
    category: "financial planning",
    questions: [
      "financial planning",
      "financial advisor",
      "financial independence",
      "financial goals",
      "financial literacy"
    ],
    response: `Comprehensive financial planning:

1. Set clear financial goals (short, medium, and long-term)
2. Create a budget and track spending
3. Build an emergency fund
4. Manage debt effectively
5. Save for retirement
6. Protect with appropriate insurance
7. Plan for major life events (marriage, children, career changes)
8. Review and adjust plans regularly

When considering a financial advisor:
- Look for fee-only fiduciaries
- Check credentials (CFP, CFA, CPA PFS)
- Understand their compensation structure
- Ensure their approach matches your needs
- Interview multiple candidates

Financial independence typically means having 25 times your annual expenses saved (4% rule).

Financial literacy resources:
- Books: "The Bogleheads' Guide to Investing", "A Random Walk Down Wall Street"
- Websites: Investopedia, NerdWallet, The Balance
- Podcasts: "The Dave Ramsey Show", "ChooseFI", "Afford Anything"
- Courses: FreeCodeCamp Finance, Khan Academy Finance

Net worth tracking:
- Assets: Cash, investments, property, vehicles
- Liabilities: Debts, loans, mortgages
- Net worth = Assets - Liabilities
- Track monthly/quarterly to measure progress`
  },
  {
    category: "real estate",
    questions: [
      "buy a house",
      "real estate investing",
      "mortgage",
      "home buying",
      "rent vs buy"
    ],
    response: `Real estate and home buying considerations:

Down payment requirements:
- Conventional loans: 3-20% (5-10% typical)
- FHA loans: 3.5% minimum
- VA loans: 0% for eligible veterans
- USDA loans: 0% for rural properties

Home buying process:
1. Check credit score and finances
2. Get pre-approved for a mortgage
3. Find a real estate agent
4. Search for homes within budget
5. Make an offer
6. Complete home inspection
7. Finalize mortgage and close

Rent vs. buy decision factors:
- Housing costs in your area
- Length of planned stay (buy if staying 5+ years)
- Job stability and mobility
- Maintenance responsibilities and costs
- Tax benefits (mortgage interest deduction)
- Investment potential and appreciation

Mortgage types:
- Fixed-rate: Rate stays constant for loan term
- Adjustable-rate: Rate changes periodically
- 15-year vs. 30-year terms
- Government-backed loans (FHA, VA, USDA)

Homeownership costs beyond mortgage:
- Property taxes
- Home insurance
- Maintenance and repairs (1-3% of home value annually)
- HOA fees (if applicable)
- Utilities (typically higher than renting)`
  },
  {
    category: "student loans",
    questions: [
      "student loans",
      "student debt",
      "pay off student loans",
      "student loan forgiveness",
      "refinance student loans"
    ],
    response: `Student loan management strategies:

Federal vs. private loans:
- Federal loans: More repayment options, forgiveness programs
- Private loans: Typically lower rates but fewer protections

Repayment plans for federal loans:
- Standard: Fixed payments over 10 years
- Graduated: Payments increase over time
- Extended: Up to 25 years for larger balances
- Income-driven: Payments based on income (10-20% of discretionary income)

Income-driven repayment plans:
- IBR (Income-Based Repayment)
- PAYE (Pay As You Earn)
- REPAYE (Revised Pay As You Earn)
- ICR (Income-Contingent Repayment)

Loan forgiveness programs:
- Public Service Loan Forgiveness (PSLF): After 120 qualifying payments
- Teacher Loan Forgiveness: Up to $17,500 for eligible teachers
- Income-driven repayment forgiveness: Remaining balance after 20-25 years

Refinancing considerations:
- May qualify for lower interest rate
- Loses federal loan benefits and protections
- Requires good credit and income
- Shop around for best rates

Strategies to pay off faster:
- Make extra payments toward principal
- Pay bi-weekly instead of monthly
- Use windfalls (bonuses, tax refunds)
- Consider refinancing for lower rate`
  }
];

// Function to find the best matching response
export function findBestResponse(userMessage) {
  const lowerCaseMessage = userMessage.toLowerCase();
  
  // Search through all categories
  for (const item of financialDataset) {
    // Check if any of the keywords match
    for (const question of item.questions) {
      if (lowerCaseMessage.includes(question)) {
        return item.response;
      }
    }
  }
  
  // If no exact match, return null
  return null;
}