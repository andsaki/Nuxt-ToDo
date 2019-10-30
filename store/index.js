import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            todos: [
                {content: 'hogehoge', created: '2019-03-31 15:30'}, 
                {content: 'fugafuga', created: '2019-03-31 16:00'}
            ]
        }),
        mutations: {
            insert: function(state, obj) {
                const d = new Date();
                const fmt = d.getFullYear() 
                + '-' + ('00' + (d.getMonth() + 1)).slice(-2) 
                + '-' + ('00' + d.getDate()).slice(-2) 
                + ' ' + ('00' + d.getHours()).slice(-2) 
                + ':' + ('00' + d.getMinutes()).slice(-2);

                state.todos.unshift({
                    content: obj.content,
                    created: fmt
                })
            },
            remove: function(state, obj) {
                state.todos.forEach((todo) => {
                    if(todo.content === obj.content && todo.created === obj.created){
                        alert('remove ' + '"' + obj.content + '"');
                        state.todos.splice(i, 1);
                        return;
                    }
                })
            }
        }
    })
}

export default createStore;