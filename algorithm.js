
class Sherchbineray{
//finction pour sote tabl
  sort(arr){
    let l=arr.length;
       //console.log(l);
    for(let i=0;i<l;i++){
      if(arr[i]>arr[i+1]){
        let t=arr[i+1];
        arr[i+1]=arr[i];
        arr[i]=t;
    
        }
     }
    //console.log(arr);
    return arr;

}
    //fonction recherche
   sherch(arr,x,a,n){
     this.sort(arr);
     let l=arr.length;
     let t=l/2;
     if(arr[t]=x){
        console.log(arr[t]);
        console.log(t);
        return x;
     }else if(arr[t]>x){
      a=0;
      n=arr[t];
      return sherch(arr,x,a,n);
      
     }else{
        n=0;
        a=arr[t];
        return sherch(arr,x,a,n);
     }
    
   }
}
let arr=[2,3,5,7];
let t=new Sherchbineray();
let b=t.sherch(arr,5,0,4);








