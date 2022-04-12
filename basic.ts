class Stack {
    array: number[] = []

    pop(){
        this.array.pop()
    }

    push(n: number) {
        this.array.push(n);
    }
}

class Queue {
    array: number[] = [] 

    pop(){
        this.array.shift()
    }

    push(n:number) {
        this.array.push(n)   
    }


}

(() => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2) 

    stack.pop()
    

    const q = new Queue()
    q.push(1) 
    q.push(2)

    q.pop() 

    console.log(q.array)
    console.log(stack.array)
})()