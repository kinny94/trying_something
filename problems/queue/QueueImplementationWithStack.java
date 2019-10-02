import java.util.Stack;

class QueueImplementationWithStack {

    private Stack<Integer> enqueueStack;
    private Stack<Integer> dequeueStack;

    public QueueImplementationWithStack() {
        this.enqueueStack = new Stack<>();
        this.dequeueStack = new Stack<>();
    }

    public void enqueue(int item) {
        this.enqueueStack.push(item);
    }

    public int dequeue() {
        if(enqueueStack.isEmpty() && dequeueStack.isEmpty()) {
            throw new RuntimeException("Stacks are empty");
        }

        if(dequeueStack.isEmpty()) {
            while(!enqueueStack.isEmpty()) {
                dequeueStack.push(enqueueStack.pop());
            }
        }

        return dequeueStack.pop();
    }

    public static void main(String[] args) {
        QueueImplementationWithStack queue = new QueueImplementationWithStack();
        queue.enqueue(10);
        queue.enqueue(5);
        queue.enqueue(14);

        System.out.println(queue.dequeue());

        queue.enqueue(100);
        System.out.println(queue.dequeue());
        System.out.println(queue.dequeue());
        System.out.println(queue.dequeue());
    }
}