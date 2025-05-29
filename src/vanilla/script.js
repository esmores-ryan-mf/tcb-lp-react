// Import navigation data
import { data } from '../constants/links.js';
import strengthsData from '../constants/strengthDb.js';
import testimonialData from '../constants/testimonialDb.js';
import priceData from '../constants/priceDb.js';
import ScrollHint from 'scroll-hint';

document.addEventListener('DOMContentLoaded', function () {
  console.log('js is running');
  const hamburger = document.querySelector('.c-hamburger');
  const navMobile = document.querySelector('.c-nav-mobile');
  const mobileNavList = document.querySelector('.c-nav-mobile__list');
  const desktopNavList = document.querySelector('.c-nav-desktop__list');
  const strengthCardContainer = document.querySelector('.c-strength__card-container');
  const testimonialCardContainer = document.querySelector('.c-testimonial__card-container');
  const priceTableContainer = document.querySelector('.c-price__container');
  const body = document.body;

  const chevronIconHTML =
    '<svg class="c-nav-mobile__icon" viewBox="0 0 24 24" width="16" height="16"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" fill="none"/></svg>';
  const submenuChevronHTML =
    '<svg class="c-submenu__icon" viewBox="0 0 24 24" width="16" height="16"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" fill="none"/></svg>';
  const circlePlusIconHTML =
    '<svg class="c-price__icon" viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1" fill="none"/><path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="1"/></svg>';
  const circleMinusIconHTML =
    '<svg class="c-price__icon" viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1" fill="none"/><path d="M8 12h8" stroke="currentColor" stroke-width="1"/></svg>';

  function generateMobileNav() {
    data.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'c-nav-mobile__item';

      const link = document.createElement('a');
      link.href = '#';
      link.className = 'c-nav-mobile__link';

      const span = document.createElement('span');
      span.textContent = item.text;

      link.appendChild(span);
      link.innerHTML += chevronIconHTML;
      li.appendChild(link);
      mobileNavList.appendChild(li);
    });
  }

  function generateDesktopNav() {
    data.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'c-nav-desktop__item';

      if (item.subMenu) {
        // Item with submenu
        li.classList.add('c-nav-desktop__item--has-submenu');

        const span = document.createElement('span');
        span.className = 'c-nav-desktop__text';
        span.textContent = item.text;
        li.appendChild(span);

        // Create submenu
        const submenu = document.createElement('ul');
        submenu.className = 'c-submenu';

        item.subMenu.forEach((subItem) => {
          const subLi = document.createElement('li');
          subLi.className = 'c-submenu__item';

          const subLink = document.createElement('a');
          subLink.className = 'c-submenu__link';
          subLink.href = '#';

          const subSpan = document.createElement('span');
          subSpan.textContent = subItem.text;

          subLink.innerHTML = submenuChevronHTML;
          subLink.appendChild(subSpan);
          subLi.appendChild(subLink);
          submenu.appendChild(subLi);
        });

        li.appendChild(submenu);
      } else {
        const link = document.createElement('a');
        link.className = 'c-nav-desktop__link';
        link.textContent = item.text;
        link.href = '#';
        li.appendChild(link);
      }

      desktopNavList.appendChild(li);
    });
  }

  function generateStrengthCard() {
    strengthsData.forEach((item) => {
      const cardContainer = document.createElement('article');
      cardContainer.className = 'c-strength__card';

      const imageContainer = document.createElement('picture');
      imageContainer.className = 'c-strength__card-image-container';

      const source = document.createElement('source');
      source.srcset = item.image;
      source.media = '(min-width: 768px)';

      const image = document.createElement('img');
      image.src = item.image;
      image.alt = item.title;
      image.width = '335';
      image.height = '224';
      image.loading = 'lazy';

      imageContainer.appendChild(source);
      imageContainer.appendChild(image);

      const textContainer = document.createElement('div');
      textContainer.className = 'c-strength__card-text-container';

      const title = document.createElement('h3');
      title.textContent = item.title;

      const description = document.createElement('p');
      description.textContent = item.description;

      const link = document.createElement('a');
      link.href = '#';

      const button = document.createElement('button');
      button.textContent = '詳しく見る';

      const span = document.createElement('span');
      span.innerHTML = chevronIconHTML;

      link.appendChild(button);
      link.appendChild(span);

      textContainer.appendChild(title);
      textContainer.appendChild(description);
      textContainer.appendChild(link);

      cardContainer.appendChild(imageContainer);
      cardContainer.appendChild(textContainer);

      strengthCardContainer.appendChild(cardContainer);
    });
  }

  function generateTestimonialCard() {
    testimonialData.forEach((item) => {
      const cardContainer = document.createElement('article');
      cardContainer.className = 'c-testimonial__card';

      const imageContainer = document.createElement('picture');
      imageContainer.className = 'c-testimonial__card-image-container';

      const source = document.createElement('source');
      source.srcset = item.image;
      source.media = '(min-width: 768px)';

      const image = document.createElement('img');
      image.src = item.image;
      image.alt = item.title;
      image.width = '335';
      image.height = '224';
      image.loading = 'lazy';

      imageContainer.appendChild(source);
      imageContainer.appendChild(image);

      const textContainer = document.createElement('div');
      textContainer.className = 'c-testimonial__card-text-container';

      const description = document.createElement('p');
      description.textContent = item.description;

      textContainer.appendChild(description);

      cardContainer.appendChild(imageContainer);
      cardContainer.appendChild(textContainer);

      testimonialCardContainer.appendChild(cardContainer);
    });
  }

  function generatePriceTable() {
    const priceTable = document.createElement('article');

    const nameContainer = document.createElement('div');
    nameContainer.className = 'c-price__name-container';
    nameContainer.innerHTML = `
        <span>二重整形・目元整形</span>
        ${
          nameContainer.classList.contains('c-price__name-container--open')
            ? circleMinusIconHTML
            : circlePlusIconHTML
        }
    `;
    const scrollContainer = document.createElement('div');
    scrollContainer.className = 'c-price__scroll-container js-scrollable';

    const priceListTable = document.createElement('table');
    priceListTable.className = 'c-price__list-table';
    priceListTable.innerHTML = `
          <thead>
            <tr>
              <th>施術名</th>
              <th>概要</th>
              <th>備考</th>
              <th>料金</th>
            </tr>
          </thead>
          <tbody>
          ${priceData
            .map(
              (item) => `
            <tr>
              <td class="c-price__cell--title">${item.title}</td>
              <td>${item.description}</td>
              <td>${item.notes}</td>
              <td class="c-price__cell--price">${item.price}</td>
            </tr>
            `
            )
            .join('')}
          </tbody>`;

    scrollContainer.appendChild(priceListTable);
    priceTable.appendChild(nameContainer);
    priceTable.appendChild(scrollContainer);

    priceTableContainer.appendChild(priceTable);
    new ScrollHint('.js-scrollable', {
      suggestiveShadow: true,
      i18n: {
        scrollable: 'スクロールできます',
      },
    });
  }

  // Toggle mobile navigation
  function toggleState(className) {
    if (className === 'c-hamburger') {
      const isOpen = hamburger.classList.contains(`${className}--open`);
      if (!isOpen) {
        // Open menu
        hamburger.classList.add(`${className}--open`);
        navMobile.classList.add('c-nav-mobile--open');
        body.style.position = 'fixed';
      } else {
        // Close menu
        hamburger.classList.remove(`${className}--open`);
        navMobile.classList.remove('c-nav-mobile--open');
        body.style.position = 'relative';
      }
    } else if (className === 'c-price__scroll-container') {
      const scrollableContainer = document.querySelector('.c-price__scroll-container');
      const nameContainerElement = document.querySelector('.c-price__name-container'); // Cache the name container element

      // Determine current state based on scrollableContainer, as per original logic
      const isOpen = scrollableContainer.classList.contains('c-price__scroll-container--open');

      if (!isOpen) {
        nameContainerElement.classList.add('c-price__name-container--open');
        scrollableContainer.classList.add('c-price__scroll-container--open');
        // Update the icon to Minus (expanded state)
        nameContainerElement.innerHTML = `
            <span>二重整形・目元整形</span>
            ${circleMinusIconHTML}
        `;
      } else {
        nameContainerElement.classList.remove('c-price__name-container--open');
        scrollableContainer.classList.remove('c-price__scroll-container--open');
        // Update the icon to Plus (collapsed state)
        nameContainerElement.innerHTML = `
            <span>二重整形・目元整形</span>
            ${circlePlusIconHTML}
        `;
      }
    }
  }

  // Add click event to hamburger
  if (hamburger) {
    hamburger.addEventListener('click', () => toggleState('c-hamburger'));
  }
  // Add click event to price table
  if (priceTableContainer) {
    priceTableContainer.addEventListener('click', () => toggleState('c-price__scroll-container'));
  }

  // Initialize Functions
  generateMobileNav();
  generateDesktopNav();
  generateStrengthCard();
  generateTestimonialCard();
  generatePriceTable();

  new ScrollHint('.js-scrollable', {
    suggestiveShadow: true,
    i18n: {
      scrollable: 'スクロールできます',
    },
  });
});

// Hot reload support for development
if (import.meta.hot) {
  import.meta.hot.accept();
}
