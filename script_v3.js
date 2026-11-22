// 1. Показать / скрыть блок + сообщение
const showMoreBtn = document.getElementById("showMore");
const moreText = document.getElementById("moreText");
const actionStatus = document.getElementById("actionStatus");

if (showMoreBtn && moreText && actionStatus) {
  showMoreBtn.addEventListener("click", () => {
    const isHidden = moreText.classList.toggle("d-none");
    showMoreBtn.textContent = isHidden ? "Подробнее" : "Скрыть";
    actionStatus.textContent = isHidden ? "Блок скрыт." : "Блок открыт.";
  });
}

// 2. Вывод карточек из массива
const projectsList = [
  {
    title: "Сайт к первой аттестации",
    desc: "Базовая вёрстка с фоновой картинкой и навигацией.",
    badge: "HTML / CSS"
  },
  {
    title: "Интерактив на JS",
    desc: "Кнопки, рендер списка из данных и проверка формы.",
    badge: "JavaScript"
  },
  {
    title: "GitHub Pages",
    desc: "Публикация и обновление готового сайта по ссылке.",
    badge: "Deploy"
  }
];

const projectsContainer = document.getElementById("projects");

if (projectsContainer) {
  projectsContainer.innerHTML = projectsList
    .map(
      (item) => `
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="h6 card-title">${item.title}</h3>
            <p class="card-text small text-secondary">${item.desc}</p>
            <span class="badge text-bg-light text-dark">${item.badge}</span>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// 3. Проверка формы без перезагрузки
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("userName");
    const emailInput = document.getElementById("userEmail");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";

    if (!name) {
      formFeedback.className = "mt-2 small text-danger";
      formFeedback.textContent = "Введи имя.";
      nameInput?.focus();
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formFeedback.className = "mt-2 small text-danger";
      formFeedback.textContent = "Введи нормальный email.";
      emailInput?.focus();
      return;
    }

    formFeedback.className = "mt-2 small text-success";
    formFeedback.textContent = `Готово, ${name} — без перезагрузки.`;
    contactForm.reset();
  });
}
