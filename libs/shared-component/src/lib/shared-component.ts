import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("shared-component")
export class SharedComponent extends LitElement {
    static override styles = css`
    :host {
      display: block; /* Забезпечує, що компонент займає всю ширину */
      padding: 20px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      margin-bottom: 25px;
      background-color: #ffffff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #333;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 15px; /* Простір між елементами форми */
    }

    label {
      font-weight: 600;
      margin-bottom: 5px;
      display: block; /* Щоб мітка займала окремий рядок */
      color: #555;
    }

    input[type="text"] {
      padding: 12px;
      border: 1px solid #cccccc;
      border-radius: 5px;
      font-size: 1em;
      width: 100%;
      box-sizing: border-box; /* Враховуємо padding у загальній ширині */
      transition: border-color 0.2s ease-in-out;
    }

    input[type="text"]:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
    }

    button[type="submit"] {
      padding: 12px 25px;
      border: none;
      border-radius: 5px;
      background-color: #007bff;
      color: white;
      font-size: 1.1em;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.1s ease;
      align-self: flex-start; /* Вирівнює кнопку по лівому краю */
    }

    button[type="submit"]:hover {
      background-color: #0056b3;
      transform: translateY(-1px);
    }

    button[type="submit"]:active {
      background-color: #004085;
      transform: translateY(0);
    }

    .message {
      margin-top: 20px;
      padding: 12px 15px;
      border-radius: 5px;
      font-weight: 500;
      text-align: center;
      transition: opacity 0.3s ease;
    }

    .success {
      background-color: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    .error {
      background-color: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }
  `;

  // Властивість, яка може бути встановлена ззовні через атрибут HTML.
  // Використовуємо 'default-value' для встановлення початкового значення поля.
  @property({ type: String, attribute: 'default-value' })
  inputValue: string = '';

  // Приватний стан, що управляє внутрішнім станом компонента (повідомлення).
  // Не може бути встановлений через атрибут HTML.
  @state()
  private _message: string = '';

  @state()
  private _messageType: 'success' | 'error' | '' = '';

  /**
   * Обробник події 'input' для текстового поля.
   * Оновлює inputValue та очищає попередні повідомлення.
   */
  private _handleInputChange(event: InputEvent) {
    this.inputValue = (event.target as HTMLInputElement).value;
    this._message = '';
    this._messageType = '';
  }

  /**
   * Обробник події 'submit' для форми.
   * Запобігає перезавантаженню сторінки, обробляє введення та відображає повідомлення.
   */
  private _handleSubmit(event: Event) {
    event.preventDefault(); // Запобігаємо стандартній поведінці форми (перезавантаженню сторінки)

    const trimmedValue = this.inputValue.trim();

    if (trimmedValue !== '') {
      console.log('Форма відправлена з значенням:', trimmedValue);
      this._message = `Успішно відправлено: "${trimmedValue}"`;
      this._messageType = 'success';
      this.inputValue = ''; // Очищаємо поле після успішної відправки
    } else {
      this._message = 'Будь ласка, введіть текст у поле.';
      this._messageType = 'error';
    }
  }

  /**
   * Метод `render()` повертає шаблон HTML для компонента.
   * `override` вказує, що цей метод перекриває метод базового класу LitElement.
   */
  override render() {
    return html`
      <form @submit=${this._handleSubmit}>
        <label for="simple-input">Введіть ваш текст:</label>
        <input
          type="text"
          id="simple-input"
          .value=${this.inputValue}
          @input=${this._handleInputChange}
          placeholder="Наприклад: Привіт, Lit!"
          aria-label="Введення тексту"
        />
        <button type="submit">Відправити</button>
      </form>

      ${this._message
        ? html`<div class="message ${this._messageType}">${this._message}</div>`
        : ''}
    `;
  }
}
