export const Learn1 = () => ({
    type: "LEARN_1",
})
export const Learn2 = () => ({
    type: "LEARN_2",
})
export const Learn3 = () => ({
    type: "LEARN_3",
})
export const Learn4 = () => ({
    type: "LEARN_4",
})
export const Learn5 = () => ({
    type: "LEARN_5",
})
export const Learn6 = () => ({
    type: "LEARN_6",
})
export const Learn7 = () => ({
    type: "LEARN_7",
})
export const Learn8 = () => ({
    type: "LEARN_8",
})
export const Learn9 = () => ({
    type: "LEARN_9",
})
export const Learn10 = () => ({
    type: "LEARN_10",
})
export const Learn0 = () => ({
    type: "NONE"
})

const INITIAL_STATE = [{
    id: null,
    num: []
}]

const learnReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LEARN_1":
            return ([{id:1,num:[1,2,3,4,5,6,7,8,9,10]}]);
        case "LEARN_2":
            return ([{id:2,num:[11,12,13,14,15,16,17,18,19,20]}]);
        case "LEARN_3":
            return ([{id:3,num:[21,22,23,24,25,26,27,28,29,30]}]);

        case "LEARN_4":
            return ([{id:4,num:[31,32,33,34,35,36,37,38,39,40]}]);

        case "LEARN_5":
            return ([{id:5,num:[41,42,43,44,45,46,47,48,49,50]}]);
        
        case "LEARN_6":
            return ([{id:6,num:[51,52,53,54,55,56,57,58,59,60]}]);
        case "LEARN_7":
            return ([{id:7,num:[61,62,63,64,65,66,67,68,69,70]}]);
        case "LEARN_8":
            return ([{id:8,num:[71,72,73,74,75,76,77,78,79,80]}]);

        case "LEARN_9":
            return ([{id:9,num:[81,82,83,84,85,86,87,88,89,90]}]);

        case "LEARN_10":
            return ([{id:10 ,num:[91,92,93,94,95,96,97,98,99,100]}]);
        default:
            return state;
    }
}

export default learnReducer;