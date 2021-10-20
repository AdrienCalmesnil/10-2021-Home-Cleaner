import { createStore } from 'vuex'

// Create a new store instance
const store = createStore({
    state:{

    },
    actions:{
        createAccount:({commit}, userInfos) => {
            commit;
            console.log(userInfos);
        }
    }
})

export default store;