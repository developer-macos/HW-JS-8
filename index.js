
// Через for
function joinArrayFor(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) {
      result += ',';
    }
  }
  return result;
}

// Через join()
function joinArrayJoin(arr) {
  return arr.join(',');
}

// Приклад використання
const myArray = ['apple', 'banana', 'orange', 'grape'];
console.log(joinArrayFor(myArray));  // Виведе: apple,banana,orange,grape
console.log(joinArrayJoin(myArray)); // Виведе: apple,banana,orange,grape

// Припустимо, що у нас є масив карток Trello
let trelloCards = [
  { id: 1, title: 'Task 1', description: 'Description 1' },
  { id: 2, title: 'Task 2', description: 'Description 2' },
  { id: 3, title: 'Task 3', description: 'Description 3' }
];

// 3. Видалення картки
function deleteCard(cardId) {
  const index = trelloCards.findIndex(card => card.id === cardId);
  if (index !== -1) {
    trelloCards.splice(index, 1);
  }
}

// 4. Додавання нової картки
function addCard(newCard) {
  trelloCards.push(newCard);
}

// 5. Оновлення картки
function updateCard(cardId, updatedInfo) {
  const index = trelloCards.findIndex(card => card.id === cardId);
  if (index !== -1) {
    trelloCards[index] = { ...trelloCards[index], ...updatedInfo };
  }
}

// Приклади використання
console.log('Initial cards:', trelloCards);

deleteCard(2);
console.log('After deleting card 2:', trelloCards);

addCard({ id: 4, title: 'New Task', description: 'New Description' });
console.log('After adding new card:', trelloCards);

updateCard(1, { title: 'Updated Task 1', description: 'Updated Description 1' });
console.log('After updating card 1:', trelloCards);
