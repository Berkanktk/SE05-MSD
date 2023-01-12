import 'package:flutter/material.dart';

import '../db/todo.dart';

class ToDoItem extends StatelessWidget {
  final Task todo;
  final onClickItem;
  final onDeleteItem;

  const ToDoItem({
    Key? key,
    required this.todo,
    required this.onClickItem,
    required this.onDeleteItem,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 20),
      child: ListTile(
        onTap: () {
          onClickItem(todo);
        },
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20),
        ),
        contentPadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 5),
        tileColor: todo.isFinished ? Colors.greenAccent : Colors.white,
        leading: Icon(
          todo.isFinished ? Icons.check_box : Icons.check_box_outline_blank,
          color: todo.isFinished ? Colors.green : Colors.grey,
        ),

        title: Text(
          todo.text!,
          style: TextStyle(
            fontSize: 16,
            color: Colors.black,
            decoration: todo.isFinished ? TextDecoration.lineThrough : null,
          ),
        ),

        trailing: Container(
          // Remove button
          padding: const EdgeInsets.all(0),
          margin: const EdgeInsets.symmetric(vertical: 12),
          height: 35,
          width: 35,
          decoration: BoxDecoration(
            color: Colors.red,
            borderRadius: BorderRadius.circular(5),
          ),
          child: IconButton(
            color: Colors.white,
            iconSize: 18,
            icon: const Icon(Icons.delete_forever),
            onPressed: () {
              // print('Clicked on delete icon');
              onDeleteItem(todo.id);
              // log("Deleted '${todo.id}'");
            },
          ),
        ),
      ),
    );
  }
}