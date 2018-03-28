// Have to wrap in parentheses to signal that it is setting a return function
// and not opening the function
export const incrementProgress = () => ({ type: 'INCREMENT_PROGRESS' });

export const decrementProgress = () => ({ type: 'DECREMENT_PROGRESS' });
