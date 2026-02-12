import { addItem, updateItemName } from "./app.js";

// Create Form Element
export function createForm() {
  const form = document.createElement("form");

  form.innerHTML = `
    <h2>grocery bud</h2>
    <div class="form-control">
      <input
        type="text"
        class="form-input"
        placeholder="e.g. eggs
        value="${itemToEdit ? itemToEdit.name : ""}"
      />
      <input
        type="date"
        class="form-date"
        value="${itemToEdit && itemToEdit.dueDate ? itemToEdit.dueDate : ""}"
      />

      <button type="submit" class="btn">
        add item
      </button>
    </div>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector(".form-input");
    const value = input.value.trim();
    const dateInput = form.querySelector(".form-date");
    const dueDate = dateInput.value;

    if (!value) {
      alert("Please provide value");
      return;
    }

    if (editId) {
      updateItemName(value, dueDate);
    } else {
      addItem(value, dueDate);
    }
    input.value = "";
    dateInput.value = "";
  });

  return form;
}
