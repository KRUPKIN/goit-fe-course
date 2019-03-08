'use strict';

import { create } from "domain";

const infoBlock = document.querySelector('.info-block');
const aboutList = document.querySelector('.about-list');
const linklist = document.querySelectorAll('.item-link');
const spinner = document.querySelector('.spinner-overlay')

aboutList.addEventListener("click", changePart);

const toggleSpinner = () => spinner.classList.toggle('visible');
const toggleEventstUse = () => linklist.forEach(elem => elem.classList.toggle('disabled'));
const toggleBlockOpacity = () => infoBlock.classList.toggle('invisible-block');


export function changePart(evt){ 
    const targetPart = evt.target;
    const activeItem = aboutList.querySelector('.active-link');
    toggleSpinner();
    toggleEventstUse();


        if(targetPart.nodeName === "SPAN"){
            activeItem.classList.remove('active-link');
            targetPart.classList.add('active-link');
            toggleBlockOpacity();
            infoBlock.firstElementChild.remove();
            setTimeout(() => {
                toggleSpinner();
                
            if(targetPart.id === 'leadership'){
                infoBlock.insertAdjacentHTML('beforeend', runLeadershipCode);
                const leadershipNav = document.querySelector('.leadership-navigation');
                const personBlock = document.querySelector('.personal-list');

                leadershipNav.addEventListener("click", (evt) => {
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
                });

            }
            else if(targetPart.id === 'aboutUs'){
                infoBlock.insertAdjacentHTML('beforeend', runAboutUsCode);
            }
            else if(targetPart.id === 'structure'){
                infoBlock.insertAdjacentHTML('beforeend', runStructureCode);
                const structureItemsBlock = document.querySelector(".structure-items-block");
                structureItemsBlock.addEventListener('click', (evt) => {
                    const eventTarget = evt.target;
     
                    if(eventTarget.nodeName === "IMG"){
                        const main = document.querySelector("main");
                        const modalWindowBack = document.createElement("div");
                        modalWindowBack.classList.add("modal-window-back");
                        main.appendChild(modalWindowBack);

                        const modalWindow = document.createElement("div");
                        modalWindow.classList.add("modal-window");
                        modalWindowBack.appendChild(modalWindow);

                        const modalButton = document.createElement("button");
                        modalButton.classList.add("modal-button");
                        modalButton.textContent = "X"
                        modalWindow.appendChild(modalButton);

                        modalButton.addEventListener("click", (evt) =>{
                            modalWindowBack.remove()
                        })

                        const aboutUnitInfo = document.createElement("div");
                        aboutUnitInfo.classList.add("unit-info")
                        modalWindow.appendChild(aboutUnitInfo);

                        const imageUnit = document.createElement('img');
                        imageUnit.classList.add("unit-img")
                        const textUnit = document.createElement('p');
                        textUnit.classList.add("unit-text")


                        aboutUnitInfo.appendChild(imageUnit, textUnit);



                        if(eventTarget.id === "2615"){

                            showModalfromHQ(modalWindow);
                        }
                    }
                })
            }
            else if(targetPart.id === 'history'){
                infoBlock.insertAdjacentHTML('beforeend', runHistoryCode);
            }
            else if(targetPart.id === 'activity'){
                infoBlock.insertAdjacentHTML('beforeend', runActivityCode);
            }
            toggleEventstUse();
            toggleBlockOpacity();
        }, 2000);
        }
}

const runLeadershipCode = `<div class="block-wrapper">
                                <div class="leadership-navigation">
                                    <div class="leadership-icon" id="NC">
                                        <img src="../src/img/icon/leadership/1.svg" alt="" class="leadership-img leadership-active">
                                    </div>
                                    <div class="leadership-icon" id="ZNC_HQ">
                                        <img src="../src/img/icon/leadership/2.svg" alt="" class="leadership-img">
                                    </div>
                                    <div class="leadership-icon" id="ZNC_BT">
                                        <img src="../src/img/icon/leadership/3.svg" alt="" class="leadership-img">
                                    </div>
                                    <div class="leadership-icon" id="ZNC_ST">
                                        <img src="../src/img/icon/leadership/4.svg" alt="" class="leadership-img">
                                    </div>
                                    <div class="leadership-icon" id="ZNC_MPZ">
                                        <img src="../src/img/icon/leadership/5.svg" alt="" class="leadership-img">
                                    </div>
                                    <div class="leadership-icon" id="ZNC_LT">
                                        <img src="../src/img/icon/leadership/6.svg" alt="" class="leadership-img">
                                    </div>
                                    <div class="leadership-icon" id="ZNC_AT">
                                        <img src="../src/img/icon/leadership/7.svg" alt="" class="leadership-img">
                                    </div>   
                                </div>
                                <div class="personal-list">
                                    <div class="person-block">
                                        <div class="personal-photo-block">
                                            <img src="../src/img/site_about/leadership/Ostapchuk_small.jpg" alt="Ostapchuk_small" class="person-photo">
                                        </div>
                                        <div class="personal-info-block">
                                            <p class="person-position">Начальник 184 Навчального центру</p>
                                            <p class="person-rank">полковник</p>
                                            <p class="person-first_name">ОСТАПЧУК</p>
                                            <p class="person-second_name">Олександр Васильович</p>
                                            <p class="person-dressings">очолює керівництво Навчальним центром.</p>
                                        </div>
                                    </div>     
                                </div>      
                                </div>
                                </div>  
                                </div>`


