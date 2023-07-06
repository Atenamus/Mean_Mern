function factorial(){
    let fact=1;
    for(let i=1;i<=10;i++){
        for(let j=1;j<=i;j++){
            fact=fact*j;
        }
        console.log("factorial:"+fact);
        fact=1;
    }
}
factorial();