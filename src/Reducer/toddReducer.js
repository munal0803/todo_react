const initialData = {
    list:[]
}
const toddReducer = (state=initialData, action) =>{
switch(action.type){
    case "ADDTODO":
        const { id , data, completed} = action.payload;
        return {
            ...state,
            list:[
                ...state.list,
                {
                    id:id,
                    data:data,
                    completed:false
                }
            ]
        }
        case "REMOVETODO":
            // const new_list = state.list.filter((val) => val.id !== action.id)
            const new_list= [];
            for( var i = 0 ; i < state.list.length;i++){
                if(state.list[i].id === action.id){
                   console.log('d');
                }else{
                    new_list.push(state.list[i])
                }
            }
            console.log(new_list.length);
                 
            return {
               ...state,
               list:new_list
            }
        
            
        case "DONETODO":
            for(  i = 0 ; i < state.list.length;i++){
           if(state.list[i].id === action.id){
            console.log(state.list[i].completed);
                state.list[i].completed = true;

                  console.log(state.list[i].completed);
           }
            } 
            const new_lists = state.list;
            return {
                   ...state,
                   list:new_lists
            }
            
        case "CHECKTODO":
            return {
                list:[]
            }    


            
    default:{return state}
}

}
export default toddReducer;