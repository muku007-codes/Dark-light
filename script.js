var checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});