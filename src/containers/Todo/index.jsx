import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import todoActions from '../../redux/actions/todoActions';
import todoCard from './types';
import { RTLProps, ThemeProps } from '../../shared/prop-types/ReducerProps';

class Todo extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      editTodo: PropTypes.func,
      completeTodo: PropTypes.func,
      deleteTodo: PropTypes.func,
      addTodo: PropTypes.func,
      togglePriorityFilter: PropTypes.func,
    }).isRequired,
    todos: PropTypes.arrayOf(todoCard).isRequired,
    theme: ThemeProps.isRequired,
    t: PropTypes.func.isRequired,
    rtl: RTLProps.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      incompleteTodos: props.todos.filter(todo => !todo.completed),
      completedTodos: props.todos.filter(todo => todo.completed),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      incompleteTodos: nextProps.todos.filter(todo => !todo.completed),
      completedTodos: nextProps.todos.filter(todo => todo.completed),
    });
  }

  render() {
    const {
      actions, t, theme, rtl,
    } = this.props;

    const { incompleteTodos, completedTodos } = this.state;

    return (
      <Container className="todo-app">
        <Row>
          <Col md={12}>
            <h3 className="page-title">{t('todo_application.page_title')}</h3>
          </Col>
        </Row>
        <Row>
          <Col md={9} xl={10}>
            <TodoList actions={actions} todos={incompleteTodos} />
            <Col md={12}>
              <div className="todo-app__divider">
                <div className="todo-app__divider-line" />
                <p className="todo-app__divider-title">Done</p>
                <div className="todo-app__divider-line" />
              </div>
            </Col>
            <TodoList completed actions={actions} todos={completedTodos} />
          </Col>
          <Col md={3} xl={2}>
            <TodoInput
              addTodo={actions.addTodo}
              togglePriorityFilter={actions.togglePriorityFilter}
              theme={theme}
              rtl={rtl.direction}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const todos = state.todos.priorityFilter
    ? state.todos.todos.filter(todo => todo.priority === state.todos.priorityFilter)
    : state.todos.todos;
  return { todos, theme: state.theme, rtl: state.rtl };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(todoActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(Todo));
