import { FC } from 'react'
import ReactLotties, { LottieProps, Options } from 'react-lottie'

type Props = {
    animationData?: any
    options?: Options
} & Omit<LottieProps, "options">

const Lottie: FC<Props> = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: props.animationData
    } as Options;

    const { options = defaultOptions, ...rest } = props

    return (
        <ReactLotties {...rest} options={options} />
    )
}

export default Lottie