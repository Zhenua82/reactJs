import './CostDate.css';
import Card from '../UI/Card';

function CostDate(props) {
    //Обработка дат (форматирование):
    const month = props.date.toLocaleString('ru-RU', { month: 'long' });
    const year = new Intl.DateTimeFormat('ru-RU', { year: 'numeric' }).format(props.date);
    const day = props.date.toLocaleString('ru-RU', { day: '2-digit' });
    return (
        <> 
        <Card className="date">
            <span>{month}</span> <span>{year}</span> <span>{day}</span>
            {/* {props.date.toString()} */}
        </Card>
        </>
    );
};

export default CostDate;