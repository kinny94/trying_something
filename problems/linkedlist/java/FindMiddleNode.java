/*
    Suppose we have a standard linked list. 
    Construct an in-place (without extra memory) algorithm thats able to find the middle node !
*/

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

interface List<T> {
    public void insert(T data);
    public void remove(T data);
    public void traverseList();
    public int size();
    public void getMiddleNode();
}

class FindMiddleNode<T extends Comparable<T>> implements List<T> {

    private Node<T> root;
    private int size;   

    public void insert(T data){
        ++this.size;
        if (root == null) {
            this.root = new Node<T>(data);
        } else {
            insertAtBeginning(data);
        }
    }

    private void insertAtBeginning(T data) {
        Node<T> newNode = new Node<T>(data);
        newNode.setNextNode(root);
        this.root = newNode;     
    }

    private void insertAtEnd(T data, Node<T> node) {

        if(node.getNextNode() != null) {
            insertAtEnd(data, node.getNextNode());      
        } else {
            Node<T> newNode = new Node<T>(data);
            node.setNextNode(newNode);
        }
    }

    public void remove(T data){
        if (this.root == null) {
			return;
		}
		--this.size;
		if (this.root.getData().compareTo(data) == 0) {
			this.root = this.root.getNextNode();
		} else {
			remove (data, root, root.getNextNode());
			
		}
    }

    public void remove(T dataToRemove, Node<T> previousNode, Node<T> actualNode) {
        while (actualNode != null) {
			if (actualNode.getData().compareTo(dataToRemove) == 0) {
				previousNode.setNextNode(actualNode.getNextNode());
				actualNode = null;
				return; //jump out of the method
			}
			previousNode = actualNode;
			actualNode = actualNode.getNextNode();
		}
    }

    public void traverseList(){
        if (this.root == null) return;
        Node<T> actualNode = this.root;
        while (actualNode != null) {
            System.out.print(actualNode + " -> ");
            actualNode = actualNode.getNextNode();
        }
    }

    public int size() {
        return this.size;
    }

    public void getMiddleNode() {
        Node<T> slowPointer = this.root;
        Node<T> fastPointer = this.root;

        while(fastPointer.getNextNode() != null &&  fastPointer.getNextNode().getNextNode() != null) {
            fastPointer = fastPointer.getNextNode().getNextNode();
            slowPointer = slowPointer.getNextNode();
        }

        System.out.println(slowPointer);
    }

    public static void main(String[] args) {
        List<Integer> list = new FindMiddleNode();
        list.insert(101);
        list.insert(-2);
        list.insert(3);
        list.insert(100);
        list.insert(13);
        list.insert(5);   
        list.insert(1);
        list.traverseList();
        list.getMiddleNode();
    }
}