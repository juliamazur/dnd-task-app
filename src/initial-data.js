const initialData = {
  items: {
    'item-1': { id: 'item-1', content: 'Makaron kokardki'},
    'item-2': { id: 'item-2', content: 'Pomidorowa'},
    'item-3': { id: 'item-3', content: 'Ryż z jabłkami'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Poniedziałek',
      itemIds: ['item-1', 'item-2', 'item-3'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Wtorek',
      itemIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Środa',
      itemIds: [],
    },
  },
  columnOrder: ['column-1','column-2','column-3'],
};

export default initialData;
