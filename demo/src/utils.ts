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
    let low: number = 0;
    let high: number = arr.length - 1;
    let mid: number;
    let currentId: string;
    while (low <= high) {
      mid = Math.floor(low + (high - low) / 2);
      currentId = arr[mid].id;
      if (currentId < id) {
        low = mid + 1;
      } else if (currentId > id) {
        high = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  },
  uuid(): string {
    return nanoid();
  }
};
