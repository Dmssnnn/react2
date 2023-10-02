import user1ChatDiv from "./user1Chat"
import user2ChatDiv from "./user2Chat"
export default function Input({ Width , Height , bgColor, color, }) {
    return (
      <div className="input-wrap">
        <div className="firstInput">
          <input id="firstInput" style={{width : Width, height : Height , backgroundColor : bgColor  }}  type="text"/>
          <button onClick={user1ChatDiv} id="firstButton" style={{height : Height ,  backgroundColor : bgColor , color : color }}>Send</button>
        </div>
        <div className="secondInput">
        <input id="secondInput" style={{width : Width, height : Height , backgroundColor : bgColor , }}  type="text"/> 
        <button onClick={user2ChatDiv}  id="secondButton" style={{height : Height ,  backgroundColor : bgColor, color : color}}>Send</button>
        </div>
        
        
      </div>
    );
  }
  