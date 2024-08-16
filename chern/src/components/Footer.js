import logoImg from '../assets/logoz.webp';

function Footer() {

    return (
        <>
            <img src={logoImg} alt="Конструктор заключений смэ" className='footerImg' />
            <p className="footer"> Конструктор 2024 </p>
        </>        
    );
}

export default Footer;