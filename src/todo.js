// keep the totals updated
function updateTotals() {
  ['todo', 'wip', 'done'].forEach((column) => {
    let columnTotal = $(`#${column} li`).length;
    $(`.${column}-total`).text(columnTotal);
  });

  $('.global-total').text($('li').length);
}

/*
can drag items from "To do" to "in Progress" and vice versa
can drag items from "In Progress" to "Done" and vice versa
can NOT drag items straight from "To do" to "Done"
*/

// format is column name : allowed drag targets
const columns = {
  'todo': 'wip',
  'wip': ['todo', 'done'],
  'done': 'wip'
};

Object.keys(columns).forEach((columnName) => {
  let column = $(`#${columnName}`)[0];

  // we're using the Sortable js lib for draggable & sortable columns
  Sortable.create(column, {
    group: {
      name: columnName,
      pull: true,
      put: columns[columnName]
    },
    // better visibility when dragging
    ghostClass: 'column__listitem_ghost',
    onAdd: updateTotals
  });
});

$('.add-project__button').click(() => {
  // should be able to add a task by clicking 'add project'
  // which brings up an input next to the button.
  $('.add-project__input').show();
});

// type the task name into the input
$('.add-project__input').keyup(function(e) {
  if (e.keyCode === 13 /* aka Enter */ && this.value.length > 0) {
    // and press enter, upon which task gets added to the 'To do' list
    $('#todo').append(`<li class="column__listitem">${this.value}</li>`);
    updateTotals();
    this.value = '';
    // and the input hides
    $(this).hide();
  }
});
