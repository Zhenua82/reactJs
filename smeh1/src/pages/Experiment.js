// "0000FF" blue "FF0000" red #000000 black
// alignment: AlignmentType.JUSTIFIED,
//               indent: {
//                 firstLine: 320,
//               },

import React, { useRef } from "react";
import { useSelector } from "react-redux";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import wordImg from '../assets/word2.svg';

import HeaderExp from "../components/HeaderExp";
import HeaderSpec from "../components/HeaderSpec";

function Experiment(props) {
    const ushibRanaOgr = useSelector((state) => state.dopPovrezhden.ushibRanaOgr);
    const ushibRanaNoogr = useSelector((state) => state.dopPovrezhden.ushibRanaNoogr);
    const exp = useSelector((state) => state.expNeopState.exp);
    const neop = useSelector((state) => state.expNeopState.neop);
    const sex = useSelector((state) => state.expNeopState.sex);

    const contentRef = useRef(null);

    function generateDocument(){
        props.peredacha()
    }
     
    return (
        <> 
        <SideMenu />
        <Header />
        <div className="content-wrapper">
            {((exp === 'заключение эксперта') || (exp === 'заключение специалиста')) && 
                (<div className="contente" ref={contentRef}>
                    <p className="MsoBodyText"><b>ШАПКА С НАЗВАНИЕМ, АДРЕСОМ И КОНТАКТАМИ ОРГАНИЗАЦИИ (УЧРЕЖДЕНИЯ), В КОТОРОЙ ПРОВЕДЕНА ЭКСПЕРТИЗА(ИСЛЕДОВАНИЕ)</b></p>
                    <p><b> __________________________________________________________________________________________ </b></p>
                    <p className="MsoBodyText"><b>ЗАКЛЮЧЕНИЕ ЭКСПЕРТА №<span className="red"> ...</span></b></p>
                    <p className="MsoBodyText"><b>(экспертиза трупа)</b></p>
                    <div className="data">
                        <p className="MsoBodyText"><span className="red">(дата окончания проведения экспертизы)</span></p>
                        <p className="MsoBodyText"><span className="red">г. N</span></p>
                    </div>
                    <p> </p>
                    <p className="MsoBodyTextIndent" id="MsoBodyTextIndent"><b><i>Права и ответственность эксперта, предусмотренные ст. 57 УПК РФ, мне разъяснены. Об уголовной ответственности за дачу заведомо ложного заключения в соответствии со ст.307 УК РФ предупрежден.</i></b></p>
                    <p> </p>
                    <p className="MsoBodyText"><b><i>Эксперт: <span className="red">(подпись фамилия и инициалы дата)</span></i></b></p>
                    <p id="MsoBodyTextIndent"><i>Примечание: В ходе судебно-медицинского исследования трупа неизвестного человека производилось фотографирование цифровой фотокамерой «OLYMPUS С-765 Ultra Zoom с объективом Olympus Lens АF Zoom 6,3-63 mm 1:2,8-3,7 с сохранением полученных изображений в графических файлах формата JPG; обработка полученных файлов (только кадрирование и масштабирование) и составление таблиц производились при помощи персонального компьютера на базе процессора Pentium-IV с использованием программ текстовой и графической обработки, печать полученных иллюстраций на лазерном принтере HP LaserJet 3050 (разрешение 300 dpi). Исходные графические файлы хранятся в архиве отделения … .</i></p>

                    <p> </p>
                    <iframe 
                        src="https://www.google.com/maps/d/embed?mid=11oYve_Th26AQAqjRHuipZvm08REVax0&ehbc=2E312F" 
                        width="550" 
                        height="420" 
                        style={{ marginLeft: '500px' }}>
                    </iframe>
                    <ol>
                            <li>«Какие телесные повреждения имеются на трупе <span className="red">потерпевшей (фамилия и инициалы)</span>, какова их локализация, механизм образования и степень тяжести? Какие повреждения причинены при жизни, а какие после смерти?</li>
                            <li>Какова причина смерти <span className="red">потерпевшей</span>?</li>
                            <li>Какова давность наступления смерти <span className="red">потерпевшей</span>?</li>
                            <li>Соответствует ли химический состав жидкости, изъятой в ходе осмотра места происшествия из металлического поддона, химическому составу жидкости, либо ее испарениям, возможно, имеющимся во внутренних органах трупа <span className="red">потерпевшей</span>?</li>
                            <li>Имеются ли на трупе <span className="red">потерпевшей</span> телесные повреждения, свидетельствующие о применении к нему насилия непосредственно перед его смертью?</li>
                            <li>Находился ли <span className="red">потерпевшая</span> в момент наступления смерти в состоянии алкогольного, наркотического или иного опьянения?</li>
                            <li>Имелись ли у <span className="red">потерпевшей</span> при жизни какие-либо неизлечимые заболевания? Если да, то какие именно, и находятся ли они в прямой причинной связи со смертью <span className="red">потерпевшей</span>?</li>
                            <li>Имеются ли у <span className="red">потерпевшей</span> какие-либо изменения внутренних органов, свидетельствующие о длительном употреблении <span className="red">потерпевшим</span> каких-либо токсических (психотропных) веществ?»</li>
                        </ol>
                        <p></p>

    
                        <p className="MsoBodyTextIndent" id="MsoBodyTextIndent"><span>Описание гистологических препаратов. <u>Сердце:</u> острое венозное полнокровие миокарда. <u>Печень:</u> острое венозное полнокровие. <u>Почки:</u> острое венозное полнокровие паренхимы и капилляров клубочков; признаки аутолитических изменений эпителия извитых канальцев. <u>Головной мозг:</u> острое венозное полнокровие сосудов мягкой мозговой оболочки; умеренный периваскулярный и перицеллюлярный отек. <u>Поджелудочная железа:</u> острое венозное полнокровие; аутолиз железистой ткани. <u>Желудок:</u> покровный эпителий отсутствует; густая лимфоплазмоцитарная инфильтрация с примесью эозинофилов стромы собственного слоя слизистой, местами формируются мелкие лимфофолликулы. <u>Трахея:</u> острое венозное полнокровие стромы слизистой и подслизистого слоев, эпителий местами в состоянии атрофии, местами умеренно пролиферирующий; умеренно выраженная, очаговая лимфогистиоцитарная, с примесью единичных эозинофилов, инфильтрация подэпителиальной стромы. <u>Кожа плеча:</u> очаг коагуляционного некроза эпидермиса и стромы дермы. <u>Кожа груди:</u> повышенное содержание меланоцитов в эпидермисе. <u>Надпочечники:</u> острое венозное полнокровие. Заключение: острое венозное полнокровие внутренних органов; коагуляционный некроз кожи правого плеча; хронический выраженный гастрит с эрозией слизистой; хронический трахеит; умеренно выраженный отек головного мозга.</span></p>
                        <p id="MsoBodyTextIndent"><i>Примечание: В ходе судебно-медицинского исследования трупа неизвестного человека производилось фотографирование цифровой фотокамерой «OLYMPUS С-765 Ultra Zoom с объективом Olympus Lens АF Zoom 6,3-63 mm 1:2,8-3,7 с сохранением полученных изображений в графических файлах формата JPG; обработка полученных файлов (только кадрирование и масштабирование) и составление таблиц производились при помощи персонального компьютера на базе процессора Pentium-IV с использованием программ текстовой и графической обработки, печать полученных иллюстраций на лазерном принтере HP LaserJet 3050 (разрешение 300 dpi). Исходные графические файлы хранятся в архиве отделения … .</i></p>
    
    
                        {ushibRanaOgr && (<p id="MsoBodyTextIndent" className="blue">Ушибленная рана правой половины лобной области.</p>)}
                        <br></br>
                        {ushibRanaNoogr && (<p id="MsoBodyTextIndent" className="blue">Ушибленная рана теменной области справа.</p>)}
                        {(neop === 'неизвестен') && <p id="MsoBodyTextIndent" className="red">Извлекать назначившего экспертизу (исследование) !!!</p>}
                        <p className="MsoNormal" id="MsoBodyTextIndent"> {(neop === 'неизвестен') && (<span>Цвет глаз – голубой <span className="red">(варианты описания - см. раздел "Справка", словесный портрет)</span>.</span>)} </p>
                        {(exp === 'заключение эксперта') && (<p className="MsoBodyText"><b><i>Эксперт: <span className="red">(подпись фамилия и инициалы)</span></i></b></p>)}
                        {(exp === 'заключение специалиста') && (<p className="MsoBodyText"><b><i>Специалист: <span className="red">(подпись фамилия и инициалы)</span></i></b></p>)}
    
                </div>)}
                <button onClick={generateDocument} className="clickable-button">
                    <img src={wordImg} alt="Word" className='wordImg' />
                    Сохранить <br /> составленное <br /> заключение <br /> в Word (.docx)
                </button>
        </div>
        </>
      );
    };
    
    export default Experiment;


