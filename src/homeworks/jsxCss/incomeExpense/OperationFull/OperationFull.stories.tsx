import type { Meta } from '@storybook/react';
import OperationFull from './OperationFull';

const meta: Meta<typeof OperationFull> = {
  title: 'Homework2/IncomeExpense/OperationFull',
  component: OperationFull,
  argTypes: {
    name: {
      type: 'string',
    },
    sum: {
      type: 'number',
    },
    desc: {
      type: 'string',
    },
    categoryName: {
      type: 'string',
    },
    date: {
      type: 'string',
    },
  },
};

export default meta;

export const primary = {
  args: {
    name: 'Покупка',
    sum: 120,
    desc: `Разнообразный и богатый опыт консультация с широким активом в значительной степени
         обуславливает создание форм развития. Таким образом рамки и место обучения кадров в
          значительной степени обуславливает создание системы обучения кадров, соответствует
           насущным потребностям. Не следует, однако забывать, что реализация намеченных плановых
            заданий позволяет оценить значение существенных финансовых и административных условий
            . Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности 
            в значительной степени обуславливает создание систем массового участия.`,
    categoryName: 'Масла',
    date: '10.10.2024',
  },
};
