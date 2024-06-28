import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Обновить состояние, чтобы следующий рендер показал запасной UI
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Можно также передать ошибку в сторонний сервис логирования
        console.error("Ошибка поймана в ErrorBoundary:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <p>Ошибка</p>;
        }

        // Вставка блока try-catch для обработки ошибок в дочерних компонентах
        // try {
        //     return this.props.children;
        // } catch (error) {
        //     this.setState({ hasError: true });
        //     return <p>Ошибка</p>;
        // }

        return this.props.children; 
    }
}

export default ErrorBoundary;



