import React, { useRef } from "react";
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, TabStopPosition, TabStopType } from 'docx';

const HeaderExp = () => {
  // const a = '!!!!!!!!!!!!'; // добавить `${a}`
  const contentRef = useRef(null);

  const generateDocument = () => {
    if (contentRef.current) {
      const doc = new Document({
        sections: [{
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "ШАПКА С НАЗВАНИЕМ, АДРЕСОМ И КОНТАКТАМИ ОРГАНИЗАЦИИ, В КОТОРОЙ ПРОВЕДЕНА ЭКСПЕРТИЗА(ИСЛЕДОВАНИЕ)",
                  bold: true,
                  color: "#000000",
                })
              ],
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "________________________________________________________",
                  bold: true,
                  color: "#000000",
                })
              ],
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({ text: '' }), // Пустой параграф
            new Paragraph({
              children: [
                new TextRun({
                  text: "ЗАКЛЮЧЕНИЕ ЭКСПЕРТА №",
                  bold: true,
                  color: "#000000",
                }),
                new TextRun({
                  text: " ...",
                  bold: true,
                  color: "FF0000",
                }),
              ],
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              children: [
              new TextRun({
                text: '(экспертиза трупа)',
                bold: true,
                color: "#000000",
              }),
            ],
            heading: HeadingLevel.HEADING_2,
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({ text: "" }), // Пустой параграф
            new Paragraph({
              children: [
                new TextRun({
                  text: "(дата окончания проведения экспертизы)",
                  color: "FF0000",
                  size: 24,
                }),
                new TextRun({
                  text: "\tг. N",
                  color: "FF0000",
                  size: 24,
                }),
              ],
              tabStops: [
                {
                  type: TabStopType.RIGHT,
                  position: TabStopPosition.MAX,
                },
              ],
            }),
            new Paragraph({ text: "" }), // Пустой параграф
            new Paragraph({
              children: [
                new TextRun({
                  text: "На основании постановления",
                  size: 24,
                }),
                new TextRun({
                  text: " (должностное лицо, назначившее экспертизу, его должность и ФИО)",
                  color: "FF0000",
                  size: 24,
                }),
                new TextRun({
                  text: " от",
                  size: 24,
                }),
                new TextRun({
                  text: " (дата)",
                  color: "FF0000",
                  size: 24,
                }),
                new TextRun({
                  text: ", поступившего",
                  size: 24,
                }),
                new TextRun({
                  text: " (дата)",
                  color: "FF0000",
                  size: 24,
                }),
                new TextRun({
                  text: ", судебно-медицинский эксперт",
                  size: 24,
                }),
                new TextRun({
                  text: " (комиссия судебно-медицинских экспертов) (ФИО, должность - врач - судебно-медицинский эксперт)",
                  color: "FF0000",
                  size: 24,
                }),
                new TextRun({
                  text: ", имеющий высшее медицинское образование, специальную подготовку по судебной медицине, стаж работы по специальности",
                  size: 24,
                }),
                new TextRun({
                  text: " ... лет, квалификационная категория, ученая степень, ученое звание",
                  color: "FF0000",
                  size: 24,
                }),
                new TextRun({
                  text: "  , в период с",
                  size: 24,
                }),
                new TextRun({
                  text: " (время, дата)",
                  color: "FF0000",
                  size: 24,
                }),
                new TextRun({
                  text: " до",
                  size: 24,
                }),
                new TextRun({
                  text: " (время, дата)",
                  color: "FF0000",
                  size: 24,
                }),
                new TextRun({
                  text: " провел",
                  size: 24,
                }),
                new TextRun({
                  text: " (провели)",
                  color: "FF0000",
                  size: 24,
                }),
                new TextRun({
                  text: " судебно-медицинскую экспертизу трупа",
                  size: 24,
                }),
                new TextRun({
                  text: " (ФИО, дата рождения).",
                  color: "FF0000",
                  size: 24,
                }),
              ],
              alignment: AlignmentType.JUSTIFIED,
              indent: {
                firstLine: 320, // 720 twips = 0.5 inch (можно настроить по желанию)
              },
            }),
            new Paragraph({ text: "" }), // Пустой параграф
            new Paragraph({
              children: [
                new TextRun({
              text: "Права и ответственность эксперта, предусмотренные ст. 57 УПК РФ, мне разъяснены. Об уголовной ответственности за дачу заведомо ложного заключения в соответствии со ст.307 УК РФ предупрежден.",
              italic: true,
              bold: true,
              size: 24,
              })],
              alignment: AlignmentType.JUSTIFIED,
              indent: {
                firstLine: 320, // 720 twips = 0.5 inch (можно настроить по желанию)
              }, 
            }),
            new Paragraph({ text: "" }), // Пустой параграф
            new Paragraph({
              children: [
                new TextRun({
                  text: "Эксперт:",
                  italic: true,
                  bold: true,
                  size: 24,
                }),
                new TextRun({
                  text: " (подпись фамилия и инициалы дата)",
                  italic: true,
                  bold: true,
                  color: "FF0000",
                  size: 24,
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({ text: "" }), // Пустой параграф

            new Paragraph({
              children: [
                new TextRun({
                  text: "При экспертизе присутствовали:",
                  size: 24,
                }),
                new TextRun({
                  text: " следователь (фамилия и инициалы), санитар (фамилия и инициалы) с целью оказания технической помощи.",
                  color: "FF0000",
                  size: 24,
                }),
              ],
              alignment: AlignmentType.JUSTIFIED,
              indent: {
                firstLine: 320,
              },
            }),
          ],
        }],
      });

      Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "allex.docx");
      }).catch((err) => {
        console.error(err);
      });
    }
  };

  return (
    <div ref={contentRef}>
      <p className="MsoBodyText"><b>ШАПКА С НАЗВАНИЕМ, АДРЕСОМ И КОНТАКТАМИ ОРГАНИЗАЦИИ (УЧРЕЖДЕНИЯ), В КОТОРОЙ ПРОВЕДЕНА ЭКСПЕРТИЗА(ИСЛЕДОВАНИЕ)</b></p>
      <p><b> __________________________________________________________________________________________ </b></p>
      <p className="MsoBodyText"><b>ЗАКЛЮЧЕНИЕ ЭКСПЕРТА №<span className="red"> ...</span></b></p>
      <p className="MsoBodyText"><b>(экспертиза трупа)</b></p>
      <div className="data">
        <p className="MsoBodyText"><span className="red">(дата окончания проведения экспертизы)</span></p>
        <p className="MsoBodyText"><span className="red">г. N</span></p>
      </div>
        <p id="MsoBodyTextIndent" className="MsoBodyTextIndent">На основании постановления <span className="red">(должностное лицо, назначившее экспертизу, его должность и ФИО)</span> от <span className="red">(дата)</span>, поступившего <span className="red">(дата)</span>, судебно-медицинский эксперт  <span className="red">(комиссия судебно-медицинских экспертов) (ФИО)</span>, <span className="red">(должность - врач - судебно-медицинский эксперт)</span>, имеющий высшее медицинское образование, специальную подготовку по судебной медицине, стаж работы по специальности <span className="red">... лет, квалификационная категория, ученая степень, ученое звание</span>, в период с <span className="red">(время, дата)</span> до <span className="red">(время, дата)</span> провел <span className="red">(провели)</span> судебно-медицинскую экспертизу трупа <span className="red">(ФИО, дата рождения)</span>.</p>
      <p> </p>
      <p className="MsoBodyTextIndent"><b><i>Права и ответственность эксперта, предусмотренные ст. 57 УПК РФ, мне разъяснены. Об уголовной ответственности за дачу заведомо ложного заключения в соответствии со ст.307 УК РФ предупрежден.</i></b></p>
      <p> </p>
      <p className="MsoBodyTextIndent"><b><i>Эксперт: <span className="red">(подпись фамилия и инициалы дата)</span></i></b></p>
      <p> </p>
      <p id="MsoBodyTextIndent">При экспертизе присутствовали: <span className="red">следователь (фамилия и инициалы), санитар (фамилия и инициалы) с целью оказания технической помощи.</span></p>
      <br></br>
      <button onClick={generateDocument}>Сохранить все</button>
    </div>
  );
};

export default HeaderExp;