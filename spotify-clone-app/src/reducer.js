export const initialState = {
    user : null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after development
    // token: 'BQBl0DNtcUKVveyIIsTl-jeig3HkHXx9cuULGpg1xhWMW1EzApzANO3awgQUynPB2NOpLO4rGQIFcR723MP8WZJOTHuCJV0qTmuIBy3hB4HKmxZqTXbNz1ePJb8e6W8M76bnL4PGU2QZoNHVLIU_-733xil3SgaGjj6EfsUw-4CtMK01',
};

const reducer =(state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists:action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY' :
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;