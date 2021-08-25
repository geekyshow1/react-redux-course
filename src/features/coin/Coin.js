import { useSelector } from "react-redux"
function Coin() {
 const coin = useSelector((state) => state.counterme.count)
 const themeTextColor = useSelector((state) => state.theme.color)
 return (
  <div>
   <span className="value" style={{ color: themeTextColor }}>Coin: {coin}</span>
  </div>
 )
}

export default Coin
