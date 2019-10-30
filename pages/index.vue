<template lang="pug">
  .todo
    h1.todo__title Todo App
    h2 {{year}}年
    input.todo__form(type='text', name='content', v-model='content', @focus='set_flg')
    div
      button.todo__save-btn(@click='insert') save
      button.todo__find-btn(@click='find') find
    ul.todo__list
      li.list(v-for='(todo, index) in display_todos', :key='index')
        span.list__content
          | {{ todo.content }}
        span.list__created
          | {{ todo.created }}
        button.list__remove(@click='remove(todo)')
          | ×
</template>

<script>
import {mapState} from 'vuex';

export default {
    data: function() {
        return {
            content: '',
            find_flg: false,
            year: new Date().getFullYear()
        }
    },
    computed: {
        ...mapState(['todos']),
        display_todos: function() {
            if(this.find_flg) {
                const filterdTodos = this.todos.filter((todo) => todo.content.toLowerCase() === this.content.toLowerCase())
                return filterdTodos;
            }
            return this.todos;
        }
    },
    methods: {
        insert: function() {
            this.$store.commit('insert', {content: this.content});
            this.content = '';
        },
        find: function() {
            this.find_flg = true;
        },
        set_flg: function() {
            if(this.find_flg) {
                this.find_flg = false;
                this.content = '';
            }
        },
        remove: function(todo) {
            this.$store.commit('remove', todo);
        }
    }
}
</script>

<style lang="scss">
.todo {
    &__title {
        text-align: center;
    }

    &__list {
        list-style: none;
    }
}
</style>

