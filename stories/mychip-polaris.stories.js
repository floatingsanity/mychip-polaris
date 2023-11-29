import { html } from 'lit';
import '../src/mychip-polaris.js';

export default {
  title: 'MychipPolaris',
  component: 'mychip-polaris',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <mychip-polaris
      style="--mychip-polaris-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </mychip-polaris>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
