const initialState=10;
const muldivTheNumber=(state=initialState,action)=>{
    switch(action.type){
       case "MULTIPLICATION": return state * action.incremnt5;
       case "DIVISION": return state / 5;
default: return state;
    }
}
export default muldivTheNumber;