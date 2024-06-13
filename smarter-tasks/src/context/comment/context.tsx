/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer, PropsWithChildren } from 'react';
import { commentReducer, initialState } from './reducer';
import { CommentListState, CommentDispatch } from './types';


const CommentStateContext = createContext<CommentListState>(initialState);
const CommentDispatchContext = createContext<CommentDispatch>(() => { });

export const useCommentsDispatch = () => useContext(CommentDispatchContext);
export const useCommentsState = () => useContext(CommentStateContext);

export const CommentProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(commentReducer, initialState);
    return (
        <CommentStateContext.Provider value={state}>
            <CommentDispatchContext.Provider value={dispatch}>
                {children}
            </CommentDispatchContext.Provider>
        </CommentStateContext.Provider>
    )
}