const runAboutUsCode = `<div class="block-wrapper">
                            <div class="about-block">
                                <h2 class="about-title">184-ий Навчальний центр – «кузня кадрів» для сил АТО</h2>
                                <span class="about-text-block">184-ий Навчальний центр знаходиться у селі Старичі Яворівського району Львівської області. Підготовка військовослужбовців відбувається на потужній навчально - матеріальній базі, до складу якої входять вогневі містечка й військові стрільбища, навчально-тренувальні комплекси інженерної та легководолазної підготовки, тренувальний комплекс для підготовки артилеристів, комплекс психологічної підготовки, авто- і танкодроми, підривні поля тощо.</span>
                                
                                <div class="about-photo-block">
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_about/about/Photo_tran (1).JPG" alt="hostel">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_about/about/Photo_tran (5).JPG" alt="hostel">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_about/about/Photo_tran (6).JPG" alt="hostel">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_about/about/Photo_tran (4).JPG" alt="hostel">
                                    </div>

                                </div>
                                
                                <span class="about-text-block">В інфрмаструктурі 184 Навчального центру для проживання військовослужбовців військової служби за контрактом триває процес розбудови службового житла ініційованого Президентом України П.Порошенком. На сьогоднішній день вже збудовано 4 гуртожитка за стандартами армій країн членів блоку НАТО</span>

                                <div class="about-photo-block">
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_about/about/hostel (2).jpg" alt="hostel">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_about/about/hostel (3).jpg" alt="hostel">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_about/about/hostel (4).jpg" alt="hostel">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_about/about/hostel (1).jpg" alt="hostel">
                                    </div>
                                </div>                                          

                                <span class="about-text-block">Серед особового складу 184-го Навчального центру понад 70% військовослужбовців з числа постійного складу перебували у зоні проведення Антитерористичної операції (Операції обєднаних сил), троє з них – старший лейтенант Павло Котенко, старший солдат Ярослав Васюта та солдат Дмитро Федонюк – є кавалерами ордена «За мужність» ІІІ ступеня. Нині всі вони, а також понад 2 тисячі досвідчених командирів, фахових інструкторів та професійних викладачів передають свій досвід і знання курсантам центру - мобілізованим, строковикам та контрактникам.</span>

                                <span class="about-text-block">Від сумлінності та відповідальності колективу 184-го Навчального центру залежить боєздатність підрозділів, які на Сході країни боронять мирне життя українських громадян.</span>
                                </div>
                            </div>
                        </div>
                    </div>`


const runStructureCode = `<div class="block-wrapper">
                            <div class="structure-block">
                            <h2 class="structure-block-title">У нас одна ціль на всіх</h2>
                            <p class="structure-text-header">На сьогоднішній день керівництвом держави здійснюються заходи, щодо реформування Збройних сил України до умов сьогодення і приведення їх до єдиного стандарту країн північного альянсу</p>
                            <p class="structure-block-text">Разом з тим постійно здійснюється реформування структури 184-го Навчального центру. На сьогоднішній день в склад центру входять:</p>
                            <div class="structure-items-block">
                                <div class="infantry-regimen structure-item" >
                                    <img src="../src/img/svg/2615.svg" alt="" class="structure-item-img" id="2615">
                                </div>
                                <div class="infantry-regimen structure-item" >
                                    <img src="../src/img/svg/3211.svg" alt="" class="structure-item-img" id="3211">
                                </div>
                                <div class="infantry-regimen structure-item" >
                                    <img src="../src/img/svg/3618.svg" alt="" class="structure-item-img" id="3618">
                                </div>
                                <div class="infantry-regimen structure-item" >
                                    <img src="../src/img/svg/2600.svg" alt="" class="structure-item-img" id="2600">
                                </div>
                                <div class="infantry-regimen structure-item" >
                                    <img src="../src/img/svg/4138.svg" alt="" class="structure-item-img" id="4138">
                                </div>
                            </div>
                    </div>`


