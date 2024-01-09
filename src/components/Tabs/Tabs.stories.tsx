import type { Meta, StoryObj } from '@storybook/react';
import TabGroup from './TabGroup';

const meta = {
  title: 'Tab 컴포넌트',
  component: TabGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TabGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseTabs: Story = {
  args: {
    tabs: [
      {
        id: '1',
        title: '첫번쨰 탭',
        content: '첫번쨰 탭 아이템',
      },
      {
        id: '2',
        title: '두번쨰 탭',
        content: (
          <div>
            <div>
              아
              <div>
                아아
                <span>
                  오오
                  <mark>헤헤</mark>
                </span>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: '3',
        title: '세번쨰 탭',
        content: '세번쨰 탭 아이템',
      },
    ],
  },
};
