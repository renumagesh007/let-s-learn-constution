/* ==========================================================
   Know Your Constitution — app.js
   All content lives here as data, rendered into the page.
   Everything is plain-language / citizen-perspective, not
   legal text — see README for sourcing notes.
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initPreambleSeal();
  renderRights();
  renderDuties();
  renderDirectives();
  renderBranches();
  initQuiz();
});

/* ---------------- scroll progress rail ---------------- */
function initScrollProgress() {
  const fill = document.getElementById('chakraFill');
  if (!fill) return;
  const update = () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const height = h.scrollHeight - h.clientHeight;
    const pct = height > 0 ? (scrolled / height) * 100 : 0;
    fill.style.width = pct + '%';
  };
  document.addEventListener('scroll', update, { passive: true });
  update();
}

/* ---------------- preamble seal ---------------- */
const PROMISES = {
  sovereign: {
    title: 'Sovereign',
    body: 'India answers to no outside power. No foreign government, king, or organisation can dictate its laws. Every decision — good or bad — is India\'s own to make.'
  },
  socialist: {
    title: 'Socialist',
    body: 'The state is meant to reduce inequality — not by owning everything, but by making sure wealth and opportunity aren\'t hoarded by a few. Think public healthcare, subsidised food, and progressive taxes.'
  },
  secular: {
    title: 'Secular',
    body: 'The government has no official religion and can\'t favour one over another. You can practise any faith, or none, and the state is expected to treat you the same either way.'
  },
  democratic: {
    title: 'Democratic',
    body: 'Power comes from the people, through elections. The people you vote for answer to you — at least in theory, and at least until the next election.'
  },
  justice: {
    title: 'Justice — social, economic, political',
    body: 'Not just courtroom justice. It means fair treatment regardless of caste or background (social), a fair shot at earning a living (economic), and an equal voice in how you\'re governed (political).'
  },
  liberty: {
    title: 'Liberty',
    body: 'Freedom of thought, expression, belief, faith, and worship. You can say what you think, worship how you choose, and believe what you believe — within reasonable limits set by law.'
  },
  equality: {
    title: 'Equality',
    body: 'Equal status and equal opportunity for everyone. No one is above the law, and the law isn\'t supposed to play favourites based on who you are.'
  },
  fraternity: {
    title: 'Fraternity',
    body: 'A sense of shared belonging that protects individual dignity and keeps the country united. It\'s the promise that difference doesn\'t have to mean division.'
  }
};

function initPreambleSeal() {
  const buttons = document.querySelectorAll('.promise-word');
  const reveal = document.getElementById('promiseReveal');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const key = btn.dataset.promise;
      const data = PROMISES[key];
      if (!data) return;
      reveal.innerHTML = `
        <div class="promise-reveal__title">${data.title}</div>
        <p class="promise-reveal__body">${data.body}</p>
      `;
    });
  });
}

/* ---------------- fundamental rights ---------------- */
const RIGHTS = [
  { num: 'Art. 14–18', title: 'Right to Equality', body: 'No discrimination by religion, race, caste, sex, or birthplace. Equal access to public jobs, and the end of untouchability and titles like "Sir" or "Lord" as inherited privilege.' },
  { num: 'Art. 19–22', title: 'Right to Freedom', body: 'Speech, assembly, movement, and the right to practise any profession. Also covers protection against arbitrary arrest — you must be told why you\'re being held.' },
  { num: 'Art. 23–24', title: 'Right against Exploitation', body: 'Bans human trafficking, forced labour, and child labour in hazardous jobs. This is the article behind most child-labour prosecutions.' },
  { num: 'Art. 25–28', title: 'Right to Freedom of Religion', body: 'Practise, profess, and propagate any religion. You also can\'t be forced to pay taxes that fund another religion, or attend religious instruction in a state-funded school.' },
  { num: 'Art. 29–30', title: 'Cultural & Educational Rights', body: 'Minorities can preserve their own language, script, and culture, and can set up and run their own educational institutions.' },
  { num: 'Art. 32', title: 'Right to Constitutional Remedies', body: 'The right to actually enforce the other rights — you can go straight to the Supreme Court if any of them are violated. Dr. Ambedkar called this "the heart and soul" of the Constitution.' }
];

