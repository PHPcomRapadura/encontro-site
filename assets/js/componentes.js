function createTableRow(time, activity, facilitator) {
  // Create the table row element
  const tr = document.createElement('tr');
  tr.classList.add('table--row');

  // Create the time cell
  const th = document.createElement('th');
  th.scope = 'row';
  th.classList.add('table--fixed-cell');
  th.textContent = time;
  tr.appendChild(th);

  // Create the activity cell
  const tdActivity = document.createElement('td');
  tdActivity.classList.add('table--cell');
  tdActivity.textContent = activity;
  tr.appendChild(tdActivity);

  // Create the facilitator cell
  const tdFacilitator = document.createElement('td');
  tdFacilitator.classList.add('table--cell');
  tdFacilitator.textContent = facilitator;
  tr.appendChild(tdFacilitator);

  return tr;
}

const initScheduleTable = (schedule) => {
  // Get the table body element
  const tableBody = document.getElementById('schedule-table');

  // Create a table row for each agenda item
  schedule.map(({ horario, atividade, facilitador }) => {
    const newRow = createTableRow(horario, atividade, facilitador);
    tableBody.appendChild(newRow);
  });
};