import { useScreenResizeHook } from "../customeHooks/useScreenResizeHook"

const ScreenResizeComp = () => {

    const {heightOfScreen, widthOfScreen} = useScreenResizeHook()

  return (
    <div>
            <div>Height = {heightOfScreen}</div>
            <div>Width = {widthOfScreen}</div>
    </div>
  )
}

export default ScreenResizeComp