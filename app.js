// Daymate MVP App State Management
const plans = [
  {
    id: 'movie',
    title: 'Movie Plan',
    icon: '🍿',
    desc: 'Catch the latest blockbuster with a movie buddy.',
    duration: '~3 hours',
    price: 'Starts at ₹300'
  },
  {
    id: 'coffee',
    title: 'Coffee Plan',
    icon: '☕',
    desc: 'Chill vibes and good conversation over a nice cup of coffee.',
    duration: '~1.5 hours',
    price: 'Starts at ₹400'
  },
  {
    id: 'lunch',
    title: 'Lunch Plan',
    icon: '🍱',
    desc: 'Grab a quick bite or explore a new cafe during the day.',
    duration: '~2 hours',
    price: 'Starts at ₹600'
  },
  {
    id: 'dinner',
    title: 'Dinner Plan',
    icon: '🍽️',
    desc: 'Explore a new restaurant together for a relaxed evening.',
    duration: '~2.5 hours',
    price: 'Starts at ₹800'
  },
  {
    id: 'comedy',
    title: 'Comedy Plan',
    icon: '🎤',
    desc: 'Laugh out loud at a local stand-up comedy show.',
    duration: '~2 hours',
    price: 'Starts at ₹500'
  }
];

const appState = {
  currentScreen: 'welcome',
  selectedPlanId: null,
  history: ['welcome'],

  init() {
    this.renderPlans();
    this.goTo('welcome', true);
  },

  goTo(screenId, isBack = false) {
    // Hide all screens and remove animation classes
    document.querySelectorAll('.app-screen').forEach(el => {
      el.classList.remove('active', 'slide-in-right', 'slide-in-left');
    });

    // Show target screen with directional animation
    const target = document.getElementById(`screen-${screenId}`);
    if (target) {
      if (isBack) {
        target.classList.add('slide-in-left');
      } else {
        target.classList.add('slide-in-right');
      }
      this.currentScreen = screenId;
    }
  },

  renderPlans() {
    const container = document.getElementById('plans-container');
    container.innerHTML = '';

    plans.forEach(plan => {
      const el = document.createElement('div');
      el.className = 'plan-card';
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.padding = '16px';
      el.onclick = () => this.selectPlan(plan.id);

      el.innerHTML = `
        <div style="font-size: 2rem; margin-right: 15px; width: 40px; text-align: center;">${plan.icon}</div>
        <div style="flex: 1;">
          <h4 style="margin: 0; font-size: 1.1rem;">${plan.title}</h4>
          <p style="margin: 0; font-size: 0.85rem; color: var(--color-muted-grey);">
            ${plan.duration} • ${plan.price}
          </p>
        </div>
        <div style="color: var(--color-coral); font-size: 1.5rem;">›</div>
      `;

      container.appendChild(el);
    });
  },

  selectPlan(planId) {
    this.selectedPlanId = planId;
    const plan = plans.find(p => p.id === planId);
    
    if (plan) {
      document.getElementById('detail-title').innerText = plan.title;
      document.getElementById('detail-desc').innerText = plan.desc;
      document.getElementById('detail-duration').innerText = plan.duration;
      document.getElementById('detail-price').innerText = plan.price;
      
      this.goTo('plan-details');
    }
  },

  submitForm(e) {
    e.preventDefault();
    // Simulate API call / form submission
    this.goTo('confirmation');
  },

  reset() {
    this.selectedPlanId = null;
    document.getElementById('booking-form').reset();
    this.goTo('choose-plan');
  }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  appState.init();
});
