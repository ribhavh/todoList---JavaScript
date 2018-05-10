var todoList = {
  todos: [],
  addToDo : function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeToDo : function(index, todoText) {
    //this.todos[index] = value;
    this.todos[index].todoText = todoText;
  },
  deleteToDo : function(index) {
    this.todos.splice(index, 1);
  },
  toggleCompleted : function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll : function() {
    var toggleCompleted = 0;
    for(var i = 0; i < this.todos.length; i++) {
      if(this.todos[i].completed === true) {
        toggleCompleted++;
      }
    }
    if(toggleCompleted == this.todos.length) {
      for(var j = 0; j < this.todos.length; j++) {
        this.todos[j].completed = false;
      }
    } else {
      for(var k = 0; k < this.todos.length; k++) {
        this.todos[k].completed = true;
      }
    }
  }
};



var handlers = {
  toggleAll : function() {
    todoList.toggleAll();
     view.displayTodos();
  },
  addToDo : function() {
    var added = document.getElementById('added');
    todoList.addToDo(added.value);
    added.value = "";
    view.displayTodos();
  },
  changeToDo : function() {
    var position = document.getElementById('position');
    var text = document.getElementById('text');
    todoList.changeToDo(position.valueAsNumber, text.value);
    position.value = "";
    text.value = "";
    view.displayTodos();
  },
  deleteToDo : function() {
    var position = document.getElementById('positionDelete');
    todoList.deleteToDo(position.valueAsNumber);
    position.value = '';
    view.displayTodos();
  },
  toggleCompleted : function() {
    var position = document.getElementById('positionToggle');
    todoList.toggleCompleted(position.valueAsNumber);
    position.value = '';
    view.displayTodos();
  }
};
  
  var view = {
    displayTodos : function() {
      var todosUl = document.querySelector('ul');
      todosUl.innerHTML = '';
      var toD
      for(var i = 0; i < todoList.todos.length; i++) {
        var todoLi = document.createElement('li');
        if(todoList.todos[i].completed === true)
          todoLi.textContent = '(x) ' + todoList.todos[i].todoText;
          else
          todoLi.textContent = '( ) ' + todoList.todos[i].todoText;
        todosUl.append(todoLi);
      }
    }
};

 