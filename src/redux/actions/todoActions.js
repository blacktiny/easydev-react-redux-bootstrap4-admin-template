const todoActions = {
  addTodo(title, description, priority) {
    return {
      type: 'ADD_TODO',
      title,
      description,
      priority,
    };
  },
  completeTodo(id) {
    return {
      type: 'COMPLETE_TODO',
      id,
    };
  },
  deleteTodo(id) {
    return {
      type: 'DELETE_TODO',
      id,
    };
  },
  togglePriorityFilter(priorityFilter) {
    return {
      type: 'PRIORITY_FILTER',
      priorityFilter,
    };
  },
};
export default todoActions;
