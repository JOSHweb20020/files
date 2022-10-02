export default (state, action) => {
    switch(action.type){
        case 'ADD_PRODUCT':
            return{
                ...state, fashionItems:state.fashionItems.filter((fashionItem) => fashionItem.id === action.id)
            }
    }
}