interface Tree<T> {
    public void traversal();
    public void insert(T data);
    public void delete(T data);
    public T getMaxValue();
    public T getMinValue();
}

class Node<T> {
    private T data;
    private Node<T> leftChild;
    private Node<T> rightChild;
    
    public Node(T data){
        this.data = data;
    }

    @Override
    public String toString() {
        return this.data.toString();
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public Node<T> getLeftChild() {
        return leftChild;
    }

    public void setLeftChild(Node<T> leftChild) {
        this.leftChild = leftChild;
    }

    public Node<T> getRightChild() {
        return rightChild;
    }

    public void setRightChild(Node<T> rightChild) {
        this.rightChild = rightChild;
    }


}

class BinarySearchTreeImplementation<T extends Comparable<T>> implements Tree<T> {

    private Node<T> root;

    @Override
    public void insert(T data) {
        if (root == null ){
            root = new Node<T>(data);
        } else {
            insertNode(data, root);
        }
    }

    @Override
    public T getMaxValue() {
        if (root == null) {
            return null;
        }

        return getMax(root);
    }

    @Override
    public T getMinValue() {
        if (root == null) {
            return null;
        }

        return getMin(root);
    }

    @Override
    public void delete(T data) {
        if (root != null) {
            root = delete(root, data);
        }
    }

    private Node<T> delete(Node<T> node, T data) {

        if (node == null) return node;

        if (data.compareTo(node.getData()) < 0 ) {
            node.setLeftChild(delete(node.getLeftChild(), data));
        } else if (data.compareTo(node.getData()) > 0) {
            node.setRightChild(delete(node.getRightChild(), data));
        } else {
            if (node.getLeftChild() == null && node.getRightChild() == null) {
                System.out.println("Removing a leaf node...");
                return null;
            }

            if (node.getLeftChild() == null) {
                System.out.println("Removing the right child...");
                Node<T> tempNode = node.getRightChild();
                node = null;
                return tempNode;
            } else if (node.getRightChild() == null) {
                System.out.println("Removing the left child...");
                Node<T> tempNode = node.getLeftChild();
                node = null;
                return tempNode;
            }

            System.out.println("Removing item with two children...");
            Node<T> tempNode = getPredecessor(node.getLeftChild());

            node.setData(tempNode.getData());
            node.setLeftChild(delete(node.getLeftChild(),tempNode.getData()));
        }   
        return node;
    }

    private Node<T> getPredecessor(Node<T> node) {
        if (node.getRightChild() != null) {
            return getPredecessor(node.getRightChild());
        }

        System.out.println("Predecessor is:" + node);
        return node;
    }

    private void insertNode(T newData,  Node<T> node) {
        if (newData.compareTo(node.getData()) < 0) {
            if (node.getLeftChild() != null) {
                insertNode(newData, node.getLeftChild());
            } else {    
                Node<T> newNode = new Node<T>(newData);
                node.setLeftChild(newNode);
            }
        } else {
            if (node.getRightChild() != null) {
                insertNode(newData, node.getRightChild());
            } else {
                Node<T> newNode = new Node<T>(newData);
                node.setRightChild(newNode);
            }
        }
    }

    @Override
    public void traversal() {
        if (root != null) {
            inOrderTraversal(root);
        }
        
    }

    private void inOrderTraversal(Node<T> node) {

        if (node.getLeftChild() != null) {
            inOrderTraversal(node.getLeftChild());
        }

        System.out.print(node + " --> ");

        if (node.getRightChild() != null) {
            inOrderTraversal(node.getRightChild());
        }
    }

    private T getMin(Node<T> node) {
        if (node.getLeftChild() != null) {
            return getMin(node.getLeftChild());
        }

        return node.getData();
    }

    private T getMax(Node<T> node) {
        if (node.getRightChild() != null) {
            return getMax(node.getRightChild()); 
        }

        return  node.getData();
    }
}

class BinaryTreeCustomObjects implements Comparable<BinaryTreeCustomObjects>{

    private String name;
    private int age;

    public BinaryTreeCustomObjects(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;   
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int compareTo(BinaryTreeCustomObjects object) {
        return name.compareTo(object.getName());
    }

    public String toString() {
        return this.name + "-" + this.age;    
    }

    public static void main(String[] args) {
        BinarySearchTreeImplementation<BinaryTreeCustomObjects> obj  = new BinarySearchTreeImplementation<>();
        obj.insert(new BinaryTreeCustomObjects("Adam", 27));
        obj.insert(new BinaryTreeCustomObjects("Sam", 17));
        obj.insert(new BinaryTreeCustomObjects("Kein", 37));
        obj.insert(new BinaryTreeCustomObjects("Joe", 57));

        obj.traversal();
    }
}