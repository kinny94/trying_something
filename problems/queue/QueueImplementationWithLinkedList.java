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

class QueueImplementationWithLinkedList<T extends Comparable<T>> {

    private Node<T> firstNode;
    private Node<T> lastNode;
    private int count = 0;

    public boolean isEmpty() {
        return this.firstNode == null;
    }

    public int size() {
        return this.count;
    }

    public void enqueue(T newData) {
        this.count++;
        Node<T> oldLastNode = this.lastNode;
        this.lastNode = new Node<>(newData);
        this.lastNode.setNextNode(null);

        if (isEmpty()) {
            this.firstNode = this.lastNode;
        } else {
            oldLastNode.setNextNode(this.lastNode);
        }
    } 

    public T dequeue() {
        this.count--;
        T dataToDequeue = this.firstNode.getData();
        this.firstNode = this.firstNode.getNextNode();

        if (isEmpty()) {
            this.lastNode = null;
        }
        return dataToDequeue;
    }

    public static void main(String[] args) {
        QueueImplementationWithLinkedList<Integer> queue = new QueueImplementationWithLinkedList<Integer>();
        queue.enqueue(10);
        queue.enqueue(100);
        queue.enqueue(1000);

        System.out.println(queue.size());

        System.out.println(queue.dequeue());
        System.out.println(queue.dequeue());

        System.out.println(queue.size());
        System.out.println(queue.dequeue());
    }
}