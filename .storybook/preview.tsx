import type { Preview } from '@storybook/nextjs-vite'
import Providers from "../src/app/providers"; 

const preview: Preview = {
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],

  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;