function renderRights() {
  const grid = document.getElementById('rightsGrid');
  if (!grid) return;
  grid.innerHTML = RIGHTS.map(r => `
    <div class="right-card">
      <span class="right-card__num">${r.num}</span>
      <h3>${r.title}</h3>
      <p>${r.body}</p>
    </div>
  `).join('');
}

/* ---------------- fundamental duties ---------------- */
const DUTIES = [
  { letter: 'a', body: 'Respect the Constitution, the national flag, and the national anthem.' },
  { letter: 'b', body: 'Cherish the ideals that inspired the freedom struggle.' },
  { letter: 'c', body: 'Protect India\'s sovereignty, unity, and integrity.' },
  { letter: 'd', body: 'Defend the country and render national service when called upon.' },
  { letter: 'e', body: 'Promote harmony and brotherhood across religious, linguistic, and regional lines; renounce practices that demean women.' },
  { letter: 'f', body: 'Value and preserve India\'s composite culture.' },
  { letter: 'g', body: 'Protect the environment — forests, lakes, rivers, and wildlife — and show compassion for living creatures.' },
  { letter: 'h', body: 'Develop scientific temper, humanism, and the spirit of inquiry and reform.' },
  { letter: 'i', body: 'Safeguard public property and renounce violence.' },
  { letter: 'j', body: 'Strive for excellence in every field, individually and collectively.' },
  { letter: 'k', body: 'If you\'re a parent or guardian, provide educational opportunities to your child between ages 6 and 14.' }
];

function renderDuties() {
  const list = document.getElementById('dutiesList');
  if (!list) return;
  list.innerHTML = DUTIES.map(d => `
    <li class="duty-item">
      <span class="duty-item__letter">${d.letter}</span>
      <p>${d.body}</p>
    </li>
  `).join('');
}

/* ---------------- directive principles ---------------- */
const DIRECTIVES = [
  { num: 'Art. 39', title: 'Fair distribution', body: 'Resources should serve the common good, not concentrate in a few hands. Equal pay for equal work sits here too.' },
  { num: 'Art. 41', title: 'Right to work & education', body: 'The state should work toward employment, education, and public assistance in cases of unemployment, old age, or disability.' },
  { num: 'Art. 44', title: 'Uniform Civil Code', body: 'An aspiration toward one common set of personal laws for all citizens, regardless of religion — still unrealised and actively debated.' },
  { num: 'Art. 45', title: 'Early childhood care', body: 'Free and compulsory education for children — the seed that later grew into the Right to Education Act.' },
  { num: 'Art. 48A', title: 'Protect the environment', body: 'Safeguard forests and wildlife — added in 1976, decades before "sustainability" was a mainstream policy word.' },
  { num: 'Art. 50', title: 'Separate judiciary', body: 'Keep the judiciary independent from the executive branch, so courts can\'t be leaned on by whoever is in power.' }
];

function renderDirectives() {
  const scroll = document.getElementById('directivesScroll');
  if (!scroll) return;
  scroll.innerHTML = DIRECTIVES.map(d => `
    <div class="directive-card">
      <span class="directive-card__num">${d.num}</span>
      <h3>${d.title}</h3>
      <p>${d.body}</p>
    </div>
  `).join('');
}

/* ---------------- machinery of government ---------------- */
const BRANCHES = [
  {
    title: 'Legislature',
    short: 'Makes the laws. Parliament — Lok Sabha (elected by you) and Rajya Sabha (represents states).',
    detail: '<strong>Checked by:</strong> The judiciary can strike down its laws; the executive needs its approval to spend money or govern by ordinance for long.'
  },
  {
    title: 'Executive',
    short: 'Runs the government day to day. The President, Prime Minister, Council of Ministers, and the bureaucracy.',
    detail: '<strong>Checked by:</strong> Must retain the confidence of the Lok Sabha to stay in power; its actions can be reviewed by courts.'
  },
  {
    title: 'Judiciary',
    short: 'Interprets the law and the Constitution itself. Supreme Court, High Courts, and lower courts.',
    detail: '<strong>Checked by:</strong> Judges are appointed through a defined process and can be removed only through impeachment — a deliberately high bar.'
  }
];

