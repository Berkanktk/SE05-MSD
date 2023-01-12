import 'package:flutter/material.dart';
import 'package:uuid/uuid.dart';
import 'package:another_flushbar/flushbar.dart';

import '../db/todo.dart';
import '../widgets/todo.dart';

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final todoList = Task.todoList();
  final _todoController = TextEditingController();
  var uuid = const Uuid();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFEEEFF5),
      appBar: _customAppBar(),
      body: Stack(
        children: [
          Container(
            margin: const EdgeInsets.only(
              bottom: 65,
            ),
            padding: const EdgeInsets.symmetric(
              horizontal: 20,
              vertical: 15,
            ),
            child: Column(
              children: [
                Expanded(
                  child: ListView(
                    children: [
                      Container(),
                      for (Task todo in todoList.reversed)
                        ToDoItem(
                          todo: todo,
                          onClickItem: _registerClick,
                          onDeleteItem: _deleteItem,
                        ),
                    ],
                  ),
                )
              ],
            ),
          ),
          Align(
            alignment: Alignment.bottomCenter,
            child: Row(children: [
              Expanded(
                child: Container(
                  margin: const EdgeInsets.only(
                    top: 10,
                    bottom: 20,
                    right: 20,
                    left: 20,
                  ),
                  padding: const EdgeInsets.symmetric(
                    horizontal: 20,
                    vertical: 5,
                  ),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    boxShadow: const [
                      BoxShadow(
                        color: Colors.grey,
                        offset: Offset(0.0, 0.0),
                        blurRadius: 10.0,
                        spreadRadius: 0.0,
                      ),
                    ],
                    borderRadius: BorderRadius.circular(25),
                  ),
                  child: TextField(
                    controller: _todoController,
                    decoration: const InputDecoration(
                        hintText: 'Add a new task', border: InputBorder.none),
                  ),
                ),
              ),
              Container(
                // Add button
                margin: const EdgeInsets.only(
                  top: 10,
                  bottom: 20,
                  right: 20,
                ),
                child: FloatingActionButton(
                  onPressed: () {
                    _addItem(_todoController.text);
                  },
                  //backgroundColor: _todoController.text == "" ?  Colors.red :  Colors.green,
                  backgroundColor: Colors.deepOrange,
                  child: const Icon(Icons.add),
                ),
              ),
            ]),
          ),
        ],
      ),
    );
  }

  void _registerClick(Task todo) {
    // Click on card
    setState(() {
      todo.isFinished = !todo.isFinished;
    });
  }

  void _deleteItem(String id) {
    setState(() {
      todoList.removeWhere((item) => item.id == id);
    });
  }

  void _addItem(String toDo) {
    setState(() {
      if (_todoController.text.isNotEmpty) {
        todoList.add(Task(
          id: uuid.v4(),
          text: toDo,
        ));

        Flushbar(
          title: 'Success!',
          message: 'Task added successfully.',
          duration: const Duration(milliseconds: 1250),
          flushbarPosition: FlushbarPosition.TOP,
          backgroundColor: Colors.green,
          borderRadius: BorderRadius.circular(25),
          margin: const EdgeInsets.all(20),
        ).show(context);

        FocusScope.of(context).unfocus();
        _todoController.clear();
      } else {
        Flushbar(
          title: 'Whoops!',
          message: 'Field cannot be empty.',
          duration: const Duration(milliseconds: 1250),
          flushbarPosition: FlushbarPosition.TOP,
          backgroundColor: Colors.red,
          borderRadius: BorderRadius.circular(25),
          margin: const EdgeInsets.all(20),
        ).show(context);
      }
    });
  }

  AppBar _customAppBar() {
    return AppBar(
      backgroundColor: const Color(0xFFEEEFF5),
      elevation: 0,
      title: Column(children: const [
        Text(
          'All ToDos',
          style: TextStyle(
            fontSize: 30,
            color: Colors.black,
            fontWeight: FontWeight.w500,
          ),
        ),
      ]),
    );
  }
}
