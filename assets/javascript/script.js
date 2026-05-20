/*
  REGOLE
  - Solo const/let, mai var.
  - DOM con querySelector / querySelectorAll.
  - Eventi con addEventListener (mai onclick inline nell'HTML).
*/

let tasks = [];
const formTask = document.querySelector('#form-task');
const input = document.querySelector('#campo-task');
const listaTask = document.querySelector('#lista-task');
const contatore = document.querySelector('#contatore');
const errore = document.querySelector('#errore');
const taskElements = document.querySelectorAll('#lista-task li');



let filtro = "tutti"; // "tutti" | "attivi" | "completati"


/* SCRIVI QUI LE TUE FUNZIONI E I TUOI LISTENER:
   4. Listener sui button .filtri (cambia filtro, classe attivo, render)
   EXTRA: localStorage per persistenza
*/

formTask.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value === '') {
    errore.textContent = 'Inserisci un Task!';
    return;
  }
  const newTask = {
    id: taskElements.length + 1,
    testo: input.value,
    completato: false
  };
  tasks.push(newTask);
  input.value = '';
  contatoreUno();
  rendiLista();
  console.log(tasks);
});

function rendiLista() {
  listaTask.textContent = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    boxCheck(li, task);
    const span = document.createElement('span');
    span.textContent = task.testo;
    if (task.completato) {
    span.classList.add('completato');
    }
    li.append(span);
    bottone(li);
    listaTask.append(li);
  })
};

function bottone(li) {
  const bottoneElimina = document.createElement('button');
  bottoneElimina.classList.add('elimina');
  bottoneElimina.textContent = 'Elimina';
  li.append(bottoneElimina);
}

function boxCheck(li, task) {
  const checkBoxUno = document.createElement('input');
  checkBoxUno.classList.add('checkbox');
  checkBoxUno.type = 'checkbox';
  checkBoxUno.checked = task.completato;
  checkBoxUno.addEventListener('change', () => {
    task.completato = checkBoxUno.checked;
    rendiLista();
  })
  li.append(checkBoxUno);
}

function contatoreUno() {
  const tasksElements = listaTask.querySelectorAll('li');
  contatore.textContent = tasks.length;
};



