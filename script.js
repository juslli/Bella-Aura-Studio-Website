const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = bookingForm.querySelector('input[type="text"]').value.trim();
  const telefone = bookingForm.querySelector('input[type="tel"]').value.trim();
  const servico = bookingForm.querySelector("select").value;
  const data = bookingForm.querySelector('input[type="date"]').value;
  const hora = bookingForm.querySelector('input[type="time"]').value;

  const mensagem =
    `Olá, gostaria de fazer um agendamento no Bella Aura Studio.%0A%0A` +
    `Nome: ${nome}%0A` +
    `Telefone: ${telefone}%0A` +
    `Serviço: ${servico}%0A` +
    `Data: ${data}%0A` +
    `Horário: ${hora}`;

  const whatsappURL = `https://wa.me/5561994358531?text=${mensagem}`;

  window.open(whatsappURL, "_blank");
});