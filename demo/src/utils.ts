const nanoid = require("nanoid");
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

export const utils = {
  // 通过id查找相关任务对象
  find(arr: ITodoItem[], id: string) {
    const index = utils.findIndex(arr, id);
    if (index >= 0) {
      return arr[index];
    }
  },

  // 通过id查找相关任务对象的Index
  findIndex(arr: ITodoItem[], id: string):number {
    let res:number = -1;
    arr.forEach((item, index) => {
      if (item.id === id) {
        res = index;
      }
    });
    return res;
  },
  uuid(): string {
    return nanoid();
  }
};
