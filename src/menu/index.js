export function menu() {
    console.log('Начало работы кода');

    document.body.style.cssText = "margin: 0; padding: 0;";

    console.log('Создание общего контейнера');
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
    container.style.cssText = "width: 1920px; height: 1080px; background-color: grey;";

createStartMenu();

function createStartMenu() {
    console.log("Создание стартового меню");

    const fragment = document.createDocumentFragment();
    const box = createBoxButton();
    box.style.cssText = "width: 640px; height: 640px; background-color: red;";
    console.log(box);

    createButton('join-btn', 'Войти в игру', ()=>{}, box);
    createButton('set-btn', 'Настройки', ()=>{}, box);
    createButton('exit-btn', 'Выйти', ()=>{}, box);

    fragment.appendChild(box);
    container.appendChild(fragment);
}

function createBoxButton() {
    const div = document.createElement('div');
    return div;
}

function createButton(classBtn, text, func, box) {
    const btn = document.createElement('button');

    btn.classList.add(classBtn);

    btn.textContent = text;

    btn.addEventListener('click', func);

    box.appendChild(btn);

    return btn;
}

return 'Код успешно отработан!';
}//ФУНКЦИЯ, КОТОРАЯ ДОЛЖНА БУДЕТ СОЗДАВАТЬ МЕНЮ