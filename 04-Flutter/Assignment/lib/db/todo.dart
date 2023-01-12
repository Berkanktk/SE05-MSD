class Task {
  String? id;
  String? text;
  bool isFinished;

  Task({
    required this.id,
    required this.text,
    this.isFinished = false,
  });

  static List<Task> todoList() {
    return [
      Task(id: '1', text: 'MSD exercises', isFinished: true),
      Task(id: '2', text: 'Gaming with friends', isFinished: true),
      Task(id: '3', text: 'Walk the dog'),
      Task(id: '4', text: 'Go shopping'),
      Task(id: '5', text: 'Meeting with project group'),
      Task(id: '6', text: 'Learn flutter'),
    ];
  }
}