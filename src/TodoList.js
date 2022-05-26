import { atom, selector, useRecoilValue } from "recoil";
import { TodoItem } from "./TodoItem";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoListFilters } from "./TodoListFilters";
import { TodoListStats } from "./TodoListStats";

export const todoListState = atom({
  key: "TodoList",
  default: []
});

export const todoListFilterState = atom({
  key: "TodoListFilter",
  default: "Show All"
});

export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  }
});

export const todoListStatsState = selector({
  key: "TodoListStats",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted
    };
  }
});

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  console.log(todoList);

  return (
    <div>
      <TodoListFilters />

      <TodoListStats />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.key} item={todoItem} />
      ))}
    </div>
  );
};
