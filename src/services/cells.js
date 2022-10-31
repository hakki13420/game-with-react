let j=-1;

const cells=new Array(8)
                .fill(new Array(8).fill({   
                    ocuped:false,
                    ocupedBy:''
                }))
                .map((el, i)=>{
                    return el.map((cell,index)=>{
                        j++
                        return (j+i)%2 ?(
                        {...cell,id:j,color:1} ):
                        ({...cell,id:j,color:2})
                    })                    
                })
  

console.log('cells', cells)
export default cells