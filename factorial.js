function extraLongFactorials(n) {
    // Write your code here
    let ans = 1n
    let newN = BigInt(n)
    let i = 0n
    while(i<newN){
      ans *=  newN-i
      i++
    }
    return String(ans)
}
