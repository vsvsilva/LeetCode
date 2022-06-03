/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    
    let lista = [];
    lista.push(nums[0]);

    for(var i = 0; i < nums.length-1; i++){
        var cur = lista[i];
        var next = nums[i+1];

        lista.push(cur+next);
    }

    return lista;
};
