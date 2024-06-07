import Costs from './components/Cost/Costs';
import React, {useState} from 'react';
import NewCost from './components/NewCost/newCost.js';
//Для сохранения в word:
import { useRef } from 'react';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun, HeadingLevel} from 'docx';
import Graphics from './components/Graphics/Graphics.js';

const INITIALCOSTS =  [
  {
    id: 'a1',
    date: new Date(2020, 2, 12),
    description: 'Холодильник',
    amount: 999.9, 
  },
  {
    id: 'a2',
    date: new Date(2021, 11, 25),
    description: 'Ноутбук',
    amount: 1954.6,  
  },
  {
    id: 'a3',
    date: new Date(2021, 4, 1),
    description: 'Джинсы',
    amount: 34.8,
  }
];

let maxValue = null;//!!!!!!!!!!!!!!!!!!!!
let dataSets = [{ //!!!!!!!!!!!!!!!!!!!!
        label: 'Jun',
        value: 0
        },
        {
        label: 'Feb',
        value: 1
        }];

function App() {
    
  const[costs, setCosts] = useState(INITIALCOSTS)
  function peredachaHandler(costData){
    setCosts(costs => ([costData, ...costs]))
    console.log(costData, '!!!!!!');
  };

  const[maxvel, setMaxvel] = useState(maxValue)//!!!!!!!!!!!!!!!!!!
    function maxvell(maxValue){
        // setMaxvel(maxValue)
        setMaxvel(maxvel => (maxvel = maxValue))
  };
  function leng(filterCosts){
    maxvell(filterCosts.length)
    // Сколько покупок совершено в каждом месяце выбранного года:
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let purchasesPerMonth = filterCosts.reduce((acc, el) => {
      let month = el.date.getMonth(); // Получить месяц из даты
      if (!acc[month]) {
          acc[month] = 0; // Инициализировать счетчик, если его еще нет
      }
      acc[month]++; // Увеличить счетчик для текущего месяца
      return acc;
  }, {});

  dataSets = monthNames.map((name, index) => {
      return {
          label: name,
          value: purchasesPerMonth[index] || 0 // Если нет покупок в этом месяце, установить значение 0
      };
  });
  } //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  
  //Для сохранения в word:
  const contentRef = useRef(null);
  const generateDocument = () => {
      if (contentRef.current) {
          // // Удаление всех вхождений текста "Сохранить данные" и разделение на параграфы:
          // let textContent = contentRef.current.innerText;
          // textContent = textContent.replace(/Сохранить данные/g, '\n\n');
          // const paragraphs = textContent.split('\n\n').map(line => new Paragraph(line));

          //Удаление всех вхождений текста "Сохранить данные", разделение на параграфы + окрашивание в красный цвет:
          const element = contentRef.current;
            const paragraphs = [];
            let currentText = '';
            // Рекурсивная функция для обработки всех дочерних узлов
            const processNode = (node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    if (node.tagName === 'H1' && node.id === 'test') {
                        if (currentText.trim() !== '') {
                            paragraphs.push(new Paragraph(currentText));
                            currentText = '';
                        }
                        paragraphs.push(
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Учим React на ",
                                        color: "FF0000", // Красный цвет
                                    }),
                                    new TextRun({
                                        text: `${1 + 4}!`,
                                        color: "FF0000", // Красный цвет
                                    })
                                ],
                                heading: HeadingLevel.HEADING_1,
                            })
                        );
                    } else {
                        node.childNodes.forEach(processNode);
                    }
                } else if (node.nodeType === Node.TEXT_NODE) {
                    let text = node.textContent;
                    if (text.includes('Сохранить данные')) {
                        const parts = text.split('Сохранить данные');
                        parts.forEach((part, index) => {
                            currentText += part;
                            if (index < parts.length - 1) {
                                if (currentText.trim() !== '') {
                                    paragraphs.push(new Paragraph(currentText));
                                    currentText = '';
                                }
                                paragraphs.push(new Paragraph(''));
                            }
                        });
                    } else {
                        currentText += text + ' ';
                    }
                }
            };
            // Обрабатываем все дочерние элементы
            element.childNodes.forEach(processNode);
            if (currentText.trim() !== '') {
                paragraphs.push(new Paragraph(currentText));
            }
            // Создаем новый документ:
            const doc = new Document({
                sections: [{
                    properties: {},
                    children: paragraphs,
                }],
            });
          // Создаем Blob и сохраняем документ
          Packer.toBlob(doc).then((blob) => {
              saveAs(blob, "all.docx");
          }).catch((err) => {
              console.error(err);
          });
      }
  };
  return (
    <> 
    <div ref={contentRef}>
      <div>
        <h1 id="test">Учим React на {1+4}!</h1>
      </div>
      <div>
        <NewCost onChangeCost={peredachaHandler}/>
      </div>
      <Graphics dataSets = {dataSets} maxValue = {maxvel}/> {/* !!!!!!!!!!!!!!!!!!!!!!! */}
      <Costs costs = {costs} onLeng = {leng} dataSetss = {dataSets}/> {/* !!!!!!!!!!!!!!!!!!!!!!! */}
    </div>
    <button onClick={generateDocument}>Сохранить все</button>
    </>
  );

  // // Тотже самый JSX, с использованием библиотеки реакт: (import React from 'react') и вызова её метода createElement
  // return React.createElement(
  //   React.Fragment,
  //   null,
  //   React.createElement(
  //       'div',
  //       null,
  //       React.createElement(
  //           'h1',
  //           { id: 'test' },
  //           'Учим React на ', 1 + 4, '!'
  //       )
  //   ),
  //   React.createElement(Costs, { costs: costs })
  // );
};

// function Dop() {
//   return (
//     <> 
//       <div>
//         <h3>Заголовок h3 + {1+4}</h3>
//       </div>
//       <>
//         <span>Заголовок (span)</span>
//       </>
//     </>
//   );
// };

export default App;
// export { Dop };
