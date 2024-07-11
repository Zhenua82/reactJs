import React, { useRef } from "react";
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, TabStopPosition, TabStopType } from 'docx';

const HeaderSpec = () => {
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
                  text: "______________________________________________________",
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
                  text: "ЗАКЛЮЧЕНИЕ СПЕЦИАЛИСТА №",
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
                text: '(исследование трупа)',
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
                  text: "(дата окончания проведения исследования)",
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
                  text: "На основании письменного поручения",
                  size: 24,
                }),
                new TextRun({
                  text: " (направления) (должностное лицо, назначившее исследование, его должность и ФИО)",
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
                  text: ", специалист",
                  size: 24,
                }),
                new TextRun({
                  text: " (комиссия специалистов) (ФИО, должность - врач - судебно-медицинский эксперт)",
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
                  text: " в соответствии с ч. 1 статьи 144 УПК РФ провел",
                  size: 24,
                }),
                new TextRun({
                  text: " (провели)",
                  color: "FF0000",
                  size: 24,
                }),
                new TextRun({
                  text: " судебно-медицинское исследование трупа",
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
          ],
        }],
      });

      Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "alls.docx");
      }).catch((err) => {
        console.error(err);
      });
    }
  };

  return (
    <div ref={contentRef}>
      <p className="MsoBodyText"><b>ШАПКА С НАЗВАНИЕМ, АДРЕСОМ И КОНТАКТАМИ ОРГАНИЗАЦИИ (УЧРЕЖДЕНИЯ), В КОТОРОЙ ПРОВЕДЕНА ЭКСПЕРТИЗА(ИСЛЕДОВАНИЕ)</b></p>
      <p><b> __________________________________________________________________________________________ </b></p>
      <p className="MsoBodyText"><b>ЗАКЛЮЧЕНИЕ СПЕЦИАЛИСТА №<span className="red"> ...</span></b></p>
      <p className="MsoBodyText"><b>(исследование трупа)</b></p>
      <div className="data">
        <p className="MsoBodyText"><span className="red">(дата окончания проведения исследования)</span></p>
        <p className="MsoBodyText"><span className="red">г. N</span></p>
      </div>
        <p id="MsoBodyTextIndent" className="MsoBodyTextIndent">На основании письменного поручения <span className="red"> (направления) (должностное лицо, назначившее исследование, его должность и ФИО)</span> от <span className="red">(дата)</span>, поступившего <span className="red">(дата)</span>, специалист  <span className="red">(комиссия специалистов) (ФИО)</span>, <span className="red">(должность - врач - судебно-медицинский эксперт)</span>, имеющий высшее медицинское образование, специальную подготовку по судебной медицине, стаж работы по специальности <span className="red">... лет, квалификационная категория, ученая степень, ученое звание</span>, в период с <span className="red">(время, дата)</span> до <span className="red">(время, дата)</span> в соответствии с ч. 1 статьи 144 УПК РФ провел <span className="red">(провели)</span> судебно-медицинское исследование трупа <span className="red">(ФИО, дата рождения)</span>.</p>
      <p> </p>
      <button onClick={generateDocument}>Сохранить все</button>
    </div>
  );
};

export default HeaderSpec;