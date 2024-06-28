import styles from './Button.module.css'
// import styled from 'styled-components';

// const Button = styled.button`
// background-color: blue;
// color: white;
// border: none;
// border-radius: 5px;
// &:hover{
// background-color: purple};
// &:active{
// background-color: green};
// &:focus{
// border: 2px solid yellow;
// outline: 1px solid red;
// };
// @media(max-width: 700px) {
// color: red;
// }
// `;

function Button(props){
    return (
        <button className={styles.button} type={props.type} onClick={props.onClick}>{props.children}</button>
    )
}
export default Button