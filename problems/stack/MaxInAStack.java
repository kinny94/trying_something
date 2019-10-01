import java.util.Stack;

class MaxInAStack {

    private Stack<Integer> mainStack;
    private Stack<Integer> maxStack;

    public MaxInAStack() {
        this.mainStack = new Stack<>();
        this.maxStack = new Stack<>();
    }

    public void push(int item) {
        mainStack.push(item);

        if(mainStack.size() == 1) {
            maxStack.push(item);
            return;
        }

        if(item > maxStack.peek()) {
            maxStack.push(item);
        } else {
            maxStack.push(maxStack.peek());
        }
    }

    public int pop() {
        maxStack.pop();
        return mainStack.pop();
    }

    public int getMaxItem() {
        return maxStack.peek();
    }

    public static void main(String[] args) {
        MaxInAStack maxItemInStack = new MaxInAStack();

        maxItemInStack.push(10);
        maxItemInStack.push(5);
        maxItemInStack.push(1);
        maxItemInStack.push(12);
        maxItemInStack.push(11);

        System.out.println(maxItemInStack.getMaxItem());       
    }
    
}