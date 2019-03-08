'use strict';
const personBlock = document.querySelector('.personal-list');
const leadershipNav = document.querySelector('.leadership-navigation');
const leadershipIcon = document.querySelectorAll('.leadership-icon');


const spinner = document.querySelector('.spinner-overlay')

leadershipNav.addEventListener("click", changePersonal);


const toggleSpinner = () => spinner.classList.toggle('visible');
const toggleEventstUse = () => leadershipIcon.forEach(elem => elem.classList.toggle('disabled'));
const toggleBlockOpacity = () => personBlock.classList.toggle('invisible-block');


export function changePersonal(evt) {
    const targetBlock = evt.target;
    const activeItem = leadershipNav.querySelector('.leadership-active');

    toggleSpinner();
    toggleEventstUse();

    if(targetBlock.parentNode.nodeName === "DIV"){

        activeItem.classList.remove('leadership-active');
        targetBlock.classList.add('leadership-active');
        toggleBlockOpacity();
        personBlock.firstElementChild.remove();
        setTimeout(() => {
            toggleSpinner();
            
        if(targetBlock.parentNode.id === 'NC'){
            personBlock.insertAdjacentHTML('beforeend', runNCInfoCode);
        }
        else if(targetBlock.parentNode.id === 'ZNC_HQ'){
            personBlock.insertAdjacentHTML('beforeend', runZNCHQInfoCode);
        }
        else if(targetBlock.parentNode.id === 'ZNC_BT'){
            personBlock.insertAdjacentHTML('beforeend', runZNCBTInfoCode);
        }
        else if(targetBlock.parentNode.id === 'ZNC_ST'){
            personBlock.insertAdjacentHTML('beforeend', runZNCSTInfoCode);
        }
        else if(targetBlock.parentNode.id === 'ZNC_MPZ'){
            personBlock.insertAdjacentHTML('beforeend', runZNCMPZInfoCode);
        }
        else if(targetBlock.parentNode.id === 'ZNC_LT'){
            personBlock.insertAdjacentHTML('beforeend', runZNCLTInfoCode);
        }
        else if(targetBlock.parentNode.id === 'ZNC_AT'){
            personBlock.insertAdjacentHTML('beforeend', runZNCATInfoCode);
        }
        toggleEventstUse();
        toggleBlockOpacity();
        }, 2000);
    }
};

const runNCInfoCode = `<div class="person-block">
                            <div class="personal-photo-block">
                                <img src="../src/img/site_about/leadership/Ostapchuk_small.jpg" alt="Ostapchuk_small" class="person-photo">
                            </div>
                            <div class="personal-info-block">
                                <p class="person-position">Начальник 184 Навчального центру</p>
                                <p class="person-rank">полковник</p>
                                <p class="person-first_name">ОСТАПЧУК</p>
                                <p class="person-second_name">Олександр Васильович</p>
                                <p class="person-dressings">очолює керівництво Навчальним центром</p>
                            </div>
                        </div>`;

const runZNCHQInfoCode = `<div class="person-block">
                            <div class="personal-photo-block">
                                <img src="../src/img/site_about/leadership/Gorash_small.jpg" alt="Gorash_small" class="person-photo">
                            </div>
                            <div class="personal-info-block">
                                <p class="person-position">Начальник штабу – перший заступник начальника центру</p>
                                <p class="person-rank">полковник</p>
                                <p class="person-first_name">ГОРАШ</p>
                                <p class="person-second_name">Руслан Олексійович</p>
                                <p class="person-dressings">безпосередньо відповідає за роботу основного органу управління — штабу.</p>
                            </div>
                        </div>`;

const runZNCBTInfoCode = `<div class="person-block">
                            <div class="personal-photo-block">
                                <img src="../src/img/site_about/leadership/Gribov_small.jpg" alt="Gribov_small" class="person-photo">
                            </div>
                            <div class="personal-info-block">
                                <p class="person-position">ТВО заступника начальника центру</p>
                                <p class="person-rank">підполковник</p>
                                <p class="person-first_name">ГРІБОВ</p>
                                <p class="person-second_name">Вадим Олександрович</p>
                                <p class="person-dressings">відповідає за бойову та мобілізаційну готовність, за створення навчально-матеріальної бази, вдосконалення та утримання її в справному стані, за спортивну роботу та стан пожежної безпеки.</p>
                            </div>
                        </div>`;
        
const runZNCSTInfoCode = `<div class="person-block">
                            <div class="personal-photo-block">
                                <img src="../src/img/site_about/leadership/Molokov_small.jpg" alt="Molokov_small" class="person-photo">
                            </div>
                            <div class="personal-info-block">
                                <p class="person-position">Заступник начальника центру з навчальної роботи</p>
                                <p class="person-rank">полковник</p>
                                <p class="person-first_name">МОЛОКОВ</p>
                                <p class="person-second_name">Олександр Миколайович</p>
                                <p class="person-dressings">відповідає за планування, організацію та якість проведення навчальних занять.</p>
                            </div>
                        </div>`;

const runZNCMPZInfoCode = `<div class="person-block">
                            <div class="personal-photo-block">
                                <img src="../src/img/site_about/leadership/Bezborodov_small.jpg" alt="Bezborodov_small" class="person-photo">
                            </div>
                            <div class="personal-info-block">
                                <p class="person-position">Заступник начальника центру з морально-психологічного забезпечення</p>
                                <p class="person-rank">полковник</p>
                                <p class="person-first_name">БЕЗБОРОДОВ</p>
                                <p class="person-second_name">Володимир Олегович</p>
                                <p class="person-dressings">відповідає за військову дисципліну, морально-психологічний стан особового складу, організацію дозвілля військовослужбовців, членів їх сімей, та їх соціальний захист.</p>
                            </div>
                        </div>`;

const runZNCLTInfoCode = `<div class="person-block">
                            <div class="personal-photo-block">
                                <img src="../src/img/site_about/leadership/Balushka_small.jpg" alt="Balushka_small" class="person-photo">
                            </div>
                            <div class="personal-info-block">
                                <p class="person-position">Заступник начальника центру з озброєння</p>
                                <p class="person-rank">полковник</p>
                                <p class="person-first_name">БАЛУШКА</p>
                                <p class="person-second_name">Ігор Іванович</p>
                                <p class="person-dressings">відповідає за технічне забезпечення, технічний стан, правильну експлуатацію, ремонт та евакуацію озброєння, бойової та іншої техніки, облік і зберігання зброї та боєприпасів.</p>
                            </div>
                        </div>`;

const runZNCATInfoCode = `<div class="person-block">
                            <div class="personal-photo-block">
                                <img src="../src/img/site_about/leadership/Kojuhivski_small.jpg" alt="Kojuhivski_small" class="person-photo">
                            </div>
                            <div class="personal-info-block">
                                <p class="person-position">Заступник начальника центру з тилу</p>
                                <p class="person-rank">полковник</p>
                                <p class="person-first_name">КОЖУХІВСЬКИЙ</p>
                                <p class="person-second_name">Сергій Віталійович</p>
                                <p class="person-dressings">відповідає за матеріальне й технічне забезпечення, за підвезення всіх видів матеріальних засобів та за водопостачання, утримання казарм та іншого житлового фонду.</p>
                            </div>
                        </div>`;