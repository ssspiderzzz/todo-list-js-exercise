const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logstate: function() {
      console.log(`${this.title} has${this.complete ? "" : " not"} completed.`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// for now, let's just make sure we see our tasks
task1.logstate();
task1.markCompleted();
task1.logstate();

console.log(task2.title);
console.log(task2.description);
