class Node<T extends Comparable<T>> {
    
    private T data;
    private Node<T> nextNode;

    Node(T data) {
        this.data = data; 
    }

    public T getData(){
        return this.data;
    }

    public Node<T> getNextNode() {
        return this.nextNode;
    }

    public void setData(T data) {
        this.data = data;
    }

    public void setNextNode(Node<T> node) {
        this.nextNode = node;
    }

    public String toString() {
        return this.data.toString();
    }
}

class StackImplementationUsingLinkedList<T extends Comparable<T>> {

    private Node<T> root;
    private int count;

    public void push(T newData) {
        this.count++;

        if (this.root == null) {
            this.root = new Node<>(newData);
        } else {
            Node<T> oldRoot = this.root;
            this.root = new Node<>(newData);
            this.root.setNextNode(oldRoot);
        }
    }

    public T pop() {
        T itemToPop = this.root.getData();
        this.root = this.root.getNextNode();
        this.count--;
        return itemToPop;
    }

    public T peek() {
        return this.root.getData();
    }

    public int size() {
        return this.count;
    }

    public boolean isEmpty() {
        return this.root == null;
    }

    public static void main(String[] args) {
        StackImplementationUsingLinkedList<Integer> myStack = new StackImplementationUsingLinkedList();
        myStack.push(10);
        myStack.push(100);
        myStack.push(1000);
        myStack.push(1);
        myStack.push(2);
        myStack.push(3);
        myStack.push(4);

        System.out.println(myStack.size());
        System.out.println(myStack.pop());
        System.out.println(myStack.pop());
        System.out.println(myStack.peek());
    }
}