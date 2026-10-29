/* ==========================================================================
   SPACE BACKGROUND ENGINE — INTERACTIVE COSMIC STARFIELD & NEBULA
   Multi-depth parallax starfield, twinkling celestial nodes, constellation
   connections, and realistic shooting stars with zero dependencies.
   ========================================================================== */

class SpaceBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.shootingStars = [];
    this.mouse = { x: -1000, y: -1000, targetX: 0, targetY: 0 };
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.isDark = true;
    this.lastShootingStarTime = Date.now();
    this.shootingStarInterval = 4000; // Average interval in ms

    this.init();
  }

  init() {
    this.resize();
    this.createStars();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.canvas.width = this.windowWidth * this.dpr;
    this.canvas.height = this.windowHeight * this.dpr;
    this.canvas.style.width = `${this.windowWidth}px`;
    this.canvas.style.height = `${this.windowHeight}px`;
    this.ctx.scale(this.dpr, this.dpr);

    // Re-check theme
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    this.isDark = theme === 'dark' || !theme || theme === 'space';
  }

  createStars() {
    this.stars = [];
    // Adjust density based on screen area
    const starCount = Math.floor((this.windowWidth * this.windowHeight) / 6000);
    const count = Math.min(Math.max(starCount, 120), 220);

    for (let i = 0; i < count; i++) {
      const depth = Math.random(); // 0 is far, 1 is close
      let color;
      
      // Celestial color spectrum
      const randColor = Math.random();
      if (randColor > 0.85) {
        color = { r: 67, g: 97, b: 238 }; // Cobalt Blue
      } else if (randColor > 0.70) {
        color = { r: 124, g: 58, b: 237 }; // Astral Violet
      } else if (randColor > 0.55) {
        color = { r: 56, g: 189, b: 248 }; // Supernova Cyan
      } else {
        color = { r: 248, g: 250, b: 252 }; // Pure Starlight White
      }

      this.stars.push({
        x: Math.random() * this.windowWidth,
        y: Math.random() * this.windowHeight,
        originX: 0,
        originY: 0,
        radius: depth > 0.85 ? Math.random() * 1.5 + 1.2 : Math.random() * 0.9 + 0.4,
        depth: depth,
        alpha: Math.random() * 0.6 + 0.2,
        baseAlpha: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        color: color,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08
      });
    }

    this.stars.forEach(s => {
      s.originX = s.x;
      s.originY = s.y;
    });
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createStars();
    }, { passive: true });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      // Parallax target (-1 to 1)
      this.mouse.targetX = (e.clientX / this.windowWidth - 0.5) * 30;
      this.mouse.targetY = (e.clientY / this.windowHeight - 0.5) * 30;
    }, { passive: true });

    // Track theme changes
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('data-theme');
      this.isDark = theme !== 'light';
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }

  spawnShootingStar() {
    const startX = Math.random() * (this.windowWidth * 0.8) + (this.windowWidth * 0.1);
    const startY = Math.random() * (this.windowHeight * 0.4);
    const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.3; // Roughly 45 degrees downward
    const speed = Math.random() * 10 + 14;
    const length = Math.random() * 80 + 70;

    this.shootingStars.push({
      x: startX,
      y: startY,
      dx: Math.cos(angle) * speed,
      dy: Math.sin(angle) * speed,
      length: length,
      alpha: 1,
      decay: Math.random() * 0.025 + 0.015,
      trail: []
    });

    this.lastShootingStarTime = Date.now();
    // Randomize next interval
    this.shootingStarInterval = Math.random() * 5000 + 4000;
  }

  drawConstellations() {
    // Connect nearby foreground stars
    const maxDistance = 90;
    const prominentStars = this.stars.filter(s => s.depth > 0.7);

    for (let i = 0; i < prominentStars.length; i++) {
      for (let j = i + 1; j < prominentStars.length; j++) {
        const s1 = prominentStars[i];
        const s2 = prominentStars[j];
        const dx = s1.x - s2.x;
        const dy = s1.y - s2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const lineAlpha = (1 - dist / maxDistance) * 0.12;
          this.ctx.beginPath();
          this.ctx.moveTo(s1.x, s1.y);
          this.ctx.lineTo(s2.x, s2.y);
          this.ctx.strokeStyle = this.isDark 
            ? `rgba(79, 110, 245, ${lineAlpha})` 
            : `rgba(49, 87, 232, ${lineAlpha * 0.8})`;
          this.ctx.lineWidth = 0.7;
          this.ctx.stroke();
        }
      }
    }

    // Connect stars near mouse cursor
    if (this.mouse.x > 0 && this.mouse.y > 0) {
      for (let i = 0; i < prominentStars.length; i++) {
        const s = prominentStars[i];
        const dx = s.x - this.mouse.x;
        const dy = s.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          const mouseAlpha = (1 - dist / 130) * 0.22;
          this.ctx.beginPath();
          this.ctx.moveTo(s.x, s.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.strokeStyle = `rgba(56, 189, 248, ${mouseAlpha})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.windowWidth, this.windowHeight);

    // Occasional shooting star
    if (Date.now() - this.lastShootingStarTime > this.shootingStarInterval) {
      this.spawnShootingStar();
    }

    // Draw Constellation Grid Web
    this.drawConstellations();

    // Render & Update Stars
    const time = Date.now() * 0.001;

    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];

      // Subtle natural drift
      star.x += star.vx;
      star.y += star.vy;

      // Wrap around edges
      if (star.x < 0) star.x = this.windowWidth;
      if (star.x > this.windowWidth) star.x = 0;
      if (star.y < 0) star.y = this.windowHeight;
      if (star.y > this.windowHeight) star.y = 0;

      // Parallax shift calculation
      const parallaxFactor = star.depth * 1.5;
      const targetRenderX = star.x + (this.mouse.targetX * parallaxFactor);
      const targetRenderY = star.y + (this.mouse.targetY * parallaxFactor);

      // Twinkle calculation
      const twinkle = Math.sin(time * 2 + star.twinklePhase) * 0.35 + 0.65;
      const currentAlpha = star.baseAlpha * twinkle;

      const { r, g, b } = star.color;

      // Glowing aura for prominent stellar nodes
      if (star.depth > 0.85 && this.isDark) {
        const gradient = this.ctx.createRadialGradient(
          targetRenderX, targetRenderY, 0,
          targetRenderX, targetRenderY, star.radius * 3.5
        );
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${currentAlpha * 0.8})`);
        gradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${currentAlpha * 0.2})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(targetRenderX, targetRenderY, star.radius * 3.5, 0, Math.PI * 2);
        this.ctx.fill();
      }

      // Star Core
      this.ctx.beginPath();
      this.ctx.arc(targetRenderX, targetRenderY, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = this.isDark
        ? `rgba(${r}, ${g}, ${b}, ${currentAlpha})`
        : `rgba(${Math.min(r, 60)}, ${Math.min(g, 70)}, ${Math.min(b, 120)}, ${currentAlpha * 0.85})`;
      this.ctx.fill();
    }

    // Render & Update Shooting Stars (Comets)
    for (let i = this.shootingStars.length - 1; i >= 0; i--) {
      const comet = this.shootingStars[i];

      // Draw glowing comet trail
      const tailX = comet.x - (comet.dx / Math.sqrt(comet.dx * comet.dx + comet.dy * comet.dy)) * comet.length;
      const tailY = comet.y - (comet.dy / Math.sqrt(comet.dx * comet.dx + comet.dy * comet.dy)) * comet.length;

      const gradient = this.ctx.createLinearGradient(comet.x, comet.y, tailX, tailY);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${comet.alpha})`);
      gradient.addColorStop(0.2, `rgba(75, 110, 245, ${comet.alpha * 0.8})`);
      gradient.addColorStop(0.6, `rgba(124, 58, 237, ${comet.alpha * 0.4})`);
      gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');

      this.ctx.beginPath();
      this.ctx.moveTo(comet.x, comet.y);
      this.ctx.lineTo(tailX, tailY);
      this.ctx.strokeStyle = gradient;
      this.ctx.lineWidth = 1.8;
      this.ctx.lineCap = 'round';
      this.ctx.stroke();

      // Comet Head Flare
      this.ctx.beginPath();
      this.ctx.arc(comet.x, comet.y, 2, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${comet.alpha})`;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = '#4361EE';
      this.ctx.fill();
      this.ctx.shadowBlur = 0; // Reset

      // Advance position
      comet.x += comet.dx;
      comet.y += comet.dy;
      comet.alpha -= comet.decay;

      // Remove expired comets
      if (comet.alpha <= 0 || comet.x > this.windowWidth + 100 || comet.y > this.windowHeight + 100) {
        this.shootingStars.splice(i, 1);
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new SpaceBackground('spaceBackgroundCanvas');
});

