import chatDiv from "./inputFunction"

export default function Input({ Width , Height , bgColor, color,   }) {
    return (
      <div className="input-wrap">
        <div className="firstInput">
          <input id="firstInput" style={{width : Width, height : Height , backgroundColor : bgColor  }}  type="text"/>
          <button onClick={chatDiv} id="firstButton" style={{height : Height ,  backgroundColor : bgColor , color : color ,}}>Send</button>
        </div>
        <div className="secondInput">
        <input style={{width : Width, height : Height , backgroundColor : bgColor , }}  type="text"/> 
        <button style={{height : Height ,  backgroundColor : bgColor, color : color}}>Send</button>
        </div>
        
        
      </div>
    );
  }
  