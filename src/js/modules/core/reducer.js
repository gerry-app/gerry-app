const initialState = {
  grid: [
    {
      cells: [
        null,
        {
          id: 1,
          district: 1,
          population: 20,
        },
        {
          id: 2,
          district: 1,
          population: 30,
        },
        {
          id: 3,
          district: 1,
          population: 40,
        }
      ],
    },
    {
      cells: [
        {
          id: 4,
          district: 1,
          population: 20,
        },
        {
          id: 5,
          district: 1,
          population: 30,
        },
        {
          id: 6,
          district: 2,
          population: 40,
        },
        {
          id: 5,
          district: 1,
          population: 30,
        },
      ],
    },
    {
      cells: [
        null,        
        {
          id: 5,
          district: 1,
          population: 30,
        },
        {
          id: 7,
          district: 2,
          population: 20,
        },
        {
          id: 8,
          district: 2,
          population: 50,
        },
        {
          id: 9,
          district: 2,
          population: 40,
        }
      ],
    },
  ],
};

const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  }
  return state;
};

export default reducer;
