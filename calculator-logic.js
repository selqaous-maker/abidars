/**
 * PEXEK Revenue Opportunity Calculator Logic
 * 
 * Benchmark unanswered rates by industry:
 * - Dental Practice: 45%, Avg Value $350
 * - Healthcare: 42%, Avg Value $300
 * - Real Estate: 48%, Avg Value $800
 * - Home Services: 50%, Avg Value $400
 * - Legal: 46%, Avg Value $1200
 * - E-commerce: 40%, Avg Value $150
 * - Other: 45%, Avg Value $300
 * 
 * Formula:
 * (Monthly Calls × Unanswered Rate × 0.80 × 0.25 × Avg Customer Value) = Estimated Recoverable Revenue
 */

const PEXEK_INDUSTRY_BENCHMARKS = {
  'Dental Practice': { rate: 0.45, value: 350 },
  'Healthcare & Medical': { rate: 0.42, value: 300 },
  'Real Estate': { rate: 0.48, value: 800 },
  'Home Services': { rate: 0.50, value: 400 },
  'Legal & Law Firms': { rate: 0.46, value: 1200 },
  'E-commerce': { rate: 0.40, value: 150 },
  'Other': { rate: 0.45, value: 300 }
};

const CALL_VOLUME_MAP = {
  '<100 calls/mo': 75,
  '100-500 calls/mo': 300,
  '500-2000 calls/mo': 1000,
  '2000+ calls/mo': 3000
};

/**
 * Calculates estimated revenue opportunity and full breakdown details
 * @param {string} industry 
 * @param {string|number} callVolume 
 * @param {number} [customAvgValue] 
 * @returns {Object} Calculation result
 */
function calculateRecoverableRevenue(industry, callVolume, customAvgValue = null) {
  const benchmark = PEXEK_INDUSTRY_BENCHMARKS[industry] || PEXEK_INDUSTRY_BENCHMARKS['Other'];
  
  const monthlyCalls = typeof callVolume === 'number' 
    ? callVolume 
    : (CALL_VOLUME_MAP[callVolume] || 300);

  const avgValue = customAvgValue !== null && customAvgValue > 0 
    ? customAvgValue 
    : benchmark.value;

  const unansweredRate = benchmark.rate;
  const missedCalls = Math.round(monthlyCalls * unansweredRate);
  const recoverableConversations = Math.round(missedCalls * 0.80);
  const newCustomers = Math.round(recoverableConversations * 0.25);
  const estimatedRevenue = Math.round(newCustomers * avgValue);

  return {
    industry,
    monthlyCalls,
    unansweredRate,
    unansweredRatePercent: Math.round(unansweredRate * 100),
    missedCalls,
    recoverableConversations,
    newCustomers,
    avgValue,
    estimatedRevenue,
    formattedRevenue: `$${estimatedRevenue.toLocaleString()}/month`
  };
}

/**
 * Updates calculation display in the UI
 * @param {boolean} step2Completed 
 */
function updateCalculatorDisplay(step2Completed = false) {
  const placeholderEl = document.getElementById('calc-placeholder');
  const resultBoxEl = document.getElementById('calc-results');
  const revenueAmountEl = document.getElementById('calc-revenue-amount');
  const breakdownContentEl = document.getElementById('calc-breakdown-content');

  const industryEl = document.getElementById('field-industry');
  const volumeEl = document.getElementById('field-call-volume');

  if (!industryEl || !volumeEl) return;

  const selectedIndustry = industryEl.value;
  const selectedVolume = volumeEl.value;

  if (!step2Completed) {
    if (placeholderEl) placeholderEl.style.display = 'block';
    if (resultBoxEl) resultBoxEl.style.display = 'none';
    return;
  }

  const result = calculateRecoverableRevenue(selectedIndustry, selectedVolume);

  if (placeholderEl) placeholderEl.style.display = 'none';
  if (resultBoxEl) resultBoxEl.style.display = 'block';

  if (revenueAmountEl) {
    revenueAmountEl.textContent = `$${result.estimatedRevenue.toLocaleString()}`;
  }

  if (breakdownContentEl) {
    breakdownContentEl.innerHTML = `
      <div><strong style="color: #fff">${result.monthlyCalls}</strong> monthly calls</div>
      <div>× <strong style="color: #fff">${result.unansweredRatePercent}%</strong> estimated unanswered rate</div>
      <div style="color: #00d4ff; font-weight: bold">= ${result.missedCalls} missed calls</div>
      <div style="margin-top: 4px; color: #94a3b8">${result.missedCalls} × 80% recoverable = <strong style="color: #fff">${result.recoverableConversations}</strong> recovered conversations</div>
      <div style="color: #94a3b8">${result.recoverableConversations} × 25% conversion = <strong style="color: #fff">${result.newCustomers}</strong> new customers</div>
      <div style="margin-top: 4px; color: #00d4ff; font-weight: bold">${result.newCustomers} × $${result.avgValue} average value = $${result.estimatedRevenue.toLocaleString()}/month estimated recoverable revenue</div>
    `;
  }

  // Store in hidden field for form submission
  const hiddenEstRevEl = document.getElementById('field-estimated-revenue');
  if (hiddenEstRevEl) {
    hiddenEstRevEl.value = `$${result.estimatedRevenue.toLocaleString()}/mo`;
  }
}

/**
 * Toggles the breakdown section view
 */
function toggleCalculationBreakdown() {
  const breakdownEl = document.getElementById('calc-breakdown-details');
  const toggleBtnEl = document.getElementById('calc-breakdown-toggle');

  if (!breakdownEl || !toggleBtnEl) return;

  if (breakdownEl.style.display === 'none' || !breakdownEl.style.display) {
    breakdownEl.style.display = 'block';
    toggleBtnEl.textContent = '▲ Hide Calculation';
  } else {
    breakdownEl.style.display = 'none';
    toggleBtnEl.textContent = '▼ View Calculation';
  }
}

// Global exports for script binding
window.PEXEK_CALCULATOR = {
  calculateRecoverableRevenue,
  updateCalculatorDisplay,
  toggleCalculationBreakdown
};