// import React from 'react';
// import { Document, Packer, Paragraph, TextRun } from 'docx';
// import { saveAs } from 'file-saver';

// const applyTextStyles = (text, styles) => {
//     let run = new TextRun(text);
//     if (styles.bold) {
//         run = run.bold();
//     }
//     if (styles.italic) {
//         run = run.italics();
//     }
//     if (styles.underline) {
//         run = run.underline();
//     }
//     return run;
// };

// const generateDocument = (content) => {
//     const doc = new Document();
//     const paragraphs = [];

//     const parseElement = (element, styles = {}) => {
//         console.log(`Processing element: ${element.tagName}, styles:`, styles);

//         const newStyles = { ...styles };

//         if (element.tagName === 'B') {
//             newStyles.bold = true;
//         }
//         if (element.tagName === 'I') {
//             newStyles.italic = true;
//         }
//         if (element.tagName === 'U') {
//             newStyles.underline = true;
//         }

//         if (element.childNodes && element.childNodes.length > 0) {
//             Array.from(element.childNodes).forEach((child) => parseElement(child, newStyles));
//         } else if (element.nodeType === Node.TEXT_NODE) {
//             console.log(`Processing text node: "${element.nodeValue}", styles:`, newStyles);
//             const paragraph = new Paragraph({
//                 children: [applyTextStyles(element.nodeValue, newStyles)],
//             });
//             paragraphs.push(paragraph);
//         }
//     };

//     parseElement(content);
//     doc.addSection({
//         properties: {},
//         children: paragraphs,
//     });

//     return doc;
// };

// const handleDownload = () => {
//     const content = document.getElementById('content');
//     const doc = generateDocument(content);
//     Packer.toBlob(doc).then((blob) => {
//         saveAs(blob, 'document.docx');
//     }).catch(error => console.error("Error creating document:", error));
// };

// const Experiment = () => {
//     return (
//         <div>
//             <div id="content">
//                 <p><b><i>ШАПКА С НАЗВАНИЕМ</i></b></p>
//                 <p><i>Курсивный текст</i></p>
//                 <p><b>Жирный текст</b></p>
//                 <p><u>Подчеркнутый текст</u></p>
//                 <p><b><i>Жирный и курсивный текст</i></b></p>
//             </div>
//             <button onClick={handleDownload}>Download Document</button>
//         </div>
//     );
// };

// export default Experiment;
