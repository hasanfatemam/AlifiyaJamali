/* ===========================================================================
   THIRTY & THRIVING — ALIFIYA'S 30TH BIRTHDAY
   Pure Vanilla JavaScript · Relative Paths · Zero Dependencies
   ==========================================================================
   HOW TO CUSTOMIZE MEDIA & CONTENT:
   1. Main Video: Replace ./assets/videos/birthday-surprise.mp4
   2. Reels: Edit REELS_DATA below and replace files in ./assets/reels/
   3. Photos: Edit PHOTOS_DATA below and add files in ./assets/images/
   4. Messages: Edit MESSAGES_DATA below
   5. Quiz & This-or-That: Edit QUIZ_QUESTIONS and THIS_OR_THAT_ROUNDS below
   6. Background Music: YouTube ID below (with ./assets/music/birthday-melody.mp3 fallback)
   ========================================================================== */

(() => {
  'use strict';

  const YOUTUBE_MUSIC_ID = '8V1JWimDkJo';
  // Start timestamp in seconds so playback begins right at the lyrics (adjust if needed)
  const YOUTUBE_START_SECONDS = 12;

  /* ------------------------------------------------------------------------
     EDITABLE CONTENT DATA
     ------------------------------------------------------------------------ */
  const REELS_DATA = [
    {
      id: 'reel-1',
      title: 'Sparklers at Midnight',
      meta: 'Reel 01 · Celebration',
      caption: 'Cheers to thirty radiant years.',
      thumb: './assets/thumbnails/reel-1.jpg',
      video: './assets/reels/reel-1.mp4',
    },
    {
      id: 'reel-2',
      title: 'Chasing Golden Horizons',
      meta: 'Reel 02 · Adventures',
      caption: 'Cliffside walks, lake breeze, and the best of friends.',
      thumb: './assets/thumbnails/reel-2.jpg',
      video: './assets/reels/reel-2.mp4',
    },
    {
      id: 'reel-3',
      title: 'Make a Wish, Alifiya',
      meta: 'Reel 03 · Candlelight',
      caption: 'The sweetest birthday wish.',
      thumb: './assets/thumbnails/reel-3.jpg',
      video: './assets/reels/reel-3.mp4',
    },
    {
      id: 'reel-4',
      title: 'Wishes and celebrations',
      meta: 'Reel 04 · Friendship',
      caption: 'The kind of celebrations that echoes long after birthdays .',
      thumb: './assets/thumbnails/reel-4.jpg',
      video: './assets/reels/reel-4.mp4',
    },
  ];

  const PHOTOS_DATA = [
    {
      id: 'photo-1',
      src: './assets/images/memory-rooftop.jpg',
      title: '',
      category: 'The Beautiful Memories',
      date: 'Summer Evening',
      caption: 'Endless toasts and city lights warming up the dusk sky.',
      size: 'wide',
    },
    {
      id: 'photo-2',
      src: './assets/images/memory-coastal.jpg',
      title: '',
      category: 'Adventures Together',
      date: 'Coastal Escape',
      caption: '',
      size: 'tall',
    },
    {
      id: 'photo-3',
      src: './assets/images/memory-cake.jpg',
      title: 'Birthday Celebration',
      category: 'Unforgettable Days',
      date: '',
      caption: '',
      size: 'standard',
    },
    {
      id: 'photo-4',
      src: './assets/images/memory-toast.jpg',
      title: '',
      category: 'The Beautiful Memories',
      date: 'Celebration Night',
      caption: '',
      size: 'standard',
    },
    {
      id: 'photo-5',
      src: './assets/images/memory-sparklers.jpg',
      title: '',
      category: 'Crazy Moments',
      date: 'After Hours',
      caption: '',
      size: 'wide',
    },
    {
      id: 'photo-6',
      src: './assets/images/hero-soiree.jpg',
      title: 'The Midnight Soirée',
      category: 'Unforgettable Days',
      date: 'Milestone Eve',
      caption: '',
      size: 'standard',
    },
  ];

  const MESSAGES_DATA = [
    {
      id: 'msg-1',
      sender: 'Zara K.',
      relation: 'Best Friend · 12 Years',
      text: 'Alifiya, watching you step into 30 with so much grace, warmth, and effortless sparkle is pure joy. Thank you for every 2 AM pep talk and every spontaneous adventure!',
      handwritten: true,
      spanTwo: true,
    },
    {
      id: 'msg-2',
      sender: 'Rohan & Meera',
      relation: 'College Crew',
      text: 'From chaotic campus coffee runs to celebrating your fabulous 30th—some friendships only grow richer with every year. Wishing you a decade of bold dreams come true!',
      handwritten: false,
      spanTwo: false,
    },
    {
      id: 'msg-3',
      sender: 'Sana M.',
      relation: 'Travel Buddy',
      text: 'Nobody plans an itinerary—or turns a missed train into a comedy—quite like you. May your thirties bring more passport stamps, ocean sunsets, and endless laughter.',
      handwritten: true,
      spanTwo: false,
    },
    {
      id: 'msg-4',
      sender: 'Aarav D.',
      relation: 'Childhood Friend',
      text: 'Thirty looks extraordinary on you, Alifiya! Keep lighting up every room with your kindness and infectious laugh. Always cheering for you.',
      handwritten: false,
      spanTwo: false,
    },
    {
      id: 'msg-5',
      sender: 'Nadia & The Squad',
      relation: 'Weekend Brunch Club',
      text: 'Here is to the friend who remembers everyone’s milestones, hypes everyone up, and makes every ordinary Sunday feel like a celebration. Today it’s all about YOU!',
      handwritten: true,
      spanTwo: false,
    },
  ];

  /* Editable 10-Question Quiz */
  const QUIZ_QUESTIONS = [
    {
      question: 'What is Alifiya’s non-negotiable morning ritual?',
      options: [
        'Iced caramel latte before speaking',
        'A 5 AM sprint around the block',
        'Reading the stock ticker',
        'Skipping breakfast completely',
      ],
      correctIndex: 0,
      note: 'Coffee first, everything else second—always!',
    },
    {
      question: 'Which getaway destination tops Alifiya’s dream travel list?',
      options: [
        'Snowy Antarctic expedition',
        'Sunlit Amalfi Coast & Positano',
        'Subway tour of Tokyo',
        'Desert camping with no Wi-Fi',
      ],
      correctIndex: 1,
      note: 'Golden sunsets, coastal views, and pasta by the sea.',
    },
    {
      question: 'What is guaranteed to get Alifiya onto the dance floor?',
      options: [
        'Classical cello concertos',
        '90s & 2000s throwbacks',
        'Lo-fi elevator jazz',
        'Silence and solemn applause',
      ],
      correctIndex: 1,
      note: 'The moment a throwback chorus hits, she’s front and center.',
    },
    {
      question: 'How long does it take Alifiya to get ready when she says "5 minutes"?',
      options: [
        'Literally 5 minutes',
        '35 minutes plus outfit check',
        '2 hours and a haircut',
        'She’s already waiting outside',
      ],
      correctIndex: 1,
      note: 'Perfection cannot be rushed—and the outfit is always worth it.',
    },
    {
      question: 'What is Alifiya’s go-to late-night comfort snack?',
      options: [
        'Plain steamed broccoli',
        'Truffle fries or chocolate dessert',
        'Dry rice cakes',
        'Pickled olives straight from the jar',
      ],
      correctIndex: 1,
      note: 'Sweet or savoury indulgence, never boring.',
    },
    {
      question: 'Which role does Alifiya always play in the friend group?',
      options: [
        'The silent observer',
        'The official photographer & memory keeper',
        'The person who forgets birthdays',
        'The one who leaves at 8 PM',
      ],
      correctIndex: 1,
      note: 'Every great photo album exists because of her.',
    },
    {
      question: 'What is Alifiya’s favourite way to spend a Sunday afternoon?',
      options: [
        'Sorting tax spreadsheets',
        'Long brunch with friends & golden-hour walk',
        'Deep-cleaning the garage',
        'Watching paint dry',
      ],
      correctIndex: 1,
      note: 'Good food, great company, and zero rush.',
    },
    {
      question: 'If Alifiya wins a surprise weekend trip, what does she pack first?',
      options: [
        'Sunglasses & her favourite camera',
        'Three heavy encyclopaedias',
        'A desktop monitor',
        'Umbrella only',
      ],
      correctIndex: 0,
      note: 'Ready for golden hour at a moment’s notice.',
    },
    {
      question: 'What makes Alifiya laugh the hardest?',
      options: [
        'Inside jokes from 10 years ago',
        'Traffic reports',
        'Instruction manuals',
        'Weather forecasts',
      ],
      correctIndex: 0,
      note: 'One look across the table and everyone is in tears.',
    },
    {
      question: 'What word best captures Alifiya entering her 30s?',
      options: [
        'Quietly retiring',
        'Radiant, unstoppable & thriving',
        'Hiding from cake',
        'Becoming a morning person',
      ],
      correctIndex: 1,
      note: 'Thirty & Thriving was written for her!',
    },
  ];

  /* Editable 10-Round This or That */
  const THIS_OR_THAT_ROUNDS = [
    {
      prompt: 'Round 01 · Morning Ritual',
      optionA: { title: 'Iced Coffee', sub: 'Year-round essential', trait: 'chill' },
      optionB: { title: 'Hot Chai / Matcha', sub: 'Warm & comforting', trait: 'cozy' },
    },
    {
      prompt: 'Round 02 · Dream Escape',
      optionA: { title: 'Coastal Villa', sub: 'Ocean breeze & sunsets', trait: 'dreamer' },
      optionB: { title: 'Boutique City Break', sub: 'Art, cafés & nightlife', trait: 'spark' },
    },
    {
      prompt: 'Round 03 · Friday Night Vibe',
      optionA: { title: 'Candlelit Dinner Party', sub: 'Deep talks & toasts', trait: 'cozy' },
      optionB: { title: 'Rooftop Dance Floor', sub: 'Sparklers & throwbacks', trait: 'spark' },
    },
    {
      prompt: 'Round 04 · Birthday Cake Style',
      optionA: { title: 'Rich Dark Chocolate', sub: 'Decadent & timeless', trait: 'cozy' },
      optionB: { title: 'Vanilla Berry & Gold Leaf', sub: 'Light, floral & festive', trait: 'dreamer' },
    },
    {
      prompt: 'Round 05 · Photo Style',
      optionA: { title: 'Candid Laughter', sub: 'Unfiltered in-the-moment', trait: 'spark' },
      optionB: { title: 'Golden Hour Portrait', sub: 'Editorial & dreamy', trait: 'dreamer' },
    },
    {
      prompt: 'Round 06 · Weekend Schedule',
      optionA: { title: 'Spontaneous Road Trip', sub: 'Playlist ready, no map', trait: 'spark' },
      optionB: { title: 'Curated Brunch & Spa', sub: 'Slow luxury & rest', trait: 'cozy' },
    },
    {
      prompt: 'Round 07 · Wardrobe Mood',
      optionA: { title: 'Champagne Satin', sub: 'Effortless evening glam', trait: 'dreamer' },
      optionB: { title: 'Crisp Chic Denim', sub: 'Polished everyday cool', trait: 'chill' },
    },
    {
      prompt: 'Round 08 · Midnight Craving',
      optionA: { title: 'Truffle Fries', sub: 'Crispy & salty perfection', trait: 'chill' },
      optionB: { title: 'Warm Molten Brownie', sub: 'Sweet midnight treat', trait: 'cozy' },
    },
    {
      prompt: 'Round 09 · Soundtrack',
      optionA: { title: '2000s Pop Throwbacks', sub: 'Sing-along energy', trait: 'spark' },
      optionB: { title: 'Dreamy Acoustic Sunset', sub: 'Soft golden melodies', trait: 'dreamer' },
    },
    {
      prompt: 'Round 10 · Entering Thirty',
      optionA: { title: 'Big Adventures Ahead', sub: 'Passport stamped & bold', trait: 'spark' },
      optionB: { title: 'Peace, Joy & Loved Ones', sub: 'Deep roots & gratitude', trait: 'cozy' },
    },
  ];

  /* ------------------------------------------------------------------------
     DOM HELPERS
     ------------------------------------------------------------------------ */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------------
     1. CELESTIAL STARFIELD & GOLDEN PARTICLES CANVAS
     ------------------------------------------------------------------------ */
  function initCelestialCanvas() {
    const canvas = $('#celestial-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const stars = [];
    const STAR_COUNT = 70;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function seed() {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.6 + 0.5,
          alpha: Math.random() * 0.6 + 0.15,
          speedY: -(Math.random() * 0.18 + 0.04),
          twinkle: Math.random() * Math.PI * 2,
          hue: i % 4 === 0 ? '242, 184, 198' : '229, 193, 128',
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        s.twinkle += 0.018;
        s.y += s.speedY;
        if (s.y < -8) {
          s.y = height + 8;
          s.x = Math.random() * width;
        }
        const a = s.alpha * (0.65 + 0.35 * Math.sin(s.twinkle));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.hue}, ${a.toFixed(3)})`;
        ctx.fill();
      }
      if (!prefersReducedMotion) {
        requestAnimationFrame(draw);
      }
    }

    resize();
    seed();
    draw();
    window.addEventListener('resize', () => {
      resize();
      seed();
    });
  }

  /* ------------------------------------------------------------------------
     2. GOLDEN CONFETTI & FIREWORKS BURST ENGINE
     ------------------------------------------------------------------------ */
  const ConfettiEngine = (() => {
    const canvas = $('#confetti-canvas');
    const ctx = canvas ? canvas.getContext('2d') : null;
    const particles = [];
    let running = false;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function launchBurst(count = 110, originYRatio = 0.42) {
      if (!canvas || !ctx || prefersReducedMotion) return;
      resize();
      const colors = ['#e5c180', '#f5dcb0', '#e0a399', '#f2b8c6', '#fff6e3'];
      const cx = canvas.width / 2;
      const cy = canvas.height * originYRatio;

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 3;
        particles.push({
          x: cx + (Math.random() - 0.5) * 90,
          y: cy + (Math.random() - 0.5) * 40,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 3.5,
          w: Math.random() * 8 + 4,
          h: Math.random() * 5 + 3,
          rot: Math.random() * 360,
          vRot: (Math.random() - 0.5) * 10,
          color: colors[i % colors.length],
          life: 1,
          decay: Math.random() * 0.008 + 0.007,
        });
      }

      if (!running) {
        running = true;
        requestAnimationFrame(tick);
      }
    }

    function tick() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.16; // gentle gravity
        p.vx *= 0.99;
        p.rot += p.vRot;
        p.life -= p.decay;

        if (p.life <= 0 || p.y > canvas.height + 40) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }

      if (particles.length > 0) {
        requestAnimationFrame(tick);
      } else {
        running = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    window.addEventListener('resize', resize);
    resize();
    return { launchBurst };
  })();

  /* ------------------------------------------------------------------------
     3. GRAND ENTRY COUNTDOWN & TRANSITION
     ------------------------------------------------------------------------ */
  function initGrandEntry() {
    const entryEl = $('#grand-entry');
    const countdownEl = $('#entry-countdown');
    const captionEl = $('#entry-countdown-caption');
    const milestoneStage = $('.milestone-stage');
    const enterBtn = $('#enter-celebration-btn');
    const brandLink = $('#brand-home-link');

    if (!entryEl || !countdownEl || !enterBtn) return;

    const steps = ['27', '28', '29', '30'];
    let idx = 0;

    function runCountdown() {
      if (prefersReducedMotion) {
        countdownEl.textContent = '30';
        if (captionEl) captionEl.textContent = 'Three decades of grace & light';
        if (milestoneStage) milestoneStage.classList.add('celebrating');
        return;
      }

      const timer = window.setInterval(() => {
        idx++;
        if (idx < steps.length) {
          countdownEl.textContent = steps[idx];
          countdownEl.classList.add('pop');
          window.setTimeout(() => countdownEl.classList.remove('pop'), 240);
        }
        if (idx === steps.length - 1) {
          window.clearInterval(timer);
          if (captionEl) captionEl.textContent = 'Three decades of grace & light';
          if (milestoneStage) milestoneStage.classList.add('celebrating');
          ConfettiEngine.launchBurst(75, 0.36);
        }
      }, 480);
    }

    function enterCelebration() {
      ConfettiEngine.launchBurst(130, 0.45);
      if (MusicController && typeof MusicController.ensurePlayingOnGesture === 'function') {
        MusicController.ensurePlayingOnGesture();
      }
      entryEl.classList.add('entered');
      document.body.classList.remove('entry-locked');
      const surpriseSection = $('#surprise');
      if (surpriseSection) {
        surpriseSection.classList.add('in-view');
        window.setTimeout(() => {
          surpriseSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }, 320);
      }
    }

    enterBtn.addEventListener('click', enterCelebration);

    // Clicking the brand wordmark lets the visitor revisit the Grand Entry anytime
    if (brandLink) {
      brandLink.addEventListener('click', (e) => {
        e.preventDefault();
        entryEl.classList.remove('entered');
        document.body.classList.add('entry-locked');
        ConfettiEngine.launchBurst(60, 0.36);
      });
    }

    runCountdown();
  }

  /* ------------------------------------------------------------------------
     4. NAVIGATION, MOBILE HAMBURGER & SCROLL REVEAL
     ------------------------------------------------------------------------ */
  function initNavigation() {
    const mobileBtn = $('#mobile-menu-btn');
    const mobileDrawer = $('#mobile-drawer');
    const navLinks = $$('.nav-link, .mobile-nav-link');
    const sections = $$('.celebration-section');

    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        const expanded = mobileBtn.getAttribute('aria-expanded') === 'true';
        mobileBtn.setAttribute('aria-expanded', String(!expanded));
        mobileDrawer.hidden = expanded;
      });
    }

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (mobileDrawer && !mobileDrawer.hidden && mobileBtn) {
          mobileDrawer.hidden = true;
          mobileBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Reveal sections & highlight active nav link on scroll
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          });
        },
        { threshold: 0.1 }
      );

      sections.forEach((sec) => revealObserver.observe(sec));

      const activeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('id');
              navLinks.forEach((link) => {
                link.classList.toggle('active', link.getAttribute('data-section') === id);
              });
            }
          });
        },
        { rootMargin: '-35% 0px -50% 0px' }
      );

      sections.forEach((sec) => activeObserver.observe(sec));
    } else {
      sections.forEach((sec) => sec.classList.add('in-view'));
    }
  }

  /* ------------------------------------------------------------------------
     5. BACKGROUND MUSIC (YouTube IFrame API on load + Gesture Unlock + Fallback)
     ------------------------------------------------------------------------ */
     const MusicController = (() => {
  const audioEl = $('#bg-music');
  const headerBtn = $('#music-toggle-btn');
  const headerLabel = $('#music-btn-label');
  const headerPlayIcon = $('#music-icon-play');
  const headerPauseIcon = $('#music-icon-pause');

  const entryBtn = $('#entry-music-btn');
  const entryLabel = $('#entry-music-label');
  const entryPlayIcon = $('#entry-music-icon-play');
  const entryPauseIcon = $('#entry-music-icon-pause');

  let userPausedManually = false;
  let isPlaying = false;

  function updateUI(playing) {
    isPlaying = playing;

    [headerBtn, entryBtn].forEach(btn => {
      if (btn) {
        btn.setAttribute('aria-pressed', String(playing));
        btn.classList.toggle('playing', playing);
      }
    });

    if (headerLabel)
      headerLabel.textContent = playing ? 'Pause Music' : 'Play Music';

    if (entryLabel)
      entryLabel.textContent = playing ? 'Pause Music' : 'Play Music';

    if (headerPlayIcon) headerPlayIcon.classList.toggle('hidden', playing);
    if (headerPauseIcon) headerPauseIcon.classList.toggle('hidden', !playing);

    if (entryPlayIcon) entryPlayIcon.classList.toggle('hidden', playing);
    if (entryPauseIcon) entryPauseIcon.classList.toggle('hidden', !playing);
  }

  function playMusic() {
    if (!audioEl) return;

    userPausedManually = false;
    audioEl.volume = 0.4;

    audioEl.play().catch(() => updateUI(false));
  }

  function pauseMusic(manual = true) {
    if (manual) userPausedManually = true;

    if (audioEl) audioEl.pause();
    updateUI(false);
  }

  function toggleMusic() {
    if (isPlaying || (audioEl && !audioEl.paused)) {
      pauseMusic(true);
    } else {
      playMusic();
    }
  }

  function init() {
    if (!audioEl) return;

    audioEl.loop = true;
    audioEl.volume = 0.4;

    audioEl.addEventListener('play', () => updateUI(true));
    audioEl.addEventListener('pause', () => updateUI(false));
    audioEl.addEventListener('ended', () => {
      audioEl.currentTime = 0;
      playMusic();
    });

    if (headerBtn) headerBtn.addEventListener('click', toggleMusic);
    if (entryBtn) entryBtn.addEventListener('click', toggleMusic);

    // Start music on the first user interaction
    document.addEventListener('pointerdown', function unlockMusic() {
      document.removeEventListener('pointerdown', unlockMusic);

      if (!userPausedManually && !isPlaying) {
        playMusic();
      }
    }, { once: true });
  }

  return {
    init,
    pauseIfPlaying: () => {
      if (isPlaying) pauseMusic(false);
    },
    ensurePlayingOnGesture: () => {
      if (!userPausedManually && !isPlaying) playMusic();
    }
  };
})();
  // const MusicController = (() => {
  //   const audioEl = $('#bg-music');
  //   const headerBtn = $('#music-toggle-btn');
  //   const headerLabel = $('#music-btn-label');
  //   const headerPlayIcon = $('#music-icon-play');
  //   const headerPauseIcon = $('#music-icon-pause');

  //   const entryBtn = $('#entry-music-btn');
  //   const entryLabel = $('#entry-music-label');
  //   const entryPlayIcon = $('#entry-music-icon-play');
  //   const entryPauseIcon = $('#entry-music-icon-pause');

  //   let ytPlayer = null;
  //   let ytReady = false;
  //   let ytFailed = false;
  //   let pendingAutoStart = true;
  //   let isPlaying = false;
  //   let userPausedManually = false;
  //   let gestureListenerAttached = false;
  //   let fallbackCtx = null;
  //   let fallbackTimer = null;

  //   function updateUI(playing) {
  //     isPlaying = playing;
  //     const labelText = playing ? 'Pause Music' : 'Play Music';

  //     if (headerBtn) {
  //       headerBtn.setAttribute('aria-pressed', String(playing));
  //       headerBtn.classList.toggle('playing', playing);
  //     }
  //     if (headerLabel) headerLabel.textContent = labelText;
  //     if (headerPlayIcon) headerPlayIcon.classList.toggle('hidden', playing);
  //     if (headerPauseIcon) headerPauseIcon.classList.toggle('hidden', !playing);

  //     if (entryBtn) {
  //       entryBtn.setAttribute('aria-pressed', String(playing));
  //       entryBtn.classList.toggle('playing', playing);
  //     }
  //     if (entryLabel) entryLabel.textContent = labelText;
  //     if (entryPlayIcon) entryPlayIcon.classList.toggle('hidden', playing);
  //     if (entryPauseIcon) entryPauseIcon.classList.toggle('hidden', !playing);
  //   }

  //   function startWebAudioChimes() {
  //     const AudioCtx = window.AudioContext || window.webkitAudioContext;
  //     if (!AudioCtx) return;
  //     if (!fallbackCtx) fallbackCtx = new AudioCtx();
  //     if (fallbackCtx.state === 'suspended') fallbackCtx.resume();

  //     const notes = [261.63, 329.63, 392.0, 493.88, 523.25, 392.0];
  //     let step = 0;

  //     const playTone = () => {
  //       if (!fallbackCtx || !isPlaying) return;
  //       const osc = fallbackCtx.createOscillator();
  //       const gain = fallbackCtx.createGain();
  //       osc.type = 'sine';
  //       osc.frequency.value = notes[step % notes.length];
  //       step++;

  //       const now = fallbackCtx.currentTime;
  //       gain.gain.setValueAtTime(0.001, now);
  //       gain.gain.exponentialRampToValueAtTime(0.05, now + 0.15);
  //       gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

  //       osc.connect(gain);
  //       gain.connect(fallbackCtx.destination);
  //       osc.start(now);
  //       osc.stop(now + 1.65);
  //     };

  //     playTone();
  //     fallbackTimer = window.setInterval(playTone, 1100);
  //   }

  //   function stopWebAudioChimes() {
  //     if (fallbackTimer) {
  //       window.clearInterval(fallbackTimer);
  //       fallbackTimer = null;
  //     }
  //   }

  //   function stopFallbackAudio() {
  //     if (audioEl) audioEl.pause();
  //     stopWebAudioChimes();
  //   }

  //   function playFallbackAudio() {
  //     updateUI(true);
  //     if (audioEl) {
  //       audioEl.volume = 0.35;
  //       const playPromise = audioEl.play();
  //       if (playPromise && typeof playPromise.catch === 'function') {
  //         playPromise.catch(() => {
  //           startWebAudioChimes();
  //         });
  //       }
  //     } else {
  //       startWebAudioChimes();
  //     }
  //   }

  //   function playMusic() {
  //     userPausedManually = false;
  //     pendingAutoStart = true;

  //     if (ytReady && ytPlayer && !ytFailed) {
  //       stopFallbackAudio();
  //       try {
  //         ytPlayer.unMute();
  //         ytPlayer.setVolume(45);
  //         if (typeof ytPlayer.getCurrentTime === 'function' && ytPlayer.getCurrentTime() < YOUTUBE_START_SECONDS) {
  //           ytPlayer.seekTo(YOUTUBE_START_SECONDS, true);
  //         }
  //         ytPlayer.playVideo();
  //         updateUI(true);
  //         return;
  //       } catch (_err) {
  //         ytFailed = true;
  //       }
  //     }

  //     if (ytFailed) {
  //       playFallbackAudio();
  //     }
  //   }

  //   function pauseMusic(manual = true) {
  //     if (manual) {
  //       userPausedManually = true;
  //       pendingAutoStart = false;
  //     }
  //     if (ytReady && ytPlayer && !ytFailed) {
  //       try {
  //         ytPlayer.pauseVideo();
  //       } catch (_err) {
  //         // ignore
  //       }
  //     }
  //     stopFallbackAudio();
  //     updateUI(false);
  //   }

  //   function toggleMusic() {
  //     if (isPlaying) {
  //       pauseMusic(true);
  //     } else {
  //       if (!ytReady && !ytFailed) {
  //         // If YT is still initializing, allow immediate fallback if user explicitly clicks Play
  //         pendingAutoStart = true;
  //         updateUI(true);
  //       }
  //       playMusic();
  //     }
  //   }

  //   function attachFirstGestureUnlock() {
  //     if (gestureListenerAttached) return;
  //     gestureListenerAttached = true;

  //     const unlockHandler = (e) => {
  //       if (e.target && e.target.closest && e.target.closest('#music-toggle-btn, #entry-music-btn')) {
  //         document.removeEventListener('pointerdown', unlockHandler);
  //         document.removeEventListener('keydown', unlockHandler);
  //         return;
  //       }
  //       document.removeEventListener('pointerdown', unlockHandler);
  //       document.removeEventListener('keydown', unlockHandler);
  //       if (!userPausedManually && !isPlaying) {
  //         playMusic();
  //       }
  //     };

  //     document.addEventListener('pointerdown', unlockHandler, { passive: true });
  //     document.addEventListener('keydown', unlockHandler, { passive: true });
  //   }

  //   function ensurePlayingOnGesture() {
  //     if (!userPausedManually && !isPlaying) {
  //       playMusic();
  //     }
  //   }

  //   function initYouTubePlayer() {
  //     const mountEl = $('#yt-music-player');
  //     if (!mountEl || !YOUTUBE_MUSIC_ID) {
  //       ytFailed = true;
  //       attachFirstGestureUnlock();
  //       return;
  //     }

  //     const loadTimeout = window.setTimeout(() => {
  //       if (!ytReady && !ytFailed) {
  //         ytFailed = true;
  //         if (pendingAutoStart && !userPausedManually && !isPlaying) {
  //           attachFirstGestureUnlock();
  //         }
  //       }
  //     }, 4500);

  //     const createPlayer = () => {
  //       if (!window.YT || !window.YT.Player) return;
  //       const playerVars = {
  //         autoplay: 1,
  //         start: YOUTUBE_START_SECONDS,
  //         controls: 0,
  //         disablekb: 1,
  //         fs: 0,
  //         iv_load_policy: 3,
  //         loop: 1,
  //         playlist: YOUTUBE_MUSIC_ID,
  //         modestbranding: 1,
  //         rel: 0,
  //         playsinline: 1,
  //       };
  //       if (window.location && window.location.protocol && window.location.protocol.startsWith('http')) {
  //         playerVars.origin = window.location.origin;
  //       }

  //       ytPlayer = new window.YT.Player('yt-music-player', {
  //         height: '1',
  //         width: '1',
  //         videoId: YOUTUBE_MUSIC_ID,
  //         playerVars,
  //         events: {
  //           onReady: (event) => {
  //             ytReady = true;
  //             window.clearTimeout(loadTimeout);
  //             if (userPausedManually || !pendingAutoStart) return;

  //             stopFallbackAudio();
  //             try {
  //               event.target.unMute();
  //               event.target.setVolume(45);
  //               event.target.seekTo(YOUTUBE_START_SECONDS, true);
  //               event.target.playVideo();
  //             } catch (_err) {
  //               // Autoplay restricted until user interaction
  //             }

  //             window.setTimeout(() => {
  //               try {
  //                 const state = event.target.getPlayerState();
  //                 if (state === window.YT.PlayerState.PLAYING && !event.target.isMuted()) {
  //                   updateUI(true);
  //                 } else {
  //                   updateUI(false);
  //                   attachFirstGestureUnlock();
  //                 }
  //               } catch (_err) {
  //                 attachFirstGestureUnlock();
  //               }
  //             }, 600);
  //           },
  //           onStateChange: (event) => {
  //             if (!window.YT || !window.YT.PlayerState) return;
  //             if (event.data === window.YT.PlayerState.PLAYING) {
  //               stopFallbackAudio();
  //               updateUI(true);
  //             } else if (event.data === window.YT.PlayerState.PAUSED) {
  //               updateUI(false);
  //             } else if (event.data === window.YT.PlayerState.ENDED) {
  //               event.target.seekTo(YOUTUBE_START_SECONDS, true);
  //               event.target.playVideo();
  //             }
  //           },
  //           onError: () => {
  //             window.clearTimeout(loadTimeout);
  //             ytFailed = true;
  //             if (pendingAutoStart && !userPausedManually) {
  //               playFallbackAudio();
  //             }
  //           },
  //         },
  //       });
  //     };

  //     const prevReady = window.onYouTubeIframeAPIReady;
  //     window.onYouTubeIframeAPIReady = () => {
  //       if (typeof prevReady === 'function') prevReady();
  //       createPlayer();
  //     };

  //     if (window.YT && window.YT.Player) {
  //       createPlayer();
  //     } else {
  //       const tag = document.createElement('script');
  //       tag.src = 'https://www.youtube.com/iframe_api';
  //       tag.async = true;
  //       tag.onerror = () => {
  //         window.clearTimeout(loadTimeout);
  //         ytFailed = true;
  //         attachFirstGestureUnlock();
  //       };
  //       document.head.appendChild(tag);
  //     }

  //     attachFirstGestureUnlock();
  //   }

  //   function init() {
  //     if (headerBtn) headerBtn.addEventListener('click', toggleMusic);
  //     if (entryBtn) entryBtn.addEventListener('click', toggleMusic);
  //     initYouTubePlayer();
  //   }

  //   return {
  //     init,
  //     pauseIfPlaying: () => {
  //       if (isPlaying) pauseMusic(false);
  //     },
  //     ensurePlayingOnGesture,
  //   };
  // })();

  /* ------------------------------------------------------------------------
     6. SECTION 1: BIRTHDAY SURPRISE VIDEO PLAYER
     ------------------------------------------------------------------------ */
  function initSurpriseVideo() {
    const video = $('#surprise-video');
    const frame = $('#surprise-video-frame');
    const overlay = $('#video-poster-overlay');
    const bigPlayBtn = $('#video-big-play-btn');
    const ctaBtn = $('#play-surprise-cta');
    const playPauseBtn = $('#video-play-pause-btn');
    const playIcon = $('#ctrl-play-icon');
    const pauseIcon = $('#ctrl-pause-icon');
    const replayBtn = $('#video-replay-btn');
    const muteBtn = $('#video-mute-btn');
    const volOnIcon = $('#ctrl-vol-on');
    const volOffIcon = $('#ctrl-vol-off');
    const fullscreenBtn = $('#video-fullscreen-btn');
    const seekBar = $('#video-seek-bar');
    const timeReadout = $('#video-time-readout');
    const fallbackNote = $('#video-fallback-note');

    if (!video || !overlay) return;

    function formatTime(sec) {
      if (!Number.isFinite(sec)) return '00:00';
      const mins = Math.floor(sec / 60);
      const secs = Math.floor(sec % 60);
      return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function syncPlayIcons() {
      const paused = video.paused;
      if (playIcon && pauseIcon) {
        playIcon.classList.toggle('hidden', !paused);
        pauseIcon.classList.toggle('hidden', paused);
      }
    }

    function syncMuteIcons() {
      const muted = video.muted || video.volume === 0;
      if (volOnIcon && volOffIcon) {
        volOnIcon.classList.toggle('hidden', muted);
        volOffIcon.classList.toggle('hidden', !muted);
      }
    }

    function startPlayback() {
      MusicController.pauseIfPlaying();
      if (fallbackNote) fallbackNote.hidden = true;
      overlay.classList.add('is-hidden');

      if (video.error) {
        video.load();
      }

      const promise = video.play();
      if (promise && typeof promise.catch === 'function') {
        promise.catch(() => {
          // If browser blocks unmuted playback, retry muted cleanly
          video.muted = true;
          syncMuteIcons();
          video.play().catch(() => {
            overlay.classList.remove('is-hidden');
            if (fallbackNote) fallbackNote.hidden = false;
          });
        });
      }
    }

    overlay.addEventListener('click', startPlayback);
    if (bigPlayBtn) {
      bigPlayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        startPlayback();
      });
    }
    if (ctaBtn) {
      ctaBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        startPlayback();
      });
    }

    video.addEventListener('click', () => {
      if (video.paused) {
        startPlayback();
      } else {
        video.pause();
      }
    });

    if (playPauseBtn) {
      playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
          startPlayback();
        } else {
          video.pause();
        }
      });
    }

    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        video.currentTime = 0;
        startPlayback();
      });
    }

    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        syncMuteIcons();
      });
    }

    if (fullscreenBtn && frame) {
      fullscreenBtn.addEventListener('click', () => {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else if (frame.requestFullscreen) {
          frame.requestFullscreen();
        } else if (video.webkitEnterFullscreen) {
          video.webkitEnterFullscreen();
        }
      });
    }

    if (seekBar) {
      seekBar.addEventListener('input', () => {
        if (Number.isFinite(video.duration) && video.duration > 0) {
          video.currentTime = (Number(seekBar.value) / 100) * video.duration;
        }
      });
    }

    video.addEventListener('play', syncPlayIcons);
    video.addEventListener('pause', syncPlayIcons);
    video.addEventListener('ended', () => {
      syncPlayIcons();
      overlay.classList.remove('is-hidden');
    });

    video.addEventListener('loadedmetadata', () => {
      if (frame && video.videoWidth > 0 && video.videoHeight > 0) {
        frame.style.aspectRatio = `${video.videoWidth} / ${video.videoHeight}`;
      }
      if (timeReadout) {
        timeReadout.textContent = `00:00 / ${formatTime(video.duration)}`;
      }
    });

    video.addEventListener('timeupdate', () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        if (seekBar) seekBar.value = String((video.currentTime / video.duration) * 100);
        if (timeReadout) {
          timeReadout.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
        }
      }
    });

    video.addEventListener('error', () => {
      if (fallbackNote) fallbackNote.hidden = false;
    });
  }

  /* ------------------------------------------------------------------------
     7. SECTION 2: WATCH THE REELS & VERTICAL THEATRE MODAL
     ------------------------------------------------------------------------ */
  function initReels() {
    const grid = $('#reels-grid');
    const modal = $('#reel-modal');
    const stage = $('#reel-player-stage');
    const video = $('#reel-modal-video');
    const closeBtn = $('#reel-modal-close');
    const prevBtn = $('#reel-prev-btn');
    const nextBtn = $('#reel-next-btn');
    const playToggleBtn = $('#reel-stage-play-btn');
    const overlayEl = $('#reel-stage-overlay');
    const playSvg = $('#reel-play-svg');
    const pauseSvg = $('#reel-pause-svg');
    const muteBtn = $('#reel-mute-btn');
    const metaEl = $('#reel-modal-meta');
    const titleEl = $('#reel-modal-title');
    const captionEl = $('#reel-modal-caption');
    const progressEl = $('#reel-progress-fill');

    if (!grid || !modal || !video) return;

    let currentIdx = 0;

    // Render 9:16 Reel Cards
    grid.innerHTML = REELS_DATA.map(
      (reel, index) => `
      <article class="reel-card">
        <button
          type="button"
          class="reel-thumb-btn"
          data-reel-index="${index}"
          aria-label="Play reel: ${reel.title}"
        >
          <img
            src="${reel.thumb}"
            alt="${reel.title}"
            loading="lazy"
            referrerpolicy="no-referrer"
            class="reel-thumb-img"
          />
          <div class="reel-thumb-scrim"></div>
          <span class="reel-play-badge" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="7 4 20 12 7 20 7 4" />
            </svg>
          </span>
        </button>
        <div class="reel-card-footer">
          <p class="reel-card-meta">${reel.meta}</p>
          <h3 class="reel-card-title">${reel.title}</h3>
          <p class="reel-card-caption">${reel.caption}</p>
        </div>
      </article>
    `
    ).join('');

    function syncReelState() {
      const paused = video.paused;
      if (stage) stage.classList.toggle('is-playing', !paused);
      if (playSvg && pauseSvg) {
        playSvg.classList.toggle('hidden', !paused);
        pauseSvg.classList.toggle('hidden', paused);
      }
      if (muteBtn) {
        muteBtn.textContent = video.muted ? 'Muted' : 'Sound On';
      }
    }

    function loadReel(index, withTransition = false) {
      currentIdx = (index + REELS_DATA.length) % REELS_DATA.length;
      const item = REELS_DATA[currentIdx];

      if (withTransition && stage) {
        stage.classList.add('switching');
        window.setTimeout(() => stage.classList.remove('switching'), 220);
      }

      if (metaEl) metaEl.textContent = `Reel 0${currentIdx + 1} / 0${REELS_DATA.length}`;
      if (titleEl) titleEl.textContent = item.title;
      if (captionEl) captionEl.textContent = item.caption;
      if (progressEl) progressEl.style.width = '0%';

      video.poster = item.thumb;
      video.src = item.video;
      video.load();
      video.play().catch(() => {
        video.muted = true;
        syncReelState();
        video.play().catch(() => {});
      });
      syncReelState();
    }

    function openReelModal(index) {
      MusicController.pauseIfPlaying();
      modal.hidden = false;
      document.body.classList.add('modal-open');
      loadReel(index, false);
    }

    function closeReelModal() {
      video.pause();
      video.removeAttribute('src');
      modal.hidden = true;
      document.body.classList.remove('modal-open');
    }

    grid.addEventListener('click', (e) => {
      const btn = e.target.closest('.reel-thumb-btn');
      if (!btn) return;
      openReelModal(Number(btn.getAttribute('data-reel-index')));
    });

    if (overlayEl) {
      overlayEl.addEventListener('click', () => {
        if (video.paused) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }

    if (playToggleBtn) {
      playToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (video.paused) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }

    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        syncReelState();
      });
    }

    if (prevBtn) prevBtn.addEventListener('click', () => loadReel(currentIdx - 1, true));
    if (nextBtn) nextBtn.addEventListener('click', () => loadReel(currentIdx + 1, true));
    if (closeBtn) closeBtn.addEventListener('click', closeReelModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeReelModal();
    });

    video.addEventListener('play', syncReelState);
    video.addEventListener('pause', syncReelState);
    video.addEventListener('timeupdate', () => {
      if (progressEl && Number.isFinite(video.duration) && video.duration > 0) {
        progressEl.style.width = `${(video.currentTime / video.duration) * 100}%`;
      }
    });

    document.addEventListener('keydown', (e) => {
      if (modal.hidden) return;
      if (e.key === 'Escape') closeReelModal();
      if (e.key === 'ArrowLeft') loadReel(currentIdx - 1, true);
      if (e.key === 'ArrowRight') loadReel(currentIdx + 1, true);
    });
  }

  /* ------------------------------------------------------------------------
     8. SECTION 3: OUR PHOTOGRAPHS & FULLSCREEN LIGHTBOX
     ------------------------------------------------------------------------ */
  function initPhotoGallery() {
    const grid = $('#photo-grid');
    const filterBar = $('#photo-filter-bar');
    const lightbox = $('#photo-lightbox');
    const lbImg = $('#lightbox-img');
    const lbMeta = $('#lightbox-meta');
    const lbTitle = $('#lightbox-title');
    const lbCaption = $('#lightbox-caption');
    const lbCounter = $('#lightbox-counter');
    const lbClose = $('#lightbox-close');
    const lbPrev = $('#lightbox-prev');
    const lbNext = $('#lightbox-next');

    if (!grid || !lightbox) return;

    let activeCategory = 'all';
    let filteredPhotos = [...PHOTOS_DATA];
    let currentPhotoIdx = 0;

    function renderGallery() {
      filteredPhotos =
        activeCategory === 'all'
          ? [...PHOTOS_DATA]
          : PHOTOS_DATA.filter((p) => p.category === activeCategory);

      grid.innerHTML = filteredPhotos
        .map((photo, idx) => {
          const metaText = [photo.category, photo.date].filter(Boolean).join(' · ');
          const hasTitle = Boolean(photo.title && photo.title.trim());
          const hasCaption = Boolean(photo.caption && photo.caption.trim());
          const accessibleLabel = hasTitle
            ? `View photograph: ${photo.title}`
            : `View photograph${metaText ? `: ${metaText}` : ''}`;
          const altText =
            [photo.title, photo.caption].filter((val) => val && val.trim()).join(' — ') ||
            metaText ||
            'Memory photograph';
          const hasFooter = Boolean(metaText || hasTitle || hasCaption);

          return `
          <article class="photo-card">
            <button
              type="button"
              class="photo-card-btn"
              data-photo-index="${idx}"
              aria-label="${accessibleLabel}"
            >
              <div class="photo-card-media">
                <img
                  src="${photo.src}"
                  alt="${altText}"
                  loading="lazy"
                  referrerpolicy="no-referrer"
                  class="photo-card-img"
                />
              </div>
              ${
                hasFooter
                  ? `<div class="photo-card-overlay">
                ${metaText ? `<p class="photo-card-meta">${metaText}</p>` : ''}
                ${hasTitle ? `<h3 class="photo-card-title">${photo.title}</h3>` : ''}
                ${hasCaption ? `<p class="photo-card-caption">${photo.caption}</p>` : ''}
              </div>`
                  : ''
              }
            </button>
          </article>
        `;
        })
        .join('');
    }

    function showLightbox(idx) {
      if (filteredPhotos.length === 0) return;
      currentPhotoIdx = (idx + filteredPhotos.length) % filteredPhotos.length;
      const item = filteredPhotos[currentPhotoIdx];
      const metaText = [item.category, item.date].filter(Boolean).join(' · ');

      if (lbImg) {
        lbImg.src = item.src;
        lbImg.alt = item.title || metaText || 'Memory photograph';
      }
      if (lbMeta) {
        lbMeta.textContent = metaText;
        lbMeta.hidden = !metaText;
      }
      if (lbTitle) {
        lbTitle.textContent = item.title || '';
        lbTitle.hidden = !(item.title && item.title.trim());
      }
      if (lbCaption) {
        lbCaption.textContent = item.caption || '';
        lbCaption.hidden = !(item.caption && item.caption.trim());
      }
      if (lbCounter) lbCounter.textContent = `${currentPhotoIdx + 1} / ${filteredPhotos.length}`;

      lightbox.hidden = false;
      document.body.classList.add('modal-open');
    }

    function closeLightbox() {
      lightbox.hidden = true;
      document.body.classList.remove('modal-open');
    }

    if (filterBar) {
      filterBar.addEventListener('click', (e) => {
        const tab = e.target.closest('.filter-tab');
        if (!tab) return;
        activeCategory = tab.getAttribute('data-category') || 'all';
        $$('.filter-tab').forEach((btn) => {
          const isActive = btn === tab;
          btn.classList.toggle('active', isActive);
          btn.setAttribute('aria-selected', String(isActive));
        });
        renderGallery();
      });
    }

    grid.addEventListener('click', (e) => {
      const btn = e.target.closest('.photo-card-btn');
      if (!btn) return;
      showLightbox(Number(btn.getAttribute('data-photo-index')));
    });

    if (lbPrev) lbPrev.addEventListener('click', () => showLightbox(currentPhotoIdx - 1));
    if (lbNext) lbNext.addEventListener('click', () => showLightbox(currentPhotoIdx + 1));
    if (lbClose) lbClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showLightbox(currentPhotoIdx - 1);
      if (e.key === 'ArrowRight') showLightbox(currentPhotoIdx + 1);
    });

    renderGallery();
  }

  /* ------------------------------------------------------------------------
     9. SECTION 4: BIRTHDAY MESSAGES & FLOATING HEARTS
     ------------------------------------------------------------------------ */
  function initMessages() {
    const grid = $('#messages-grid');
    const heartsLayer = $('#hearts-layer');

    if (grid) {
      grid.innerHTML = MESSAGES_DATA.map(
        (msg) => `
        <article class="message-card ${msg.spanTwo ? 'span-two' : ''}">
          <div>
            <p class="message-card-meta">${msg.relation}</p>
            <p class="message-body ${msg.handwritten ? 'handwritten' : ''}">
              “${msg.text}”
            </p>
          </div>
          <p class="message-author">— ${msg.sender}</p>
        </article>
      `
      ).join('');
    }

    if (heartsLayer && !prefersReducedMotion) {
      const heartCount = 12;
      for (let i = 0; i < heartCount; i++) {
        const span = document.createElement('span');
        span.className = 'floating-heart';
        span.style.left = `${(i * 8.5 + Math.random() * 5) % 96}%`;
        span.style.animationDuration = `${9 + Math.random() * 7}s`;
        span.style.animationDelay = `${Math.random() * 8}s`;
        span.innerHTML =
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
        heartsLayer.appendChild(span);
      }
    }
  }

  /* ------------------------------------------------------------------------
     10. SECTION 5: FRIENDSHIP GAMES (Quiz, Memory Match, This or That)
     ------------------------------------------------------------------------ */
  function initGameTabs() {
    const tabs = $$('.game-tab');
    const panels = {
      quiz: $('#game-quiz'),
      memory: $('#game-memory'),
      'this-or-that': $('#game-this-or-that'),
    };

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-game');
        tabs.forEach((t) => {
          const isCurrent = t === tab;
          t.classList.toggle('active', isCurrent);
          t.setAttribute('aria-selected', String(isCurrent));
        });

        Object.entries(panels).forEach(([key, panel]) => {
          if (!panel) return;
          const active = key === target;
          panel.hidden = !active;
          panel.classList.toggle('active', active);
        });
      });
    });
  }

  /* Game 1: How Well Do You Know Alifiya? */
  function initQuizGame() {
    const container = $('#quiz-container');
    if (!container) return;

    let qIdx = 0;
    let score = 0;
    let answered = false;

    function getResultMessage(points, total) {
      const ratio = points / total;
      if (ratio >= 0.9) {
        return {
          title: 'Certified Alifiya Souvenir Keeper!',
          copy: 'You know every inside joke, coffee order, and dream itinerary by heart. Official Bestie Hall of Fame status unlocked!',
        };
      }
      if (ratio >= 0.6) {
        return {
          title: 'True Inner-Circle Friend!',
          copy: 'Impressive score! You definitely survived at least a few late-night heart-to-hearts and brunch debriefs together.',
        };
      }
      return {
        title: 'Time For a Catch-Up Brunch!',
        copy: 'A few playful mysteries remain—consider this your official excuse to book a celebratory coffee date with Alifiya soon!',
      };
    }

    function renderQuestion() {
      answered = false;
      const q = QUIZ_QUESTIONS[qIdx];
      const pct = ((qIdx + 1) / QUIZ_QUESTIONS.length) * 100;

      container.innerHTML = `
        <div class="quiz-header">
          <span class="tabular-nums">Question ${qIdx + 1} of ${QUIZ_QUESTIONS.length}</span>
          <span class="tabular-nums">Score: ${score}</span>
        </div>
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width: ${pct}%"></div>
        </div>
        <h3 class="quiz-question">${q.question}</h3>
        <div class="quiz-options">
          ${q.options
            .map(
              (opt, i) => `
            <button type="button" class="quiz-option-btn" data-opt-index="${i}">
              <span>${opt}</span>
              <span class="opt-status" aria-hidden="true"></span>
            </button>
          `
            )
            .join('')}
        </div>
        <div id="quiz-feedback" class="quiz-feedback" hidden>
          <p id="quiz-feedback-text"></p>
          <button id="quiz-next-btn" type="button" class="btn-primary">
            ${qIdx === QUIZ_QUESTIONS.length - 1 ? 'See Final Score' : 'Next Question'}
          </button>
        </div>
      `;

      const optionBtns = $$('.quiz-option-btn');
      const feedbackBox = $('#quiz-feedback');
      const feedbackText = $('#quiz-feedback-text');
      const nextBtn = $('#quiz-next-btn');

      optionBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          if (answered) return;
          answered = true;

          const chosen = Number(btn.getAttribute('data-opt-index'));
          const isCorrect = chosen === q.correctIndex;
          if (isCorrect) score++;

          optionBtns.forEach((b, idx) => {
            b.disabled = true;
            const status = b.querySelector('.opt-status');
            if (idx === q.correctIndex) {
              b.classList.add('correct');
              if (status) status.textContent = '✓ Correct';
            } else if (idx === chosen && !isCorrect) {
              b.classList.add('incorrect');
              if (status) status.textContent = '✕';
            }
          });

          if (feedbackText) {
            feedbackText.textContent = `${isCorrect ? 'Spot on!' : 'Close!'} ${q.note}`;
          }
          if (feedbackBox) feedbackBox.hidden = false;
        });
      });

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          if (qIdx < QUIZ_QUESTIONS.length - 1) {
            qIdx++;
            renderQuestion();
          } else {
            renderResult();
          }
        });
      }
    }

    function renderResult() {
      const verdict = getResultMessage(score, QUIZ_QUESTIONS.length);
      if (score >= 7) ConfettiEngine.launchBurst(80, 0.5);

      container.innerHTML = `
        <div class="game-result-view">
          <p class="section-meta">Quiz Complete · Alifiya Edition</p>
          <div class="result-score-big tabular-nums">${score} / ${QUIZ_QUESTIONS.length}</div>
          <h3 class="result-title">${verdict.title}</h3>
          <p class="result-copy">${verdict.copy}</p>
          <button id="quiz-restart-btn" type="button" class="btn-primary">Play Quiz Again</button>
        </div>
      `;

      const restartBtn = $('#quiz-restart-btn');
      if (restartBtn) {
        restartBtn.addEventListener('click', () => {
          qIdx = 0;
          score = 0;
          renderQuestion();
        });
      }
    }

    renderQuestion();
  }

  /* Game 2: Memory Match */
  function initMemoryGame() {
    const board = $('#memory-board');
    const movesEl = $('#memory-moves');
    const pairsEl = $('#memory-pairs');
    const timerEl = $('#memory-timer');
    const resetBtn = $('#memory-reset-btn');
    const playAgainBtn = $('#memory-play-again-btn');
    const winBanner = $('#memory-win-banner');
    const winSummary = $('#memory-win-summary');

    if (!board) return;

    const CARD_SYMBOLS = [
      {
        id: 'cake',
        label: 'Cake',
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/></svg>',
      },
      {
        id: 'heart',
        label: 'Love',
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
      },
      {
        id: 'star',
        label: 'Star',
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2"/></svg>',
      },
      {
        id: 'toast',
        label: 'Cheers',
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 22h8"/><path d="M12 15v7"/><path d="M5 3h14l-1.4 7a5.6 5.6 0 0 1-11.2 0L5 3Z"/></svg>',
      },
      {
        id: 'gift',
        label: 'Gift',
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>',
      },
      {
        id: 'camera',
        label: 'Memories',
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>',
      },
      {
        id: 'crown',
        label: 'Queen',
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>',
      },
      {
        id: 'music',
        label: 'Song',
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
      },
    ];

    let flippedTiles = [];
    let matchedCount = 0;
    let moves = 0;
    let seconds = 0;
    let timerId = null;
    let lockBoard = false;

    function formatElapsed(s) {
      return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
    }

    function stopTimer() {
      if (timerId) {
        window.clearInterval(timerId);
        timerId = null;
      }
    }

    function startTimerIfNeeded() {
      if (timerId) return;
      timerId = window.setInterval(() => {
        seconds++;
        if (timerEl) timerEl.textContent = formatElapsed(seconds);
      }, 1000);
    }

    function setupBoard() {
      stopTimer();
      flippedTiles = [];
      matchedCount = 0;
      moves = 0;
      seconds = 0;
      lockBoard = false;

      if (movesEl) movesEl.textContent = '0';
      if (pairsEl) pairsEl.textContent = '0 / 8';
      if (timerEl) timerEl.textContent = '00:00';
      if (winBanner) winBanner.hidden = true;

      const deck = [...CARD_SYMBOLS, ...CARD_SYMBOLS]
        .map((item) => ({ ...item, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort);

      board.innerHTML = deck
        .map(
          (card, idx) => `
        <button
          type="button"
          class="memory-tile"
          data-symbol="${card.id}"
          data-tile-index="${idx}"
          aria-label="Memory card ${idx + 1}"
        >
          <span class="memory-tile-inner">
            <span class="memory-face memory-front" aria-hidden="true">30</span>
            <span class="memory-face memory-back">
              ${card.svg}
              <span>${card.label}</span>
            </span>
          </span>
        </button>
      `
        )
        .join('');
    }

    board.addEventListener('click', (e) => {
      const tile = e.target.closest('.memory-tile');
      if (!tile || lockBoard) return;
      if (tile.classList.contains('flipped') || tile.classList.contains('matched')) return;

      startTimerIfNeeded();
      tile.classList.add('flipped');
      flippedTiles.push(tile);

      if (flippedTiles.length === 2) {
        moves++;
        if (movesEl) movesEl.textContent = String(moves);

        const [first, second] = flippedTiles;
        const isMatch = first.getAttribute('data-symbol') === second.getAttribute('data-symbol');

        if (isMatch) {
          first.classList.add('matched');
          second.classList.add('matched');
          flippedTiles = [];
          matchedCount++;
          if (pairsEl) pairsEl.textContent = `${matchedCount} / 8`;

          if (matchedCount === CARD_SYMBOLS.length) {
            stopTimer();
            ConfettiEngine.launchBurst(95, 0.45);
            if (winSummary) {
              winSummary.textContent = `You matched every birthday keepsake in ${moves} moves and ${formatElapsed(seconds)}!`;
            }
            if (winBanner) winBanner.hidden = false;
          }
        } else {
          lockBoard = true;
          window.setTimeout(() => {
            first.classList.remove('flipped');
            second.classList.remove('flipped');
            flippedTiles = [];
            lockBoard = false;
          }, 720);
        }
      }
    });

    if (resetBtn) resetBtn.addEventListener('click', setupBoard);
    if (playAgainBtn) playAgainBtn.addEventListener('click', setupBoard);

    setupBoard();
  }

  /* Game 3: This or That – Alifiya Edition */
  function initThisOrThatGame() {
    const container = $('#tot-container');
    if (!container) return;

    let roundIdx = 0;
    const picks = [];

    function getPersonaSummary() {
      const counts = { spark: 0, cozy: 0, dreamer: 0, chill: 0 };
      picks.forEach((p) => {
        counts[p.trait] = (counts[p.trait] || 0) + 1;
      });
      const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];

      if (top === 'spark') {
        return {
          title: 'The Celebration Spark!',
          copy: 'Always down for throwbacks, spontaneous road trips, and golden rooftop nights—you bring electric joy everywhere!',
        };
      }
      if (top === 'dreamer') {
        return {
          title: 'The Golden Hour Romantic!',
          copy: 'Coastal villas, champagne satin, and dreamy sunsets—you live for beauty, wonder, and cinematic memories.',
        };
      }
      return {
        title: 'The Warm Soul & Comfort Connoisseur!',
        copy: 'Candlelit dinners, rich chocolate, and deep talks with your favourite people—you make every moment feel like home.',
      };
    }

    function renderRound() {
      const round = THIS_OR_THAT_ROUNDS[roundIdx];
      const pct = ((roundIdx + 1) / THIS_OR_THAT_ROUNDS.length) * 100;

      container.innerHTML = `
        <div class="quiz-header">
          <span class="tabular-nums">Round ${roundIdx + 1} of ${THIS_OR_THAT_ROUNDS.length}</span>
          <span>Alifiya Edition</span>
        </div>
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width: ${pct}%"></div>
        </div>
        <h3 class="quiz-question">${round.prompt}</h3>
        <div class="tot-choices">
          <button type="button" class="tot-choice-btn" data-pick="A">
            <span class="tot-choice-label">${round.optionA.title}</span>
            <span class="tot-choice-sub">${round.optionA.sub}</span>
          </button>
          <button type="button" class="tot-choice-btn" data-pick="B">
            <span class="tot-choice-label">${round.optionB.title}</span>
            <span class="tot-choice-sub">${round.optionB.sub}</span>
          </button>
        </div>
      `;

      $$('.tot-choice-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const pickKey = btn.getAttribute('data-pick');
          const selected = pickKey === 'A' ? round.optionA : round.optionB;
          picks.push({ prompt: round.prompt, title: selected.title, trait: selected.trait });

          if (roundIdx < THIS_OR_THAT_ROUNDS.length - 1) {
            roundIdx++;
            renderRound();
          } else {
            renderSummary();
          }
        });
      });
    }

    function renderSummary() {
      const persona = getPersonaSummary();
      ConfettiEngine.launchBurst(80, 0.5);

      container.innerHTML = `
        <div class="game-result-view">
          <p class="section-meta">Your Alifiya Edition Vibe</p>
          <h3 class="result-title">${persona.title}</h3>
          <p class="result-copy">${persona.copy}</p>
          <div class="tot-summary-list">
            ${picks
              .map(
                (p) => `
              <div class="tot-summary-item">
                <span>${p.prompt}</span>
                <strong>${p.title}</strong>
              </div>
            `
              )
              .join('')}
          </div>
          <button id="tot-restart-btn" type="button" class="btn-primary">Play Again</button>
        </div>
      `;

      const restartBtn = $('#tot-restart-btn');
      if (restartBtn) {
        restartBtn.addEventListener('click', () => {
          roundIdx = 0;
          picks.length = 0;
          renderRound();
        });
      }
    }

    renderRound();
  }

  /* ------------------------------------------------------------------------
     INITIALIZE EXPERIENCE ON DOM READY
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    initCelestialCanvas();
    initGrandEntry();
    initNavigation();
    MusicController.init();
    initSurpriseVideo();
    initReels();
    initPhotoGallery();
    initMessages();
    initGameTabs();
    initQuizGame();
    initMemoryGame();
    initThisOrThatGame();
  });
})();
