const todoList = {
    items: [
        {
            text: 'Завершить текущий челлендж',
            completed: true,
        },
        {
            text: 'Отдохнуть во время перерыва',
            completed: true,
        },
        {
            text: 'Помочь напарнику понять код',
            completed: false,
        },
        {
            text: 'Выиграть в мафию',
            completed: false,
        },
    ],

    printAll: function () {
        for (i = 0; i < todoList.items.length; i++) {
            todoList.print(i);
        }
    },

    add: function (text) {
        todoList.items.unshift({ text: text, completed: false })
    },

    remove: function (index) {
        todoList.items.splice(index, 1)
    },

    print: function (index) {
        if (todoList.items[index].completed === false) {
            console.log(`[ ] ${todoList.items[index].text}`);

        } else {
            console.log(`[X] ${todoList.items[index].text}`);
        }
    },

    complete: function (index) {
        todoList.items[index].completed = true
    },
};
