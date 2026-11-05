/**
 * ===================================================================
 * SKRIP LOGIKA & INTERAKTIVITAS WEBSITE
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initContactForm();
  initAccordion();
  initSkillBarAnimation();
  setCurrentYear();
});

/**
 * 1. Mobile Navigation Menu Toggle
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');

    // Ubah ikon hamburger ke silang dan sebaliknya
    const icon = toggleBtn.querySelector('svg');
    if (icon) {
      if (!isExpanded) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
      } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
      }
    }
  });

  // Tutup menu saat klik di luar menu
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target) && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      const icon = toggleBtn.querySelector('svg');
      if (icon) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
      }
    }
  });
}

/**
 * 2. Contact Form Handler (Simulasi Pengiriman Pesan & Validasi)
 * Tanpa meminta nomor HP, email, ataupun alamat fisik.
 */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const senderName = document.getElementById('senderName')?.value.trim();
    const messageCategory = document.getElementById('messageCategory')?.value;
    const messageContent = document.getElementById('messageContent')?.value.trim();
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    if (!senderName || !messageContent) {
      showToast('Perhatian', 'Mohon lengkapi nama Anda dan isi pesan terlebih dahulu.', 'warning');
      return;
    }

    // Tampilkan status pengiriman (UX Loading state)
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spin" style="width:18px;height:18px;animation:spin 1s linear infinite;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" stroke-width="4" opacity="0.25"></circle>
        <path d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor"></path>
      </svg>
      Mengirimkan Pesan...
    `;

    setTimeout(() => {
      // Reset form
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      // Tampilkan toast berhasil
      showToast(
        'Pesan Terkirim!',
        `Terima kasih, ${senderName}. Pesan Anda seputar "${messageCategory}" telah kami terima secara langsung di sistem.`,
        'success'
      );
    }, 900);
  });
}

/**
 * 3. Accordion Interaktif untuk Pertanyaan Umum (FAQ)
 */
function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parentItem = header.parentElement;
      const isActive = parentItem.classList.contains('active');

      // Tutup accordion lain jika ingin mode single-open
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
      });

      if (!isActive) {
        parentItem.classList.add('active');
      }
    });
  });
}

/**
 * 4. Animasi Bar Keahlian (Skills) saat Scroll ke Tampilan
 */
function initSkillBarAnimation() {
  const skillFills = document.querySelectorAll('.skill-fill');
  if (skillFills.length === 0) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetWidth = entry.target.getAttribute('data-target-width') || '85%';
          entry.target.style.width = targetWidth;
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    skillFills.forEach(bar => {
      bar.style.width = '0%';
      observer.observe(bar);
    });
  } else {
    // Fallback untuk browser lawas
    skillFills.forEach(bar => {
      const targetWidth = bar.getAttribute('data-target-width') || '85%';
      bar.style.width = targetWidth;
    });
  }
}

/**
 * 5. Toast Notification System
 */
function showToast(title, message, type = 'success') {
  let toast = document.querySelector('.toast-notice');

  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  const iconSvg = type === 'success' 
    ? '<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>'
    : '<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>';

  toast.innerHTML = `
    <div class="toast-icon">${iconSvg}</div>
    <div>
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
  `;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

/**
 * 6. Set Tahun Otomatis di Footer
 */
function setCurrentYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
