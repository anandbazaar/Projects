const arr = [
    {value:1, isSelected:false, isRemoved:false},
    {value:2, isSelected:false, isRemoved:false},
    {value:3, isSelected:false, isRemoved:false},
    {value:4, isSelected:false, isRemoved:false},
    {value:5, isSelected:false, isRemoved:false},
    {value:6, isSelected:false, isRemoved:false},
]
const shuffle = (arr) => {
    let Cindex = arr.length, Rindex;
    while(Cindex !==0){
        Rindex = Math.floor(Math.random() * Cindex);
        Cindex--;
        [arr[Cindex],arr[Rindex]] = [arr[Rindex],arr[Cindex]];
    }
    return arr;
}
shuffle(arr);
for(let i=0;i<arr.length;i++){
    console.log(arr[i].value)
}
