import './app.element.css';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'plain-html';
    this.innerHTML = `
    <div class="wrapper">
      <div class="container">
        <!--  WELCOME  -->
        <div id="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome ${title} 👋
          </h1>
        </div>

        <shared-component></shared-component>
      </div>
    </div>
      `;
  }
}
customElements.define('test-monorepo-proj-2-root', AppElement);