const runHistoryCode = `<div class="block-wrapper">
                            <div class="history-block">
                            <h2 class="history-block-title">На етапі становлення</h2>

                            <span class="history-block-text">184-ий Навчальний центр Національної академії сухопутних військ імені гетьмана Петра Сагайдачного сформований 31 серпня 2012 року на підставі Директиви Міністра оборони України на фондах військової частини А1491.</span>

                            <span class="history-block-text">Завданням 184-го Навчального центру була підготовка військовослужбовців-контрактників за програмами базової та фахової підготовки за такими спеціальностями:</span>

                            <ul class="history-block-list">
                                <li class="history-block-list_item">інженерна справа;</li>
                                <li class="history-block-list_item">радіаційний захист;</li>
                                <li class="history-block-list_item">хімічний захист;</li>
                                <li class="history-block-list_item">біологічний захист;</li>
                                <li class="history-block-list_item">топогеодезичне забезпечення;</li>
                                <li class="history-block-list_item">навігаційне забезпечення.</li>
                            </ul>
                                    
                            <span class="history-block-text">Загалом у 2012-13 роках Навчальний центр у Старичах навчав солдатів та сержантів за 88 військово-обліковими спеціальностями, а одночасну підготовку в ньому могли проходити понад 500 військовослужбовців. Від 2012 до 2014 року центр підготував для всіх видів Збройних Сил України понад 3 тисячі висококваліфікованих фахівців.</span>

                            <span class="history-block-text">Із кінця січня 2015 року 184-й Навчальний центр розпочав прийом та підготовку військовослужбовців призваних на службу під час часткової мобілізації, які поповнили лави Збройних Сил України. Більшість із них продовжили подальшу службу в зоні проведення Антитерористичної операції.</span>

                            <span class="history-block-text"> З початку 2015 року навчання у 184-ому Навчальному центрі Національної академії сухопутних військ імені гетьмана Петра Сагайдачного відбувається в дев’ятьох навчальних відділеннях.</span>

                            <span class="history-block-text">З квітня 2015 року 184-й Навчальний центр розпочав підготовку строковиків, для військових частин Збройних Сил України.</span>
                            <span class="history-block-text">На початок 2018 року року Навчальний центр закінчив процер реформування за новою організаційною структурою і сьогодні здійснює підготовку професіоналів військової справи, які становлять можуть надати фору будь-яким військовим формуванням Світу.</span>
                            </div>    
                    </div>`


