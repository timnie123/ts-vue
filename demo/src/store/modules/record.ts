import {GetterTree, MutationTree, Module} from 'vuex';
import { utils } from "@/utils";
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

interface IState {
 todoList: Array<ITodoItem>
}
const state:IState = {
  todoList: []
};

const getters:GetterTree<IState, any> = {
  getCurrentTodoList(state: IState): ITodoItem[] {
    return state.todoList;
  }
};

const mutations:MutationTree<IState> = {
  // 创建 todo任务
  createTodoItem(state: IState, todoItem: ITodoItem) {
    state.todoList.push(todoItem);
  },
  // 选择图标背景
  selectColor(state: IState, payload: { id: string; color: string }) {
    const list: ITodoItem[] = state.todoList;
    const todo = utils.find(list, payload.id);

    if (todo) {
      todo.color = payload.color;
    }
  },
  // 选择图标
  selectIcon(state: IState, payload: { id: string; icon: string }) {
    const list: ITodoItem[] = state.todoList;
    const todo = utils.find(list, payload.id);
    if (todo) {
      todo.iconName = payload.icon;
    }
  },
  // 删除未定义好的任务
  removeTodoItem(state: IState) {
    state.todoList.pop();
  },
  // 将此任务删除
  deleteTodoItem(state: IState, id: string) {
    const list: ITodoItem[] = state.todoList;
    state.todoList = list.filter(item => item.id !== id);
  },
  // 将此任务设置为完成
  doneTodoItem(state: IState, id: string) {
    const list: ITodoItem[] = state.todoList;
    const todo = utils.find(list, id);
    if (todo) {
      todo.isDone = true;
    }
  },
  // 从编辑模式进入完成模式
  finishTodoItem(state: IState) {
    const list: ITodoItem[] = state.todoList;
    const todo = list[list.length - 1];
    if (todo) {
      todo.mode = Mode.finish;
    }
  },
  // 任务名称
  changeName(state: IState, payload: { id: string; value: string }) {
    const list: ITodoItem[]= state.todoList;
    const todo = utils.find(list, payload.id);
    if (todo) {
      todo.name = payload.value;
    }
  }
};

const actions = {};

export const record: Module<IState, any> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
