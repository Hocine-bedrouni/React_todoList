import React, { Component } from "react";

class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            userInput: "",
            items: []
        };
    }

    onChange(event) {
        // console.log(event.target.value);
        this.setState({
            userInput: event.target.value
        }, () => console.log(this.state.userInput)
        );
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            // Réinitialise le userInput à vide
            userInput: "",
            // On prend le tableau d'origine et on y inser les datas du userInput
            items: [...this.state.items, this.state.userInput]
        }, () => console.log(event.state));
    }


    renderTodos() {

        return this.state.items.map((item) => {
            // pour afficher chaque élément on crée une div
            //on ajoute une key pour différencier les éléments de facon unique
            return (
                <div className="list-group-item" key={item}>
                    {item}| <button
                        className="btn btn-danger"
                        onClick={this.deleteTodo.bind(this)}>Supp</button>
                </div>
            )
        });
    }


    /*
    Le "array" est un tableau qui reprend le tab "items" mais qui n'est affiché nul par
    le array splice supprime les data dans le tab selon l'index sur lequel il se trouve
    l tab items recoit le tab array modifié...
    */
    deleteTodo(event) {
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index-1, 1)
        this.setState({
            items: array
        },);
    }


    render() {
        return (
            <div>
                <h1 align="center">Ma Todo List</h1>
                <form className="form-row align-items-center">
                    <input
                        className="form-control mb-2"
                        value={this.state.userInput}
                        type="text"
                        placeholder="Renseigner un item"
                        onChange={this.onChange.bind(this)}
                    />
                    <button className="btn btn-primary" onClick={this.addTodo.bind(this)}>Ajouter</button>
                </form>
                <div className="list-group">
                    {this.renderTodos()}
                </div>
            </div>
        )
    }
}
export default TodoList;