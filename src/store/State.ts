import { makeAutoObservable } from 'mobx';

interface PropertyExpression {
  value: string[];
  checked: boolean;
}

interface Characteristic {
  id: number;
  checked: boolean;
  characteristic: string;
  property_expression: PropertyExpression[];
}

class State {
  data: Characteristic[] = [];
  loading = false;
  error = null;
  modalIsOpen = false;
  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }
  removeItem(id: number): void {
    try {
      this.data = this.data.filter((item) => item.id !== id);

      fetch(`https://05e0a168310c691a.mokky.dev/items/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  }
  async fetchDataFromApi(): Promise<void> {
    this.loading = true;

    try {
      const response = await fetch('https://05e0a168310c691a.mokky.dev/items');

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      this.data = await response.json();
    } catch (error: any) {
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  }

  allChecked(check: boolean): void {
    this.data.forEach((item) => (item.checked = check));
  }
  setOpen(): void {
    this.modalIsOpen = !this.modalIsOpen;
  }

  oneCheck(id: number): void {
    this.data = this.data.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
  }
  changeCheck(id: number, index: number) {
    const updatedRows = [...this.data];
    updatedRows[id] = {
      ...updatedRows[id],
      property_expression: [
        ...updatedRows[id].property_expression.slice(0, index),
        {
          ...updatedRows[id].property_expression[index],
          checked: !updatedRows[id].property_expression[index].checked,
        },
        ...updatedRows[id].property_expression.slice(index + 1),
      ],
    };
    fetch(`https://05e0a168310c691a.mokky.dev/items/${id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRows[id]),
    });
    this.data = updatedRows;
  }
}

export default new State();
