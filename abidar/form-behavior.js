/**
 * PEXEK Strategy Session Modal Form Behavior
 * - Step Navigation (Step 1 -> Step 2 -> Step 3)
 * - Back Navigation on Steps 2 and 3
 * - Real-time field validation with inline error messages
 * - Complete Form Reset on Modal Re-open (NO persistent storage across opens)
 * - Formspree POST submission handling with Success Screen rendering
 */

(function () {
  let currentStep = 1;
  let isStep2Completed = false;

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkodykaj';

  // --- MODAL CONTROL FUNCTIONS ---

  function openAuditModal(source = 'homepage') {
    const modalEl = document.getElementById('pexek-audit-modal');
    if (!modalEl) return;

    // BUG 2 FIX: RESET ON OPEN
    resetModalForm();

    // Set dynamic headline if source provided
    updateModalHeadline(source);

    modalEl.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeAuditModal() {
    const modalEl = document.getElementById('pexek-audit-modal');
    if (!modalEl) return;

    modalEl.style.display = 'none';
    document.body.style.overflow = '';

    // BUG 2 FIX: RESET AGAIN ON CLOSE
    resetModalForm();
  }

  function resetModalForm() {
    currentStep = 1;
    isStep2Completed = false;

    // Hide success screen, show main form
    const formEl = document.getElementById('pexek-modal-form');
    const successEl = document.getElementById('pexek-modal-success');
    if (formEl) formEl.style.display = 'block';
    if (successEl) successEl.style.display = 'none';

    // Show Step 1, hide Steps 2 & 3
    setStepVisibility(1);

    // Clear form inputs
    const inputs = document.querySelectorAll('#pexek-modal-form input, #pexek-modal-form select');
    inputs.forEach(input => {
      if (input.type === 'hidden') return;
      if (input.tagName === 'SELECT') {
        input.selectedIndex = 0;
      } else if (input.type === 'date') {
        // Set default date to 2 days in future
        const futureDate = new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];
        input.value = futureDate;
      } else {
        input.value = '';
      }
    });

    // Reset challenge buttons
    const challengeBtns = document.querySelectorAll('.challenge-opt-btn');
    challengeBtns.forEach((btn, idx) => {
      btn.classList.remove('active');
      if (idx === 0) btn.classList.add('active'); // default to first
    });
    const hiddenChallenge = document.getElementById('field-challenge');
    if (hiddenChallenge) hiddenChallenge.value = 'Too many missed calls';

    // Clear error messages & red borders
    clearErrors();

    // Reset calculator display to placeholder
    if (window.PEXEK_CALCULATOR) {
      window.PEXEK_CALCULATOR.updateCalculatorDisplay(false);
    }
  }

  function updateModalHeadline(source) {
    const headlineEl = document.getElementById('pexek-modal-headline');
    if (!headlineEl) return;

    const src = (source || '').toLowerCase();
    if (src.includes('dental')) headlineEl.textContent = "Let's Design Your Dental AI Receptionist";
    else if (src.includes('healthcare')) headlineEl.textContent = "Let's Design Your Healthcare AI System";
    else if (src.includes('real-estate') || src.includes('realestate')) headlineEl.textContent = "Let's Design Your Real Estate AI Workflow";
    else if (src.includes('home-service') || src.includes('homeservices')) headlineEl.textContent = "Let's Design Your Home Services AI Dispatch";
    else if (src.includes('legal')) headlineEl.textContent = "Let's Design Your Legal AI Intake System";
    else if (src.includes('ecommerce') || src.includes('e-commerce')) headlineEl.textContent = "Let's Design Your E-commerce AI Support";
    else if (src.includes('pricing')) headlineEl.textContent = "Get Your Custom AI Deployment Quote";
    else headlineEl.textContent = "Let's Design Your AI Voice Deployment";
  }

  function setStepVisibility(step) {
    currentStep = step;
    
    // Update step counter text & bar
    const stepCounter = document.getElementById('modal-step-counter');
    const progressBar = document.getElementById('modal-progress-bar');
    if (stepCounter) stepCounter.textContent = `Step ${step} of 3`;
    if (progressBar) progressBar.style.width = `${(step / 3) * 100}%`;

    // Toggle step containers
    for (let i = 1; i <= 3; i++) {
      const stepEl = document.getElementById(`form-step-${i}`);
      if (stepEl) {
        stepEl.style.display = i === step ? 'block' : 'none';
      }
    }
  }

  function clearErrors() {
    const errorEls = document.querySelectorAll('.field-error-msg');
    errorEls.forEach(el => {
      el.textContent = '';
      el.style.display = 'none';
    });

    const inputs = document.querySelectorAll('#pexek-modal-form input, #pexek-modal-form select');
    inputs.forEach(input => {
      input.classList.remove('error-border');
      input.style.borderColor = '';
    });

    const generalError = document.getElementById('form-submit-error');
    if (generalError) generalError.style.display = 'none';
  }

  function showFieldError(fieldId, errorMsg) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);

    if (field) {
      field.classList.add('error-border');
      field.style.borderColor = '#ef4444';
    }
    if (errorEl) {
      errorEl.textContent = errorMsg;
      errorEl.style.display = 'block';
    }
  }

  // --- VALIDATION FUNCTIONS ---

  function validateStep1() {
    clearErrors();
    let isValid = true;

    const fullName = (document.getElementById('field-fullname')?.value || '').trim();
    const businessName = (document.getElementById('field-business')?.value || '').trim();
    const email = (document.getElementById('field-email')?.value || '').trim();
    const phone = (document.getElementById('field-phone')?.value || '').trim();

    if (!fullName || fullName.length < 2) {
      showFieldError('field-fullname', 'Please enter your full name (at least 2 characters)');
      isValid = false;
    }

    if (!businessName) {
      showFieldError('field-business', 'Please enter your business name');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      showFieldError('field-email', 'Please enter a valid work email address');
      isValid = false;
    }

    const phoneDigits = phone.replace(/\D/g, '');
    if (!phone || phoneDigits.length < 10) {
      showFieldError('field-phone', 'Please enter a valid phone number (at least 10 digits)');
      isValid = false;
    }

    return isValid;
  }

  function validateStep2() {
    clearErrors();
    let isValid = true;

    const industry = document.getElementById('field-industry')?.value;
    const callVolume = document.getElementById('field-call-volume')?.value;
    const challenge = document.getElementById('field-challenge')?.value;

    if (!industry) {
      showFieldError('field-industry', 'Please select your industry');
      isValid = false;
    }

    if (!callVolume) {
      showFieldError('field-call-volume', 'Please select your monthly call volume');
      isValid = false;
    }

    if (!challenge) {
      showFieldError('field-challenge', 'Please select your biggest call challenge');
      isValid = false;
    }

    return isValid;
  }

  function validateStep3() {
    clearErrors();
    let isValid = true;

    const dateVal = document.getElementById('field-preferred-date')?.value;
    const timeVal = document.getElementById('field-preferred-time')?.value;

    if (!dateVal) {
      showFieldError('field-preferred-date', 'Please select a preferred date');
      isValid = false;
    } else {
      const selected = new Date(dateVal);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        showFieldError('field-preferred-date', 'Date cannot be in the past');
        isValid = false;
      }
    }

    if (!timeVal) {
      showFieldError('field-preferred-time', 'Please select a preferred time slot');
      isValid = false;
    }

    return isValid;
  }

  // --- STEP NAVIGATION HANDLERS ---

  function goToNextStep() {
    if (currentStep === 1) {
      if (validateStep1()) {
        setStepVisibility(2);
      }
    } else if (currentStep === 2) {
      if (validateStep2()) {
        isStep2Completed = true;
        if (window.PEXEK_CALCULATOR) {
          window.PEXEK_CALCULATOR.updateCalculatorDisplay(true);
        }
        setStepVisibility(3);
      }
    }
  }

  function goToPreviousStep() {
    if (currentStep === 2) {
      setStepVisibility(1);
    } else if (currentStep === 3) {
      setStepVisibility(2);
    }
  }

  // --- SUBMIT HANDLER ---

  async function handleFormSubmit(e) {
    if (e) e.preventDefault();

    if (!validateStep3()) return;

    const submitBtn = document.getElementById('btn-submit-form');
    const submitError = document.getElementById('form-submit-error');

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting Request...';
    }
    if (submitError) submitError.style.display = 'none';

    const formData = {
      name: document.getElementById('field-fullname')?.value,
      business_name: document.getElementById('field-business')?.value,
      email: document.getElementById('field-email')?.value,
      phone: document.getElementById('field-phone')?.value,
      industry: document.getElementById('field-industry')?.value,
      call_volume: document.getElementById('field-call-volume')?.value,
      challenge: document.getElementById('field-challenge')?.value,
      preferred_date: document.getElementById('field-preferred-date')?.value,
      preferred_time: document.getElementById('field-preferred-time')?.value,
      estimated_revenue: document.getElementById('field-estimated-revenue')?.value || '$0'
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        renderSuccessScreen(formData);
      } else {
        if (submitError) {
          submitError.textContent = 'Something went wrong sending your request. Please try again or email us directly.';
          submitError.style.display = 'block';
        }
      }
    } catch (err) {
      if (submitError) {
        submitError.textContent = 'Network error. Please check your connection and try again.';
        submitError.style.display = 'block';
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Get My Deployment Blueprint →';
      }
    }
  }

  function renderSuccessScreen(data) {
    const formEl = document.getElementById('pexek-modal-form');
    const successEl = document.getElementById('pexek-modal-success');

    if (formEl) formEl.style.display = 'none';

    if (successEl) {
      const summaryContainer = document.getElementById('success-summary-details');
      if (summaryContainer) {
        summaryContainer.innerHTML = `
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span style="color: #94a3b8">Name:</span>
            <strong style="color: #fff">${data.name}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span style="color: #94a3b8">Business:</span>
            <strong style="color: #fff">${data.business_name}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span style="color: #94a3b8">Industry:</span>
            <strong style="color: #fff">${data.industry}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span style="color: #94a3b8">Call Volume:</span>
            <strong style="color: #fff">${data.call_volume}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span style="color: #94a3b8">Challenge:</span>
            <strong style="color: #fff">${data.challenge}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span style="color: #94a3b8">Preferred Time:</span>
            <strong style="color: #fff">${data.preferred_date} at ${data.preferred_time}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.1)">
            <span style="color: #00d4ff; font-weight: bold">Est. Revenue:</span>
            <strong style="color: #00d4ff">${data.estimated_revenue}</strong>
          </div>
        `;
      }
      successEl.style.display = 'block';
    }
  }

  // --- INITIALIZATION ---

  document.addEventListener('DOMContentLoaded', () => {
    // Challenge options toggle
    const challengeBtns = document.querySelectorAll('.challenge-opt-btn');
    const hiddenChallenge = document.getElementById('field-challenge');

    challengeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        challengeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (hiddenChallenge) {
          hiddenChallenge.value = btn.getAttribute('data-value');
        }
      });
    });

    // Form submit listener
    const form = document.getElementById('pexek-modal-form');
    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }

    // Input listeners to trigger dynamic calc when Step 2 inputs change
    const industrySelect = document.getElementById('field-industry');
    const volumeSelect = document.getElementById('field-call-volume');

    if (industrySelect) {
      industrySelect.addEventListener('change', () => {
        if (isStep2Completed && window.PEXEK_CALCULATOR) {
          window.PEXEK_CALCULATOR.updateCalculatorDisplay(true);
        }
      });
    }

    if (volumeSelect) {
      volumeSelect.addEventListener('change', () => {
        if (isStep2Completed && window.PEXEK_CALCULATOR) {
          window.PEXEK_CALCULATOR.updateCalculatorDisplay(true);
        }
      });
    }

    // ESC Key listener
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAuditModal();
      }
    });
  });

  // Global exports for modal triggering
  window.PEXEK_MODAL = {
    openAuditModal,
    closeAuditModal,
    goToNextStep,
    goToPreviousStep,
    resetModalForm
  };
})();
