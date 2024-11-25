// Adding event listener to the button for adding flashcards
document.getElementById('addFlashcard').addEventListener('click', function() {
    const wordInput = document.getElementById('word');
    const definitionInput = document.getElementById('definition');
    
    const word = wordInput.value.trim();
    const definition = definitionInput.value.trim();

    if (word && definition) {
        addFlashcard(word, definition);
        wordInput.value = '';
        definitionInput.value = '';
    }
});

// Function to add a flashcard to the UI
function addFlashcard(word, definition) {
    const flashcardsContainer = document.getElementById('flashcards-container');

    const flashcard = document.createElement('div');
    flashcard.classList.add('flashcard');

    // Create the inner container that will hold both sides (front and back)
    const flashcardInner = document.createElement('div');
    flashcardInner.classList.add('flashcard-inner');

    // Front of the flashcard (Word)
    const flashcardFront = document.createElement('div');
    flashcardFront.classList.add('front');
    flashcardFront.textContent = word;

    // Back of the flashcard (Definition)
    const flashcardBack = document.createElement('div');
    flashcardBack.classList.add('back');
    flashcardBack.textContent = definition;

    // Append both front and back to the flashcard inner
    flashcardInner.appendChild(flashcardFront);
    flashcardInner.appendChild(flashcardBack);
    
    // Append the inner container to the flashcard div
    flashcard.appendChild(flashcardInner);

    // Append the flashcard to the flashcards container
    flashcardsContainer.appendChild(flashcard);

    // Add a click event listener to flip the flashcard
    flashcard.addEventListener('click', function() {
        // Toggle the flip by rotating the flashcard-inner
        flashcardInner.style.transform = flashcardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0)' : 'rotateY(180deg)';
    });
}
