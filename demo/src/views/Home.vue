<template>
  <main class="home">
    <transition-group name="fade" tag="ul" class="list-group">
      <TodoItem
        v-for="item in TodoListComputed"
        :key="item.id"
        @click-right="delHandle(item.id)"
        @click-left="doneHandle(item.id)"
        rightValue="删除"
        leftValue="完成"
        :id="item.id"
        :color="item.color"
        :name="item.name"
        :isDone="item.isDone"
        :iconName="item.iconName"
      />
    </transition-group>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Mutation, Getter, namespace } from 'vuex-class';
import TodoItem from '../components/TodoItem.vue';
import Header from '../components/Header.vue';

  enum Mode {
    edit,
    finish
  }

  interface ITodoItem {
    id: string;
    name: string;
    isDone: boolean;
    iconName: string;
    color: string;
    mode: Mode;
  }

const recordGetter = namespace('record', Getter);
const recordMutation = namespace('record', Mutation);

  @Component({
    components: {
      TodoItem,
      Header,
    },
  })
export default class Home extends Vue {
    @recordMutation private deleteTodoItem!: (id: string) => void;

    @recordMutation private doneTodoItem!: (id: string) => void;

    @recordGetter private getCurrentTodoList!: ITodoItem[];

    private get TodoListComputed() {
      return this.getCurrentTodoList.filter(
        (item) => item.mode !== Mode.edit,
      );
    }

    private delHandle(id: string) {
      this.deleteTodoItem(id);
    }

    private doneHandle(id: string) {
      this.doneTodoItem(id);
    }
}
</script>

<style scoped lang="scss">
  .home {
    width: 100%;
    height: calc(100vh - 7rem);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
</style>