function renderBranches() {
  const wrap = document.getElementById('branches');
  if (!wrap) return;
  wrap.innerHTML = BRANCHES.map((b, i) => `
    <button class="branch-card" data-index="${i}" aria-expanded="false">
      <h3>${b.title} <span class="branch-card__plus">+</span></h3>
      <p>${b.short}</p>
      <div class="branch-card__detail">${b.detail}</div>
    </button>
  `).join('');

  wrap.querySelectorAll('.branch-card').forEach(card => {
    card.addEventListener('click', () => {
      const isOpen = card.classList.contains('is-open');
      card.classList.toggle('is-open');
      card.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}

/* ---------------- self-check quiz ---------------- */
const QUIZ = [
  {
    q: 'You believe a new state law violates your Fundamental Rights. What can you do?',
    options: [
      'Wait for the next election and vote differently',
      'Go directly to the Supreme Court or a High Court',
      'Nothing — Fundamental Rights are symbolic only'
    ],
    correct: 1,
    explain: 'Article 32 makes the right to approach the courts itself a Fundamental Right — Dr. Ambedkar called it the "heart and soul" of the Constitution.'
  },
  {
    q: 'Directive Principles of State Policy are best described as...',
    options: [
      'Laws you can be jailed for breaking',
      'Court-enforceable rights, just like Fundamental Rights',
      'Goals for government policy, not enforceable in court'
    ],
    correct: 2,
    explain: 'They guide lawmaking and policy but aren\'t directly enforceable — you can\'t sue the government for failing to achieve one.'
  },
  {
    q: 'Which Fundamental Duty applies to parents specifically?',
    options: [
      'Renouncing violence',
      'Providing education to children aged 6–14',
      'Developing scientific temper'
    ],
    correct: 1,
    explain: 'Article 51A(k), added in 2002, asks parents and guardians to provide educational opportunities to children between 6 and 14.'
  },
  {
    q: 'Why is the judiciary kept separate from the executive?',
    options: [
      'So judges can be appointed faster',
      'So courts aren\'t pressured by whoever holds political power',
      'It\'s a ceremonial tradition with no real function'
    ],
    correct: 1,
    explain: 'Article 50 calls for separating the judiciary from the executive specifically to protect judicial independence.'
  }
];

function initQuiz() {
  const card = document.getElementById('quizCard');
  if (!card) return;
  let index = 0;
  let answered = false;

  function render() {
    if (index >= QUIZ.length) {
      card.innerHTML = `<p class="quiz-done">That's all the questions — nicely done. Scroll back up to revisit anything that didn't quite land.</p>`;
      return;
    }
    const item = QUIZ[index];
    answered = false;
    card.innerHTML = `
      <p class="quiz-progress">Question ${index + 1} of ${QUIZ.length}</p>
      <p class="quiz-question">${item.q}</p>
      <div class="quiz-options">
        ${item.options.map((opt, i) => `<button class="quiz-option" data-i="${i}">${opt}</button>`).join('')}
      </div>
      <p class="quiz-feedback"></p>
      <button class="quiz-next">Next question →</button>
    `;
    const optionEls = card.querySelectorAll('.quiz-option');
    const feedback = card.querySelector('.quiz-feedback');
    const nextBtn = card.querySelector('.quiz-next');

    optionEls.forEach(opt => {
      opt.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        const chosen = Number(opt.dataset.i);
        optionEls.forEach((o, i) => {
          if (i === item.correct) o.classList.add('is-correct');
          else if (i === chosen) o.classList.add('is-wrong');
        });
        feedback.textContent = item.explain;
        nextBtn.classList.add('is-visible');
      });
    });

    nextBtn.addEventListener('click', () => {
      index += 1;
      render();
    });
  }

  render();
}
