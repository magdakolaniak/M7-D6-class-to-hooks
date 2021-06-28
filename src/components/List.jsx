import { toggleCompleted, reset } from '../store/actions';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

// const mapDispatchToProps = (dispatch) => ({
//   toggleCompleted: (id) => dispatch(toggleCompleted(id)),
//   reset: () => dispatch(reset()),
// });

function List() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  console.log('WHAT IS THIS:', list);
  return (
    <>
      <ul>
        {list.map((todo) => (
          <li
            key={todo.id}
            onClick={() => dispatch(toggleCompleted(todo))}
            className={todo.completed ? 'strikethrough' : ''}
          >
            {todo.description}
          </li>
        ))}
      </ul>
      <Button onClick={() => dispatch(reset())}>reset</Button>
    </>
  );
}

export default List;
