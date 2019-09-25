class StackImplementationWithArray<T> {
    
    private  T[] stack;
    private int size;

    public StackImplementationWithArray() {
        this.stack = (T[]) new Object[1];
    }

    public void push(T newData) {
        if (size == this.stack.length) {
            resize(2*this.stack.length);
        }

        this.stack[size++] = newData;
    }

    public T pop() {
        T itemToPop = this.stack[--size];
        if ((size > 0) && (size == this.stack.length / 4)) {
            resize(this.stack.length/2);
        }

        return itemToPop;
    }

    private void resize(int capacity) {
        T[] stackCopy = (T[]) new Object[capacity];
        for (int i=0; i<size; ++i) {
            stackCopy[i] = this.stack[i];
        }
        this.stack = stackCopy;
    }
    
    public boolean isEmpty() {
        return this.size == 0;
    }

    public int size() {
        return this.size;
    }

    public static void main(String[] args) {
        StackImplementationWithArray<Integer> stack = new StackImplementationWithArray();
        stack.push(10);
        stack.push(100);
        stack.push(1000);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);

        System.out.println(stack.size());
        System.out.println(stack.pop());
        System.out.println(stack.pop());
    }
}