import { useAlertContext } from "contexts"

const useSpinner = () => {

    const { spinner } = useAlertContext()

    const show = (message: string = '') => {
        spinner.spinnerDispatch({
            type: 'onShowSpinner',
            payload: {
                ...spinner.spinnerState,
                messageSpinner: message
            }
        })
    }

    const hidden = () => {
        spinner.spinnerDispatch({
            type: 'onHiddenSpinner'
        })
    }

    return { show, hidden }
}

export default useSpinner