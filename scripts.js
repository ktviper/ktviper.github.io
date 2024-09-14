// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const dateElement = document.getElementById('current-date');
    const today = new Date();
    const formattedDate = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
    dateElement.textContent = `今天是 ${formattedDate}`;
});
