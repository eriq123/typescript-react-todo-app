import { Card, Form } from 'react-bootstrap';

export default function TodoList({
  description,
  isCompleted,
  handleRemoveTask,
  toggleStatus,
}: {
  description: string;
  isCompleted: boolean;
  handleRemoveTask: () => void;
  toggleStatus: () => void;
}) {
  return (
    <Card body className={`mb-1 ${isCompleted ? 'complete' : ''}`}>
      <Form className="d-flex justify-content-between">
        <div className="my-auto todo-list-item-description">
          <Form.Check type="checkbox" inline checked={isCompleted} onChange={() => toggleStatus()} />
          <Form.Check.Label
            className={`text-uppercase ${isCompleted ? 'text-decoration-line-through' : ''}`}
            onClick={() => toggleStatus()}
          >
            {description}
          </Form.Check.Label>
        </div>
        <i className="bi bi-x remove-icon" onClick={() => handleRemoveTask()}></i>
      </Form>
    </Card>
  );
}