const runActivityCode = `<div class="block-wrapper">
                            <div class="activity-block">
                            <h2 class="activity-block-title">Наша служба - заради мирного неба</h2>
                                <p class="activity-text-header">Головним завданням підготовки у 184-ому Навчальному центрі є навчання курсантів за посадою, на яку вони призначаються. Підготовка охоплює весь комплекс теоретичних знань і практичних навиків, які їм необхідні для подальшого проходження служби у військах на відповідних посадах. Основна увага приділяється спеціальній (професійній) підготовці. Знання та навички, набуті за предметами загальновійськової підготовки, удосконалюються в ході комплексних занять із тактичної та вогневої підготовки.</p>
                                <h4 class="activity-block-subtitle">Навчальна робота</h4>
                                <h6 class="activity-list-toptitle">По завершенні навчання курсант 184-го Навчального центру повинен знати:</h6>
                                <ul>
                                    <li class="activity-list-item">основи загальновійськового бою;</li>
                                    <li class="activity-list-item">вимоги Бойових статутів щодо дій підрозділів у різних видах бою;</li>
                                    <li class="activity-list-item">основи та правила стрільби, будову штатної зброї та її матеріальну частину;</li>
                                    <li class="activity-list-item">обов’язки військовослужбовців щодо дотримання заходів безпеки;</li>
                                    <li class="activity-list-item">порядок підготовки озброєння бойової машини до виконання завдань за призначенням;</li>
                                    <li class="activity-list-item">порядок обслуговування озброєння, вузлів і агрегатів бойової машини;</li>
                                    <li class="activity-list-item">порядок використання засобів індивідуального захисту;</li>
                                    <li class="activity-list-item">правила ведення переговорів на штатних засобах зв’язку, способи орієнтування на місцевості;</li>
                                    <li class="activity-list-item">порядок та способи надання першої медичної допомоги.</li>
                                </ul>
                                
                                <div class="about-photo-block">
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_photo/study/01.jpg" alt="study">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_photo/study/02.jpg" alt="study">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_photo/study/03.jpg" alt="study">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_photo/study/04.jpg" alt="study">
                                    </div>
                                </div>     
                                
                                <h6 class="activity-list-toptitle">А також уміти:</h6>
                                <ul>
                                    <li class="activity-list-item">правильно діяти у складній обстановці бою на різноманітній місцевості вдень та вночі;</li>
                                    <li class="activity-list-item">обирати та маскувати вогневу позицію;</li>
                                    <li class="activity-list-item">вести спостереження, виявляти й уражати цілі вдень і вночі;</li>
                                    <li class="activity-list-item">приводити озброєння бойової машини до нормального бою, усувати прості затримки і несправності під час стрільби.</li>
                                </ul>

                                <h4 class="activity-block-subtitle">Морально-психологічне забезпечення</h4>
                                <p class="activity-text-header">Виховна робота у 184-ому Навчальному центрі спрямована на формування і розвиток у військовослужбовців патріотизму, вірності й відданості Військовій присязі, поваги до історії та культури українського народу.</p>
                                <p class="activity-block-text">Виховну роботу в підрозділах 184-го Навчального центру організовують і проводять понад 80 досвідчених офіцерів структур морально-психологічного забезпечення, які здійснюють морально–психологічний супровід навчально–виховного процесу курсантів Навчального центру, забезпечують створення здорової морально-психологічної атмосфери у військових колективах та додержання військової дисципліни у підрозділах, виховують особовий склад на прикладах героїчних вчинків сучасних героїв – учасників АТО. Крім того, вони постійно здійснюють інформування особового складу про ситуацію в Україні і світі та організовують протидію інформаційним ворожим операціям.</p>
                                <div class="about-photo-block">

                                <p class="activity-block-text">Для належної організації та проведення заходів у 184-му центрі створено потужну базу виховної роботи: тут працюють три клуби, дві бібліотеки, у містечку «Базове» функціонує кімната Бойової слави, а у кожному містечку діють довідково-інформаційні центри.</p>
                                <p class="activity-block-text">Важливий напрямок роботи 184-го Навчального центру - реалізація духовних потреб військовослужбовців. Навчальний центр тісно співпрацює з Львівським Центром Військового Капеланства Української греко-католицької церкви та церквою Святої Трійці Української православної церкви села Старичі. Разом із військовими капеланами у 2014 – 2018 роках курсанти Навчального центру здійснили паломництва до християнських святинь у Зарваниці, Крехові і Страдчі.</p>
                                <div class="about-photo-block">
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_photo/religion/01.jpg" alt="religion">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_photo/religion/05.jpg" alt="religion">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_photo/religion/03.jpg" alt="religion">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_photo/religion/04.jpg" alt="religion">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_photo/religion/02.jpg" alt="religion">
                                    </div>
                                </div>     
                                <p class="activity-block-text">Щотижня з концертними програмами 184-й Навчальний центр відвідують творчі колективи міст і сіл Яворівського району, перед курсантами центру виступали зірки української естради - скрипаль Олександр Божик, співаки Андріана, Оксана Муха, Ірина Доля, Теодор Кукурудза, Софія Федина, Наталка Самсонова, Олександр Шевченко, соліст гурту «Тінь сонця» Сергій Василюк, гурт «Двіджа», «Ойкумена», а також творчі колективи військового оркестру Національної академії сухопутних військ імені гетьмана Петра Сагайдачного та 58-го Львівського будинку офіцерів.</p>
                                <div class="about-photo-block">
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_photo/culture/01.jpg" alt="culture">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_photo/culture/02.jpg" alt="culture">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_photo/culture/03.jpg" alt="culture">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_photo/culture/04.jpg" alt="culture">
                                    </div>
                                    <div class="photo-block-item">
                                          
                                    </div>
                                </div>     
                                <h4 class="activity-block-subtitle">Фізична підготовка і спорт</h4>
                                <div class="about-photo-block">
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_photo/sport/01.jpg" alt="sport">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_photo/sport/05.jpg" alt="sport">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_photo/sport/02.jpg" alt="sport">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_photo/sport/04.jpg" alt="sport">
                                    </div>
                                    <div class="photo-block-item">
                                            <img class="photo-block-img" src="../src/img/site_photo/sport/03.jpg" alt="sport">
                                    </div>

                                </div> 
                            </div>    
                    </div>`



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


                
function showModalfromHQ(elem) {
    console.log(elem)
}