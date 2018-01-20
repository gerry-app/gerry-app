const initialState = {
  grid: [
    {
      offset: 1,
      cells: [
        {
          district: 1,
          population: 20,
        },
        {
          district: 1,
          population: 30,
        },
        {
          district: 1,
          population: 40,
        }
      ],
    },
    {
      offset: 0,
      cells: [
        {
          district: 1,
          population: 20,
        },
        {
          district: 1,
          population: 30,
        },
        {
          district: 1,
          population: 40,
        }
      ],
    },
    {
      offset: 2,
      cells: [
        {
          district: 1,
          population: 20,
        },
        {
          district: 1,
          population: 30,
        },
        {
          district: 1,
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
