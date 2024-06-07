import CostDate from './CostDate';
import './Costitem.css';
import Card from '../UI/Card';
// import React, { useState } from 'react';
import React, { useRef } from 'react';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun } from 'docx';

function CostItem(props) {
    const contentRef = useRef(null);
    const generateDocument = () => {
        if (contentRef.current) {
            // Извлечение текстового содержимого из рефа
            const textContent = contentRef.current.innerText;
            // Создаем новый документ
            const doc = new Document({
                sections: [{
                    properties: {},
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun(textContent)
                            ],
                        }),
                    ],
                }],
            });
            // Создаем Blob и сохраняем документ
            Packer.toBlob(doc).then((blob) => {
                saveAs(blob, "example.docx");
            }).catch((err) => {
                console.error(err);
            });
        }
    };

    return (
        <> 
        <li ref={contentRef}>
        <Card className="block1">
            <CostDate date = {props.date}/>
            <h3 className="sale">{props.description}</h3>
            <Card className="cena"> ${props.amount}</Card>
            {/* <button onClick={leftHandler} onContextMenu={rightHandler}>Нажать</button> */}
        </Card>
        </li>
        <button onClick={generateDocument}>Сохранить данные</button>
        </>
    );
};

export default CostItem;
