import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //initial state
  query: "", //two properties we are working with
  results: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateQuery: (state, action) => {
      //
      state.query = action.payload;
    },
    updateResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const selectSearch = (state) => state.search;

export default searchSlice.reducer;

/*

State Initialization: The searchSlice begins by initializing its state using the initialState object. In this case, the initial state contains two properties: query and results.

Reducers: The slice defines two reducers that specify how the state should change in response to different actions.

updateQuery: This reducer updates the query property in the state with the payload provided in the action. When this action is dispatched, it takes the new query value and assigns it to state.query. This allows you to update the search query in your Redux store.

updateResults: This reducer updates the results property in the state with the payload provided in the action. It replaces the previous results with the new results data when this action is dispatched.

Action Creators: By using createSlice, action creators are generated automatically. For the updateQuery and updateResults actions, you don't need to write action creator functions explicitly. They are generated as searchSlice.actions.updateQuery and searchSlice.actions.updateResults. These action creators can be dispatched in your components to update the state.

For example, to update the query property, you can dispatch the updateQuery action as follows:


dispatch(searchSlice.actions.updateQuery("New Search Query"));
Similarly, for updating the results property:


dispatch(searchSlice.actions.updateResults(newResultsData));
Selectors: The slice also provides a selector function, selectSearch, which allows you to access the entire search slice of the Redux store. This selector can be used in your React components to retrieve the search-related data from the store.

For example, you can use selectSearch in a component to access the entire search slice:


const searchState = useSelector(selectSearch);
Then, you can access specific properties like searchState.query and searchState.results.*/
