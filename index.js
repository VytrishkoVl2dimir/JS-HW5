
//-----------------Task 5.1----------------

const counterSumm = () => {
    let initVariable = 0;

    return (Variable) => {
        initVariable += Variable;
        return initVariable;  
    }
}
const counter = counterSumm();

//-----------------Task 5.2----------------

const getUpdatedArrFunk = () => {
    let Arr = [];
    return (Variable) => {
        if(Variable === undefined) {
            Arr = [];
        return Arr;
        }
    Arr.push(Variable);
    return Arr;
    }
}
const getUpdatedArr = getUpdatedArrFunk();

//-----------------Task 5.3----------------

const differenceInTime = () => {
    let arr = [];
    return () => {
            if(arr.length === 0) {
               arr.push(new Date().getTime());
            return 'Enabled';
            }
        arr.push(new Date().getTime());
        let difference = Math. round((arr[1] - arr[0])/1000);
            if(arr.length > 1) {
                arr.splice(0,1);
            }
        return difference;
    }        
}
const getTime = differenceInTime();

