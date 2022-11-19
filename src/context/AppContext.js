import { createContext, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      }
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      }
      case 'SET_BUDGET':
        return {
          ...state,
          budget: action.payload,
        }
    default:
      return state
  }
}

const initialState = {
  budget: 4302,
  expenses: [
    { id: uuidv4(), name: 'Gas', cost: 320 },
    { id: uuidv4(), name: 'Phone', cost: 220 },
    { id: uuidv4(), name: 'Rent', cost: 900 },
    { id: uuidv4(), name: 'Tolls', cost: 100 },
    { id: uuidv4(), name: 'Justin Car', cost: 370 },
    { id: uuidv4(), name: 'Justin Car Insurance', cost: 240 },
    { id: uuidv4(), name: 'School', cost: 520 },
    { id: uuidv4(), name: 'Ring', cost: 100 },
    { id: uuidv4(), name: 'Best Buy CC', cost: 32 },
    { id: uuidv4(), name: 'Pixel Insurance', cost: 38 },
    { id: uuidv4(), name: 'Spotify', cost: 12 },
    { id: uuidv4(), name: 'Apple', cost: 3 },
    { id: uuidv4(), name: 'Quip', cost: 5 },
    { id: uuidv4(), name: 'Amazon', cost: 12 },
  ],
}

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
