function prime(){
    let num=7;
    let c=0;
    for(let i=2;i<num;i++){
        if(num%i==0){
            c++;
        }
    }
    if(c>0){
        console.log("not prime");
    }
    else{
        console.log("prime");
    }
}
prime();