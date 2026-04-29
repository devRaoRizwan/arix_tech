import { dynamicLines, serviceCards } from './data.js';

const textElement = document.getElementById('dynamic-text');
const serviceChips = document.getElementById('service-chips');
const portfolioList = document.getElementById('portfolio-list');
const navAnchors = document.querySelectorAll('.nav-item');

function createChips(items) {
  serviceChips.innerHTML = '';
  items.forEach((item) => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = item.title;
    serviceChips.appendChild(chip);
  });
}

function createPortfolio(cards) {
  portfolioList.innerHTML = '';
  cards.forEach((card) => {
    const element = document.createElement('article');
    element.className = 'card';
    element.innerHTML = `
      <h3>${card.title}</h3>
      <p>${card.body}</p>
    `;
    portfolioList.appendChild(element);
  });
}

function writeLine(element, line) {
  return new Promise((resolve) => {
    let index = 0;
    element.textContent = '';

    const interval = setInterval(() => {
      element.textContent += line[index];
      index += 1;
      if (index >= line.length) {
        clearInterval(interval);
        setTimeout(resolve, 1200);
      }
    }, 60);
  });
}

async function cycleText(element, lines) {
  let current = 0;
  while (true) {
    await writeLine(element, lines[current]);
    await new Promise((resolve) => setTimeout(resolve, 500));
    current = (current + 1) % lines.length;
  }
}

function attachScrollSpy() {
  const sections = document.querySelectorAll('main .panel');
  window.addEventListener('scroll', () => {
    let activeId = 'home';
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.35) {
        activeId = section.id;
      }
    });
    navAnchors.forEach((anchor) => {
      anchor.classList.toggle('active', anchor.getAttribute('href') === `#${activeId}`);
    });
  });
}

function attachNavigation() {
  navAnchors.forEach((anchor) => {
    anchor.addEventListener('click', () => {
      navAnchors.forEach((item) => item.classList.remove('active'));
      anchor.classList.add('active');
    });
  });
}

function init() {
  createChips(serviceCards);
  createPortfolio(serviceCards);
  attachNavigation();
  attachScrollSpy();
  cycleText(textElement, dynamicLines).catch(() => {});
}

init();
