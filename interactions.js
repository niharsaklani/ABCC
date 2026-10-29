/* ==========================================================================
   PREMIUM UI/UX DESIGNER PORTFOLIO — INTERACTION SCRIPTS
   Design token playground, hero canvas interactions, resume modal, contact validation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeroCanvasInteractions();
  initDesignSystemPlayground();
  initTimeTicker();
  initEmailCopy();
  initContactForm();
  initResumeModal();
  initKeyboardShortcuts();
});

/* --------------------------------------------------------------------------
   1. HERO CANVAS LIVE COMPONENT INTERACTION
   -------------------------------------------------------------------------- */
function initHeroCanvasInteractions() {
  const stateBtns = document.querySelectorAll('.state-btn');
  const demoBox = document.getElementById('heroInteractiveDemo');
  const heroActionBtn = document.getElementById('heroActionBtn');

  if (!stateBtns || !demoBox) return;

  stateBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      stateBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const state = btn.getAttribute('data-state');
      applyHeroComponentState(state, demoBox, heroActionBtn);
    });
  });
}

function applyHeroComponentState(state, demoBox, heroActionBtn) {
  if (!demoBox || !heroActionBtn) return;

  // Reset base classes
  demoBox.style.opacity = '1';
  demoBox.style.borderColor = 'var(--border-medium)';
  heroActionBtn.style.backgroundColor = 'var(--text-primary)';
  heroActionBtn.style.color = 'var(--bg-primary)';
  heroActionBtn.style.transform = 'none';
  heroActionBtn.innerText = 'Sync Account';

  if (state === 'hover') {
    demoBox.style.borderColor = 'var(--accent-cobalt)';
    heroActionBtn.style.backgroundColor = 'var(--accent-cobalt)';
    heroActionBtn.style.transform = 'translateY(-2px)';
    heroActionBtn.style.boxShadow = '0 4px 12px rgba(49, 87, 232, 0.25)';
  } else if (state === 'active') {
    demoBox.style.borderColor = 'var(--accent-cobalt)';
    heroActionBtn.style.backgroundColor = 'var(--accent-cobalt-hover)';
    heroActionBtn.style.transform = 'scale(0.97)';
    heroActionBtn.innerText = 'Syncing...';
  } else if (state === 'disabled') {
    demoBox.style.opacity = '0.5';
    demoBox.style.borderColor = 'var(--border-subtle)';
    heroActionBtn.style.backgroundColor = 'var(--border-medium)';
    heroActionBtn.style.color = 'var(--text-tertiary)';
    heroActionBtn.style.cursor = 'not-allowed';
    heroActionBtn.innerText = 'Sync Disabled';
  }
}

/* --------------------------------------------------------------------------
   2. DESIGN SYSTEM & TOKEN PLAYGROUND TABS
   -------------------------------------------------------------------------- */
function initDesignSystemPlayground() {
  const tabBtns = document.querySelectorAll('.token-tab-btn');
  const tabContents = document.querySelectorAll('.token-tab-content');

  if (!tabBtns.length || !tabContents.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const activeContent = document.getElementById(targetTab);
      if (activeContent) {
        activeContent.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. LIVE LOCAL TIME TICKER (San Francisco PST, UTC-7 / UTC-8)
   -------------------------------------------------------------------------- */
function initTimeTicker() {
  const timeDisplay = document.getElementById('liveLocalTime');
  const footerTimeDisplay = document.getElementById('footerLocalTime');

  function updateTime() {
    try {
      const now = new Date();
      // Format to America/Los_Angeles (San Francisco)
      const options = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat([], options);
      const timeStr = formatter.format(now);

      const hour = parseInt(new Intl.DateTimeFormat([], { timeZone: 'America/Los_Angeles', hour: 'numeric', hour12: false }).format(now), 10);
      const isStudioHours = hour >= 9 && hour < 19;
      const statusText = isStudioHours ? "In Studio" : "Offline / Designing";

      if (timeDisplay) {
        timeDisplay.textContent = `${timeStr} PT • ${statusText}`;
      }
      if (footerTimeDisplay) {
        footerTimeDisplay.textContent = `San Francisco, CA: ${timeStr} PT`;
      }
    } catch (e) {
      if (timeDisplay) timeDisplay.textContent = "San Francisco, CA (PT)";
    }
  }

  updateTime();
  setInterval(updateTime, 1000);
}

/* --------------------------------------------------------------------------
   4. COPY EMAIL TO CLIPBOARD WITH VISUAL FEEDBACK
   -------------------------------------------------------------------------- */
function initEmailCopy() {
  const copyBtns = document.querySelectorAll('.copy-email-btn');
  const emailText = "nihar.sakalni.design@example.com";

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(emailText);
        const originalText = btn.innerHTML;
        btn.innerHTML = `✓ Copied to Clipboard`;
        btn.style.backgroundColor = 'var(--status-available)';
        btn.style.color = '#FFFFFF';

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.backgroundColor = '';
          btn.style.color = '';
        }, 2200);
      } catch (err) {
        // Fallback for permissions
        const textArea = document.createElement("textarea");
        textArea.value = emailText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        btn.innerHTML = `✓ Copied`;
        setTimeout(() => {
          btn.innerHTML = `Copy Email`;
        }, 2000);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. CONTACT FORM VALIDATION & SUBMISSION SIMULATION
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all required fields (Name, Email, and Message).');
      return;
    }

    // Submit state animation
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `Sending inquiry...`;

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      feedback.innerHTML = `
        <strong>Thank you, ${name}!</strong> Your inquiry has been sent to Nihar Sakalni. You will receive a response within 24 business hours.
      `;
      feedback.className = 'form-feedback success';
      feedback.style.display = 'block';

      setTimeout(() => {
        feedback.style.display = 'none';
      }, 7000);
    }, 1200);
  });
}

/* --------------------------------------------------------------------------
   6. RESUME PREVIEW MODAL
   -------------------------------------------------------------------------- */
function initResumeModal() {
  const openBtns = document.querySelectorAll('.open-resume-btn');
  const resumeModal = document.getElementById('resumeModal');
  const closeBtn = document.getElementById('closeResumeModal');
  const printBtn = document.getElementById('printResumeBtn');

  if (!resumeModal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      resumeModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      resumeModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
      resumeModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* --------------------------------------------------------------------------
   7. KEYBOARD SHORTCUTS (ESC TO CLOSE MODALS)
   -------------------------------------------------------------------------- */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const caseStudyModal = document.getElementById('caseStudyModal');
      const resumeModal = document.getElementById('resumeModal');
      const mobileDrawer = document.getElementById('mobileDrawer');

      if (caseStudyModal && caseStudyModal.classList.contains('open')) {
        caseStudyModal.classList.remove('open');
        document.body.style.overflow = '';
      }

      if (resumeModal && resumeModal.classList.contains('open')) {
        resumeModal.classList.remove('open');
        document.body.style.overflow = '';
      }

      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        mobileDrawer.classList.remove('open');
      }
    }
  });
}

