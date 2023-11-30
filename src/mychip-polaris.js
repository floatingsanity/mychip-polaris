import { LitElement, html, css } from 'lit';

class MychipPolaris extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      display: block;
    }
    .tag-module--tag--d9ee2 {
      text-decoration: none;
      color: #001e44;
      border: 2px solid #444;
      display: inline-block;
      font-family: Roboto, sans-serif;
      font-size: 17px;
      font-weight: 700;
      letter-spacing: 0.03em;
      line-height: 19px;
      text-align: center;
      padding: 13px;
      margin: 5px;
      transition: background-color 0.3s, color 0.3s, text-decoration 0.3s, border 0.3s;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      box-sizing: inherit;
      text-transform: uppercase;
    }
    .tag-module--tag--d9ee2:hover {
      background-color: #f0f0f0;
      color: #0052be;
      text-decoration: underline;
      border: 2px solid transparent;
    }

    .tag-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin-left: 70px
    }
  `;

  render() {
    return html`
      <span>${this.header}</span>
      <div class="tag-container">
        <a class="tag-module--tag--d9ee2" href="https://www.psu.edu/news/academics/">Academics</a>
        <a class="tag-module--tag--d9ee2" href="https://www.psu.edu/news/students/">Students</a>
        <a class="tag-module--tag--d9ee2" href="https://www.psu.edu/news/visitors-and-neighbors/">Visitors and Neighbors</a>
        <a class="tag-module--tag--d9ee2" href="https://www.psu.edu/news/faculty-and-staff/">Faculty and Staff</a>
        <a class="tag-module--tag--d9ee2" href="https://www.psu.edu/news/business-and-industry/">Business and Industry</a>
        <a class="tag-module--tag--d9ee2" href="https://www.psu.edu/news/alumni/">Alumni</a>
        <a class="tag-module--tag--d9ee2" href="https://www.psu.edu/news/university-park/">University Park</a>
        <a class="tag-module--tag--d9ee2" href="https://www.psu.edu/news/latest-news/">Latest News</a>
        <a class="tag-module--tag--d9ee2" href="https://www.psu.edu/news/academics/rankings/">Rankings</a>
        <a class="tag-module--tag--d9ee2" href="https://www.psu.edu/news/impact/">Impact</a>
        <a class="tag-module--tag--d9ee2" href="https://www.psu.edu/news/impact/global/">Global</a>
        <a class="tag-module--tag--d9ee2" href="https://www.psu.edu/news/global-programs/">Global Programs</a>
      </div>
    `;
  }
}

customElements.define('mychip-polaris', MychipPolaris);

