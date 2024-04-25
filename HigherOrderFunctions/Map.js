/**
 * Map : 
        Creates New Array 
        From Existing one .
 */

        const nums = [1,2,3,4]

        const multT = nums.map((num,i,Array)=>{
            return num * 3
        })

        console.log(multT);