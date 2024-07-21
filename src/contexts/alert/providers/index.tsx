import { FC, PropsWithChildren, useContext, useMemo, useReducer } from "react";
import { AlertContext } from "..";
import { IAlertContext } from "../contracts/contexts";
import { SpinnerInitialState, SnackBarInitialState } from "../initialStates";
import SnackBarReducer from "../reducers/snackBarReducer";
import SpinnerReducer from "../reducers/spinnerReducer";

type AlertProviderProps = PropsWithChildren<{}>;

export const AlertProvider: FC<AlertProviderProps> = (props) => {

    const [spinnerState, spinnerDispatch] = useReducer(SpinnerReducer, SpinnerInitialState);
    const [snackBarState, snackBarDispatch] = useReducer(SnackBarReducer, SnackBarInitialState);

    const snackBarContextValue = useMemo(() => {
        return { snackBarState, snackBarDispatch };
    }, [snackBarState, snackBarDispatch]);

    const spinnerContextValue = useMemo(() => {
        return { spinnerState, spinnerDispatch };
    }, [spinnerState, spinnerDispatch]);

    return (
        <AlertContext.Provider value={{
            snackBar: snackBarContextValue,
            spinner: spinnerContextValue
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export const useAlertContext = (): IAlertContext => useContext(AlertContext);