import { Card, Form } from 'react-bootstrap';
import TodoListItem from './TodoListItem';
import { useState } from 'react';

function TodoList() {
  type KeyboardInputEvent = React.KeyboardEvent<HTMLInputElement>;

  const [tasks, setTasks] = useState([
    {
      description: 'Take a walk',
      isCompleted: false,
    },
    {
      description: 'Take a bath',
      isCompleted: false,
    },
    {
      description: 'Sleep',
      isCompleted: true,
    },
    {
      description: 'Play outside',
      isCompleted: false,
    },
  ]);

  let removeTask = (index: number) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  let handleAddTask = (e: KeyboardInputEvent) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      let newTask = {
        description: e.currentTarget.value,
        isCompleted: false,
      };
      setTasks([...tasks, newTask]);
      e.currentTarget.value = '';
    }
  };

  let toggleStatus = (index: number) => {
    let selectedItem = tasks.at(index);
    if (selectedItem && tasks) {
      selectedItem.isCompleted = !selectedItem.isCompleted;
      setTasks([...tasks]);
    }
  };

  return (
    <Card body border="secondary" className="todo-card">
      <h1 className="text-center text-uppercase mb-4">Todo list</h1>
      <div className="p-3">
        <Form
          className="mb-3"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <Form.Control
            size="lg"
            type="text"
            placeholder="Press click 'Enter' to add a new task"
            onKeyUp={(e: KeyboardInputEvent) => handleAddTask(e)}
          />
        </Form>

        <div className="todo-list-wrapper">
          {tasks.map((item, index) => {
            return (
              <TodoListItem
                key={index}
                description={item.description}
                isCompleted={item.isCompleted}
                handleRemoveTask={() => removeTask(index)}
                toggleStatus={() => toggleStatus(index)}
              ></TodoListItem>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

export default TodoList;
