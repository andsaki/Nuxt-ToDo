import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            todos: []
        }),
        mutations: {
            insert: function(state, obj) {
                const d = new Date();
                const fmt = ('00' + (d.getMonth() + 1)).slice(-2) 
                + '月' + ('00' + d.getDate()).slice(-2) 
                + '日' + ('00' + d.getHours()).slice(-2) 
                + ':' + ('00' + d.getMinutes()).slice(-2);

                state.todos.unshift({
                    content: obj.content,
                    created: fmt
                })
            },
            remove: function(state, obj) {
                state.todos.forEach((todo, index) => {
                    if(todo.content === obj.content && todo.created === obj.created){
                        alert('remove ' + '"' + obj.content + '"');
                        state.todos.splice(index, 1);
                        return;
                    }
                })
            }
        }
    })
}

export default createStore;